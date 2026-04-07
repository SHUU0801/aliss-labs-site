# Cloud Run and Cloud DNS Publishing Specification

This document defines the recommended production setup for publishing the `aliss-labs` project on Google Cloud using Cloud Run and Cloud DNS.

As of April 6, 2026, the recommended production approach for custom domains on Cloud Run is to place a global external Application Load Balancer in front of the Cloud Run service. Direct Cloud Run domain mapping remains limited-availability Preview and is not the default choice for production.

Official references:

- https://cloud.google.com/run/docs/mapping-custom-domains
- https://cloud.google.com/load-balancing/docs/https/setup-global-ext-https-serverless
- https://cloud.google.com/dns/docs/zones
- https://cloud.google.com/dns/docs/records
- https://cloud.google.com/dns/docs/update-name-servers

## 1. Goal

Publish the application running in the `aliss-labs` Google Cloud project to the public internet with:

- Cloud Run as the application runtime
- Cloud DNS as the authoritative DNS provider
- HTTPS enabled on a custom domain
- A production-safe routing path through a global external Application Load Balancer

## 2. Scope

Included in scope:

- Cloud Run deployment target for the public application
- Global external Application Load Balancer configuration
- Serverless NEG integration
- Google-managed TLS certificate
- Cloud DNS public managed zone
- Public DNS records for the target domain
- Validation and acceptance criteria

Out of scope:

- Application implementation details
- CI/CD implementation details
- WAF and CDN policy design
- Multi-region failover design
- Incident response and SRE runbooks

## 3. Recommended Architecture

The production path should be:

1. Users access `https://example.com` or `https://www.example.com`
2. Cloud DNS resolves the hostname to a global static IP
3. The global external Application Load Balancer terminates TLS
4. The load balancer forwards traffic to a serverless NEG
5. The serverless NEG routes requests to the Cloud Run service

Components:

- Runtime: Cloud Run
- Public entrypoint: Global external Application Load Balancer
- Backend attachment: Serverless NEG
- DNS: Cloud DNS public managed zone
- TLS: Google-managed SSL certificate

## 4. Why This Architecture

This architecture is preferred because it:

- aligns with the documented production path for Cloud Run custom domains
- supports managed TLS certificates
- supports apex domains such as `example.com`
- allows future additions such as Cloud Armor, CDN, and advanced routing
- avoids relying on Cloud Run domain mapping Preview limitations

## 5. Preconditions

Before implementation, confirm the following:

- GCP project `aliss-labs` exists and billing is enabled
- The target domain has already been registered
- The team has access to update the registrar nameservers
- The deployer has sufficient IAM permissions for:
  - Cloud Run
  - Cloud DNS
  - Load Balancing and networking
  - Certificate management
- The following APIs are enabled:
  - Cloud Run Admin API
  - Cloud DNS API
  - Compute Engine API
  - Artifact Registry API if container images are stored there

## 6. Non-Functional Requirements

- Public traffic must use HTTPS
- Plain HTTP must redirect to HTTPS
- The public hostname must be a custom domain
- DNS changes should use a short initial TTL such as `300`
- TLS certificate lifecycle should be automated through Google-managed certificates
- The Cloud Run service should be published through the load balancer, not exposed as the canonical public URL via `run.app`

## 7. Naming Convention

Recommended resource names:

- Cloud Run service: `aliss-labs-web`
- Global static IP: `aliss-labs-web-ip`
- Serverless NEG: `aliss-labs-web-neg`
- Backend service: `aliss-labs-web-backend`
- URL map: `aliss-labs-web-urlmap`
- HTTPS proxy: `aliss-labs-web-https-proxy`
- HTTP redirect proxy: `aliss-labs-web-http-proxy`
- SSL certificate: `aliss-labs-web-cert`
- Cloud DNS zone: `aliss-labs-zone`

## 8. Resource Specifications

### 8.1 Cloud Run

- Deploy one public-facing Cloud Run service for the site
- Choose a single region for the initial production rollout
- Allow unauthenticated access if the service is intended for public web access
- Verify the service responds correctly on its generated `run.app` URL before attaching the domain path

### 8.2 Load Balancer

- Use a global external Application Load Balancer
- Reserve one global static IPv4 address
- Configure HTTPS on port `443`
- Configure HTTP on port `80` with redirect to HTTPS
- Use a Google-managed SSL certificate for all public hostnames
- Route all paths to the Cloud Run backend unless future path-based routing is explicitly required

### 8.3 DNS

- Create a public managed zone in Cloud DNS
- Delegate the domain to the nameservers assigned by Cloud DNS
- Create `A` records for the apex domain and any required subdomains
- Point those records to the load balancer global IP

## 9. Decision on DNS Authority

There are two common patterns:

### Pattern A: Cloud DNS becomes the authoritative DNS provider

- Create a Cloud DNS public managed zone
- Recreate all required DNS records in Cloud DNS
- Update the registrar nameservers to the Cloud DNS nameservers

This is the correct pattern for the requirement in this document.

### Pattern B: Existing external DNS provider remains authoritative

- Keep the current DNS provider
- Point only the public hostname records to the load balancer IP there

This pattern does not satisfy the requirement of managing the domain with Cloud DNS.

## 10. Implementation Steps

### 10.1 Preparation

1. Confirm the target domain and whether both apex and `www` should be published
2. Confirm the target Cloud Run service name and region
3. Enable all required APIs
4. Deploy the application to Cloud Run
5. Verify the service works through the `run.app` URL

### 10.2 Cloud Run Setup

1. Build and publish the container image
2. Deploy the Cloud Run service
3. Allow unauthenticated access if the service is public
4. Verify the root path `/` returns a healthy response

### 10.3 Load Balancer Setup

1. Reserve a global static IP address
2. Create a serverless NEG that points to the Cloud Run service
3. Create a backend service and attach the NEG
4. Create a URL map
5. Create a Google-managed SSL certificate for the required hostnames
6. Create the HTTPS target proxy
7. Create the HTTPS forwarding rule on port `443`
8. Create the HTTP redirect path on port `80`

### 10.4 Cloud DNS Setup

1. Create a public managed zone for the domain
2. Record the nameservers assigned to the zone
3. Add required DNS records in the zone
4. Update the domain registrar to use the Cloud DNS nameservers
5. Wait for nameserver delegation to propagate

### 10.5 Certificate Activation

1. Confirm the domain resolves to the load balancer IP
2. Wait until the Google-managed certificate becomes active
3. Verify HTTPS works for every published hostname

## 11. DNS Record Example

If the domain is `example.com` and the load balancer IP is `203.0.113.10`, the records should look like this:

| Name | Type | Value |
| --- | --- | --- |
| apex | `A` | `203.0.113.10` |
| `www` | `A` | `203.0.113.10` |

Notes:

- In Cloud DNS, the apex record is managed on the zone root rather than by entering `@`
- If mail is already in use on the domain, existing `MX`, `TXT`, `SPF`, `DKIM`, and verification records must also be recreated in Cloud DNS before changing nameservers

## 12. Acceptance Criteria

The release is considered complete when all of the following are true:

- `http://example.com` redirects to HTTPS
- `https://example.com` responds successfully
- `https://www.example.com` responds successfully if `www` is part of scope
- The browser shows a valid TLS certificate with no warnings
- DNS for the public hostnames resolves to the load balancer IP
- The Cloud Run logs confirm that requests are reaching the service
- The registrar delegation matches the Cloud DNS nameservers

## 13. Operational Notes

- DNS propagation and certificate issuance are not instantaneous
- Google-managed certificate issuance can take from several minutes to longer depending on DNS visibility
- The `run.app` URL should remain available for internal verification, but not be treated as the canonical production hostname
- If a future requirement includes security hardening, add Cloud Armor in front of the backend
- If a future requirement includes caching or acceleration, add Cloud CDN where appropriate

## 14. Risks

- Missing DNS records during nameserver migration can break mail or verification flows
- An incorrect Cloud Run authentication setting can cause `403` responses
- Certificate issuance can stall if DNS does not fully point to the load balancer
- A cutover performed before record parity is verified can create downtime

## 15. Recommended Migration Order

1. Inventory all current DNS records on the existing provider
2. Recreate all required records in Cloud DNS
3. Deploy and validate the Cloud Run service
4. Build the load balancer and certificate path
5. Point public records to the load balancer IP in Cloud DNS
6. Change registrar nameservers to Cloud DNS
7. Verify DNS, TLS, and application behavior after propagation

## 16. Deliverables

Expected deliverables for this work:

- A deployed Cloud Run service
- A global external Application Load Balancer
- A serverless NEG connected to Cloud Run
- A Google-managed TLS certificate
- A Cloud DNS public managed zone
- A complete DNS record set for the domain
- A validation record showing successful public access

## 17. Optional Next Document

If needed, this document can be expanded into one of the following:

- a hands-on execution checklist
- a `gcloud` command runbook
- a Terraform-based infrastructure specification
