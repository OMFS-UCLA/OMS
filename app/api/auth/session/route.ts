import { NextResponse } from "next/server";
import { getCurrentSession } from "@/app/lib/auth";

export const runtime = "nodejs";

export async function GET() {
  const session = await getCurrentSession();
  return NextResponse.json({
    authenticated: Boolean(session),
    user: session
      ? { id: session.userId, name: session.name, email: session.email }
      : null,
  });
}
