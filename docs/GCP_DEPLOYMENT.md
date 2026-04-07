# GCP Deployment Guide

This project is intended to deploy a Next.js application to Google Cloud Run by using GitHub Actions.

The recommended production setup is:

- CI/CD runner: GitHub Actions
- Authentication to Google Cloud: Workload Identity Federation
- Container runtime: Cloud Run
- Custom domain: global external Application Load Balancer in front of Cloud Run

Google Cloud currently documents the global external Application Load Balancer as the recommended option for custom domains with Cloud Run. Direct Cloud Run domain mapping remains limited-availability Preview.

Official docs:

- https://cloud.google.com/load-balancing/docs/https/setup-global-ext-https-serverless
- https://cloud.google.com/run/docs/mapping-custom-domains
- https://cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines
- https://github.com/google-github-actions/auth
- https://github.com/google-github-actions/deploy-cloudrun

## Architecture

- App framework: Next.js App Router
- Container image build source: repository `Dockerfile`
- Container registry: Artifact Registry
- Deployment target: Cloud Run
- Production hostname: custom domain routed through a global external Application Load Balancer

The container listens on port `8080` in production.

## Current Repository Assumptions

This repository already includes:

- [`Dockerfile`](/Users/kaiki/my/aliss-labs-site/Dockerfile)
- [`cloudbuild.yaml`](/Users/kaiki/my/aliss-labs-site/cloudbuild.yaml)

This guide switches the deployment flow to GitHub Actions. `cloudbuild.yaml` can remain in the repo for manual or legacy use, but GitHub Actions becomes the default deployment path.

There is currently no workflow file in `.github/workflows`, so this document includes a baseline workflow to add.

## Required Setup

### 1. GCP Project

Use the target project:

```bash
gcloud config set project aliss-labs
```

Enable these APIs:

- Cloud Run Admin API
- Artifact Registry API
- IAM Credentials API
- Security Token Service API
- Compute Engine API

### 2. Artifact Registry

Create or reuse a Docker repository, for example:

- Region: `asia-northeast1`
- Repository: `aliss-labs`

Example image path:

```text
asia-northeast1-docker.pkg.dev/aliss-labs/aliss-labs/aliss-labs-site
```

### 3. Cloud Run Service Settings

Recommended initial service settings:

- Service name: `aliss-labs-site`
- Region: `asia-northeast1`
- Platform: managed
- Public access: allow unauthenticated
- Port: `8080`

### 4. GitHub to GCP Authentication

Use Workload Identity Federation instead of storing a service account key in GitHub.

Create:

- a Google Cloud service account for deployment
- a Workload Identity Pool
- a Workload Identity Provider for GitHub OIDC
- an IAM binding that lets the GitHub repository impersonate the deploy service account

The deploy service account should have only the minimum roles needed, typically:

- `roles/run.admin`
- `roles/iam.serviceAccountUser`
- `roles/artifactregistry.writer`

Depending on how the workflow is implemented, you may also need:

- `roles/viewer`
- `roles/storage.admin` only if additional build storage actions are introduced

## GitHub Repository Configuration

Configure these GitHub repository values.

### GitHub Actions permissions

The workflow must include:

```yaml
permissions:
  contents: read
  id-token: write
```

### GitHub repository variables

Recommended repository variables:

- `GCP_PROJECT_ID=aliss-labs`
- `GCP_REGION=asia-northeast1`
- `GAR_REPOSITORY=aliss-labs`
- `CLOUD_RUN_SERVICE=aliss-labs-site`
- `IMAGE_NAME=aliss-labs-site`
- `WORKLOAD_IDENTITY_PROVIDER=projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/providers/PROVIDER_ID`
- `GCP_SERVICE_ACCOUNT=github-deployer@aliss-labs.iam.gserviceaccount.com`

These can be stored as repository variables or environment-specific variables.

### GitHub secrets

This deployment path does not require a long-lived Google Cloud service account key.

Application-level runtime secrets should be configured on Cloud Run, not embedded in the workflow unless there is a clear requirement to do so.

## Recommended Workflow

Create:

- `.github/workflows/deploy-cloud-run.yml`

Example workflow:

```yaml
name: Deploy to Cloud Run

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  id-token: write

env:
  GCP_PROJECT_ID: ${{ vars.GCP_PROJECT_ID }}
  GCP_REGION: ${{ vars.GCP_REGION }}
  GAR_REPOSITORY: ${{ vars.GAR_REPOSITORY }}
  CLOUD_RUN_SERVICE: ${{ vars.CLOUD_RUN_SERVICE }}
  IMAGE_NAME: ${{ vars.IMAGE_NAME }}

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Authenticate to Google Cloud
        uses: google-github-actions/auth@v2
        with:
          workload_identity_provider: ${{ vars.WORKLOAD_IDENTITY_PROVIDER }}
          service_account: ${{ vars.GCP_SERVICE_ACCOUNT }}

      - name: Set up gcloud
        uses: google-github-actions/setup-gcloud@v2

      - name: Configure Docker auth for Artifact Registry
        run: gcloud auth configure-docker $GCP_REGION-docker.pkg.dev --quiet

      - name: Build image
        run: |
          docker build \
            -t $GCP_REGION-docker.pkg.dev/$GCP_PROJECT_ID/$GAR_REPOSITORY/$IMAGE_NAME:${{ github.sha }} \
            .

      - name: Push image
        run: |
          docker push \
            $GCP_REGION-docker.pkg.dev/$GCP_PROJECT_ID/$GAR_REPOSITORY/$IMAGE_NAME:${{ github.sha }}

      - name: Deploy to Cloud Run
        uses: google-github-actions/deploy-cloudrun@v2
        with:
          service: ${{ env.CLOUD_RUN_SERVICE }}
          region: ${{ env.GCP_REGION }}
          image: ${{ env.GCP_REGION }}-docker.pkg.dev/${{ env.GCP_PROJECT_ID }}/${{ env.GAR_REPOSITORY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
          flags: >-
            --allow-unauthenticated
            --port=8080
```

## Deployment Flow

The default deployment flow should be:

1. A change is merged into `main`
2. GitHub Actions starts the deploy workflow
3. GitHub exchanges its OIDC token through Workload Identity Federation
4. The workflow builds the container image from [`Dockerfile`](/Users/kaiki/my/aliss-labs-site/Dockerfile)
5. The image is pushed to Artifact Registry
6. Cloud Run is updated to the new image
7. The latest revision receives traffic

## Local Validation Before Merge

Before pushing changes that trigger production deploys:

```bash
pnpm install
pnpm build
pnpm check
```

If you want stricter CI, add a separate workflow for:

- install
- typecheck
- build
- optional linting

and make deploy depend on those checks.

## Runtime Environment Variables

Set app env vars on Cloud Run as needed:

```bash
gcloud run services update aliss-labs-site \
  --region asia-northeast1 \
  --update-env-vars NEXT_PUBLIC_ANALYTICS_ENDPOINT=https://analytics.example.com,NEXT_PUBLIC_ANALYTICS_WEBSITE_ID=example-id
```

If these analytics variables are not set, the app still works and simply skips loading Umami.

For sensitive values, prefer Secret Manager and attach them to Cloud Run rather than storing them in GitHub.

## Useful Commands

Describe the service:

```bash
gcloud run services describe aliss-labs-site --region asia-northeast1
```

Read logs:

```bash
gcloud run services logs read aliss-labs-site --region asia-northeast1
```

Update traffic to latest revision:

```bash
gcloud run services update-traffic aliss-labs-site --region asia-northeast1 --to-latest
```

List revisions:

```bash
gcloud run revisions list --service aliss-labs-site --region asia-northeast1
```

## Custom Domain

Recommended production path:

1. Deploy the service to Cloud Run through GitHub Actions
2. Create a global external Application Load Balancer with the Cloud Run service as a serverless backend
3. Attach a Google-managed TLS certificate for the public domain
4. Point Cloud DNS records to the load balancer IP

Typical domains:

- `aliss-labs.com`
- `www.aliss-labs.com`

Notes:

- TLS certificate provisioning can take time after DNS is updated
- The load balancer path gives more control than direct domain mapping, including TLS, CDN, and security policy support
- See [GCP_CLOUD_RUN_CLOUD_DNS_SPEC.md](/Users/kaiki/my/aliss-labs-site/docs/GCP_CLOUD_RUN_CLOUD_DNS_SPEC.md) for the full domain and DNS specification

## Recommended Next Step

To make this guide executable in the repository, add:

- `.github/workflows/deploy-cloud-run.yml`

and configure the repository variables for Workload Identity Federation before the first deployment.
