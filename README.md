# repro

2 issues:

1. `pnpm --filter website exec astro dev` and visiting http://localhost:4321/foo throws `Cannot find module '@inox-tools/content-utils/runtime/git' imported from '@it-astro:content/git'`
2. `pnpm --filter website exec astro build` logs the updated time on the page, but hooks are not triggered