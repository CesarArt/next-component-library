# next-component-library

This repository contains a Next.js-based component library. The showcase pages are under `src/app/(pages)/showcase` and demonstrate the available components.

Project purpose

- A component library built with React + Next.js and Tailwind CSS.
- Showcase pages under `src/app/(pages)/showcase` provide live examples of components.

Full `src` tree (simplified)

```
src/
  app/
    (pages)/
      showcase/
        page.tsx
        buttons/page.tsx
        cards/page.tsx
        inputs/page.tsx
        modal/page.tsx
    api/
      auth/
        login/route.ts
        logout/route.ts
        register/route.ts
        user.ts
      stats/route.ts
      tracking/route.ts
  assets/
    images/
  components/
    auth/
    layout/
    ui/
      button.tsx
      card.tsx
      input.tsx
      modal.tsx
      chart/
  lib/
    config.ts
    utils.ts
  styles/
    design-tokens.css
  utils/
    functions/
    types/
```
## src — Project source overview

This file documents the `src` folder so a junior developer can quickly understand the project.

Top-level structure

- `app/` - Next.js app routes and pages. The `(pages)/showcase` folder contains UI showcase pages used as examples for the component library.
  - `api/` - Server (Next Route) handlers that proxy calls to a real backend. Uses `src/lib/config.ts` to locate the backend.
    - `auth/` - login, logout, register, and user helpers.
    - `stats/` - exposes a route that proxies stats from backend.
    - `tracking/` - sends tracking events to backend.
- `assets/` - static images and other assets used by components and pages.
- `components/` - UI components and higher-level pieces used by pages and the showcase.
  - `auth/` - authentication-related components and forms.
  - `layout/` - layout components like header and dashboard shell.
  - `ui/` - primitive UI components (Button, Card, Input, Modal, Chart wrappers).
- `lib/` - small utility modules shared across the project. `config.ts` contains centralized backend URL.
- `styles/` - project styles and tokens.
- `utils/` - helpers and types for business logic.

Key files

- `src/lib/config.ts` — exports `BACKEND_URL` used by server routes to avoid hard-coded domains.
- `src/lib/utils.ts` — helper utilities (e.g., `cn` function for class names).

How server-side proxying works

Server routes under `src/app/api/*` call the backend (for example `POST /api/auth/login` calls `${BACKEND_URL}/api/auth/login`). `BACKEND_URL` is read from environment variables if present, otherwise the default `http://localhost:4000` is used.

If you need to change the backend URL in development, set `BACKEND_URL` in your `.env.local` file (or use `NEXT_PUBLIC_BACKEND_URL` for client-side reads.)


## Setup instructions

1. Install dependencies

```bash
npm install
```

2. Environment variables

- The server routes call a backend service. The backend location is read from `process.env.BACKEND_URL` or `process.env.NEXT_PUBLIC_BACKEND_URL`. If none is set, it defaults to `http://localhost:4000`.
- For local development, create a `.env.local` with (optional):

```
BACKEND_URL=http://localhost:4000
```

Backend: endpoints repo

This project expects a backend that exposes the proxied endpoints. A companion backend is available here:

https://github.com/CesarArt/node-component-library-back-end

Clone and start that backend if you want the API routes to forward to a real server. If you don't run the backend, tests that mock fetch will still pass.

Scripts

- `npm run dev` — start Next.js in development mode.
- `npm run build` — build for production.
- `npm run start` — start built app.
- `npm run lint` — run ESLint.
- `npm run test` — run Jest tests (unit + integration).

Testing notes

- Unit tests for UI components are under `src/components/ui/__tests__`.
- Integration-style tests for API route handlers are under `src/app/api/**/__tests__`.
- Tests use Jest + @testing-library/react. API route tests mock `fetch` and exercise the route handlers directly.

Documentation

- `src/README.md` contains a high-level explanation of the `src` folder and the `BACKEND_URL` configuration.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
