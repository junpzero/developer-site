# developer-site

Personal developer site built with Next.js.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- MDX

## Development

  ```sh
  npm install
  npm run dev

  Open http://localhost:3000.

  ## Structure

  src/
    app/        App Router pages and layouts
    components/ Shared UI components
    lib/        Utilities and content helpers
  content/
    blog/       MDX blog posts
  public/       Static assets

  ## Scripts

  npm run dev      # Start the development server
  npm run build    # Build for production
  npm run start    # Start the production server
  npm run lint     # Run lint checks

  ## Notes

  The site is structured as a static-first portfolio and writing platform. Blog content is managed with MDX, and the application is intended to be deployed on Vercel.

  Backend functionality, if needed, should be added behind a clear API boundary rather than coupled directly to the frontend.