import "dotenv/config";
import { defineConfig } from "prisma/config";

// DIRECT_URL is required for migrations; a placeholder allows `prisma generate` without .env.
const databaseUrl =
  process.env.DIRECT_URL ??
  process.env.DATABASE_URL ??
  "postgresql://placeholder:5432/placeholder";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: databaseUrl,
  },
});
