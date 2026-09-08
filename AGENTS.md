# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

Bible Quest is a React + TypeScript PWA for interactive Bible and theology learning. It uses Vite as the build tool and connects to a cloud-hosted Supabase instance for auth, database, and edge functions. There is no local backend to run — the only local service is the Vite dev server.

### Running the app

- `npm run dev` — starts the Vite dev server on **port 8080** (see `vite.config.ts`)
- `npm run build` — production build
- `npm run lint` — ESLint (note: the codebase has pre-existing lint errors, mostly `@typescript-eslint/no-explicit-any`)
- `npm run preview` — preview the production build
- `npm test` — Vitest unit tests (access rules + progress utils)
- `npm run export-challenges` — regenerate challenge JSON for the `get-challenge` edge function + title metadata

Challenge quiz payloads are **not** shipped in the client bundle. They are served by the Supabase edge function `get-challenge` (auth + subscription gated). Local `npm run dev` falls back to per-book dynamic imports when the function is unavailable. Deploy with:

`supabase functions deploy get-challenge`

### Key caveats

- The `.env` file with Supabase credentials is committed to the repo. No secrets setup is needed for the app to run.
- The app uses **npm** as its package manager (confirmed by `package-lock.json`). Do not use yarn/pnpm/bun.
- Features requiring authentication (progress tracking, locked chapters, subscriptions) need a Supabase account sign-up via the app's UI. The first Bible chapter (Genesis Ch. 1) and first theology book chapters are available without sign-in.
- There is no local database, Docker, or other infrastructure to configure.
