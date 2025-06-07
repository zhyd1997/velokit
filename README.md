# VeloKit

![ShowCase](https://ik.imagekit.io/1winv85cn8g/VeloKit/showcase.png?updatedAt=1749315265176)

## Development

### `pnpm` [turborepo](https://turborepo.org/) architecture:

- apps
    - [web](apps/web) - Main web application
      - **Next.js** _v15_ with `app` folder
      - **Supabase** for database and authentication

- packages
    - [db](packages/db) - Database schema and migrations
      - **Prisma** for ORM [![Made with Prisma](https://made-with.prisma.io/dark.svg)](https://prisma.io)
      - **Supabase** self-hosted guide
    - [eslint-config](packages/eslint-config) - Shared ESLint configuration
    - [typescript-config](packages/typescript-config) - Shared TypeScript `tsconfig.json`
    - [ui](packages/ui) - Shared React component library
      - **shadcn/ui** for UI components
      - **Tailwind CSS** _v4_ for styling

We use `pnpm` for package management, if you never used it, see [pnpm](https://pnpm.io/installation) for installation.

```bash
pnpm install
pnpm dev
```
