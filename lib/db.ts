import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import os from "os";

function getDatabaseUrl(): string {
  // If explicitly set in environment, use it
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }

  // Detect serverless environment (Vercel, AWS Lambda, Netlify)
  const isServerless = Boolean(
    process.env.VERCEL ||
    process.env.AWS_LAMBDA_FUNCTION_NAME ||
    process.env.LAMBDA_TASK_ROOT ||
    process.env.NETLIFY
  );

  if (isServerless) {
    const tmpDbPath = path.join(os.tmpdir(), "dev.db");

    // Seed /tmp/dev.db from existing dev.db if not already created
    if (!fs.existsSync(tmpDbPath)) {
      const candidates = [
        path.join(process.cwd(), "prisma", "dev.db"),
        path.join(process.cwd(), "dev.db"),
        path.join(__dirname, "dev.db"),
        path.join(__dirname, "..", "prisma", "dev.db"),
      ];

      for (const candidate of candidates) {
        if (fs.existsSync(candidate)) {
          try {
            fs.copyFileSync(candidate, tmpDbPath);
            try {
              fs.chmodSync(tmpDbPath, 0o666);
            } catch (_) {}
            console.log(`[db] Initialized writable database at ${tmpDbPath} from ${candidate}`);
            break;
          } catch (copyErr) {
            console.error(`[db] Failed copying ${candidate} to ${tmpDbPath}:`, copyErr);
          }
        }
      }
    }

    return `file:${tmpDbPath}`;
  }

  return "file:./dev.db";
}

const dbUrl = getDatabaseUrl();

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: dbUrl,
      },
    },
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const db = prisma;
