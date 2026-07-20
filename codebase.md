# Portfolio Codebase Overview

This document provides a high-level overview of the structure and architecture of the portfolio website.

## Tech Stack
- **Framework:** [Next.js](https://nextjs.org/) (Static Export configured)
- **UI Component Library:** [NUI](https://opensource.nofinite.com/docs/nui)
- **Styling:** [NUICSS](https://opensource.nofinite.com/docs/nuicss) (Utility Classes)
- **Deployment:** GitHub Pages (via GitHub Actions)

## Core Architectural Rules
The codebase strictly adheres to the following rules:
1. **NUI Components Only**: No raw HTML layout tags are written directly in the source code. All layout structures use `@nofinite/nui` layout primitives (`<Container>`, `<Flex>`, `<Grid>`, `<Stack>`). All `<nav>`, `<footer>`, `<section>`, and `<div>` tags have been explicitly removed from the `.tsx` files (note: NUI primitives inherently render to `<div>` tags in the compiled DOM).
2. **NUICSS Only**: No custom CSS files, inline styles, or external utility frameworks (like Tailwind CSS) are allowed. 
3. **Static Generation**: The site is statically built (`output: 'export'`).
4. **Original Content**: The portfolio's content (bio, skills, and projects) is the author's own original content, ported directly from their previous Vercel staging deployment (`portfolio-kappa-six-83.vercel.app`). No third-party template filler or scraped external content is used.

## Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline for deploying to GitHub Pages
├── app/
│   ├── components/
│   │   ├── Footer.tsx          # Page footer using NUI components
│   │   ├── Navbar.tsx          # Sticky navigation bar using NUI flex layouts
│   ├── fonts/                  # Local font assets (Geist)
│   ├── globals.css             # Main stylesheet (contains only NUI framework imports, no custom CSS)
│   ├── layout.tsx              # Next.js root layout with Providers and Metadata
│   ├── page.tsx                # Main single-page portfolio (Hero, About, Skills, Projects, Contact)
│   ├── providers.tsx           # React providers wrapping the application
├── public/
│   ├── profile.jpg             # Profile picture used in Hero section
│   ├── resume.pdf              # Downloadable resume
├── next.config.ts              # Next.js configuration (sets output: export, basePath, unoptimized images)
├── package.json                # Project dependencies and npm scripts
├── PROBLEMS.md                 # Documentation of blockers/bugs for code review
└── codebase.md                 # This file
```

## Key Files & Implementations

### `app/page.tsx`
The primary entry point that contains the entire portfolio structure. It is organized sequentially using NUI's `<Stack gap="4rem">` to space out the sections:
- **Hero:** Contains an `<Avatar>` and standard typography, built with a vertical `<Flex>` box.
- **About / Skills:** Features interactive `<Badge variant="outline">` elements for the tech stack.
- **Projects:** Implemented using NUI's responsive `<Grid columns="auto-fit" minColWidth="320px">` to automatically wrap project `<Card>` components.
- **Contact:** Provides easily accessible standard HTML links within a `<Container size="sm">`.

### `next.config.ts`
Enables static site generation (`output: "export"`) which is necessary to meet the static deployment requirements. Also configures `basePath: "/anu-portfolio"` specifically for GitHub Pages routing compatibility.

### `app/globals.css`
Has been meticulously cleaned of all custom overrides. It strictly serves as the import manifest for NUICSS core styles (`@nofinite/nuicss` and `@nofinite/nui/styles.css`).
