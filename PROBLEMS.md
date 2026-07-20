# Problems Encountered

Here are a few blockers and confusions I ran into while building this portfolio:

1. **NextJS Server Components and NUIProvider:** 
   I initially ran into an issue where the build failed (`prerender-error`) because `NUIProvider` and some NUI components use React hooks (`useState`), but Next.js App Router defaults to Server Components. 
   **Fix:** I solved this by creating a separate `providers.tsx` file with `"use client";` at the top to wrap the `NUIProvider`, and then imported that into my `layout.tsx`. I also had to make sure `page.tsx` was marked with `"use client";` so the NUI interactive components would work correctly.

2. **NUICSS Tailwind Conflicts:**
   I originally tried to style the page with standard Tailwind classes (like `text-blue-600`), but since NUICSS uses its own specific pre-compiled CSS variables and utility classes, my styles weren't showing up properly in the final build.
   **Fix:** I replaced all my custom classes with the official NUICSS classes (e.g. `text-primary`, `bg-surface`, `text-subtle`, `text-default`) and moved any arbitrary sizes (like custom widths) into inline style tags.

3. **Static Export Image Paths:**
   When doing `output: "export"`, Next.js image optimization doesn't work out of the box. 
   **Fix:** I configured `unoptimized: true` in `next.config.ts` so the static site would build successfully without needing a custom image loader.

Everything is building successfully now!