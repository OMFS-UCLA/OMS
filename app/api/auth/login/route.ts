import { NextResponse } from "next/server";
import { findUserByEmail } from "@/app/lib/userStore";
import { getSessionCookieOptions, SESSION_COOKIE, signSession, verifyPassword } from "@/app/lib/auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body?.email || "").trim().toLowerCase();
    const password = String(body?.password || "");

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const user = await findUserByEmail(email);
    if (!user || !verifyPassword(password, user.passwordHash)) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const token = signSession({ userId: user.id, email: user.email, name: user.name });
    const res = NextResponse.json({ ok: true, user: { id: user.id, name: user.name, email: user.email } });
    res.cookies.set(SESSION_COOKIE, token, getSessionCookieOptions());
    return res;
  } catch {
    return NextResponse.json({ error: "Unable to log in." }, { status: 500 });
  }
}
