import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  // Specify the path to your schema file
  schema: "prisma/schema.prisma",

  // Configure the datasource with the URL for CLI tools (Migrate, db push)
  datasource: {
    url: env("DATABASE_URL"),
  },

  // Optional: Define your migrations path
  migrations: {
    path: "prisma/migrations"
  }
});