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

---

## Audit Findings & Problems (July 2026)

1. **Responsive Design**
   - **Status:** PARTIAL.
   - **Evidence:** `Navbar.tsx` uses `<Flex wrap="wrap">` (PASS). `page.tsx` Hero uses `text-5xl md:text-6xl` (PASS). However, `page.tsx` line 9 uses `min-h-screen`, which doesn't exist in NUICSS.
   - **Proposed Fix:** Remove `min-h-screen` from `page.tsx`. Use a native NUI approach if minimum height is strictly necessary, or let content dictate height.

2. **Contact Section**
   - **Status:** PASS.
   - **Evidence:** `page.tsx` lines 158-198 contain real functional `mailto:` and `tel:` links as well as real URLs to GitHub and LinkedIn. They are properly styled with NUI's `<Link>` component (`className="text-primary font-bold hover:underline"`). 

3. **About vs Skills**
   - **Status:** PASS.
   - **Evidence:** `page.tsx` has separated these into two distinct sections (Lines 57-68 for About, and 71-80 for Skills) with their own `<h2>` headings and layout blocks.

4. **No raw HTML layout tags outside NUI primitives**
   - **Status:** FAIL.
   - **Evidence:** `page.tsx` lines 99, 118, 130 use `flex flex-col justify-between` as raw CSS classes on `<Card>`, which are Tailwind classes not supported by NUICSS. `page.tsx` line 9 uses `<div className="...">` as a layout wrapper.
   - **Proposed Fix:** 
     1. Change the root `<div>` in `page.tsx` to `<Container fluid className="bg-muted text-default">` (if `fluid` exists) or rely purely on Next.js root layout.
     2. Remove the invalid `flex flex-col justify-between` classes from `<Card>` and wrap its inner content in a `<Flex direction="column" justify="between" className="h-full">` component.

5. **globals.css has zero custom overrides**
   - **Status:** FAIL.
   - **Evidence:** `app/globals.css` lines 6-10 still contain custom CSS for `body { background: linear-gradient(...); color: #222; }` and `html { scroll-behavior: smooth; }`.
   - **Proposed Fix:** Completely wipe `globals.css` to only contain the NUI imports. Move background styling to the `RootLayout` `<body>` class using `bg-muted text-default` utility classes.