# GCP Deployment Guide

This project is set up to deploy on Google Cloud Run.

## Architecture

- Frontend build: Vite outputs static assets to `dist/public`
- Runtime: Express serves the built assets from Cloud Run
- Health check: `GET /healthz`
- Custom domain: put a global external Application Load Balancer in front of Cloud Run

Google Cloud currently documents the global external Application Load Balancer as the recommended option for custom domains with Cloud Run. Direct Cloud Run domain mapping is still limited-availability Preview.

Official docs:

- https://cloud.google.com/run/docs/mapping-custom-domains
- https://cloud.google.com/load-balancing/docs/https/setting-up-https-serverless

## Required setup

1. Create or choose a GCP project.
2. Enable these APIs:
   - Cloud Run Admin API
   - Cloud Build API
   - Artifact Registry API
3. Authenticate gcloud:

```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

## Deploy with Cloud Build

```bash
gcloud builds submit \
  --config cloudbuild.yaml \
  --substitutions _SERVICE_NAME=aliss-labs-site,_REGION=asia-northeast1
```

After deploy, Cloud Run will return a `run.app` URL.

## Environment variables

Set app env vars on Cloud Run as needed:

```bash
gcloud run services update aliss-labs-site \
  --region asia-northeast1 \
  --update-env-vars VITE_ANALYTICS_ENDPOINT=https://analytics.example.com,VITE_ANALYTICS_WEBSITE_ID=example-id
```

If you do not set the analytics variables, the app still works and simply skips loading Umami.

## Custom domain

Recommended production path:

1. Deploy the service to Cloud Run.
2. Create a global external Application Load Balancer with the Cloud Run service as a serverless backend.
3. Attach a Google-managed TLS certificate for your domain.
4. Point your registrar DNS records to the load balancer IP.

Typical domains:

- `aliss-labs.com`
- `www.aliss-labs.com`

Notes:

- TLS certificate provisioning can take time after DNS is updated.
- The load balancer path gives you more control than direct domain mapping, including TLS, CDN, and security policy support.

## Useful commands

Describe service:

```bash
gcloud run services describe aliss-labs-site --region asia-northeast1
```

Tail logs:

```bash
gcloud run services logs read aliss-labs-site --region asia-northeast1
```

Update traffic to latest revision:

```bash
gcloud run services update-traffic aliss-labs-site --region asia-northeast1 --to-latest
```
