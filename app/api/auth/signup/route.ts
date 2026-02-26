import { NextResponse } from "next/server";
import { createUser } from "@/app/lib/userStore";
import { getSessionCookieOptions, hashPassword, signSession, SESSION_COOKIE } from "@/app/lib/auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim().toLowerCase();
    const password = String(body?.password || "");

    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
    }

    const user = await createUser({ name, email, passwordHash: hashPassword(password) });
    const token = signSession({ userId: user.id, email: user.email, name: user.name });

    const res = NextResponse.json({ ok: true, user: { id: user.id, name: user.name, email: user.email } });
    res.cookies.set(SESSION_COOKIE, token, getSessionCookieOptions());
    return res;
  } catch (error) {
    if (error instanceof Error && error.message === "USER_EXISTS") {
      return NextResponse.json({ error: "An account with that email already exists." }, { status: 409 });
    }
    return NextResponse.json({ error: "Unable to create account." }, { status: 500 });
  }
}
