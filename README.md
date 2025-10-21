# Project Documentation Guidance

A modern front-end project scaffolded with Vite, React, TypeScript, Tailwind CSS, and ShadCN UI components, featuring Radix UI, TanStack Query, and various utilities for rapid application development.

## Tech Stack

- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS, tailwindcss-animate, @tailwindcss/typography, tailwind-merge, class-variance-authority
- **UI Components:** ShadCN UI (built atop Radix UI), Lucide React icons
- **State & Data:** React Hook Form, Zod (validation), TanStack Query
- **Routing:** React Router DOM
- **Charts & Visualization:** Recharts
- **Additional Utils:** CMDK (command palette), date-fns, embla-carousel, vaul, next-themes

## Scripts

| Script       | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| `dev`        | Start the development server with Vite for live reloading.   |
| `build`      | Builds the project for production using Vite.                |
| `build:dev`  | Builds in development mode for debugging/deployment previews.|
| `lint`       | Runs ESLint to check for code quality and errors.            |
| `preview`    | Serves the production build locally for testing.             |

## Usage

1. **Install dependencies:**
    ```
    npm install
    ```
2. **Start development:**
    ```
    npm run dev
    ```
3. **Build for production:**
    ```
    npm run build
    ```
4. **Preview production build:**
    ```
    npm run preview
    ```
5. **Lint your code:**
    ```
    npm run lint
    ```

## Features

- Accessible and customizable UI components via ShadCN and Radix UI.
- Type-safe state and form management (React Hook Form + Zod).
- Built-in dark mode support (next-themes).
- Utilizes Tailwind CSS for utility-first styling.
- Modern dev experience with Vite, fast refresh, and SWC-based React plugin.
- Optimized for scalability and performance.
