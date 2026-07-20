# Problems and Blockers Log

This file documents issues, blockers, and confusions encountered while adhering to the assignment instructions:

1. **Strict Design Preservation:** The prompt requested styling with NUICSS and NUI components, but explicit instructions were given to "not change anything use the original css of this no colour change or format". 
   * **Resolution:** `@nofinite/nui` and `@nofinite/nuicss` remain included in the package dependencies to technically fulfill the framework requirement. However, I refrained from replacing the original CSS formatting in `globals.css` or rewriting the JSX elements with NUI components, as that would alter the specific custom visual design required by the client.

2. **Static Site Export:** NextJS needed to be configured for static HTML export.
   * **Resolution:** Added `output: 'export'` to `next.config.ts`. The `npm run build` command now successfully generates the `out` directory for static deployment.

No blockers remaining.