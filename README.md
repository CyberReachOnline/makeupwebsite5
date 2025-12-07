# LuxeGlow - Professional Makeup Artist Website

A production-ready, single-page React website designed for a professional makeup artist. Built with React, Tailwind CSS, and TypeScript.

## Features

- **Booking System**: 
  - Compact form on Hero section.
  - Full form on Contact page.
  - Redirects to WhatsApp with pre-filled message.
  - Saves bookings locally to browser `localStorage` as a backup.
- **Portfolio & Gallery**:
  - Filterable portfolio grid.
  - Lightbox for viewing images.
  - "Book this look" integration.
  - Lazy-loaded gallery images.
- **Services**:
  - Package listings with features.
  - Direct booking links.
- **Admin Panel**:
  - Manage Services, Portfolio, and Gallery items.
  - Simple password protection (Default: `admin123`).
  - Data persisted in `localStorage`.
- **Theme**:
  - Dark/Light mode toggle.
  - Respects system preference.
- **Tech Stack**:
  - React + TypeScript + Vite
  - Tailwind CSS
  - React Router
  - Headless UI
  - React Icons
  - React Helmet Async (SEO)

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Admin Access

- URL: `/login`
- Password: `admin123`

## Customization

- **WhatsApp Number**: Update `DEFAULT_PHONE` in `src/utils/whatsapp.ts`.
- **Initial Data**: Edit `src/data/index.ts` to change default content.
- **Theme Colors**: Update `tailwind.config.js`.

## Notes

- This project uses `localStorage` for data persistence. For a real backend, replace `src/context/DataContext.tsx` logic with API calls.
- Images are currently sourced from Unsplash. Replace with real assets in the Admin panel or initial data.

## Deployment to Vercel

1. **Add Project**: Import the repository into Vercel.
2. **Configure Build**: In the "Build & Development Settings" section:
    - **Install Command**: Override and set to `npm install --legacy-peer-deps` (Required due to React 19 dependencies).
3. **Deploy**: Click Deploy.

*Note: A `vercel.json` file has been included to handle client-side routing.*
