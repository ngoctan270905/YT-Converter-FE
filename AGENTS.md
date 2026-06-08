# AI Coding Agent Guidelines

## Architecture Overview
This is a React SPA for YouTube video conversion using Vite, TypeScript, and Tailwind CSS v4. The app consists of:
- Static routing via React Router (`src/router.tsx`)
- Server state managed with TanStack React Query (`src/main.tsx`)
- API services using Axios (`src/api/media.ts`)
- Component-based UI with custom styling (`src/index.css`)

Backend API runs on `http://127.0.0.1:8000/api/v1` (see `src/api/media.ts`).

## Key Workflows
- **Development**: Run `npm run dev` for hot-reload dev server
- **Build**: Use `npm run build` (includes TypeScript compilation)
- **Linting**: `npm run lint` with ESLint config in `eslint.config.js`
- **API Calls**: Use `mediaService` from `src/api/media.ts` for YouTube operations
- **Styling**: Apply Tailwind classes with custom theme variables in `src/index.css`

## Project Conventions
- **Components**: Functional components with hooks; place in `src/components/` subdirs (e.g., `home/`, `layout/`)
- **State Management**: Use React Query for server data; Zustand for client state (not yet implemented)
- **API Pattern**: Services return data directly, throw errors; use `success` field for responses (see `src/api/media.ts`)
- **File Downloads**: Fetch as blob for download, fallback to `window.open()` (see `HeroSection.tsx`)
- **Progress Polling**: Poll task status with `refetchInterval` for real-time progress updates (see `HeroSection.tsx`)

## Specific Examples
- **Query Usage**: `useQuery({ queryKey: ['mediaInfo', url], queryFn: () => mediaService.getMediaInfo(url), enabled: !!url })`
- **Mutation Usage**: `useMutation({ mutationFn: mediaService.convertMedia, onSuccess: (res) => { /* download logic */ } })`
- **Custom Classes**: Use `btn-primary`, `format-card`, `quality-btn` for consistent UI (defined in `src/index.css`)
- **Layout Structure**: Pages include `Header` and `Footer` components (see `HomePage.tsx`)
- **Form Handling**: Basic controlled inputs; no form libraries used

## References
- API interfaces: `src/api/media.ts`
- Main component logic: `src/components/home/HeroSection.tsx`
- Styling system: `src/index.css`
- Build config: `vite.config.ts`, `tsconfig.json`
