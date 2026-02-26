import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentSession } from "@/app/lib/auth";

export default async function AccountPage() {
  const session = await getCurrentSession();

  if (!session) {
    redirect("/login?redirect=/account");
  }

  return (
    <main className="min-h-[70vh] bg-slate-50 px-4 py-14">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.18em] text-blue-700">Account</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Welcome, {session.name}</h1>
        <p className="mt-3 text-lg text-slate-700">Signed in as {session.email}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Link href="/basic-sciences" className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-900 hover:bg-slate-100">
            Open Curriculum
          </Link>
          <Link href="/resources" className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-900 hover:bg-slate-100">
            Research Hub
          </Link>
          <Link href="/community" className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-900 hover:bg-slate-100">
            Community
          </Link>
        </div>
      </div>
    </main>
  );
}
