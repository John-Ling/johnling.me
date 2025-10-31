# Agent Guidelines for johnling.me

## Commands

- **Build**: `npm run build` (includes blog generation)
- **Dev server**: `npm run dev`
- **Lint**: `npm run lint`
- **Type check**: `npx tsc --noEmit`
- **Format**: `npx prettier --write .`

## Code Style

- **Imports**: Use `@/` prefix for internal imports (e.g., `@/components/navbar`)
- **Formatting**: Prettier config (double quotes quotes, semicolons, 100 width, 2 spaces)
- **Types**: Strict TypeScript with interfaces in `interfaces/index.d.ts`
- **Naming**: camelCase for vars/functions, PascalCase for components/types
- **React**: Functional components with hooks, `'use client'` for client components
- **Styling**: Tailwind CSS with custom theme colors and animations
- **Error handling**: Basic fs operations, no custom error patterns established

## Architecture

- Next.js 14 with App Router
- MDX for blog content
- Husky pre-commit hooks with lint-staged (ESLint + Prettier)
