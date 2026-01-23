# Manual Approval Turborepo

Turborepo with manual approval for Vercel production deployments.

## Deployment Flow

1. **PR** → automatic preview deployment (Vercel)
2. **Merge to main** → automatic dev/qa deployment
3. **Manual approval** → promote to production (no rebuild)

## Setup

### GitHub Secrets

Add to repository settings → Secrets and variables → Actions:

- `VERCEL_TOKEN`: [Create token](https://vercel.com/account/tokens)
- `VERCEL_ORG_ID`: Run `vercel link` then check `.vercel/project.json`
- `VERCEL_PROJECT_ID`: Run `vercel link` then check `.vercel/project.json`

### GitHub Environments

Create in repository settings → Environments:

1. **dev** - no protection rules
2. **production-approval** - enable "Required reviewers" (add yourself)
3. **production** - no protection rules

## How to Deploy to Production

1. Merge PR to main
2. Dev/QA deploys automatically
3. Go to Actions tab → find workflow run
4. Click "Review deployments" button
5. Approve "production-approval" environment
6. Production promotion runs (promotes existing deployment)
