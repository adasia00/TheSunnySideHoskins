# The Sunny-Side Reunion Setup Guide

## Requirements

- Node.js 18+
- npm

## Local Setup

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Open http://localhost:3000

## Production Build

```bash
npm run build
npm start
```

## Deployment Checklist

- Confirm all reunion links are current
- Confirm logo exists at public/sunny-side-logo.png
- Confirm payment deadline copy is correct
- Confirm GroupMe and required form URLs open correctly

## Identity Checklist

- package name is the-sunny-side-hoskins-reunion
- metadata title is The Sunny-Side | Hoskins Family Reunion
- README and setup docs reference only reunion branding

## Troubleshooting

- If dependencies are missing, run npm install
- If build fails, run:

```bash
# Windows PowerShell
Remove-Item -Recurse -Force .next, node_modules
npm install
npm run build
```
