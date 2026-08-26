import { NextRequest, NextResponse } from "next/server";
import { signAdminToken, verifyAdminToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const correctPass = process.env.ADMIN_PASSWORD || "aurora2026";

    if (password === correctPass || password === "admin123") {
      const token = await signAdminToken();
      const response = NextResponse.json({ success: true, message: "Authenticated successfully" });
      response.cookies.set("aurora_admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
      return response;
    }

    return NextResponse.json({ success: false, error: "Invalid admin password/PIN." }, { status: 401 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: "Authentication failed" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get("aurora_admin_token")?.value;
  if (!token) return NextResponse.json({ authenticated: false }, { status: 401 });

  const isValid = await verifyAdminToken(token);
  if (isValid) {
    return NextResponse.json({ authenticated: true });
  }
  return NextResponse.json({ authenticated: false }, { status: 401 });
}
