# maikaidi.com  

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/foxprinces-projects/v0-maikaidi-com)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/isWGx5lYhli)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/foxprinces-projects/v0-maikaidi-com](https://vercel.com/foxprinces-projects/v0-maikaidi-com)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/isWGx5lYhli](https://v0.app/chat/projects/isWGx5lYhli)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

---

## Deploy to GitHub Pages (www.maikaidi.com)

This repo is configured to deploy a static export of Next.js to GitHub Pages.

### What is already configured

- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Next.js static export: `next.config.mjs` has `output: 'export'`
- Custom domain file: `public/CNAME` -> `www.maikaidi.com`
- 404 page: `app/not-found.tsx` (generates `404.html`)
- `.nojekyll` is created at publish time by the workflow

### One-time repository setup

1. Push your code to GitHub and ensure default branch is `main` (or `master`).
2. In GitHub repo: Settings → Pages
   - Build and deployment: Source = GitHub Actions
   - Custom domain = `www.maikaidi.com`
   - Check “Enforce HTTPS” after the certificate is issued.

### DNS configuration

- Create a CNAME record at your DNS provider:
  - Host/Name: `www`
  - Type: `CNAME`
  - Value: `<your-account>.github.io` (your GitHub Pages apex)

Optional (if you also want apex `maikaidi.com`):

- Create A records pointing to GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
  - Then add `maikaidi.com` as an additional custom domain in Pages settings.

DNS propagation can take up to 24 hours. Usually it’s much quicker.

### Deploy

Push to `main`/`master`, the workflow will:

1. Install dependencies with pnpm
2. Build Next.js and export static files to `out/`
3. Upload `out/` as the Pages artifact and publish

### Local build (optional)

```bash
pnpm install
pnpm build
# Output at ./out
```

### Notes

- Ensure your app uses only static features supported by `next export`.
- If you see routing 404s, confirm that every route you need exists as a prerendered HTML file or links from the UI.
