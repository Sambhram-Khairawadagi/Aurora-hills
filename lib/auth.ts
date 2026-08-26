import { jwtVerify, SignJWT } from "jose";
import bcrypt from "bcryptjs";

// Ensure you set this in your environment variables in production!
const JWT_SECRET = process.env.JWT_SECRET || "fallback_aurora_secret_2026";
const key = new TextEncoder().encode(JWT_SECRET);

export async function signAdminToken() {
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
  return token;
}

export async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, key);
    return payload.role === "admin";
  } catch (error) {
    return false;
  }
}

// Helper to hash passwords (can be used if a DB is added for admin users)
export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}
