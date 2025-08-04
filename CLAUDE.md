# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a DHIS2 React application built with the DHIS2 Application Platform, using Vite as the build tool and incorporating modern UI libraries including TailwindCSS and shadcn/ui components.

## Development Commands

- `yarn start` - Start development server (runs on http://localhost:3000)
- `yarn build` - Build production bundle (creates deployable .zip in build/bundle)
- `yarn test` - Run all tests in /src
- `yarn deploy` - Deploy built app to DHIS2 instance (requires prior build)

## Architecture

### Core Technologies
- **DHIS2 App Platform**: Uses `@dhis2/cli-app-scripts` for build tooling
- **React 18** with TypeScript
- **TanStack Query**: For data fetching and caching (configured with no refetch on mount/focus)
- **TailwindCSS v4**: For styling with custom Vite plugin
- **shadcn/ui**: Component library with "new-york" style preset
- **DHIS2 i18n**: Internationalization using `@dhis2/d2-i18n`

### Project Structure
- `src/app.tsx` - Main app entry point with QueryClientProvider setup
- `src/components/` - React components with barrel exports via index.ts
- `src/components/ui/` - shadcn/ui component implementations
- `src/components/user-profile/` - User profile component and related hooks
- `src/components/country-carousel.tsx` - Country carousel component
- `src/lib/utils.ts` - Utility functions
- `src/locales/` - Translation files (auto-populated after build/start)
- `i18n/en.pot` - Translation template

### Configuration Files
- `d2.config.js` - DHIS2 app configuration with Vite extensions (entry point: `./src/app.tsx`)
- `viteConfigExtensions.mts` - Custom Vite config with TailwindCSS plugin
- `components.json` - shadcn/ui configuration with alias mappings
- Path alias `@/*` maps to `./src/*`

### File Naming Convention
All files use kebab-case naming convention for consistency.

### Component Architecture
Components use the barrel export pattern and follow modern React patterns with hooks. The user-profile component demonstrates typical DHIS2 app structure with i18n integration and DHIS2 API data fetching.