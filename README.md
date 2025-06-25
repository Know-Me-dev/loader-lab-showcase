# Loader Lab Showcase

A modern, customizable, and production-ready web app for discovering, previewing, and exporting high-end CSS loaders. Built with React, Tailwind CSS, and Supabase for authentication and favorites.

## Features

- __Large Collection of Loaders:__\
  30+ unique, high-quality CSS loaders with live preview and code export.

- __Customization:__

  - Change loader color, background, size, and animation speed.
  - Gradient and multi-color support for advanced loaders.

- __Filtering & Search:__

  - Filter by tags and categories (Simple, Complex, Professional, etc.).
  - Search loaders by name.
  - Sort by newest, most popular, or alphabetically.

- __Favorites & Auth:__

  - Save favorite loaders (requires Supabase login).
  - User authentication with email/password and OTP.

- __Developer Friendly:__

  - Copy HTML/CSS code with one click.
  - Responsive and accessible UI.
  - Ready for integration in any project.

## Getting Started

1. __Install dependencies:__

   ```bash
   npm install
   # or
   bun install
   ```

2. __Set up environment variables:__

   - Configure your Supabase credentials in `src/lib/supabaseClient.ts`.

3. __Run the app locally:__

   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. __Build for production:__

   ```bash
   npm run build
   # or
   bun run build
   ```

## Project Structure

- `src/components/` – All UI components (modals, cards, filters, etc.)
- `src/data/loaderData.ts` – Loader definitions and metadata
- `src/hooks/` – Custom React hooks
- `src/pages/` – Main app pages
- `src/lib/` – Supabase client and utilities
