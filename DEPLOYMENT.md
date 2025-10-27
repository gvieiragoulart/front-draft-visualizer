# Deployment Guide

## Vercel

The easiest way to deploy this application is with Vercel:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Netlify

1. Build the application:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify:
```bash
netlify deploy --prod --dir=dist
```

## GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Set base in vite.config.ts:
```typescript
export default defineConfig({
  base: '/front-draft-visualizer/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

## Docker

A Dockerfile is provided for containerized deployment:

```bash
docker build -t front-draft-visualizer .
docker run -p 80:80 front-draft-visualizer
```

## Environment Variables

If you need to configure the API endpoint dynamically, create a `.env` file:

```
VITE_API_BASE_URL=https://your-api-url.com/api
```

Then update `src/services/matchService.ts` to use:
```typescript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://draft-visualizer.onrender.com/api';
```
