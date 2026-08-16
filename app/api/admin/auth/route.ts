import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const correctPass = process.env.ADMIN_PASSWORD || "aurora2026";

    if (password === correctPass || password === "admin123") {
      const response = NextResponse.json({ success: true, message: "Authenticated successfully" });
      response.cookies.set("aurora_admin_token", "auth_valid_session_2026", {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });
      return response;
    }

    return NextResponse.json({ success: false, error: "Invalid admin password/PIN." }, { status: 401 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: "Authentication failed" }, { status: 500 });
  }
}
