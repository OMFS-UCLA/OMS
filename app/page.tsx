"use client";
import Link from "next/link";
import { useState } from "react";

type NewsItem = {
  category: string;
  title: string;
  href: string;
};

type HubCard = {
  title: string;
  level: string;
  lessons: number;
  completed: number;
  progress: number;
  href: string;
  image: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const hubCards: HubCard[] = [
  {
    title: "Cell Biology",
    level: "Fundamental",
    lessons: 12,
    completed: 10,
    progress: 80,
    href: "/basic-sciences/cell-biology",
    image: `${basePath}/cellbio1.png`,
  },
  {
    title: "Immunology",
    level: "Clinical",
    lessons: 10,
    completed: 6,
    progress: 60,
    href: "/basic-sciences/immunology",
    image: `${basePath}/immuno1.png`,
  },
  {
    title: "Pathology",
    level: "Clinical",
    lessons: 8,
    completed: 6,
    progress: 70,
    href: "/basic-sciences/pathology",
    image: `${basePath}/pathology1.png`,
  },
  {
    title: "Hematology-Oncology",
    level: "Advanced",
    lessons: 11,
    completed: 6,
    progress: 55,
    href: "/basic-sciences/pathology",
    image: `${basePath}/logo_nobackground.png`,
  },
  {
    title: "Inflammation and Healing",
    level: "Clinical",
    lessons: 9,
    completed: 5,
    progress: 50,
    href: "/basic-sciences/pathology/inflammation-and-healing",
    image: `${basePath}/homepage.png`,
  },
  {
    title: "Microbiology",
    level: "Fundamental",
    lessons: 7,
    completed: 3,
    progress: 45,
    href: "/basic-sciences",
    image: `${basePath}/image1_background.png`,
  },
  {
    title: "Microbiology Essentials",
    level: "Advanced",
    lessons: 10,
    completed: 6,
    progress: 65,
    href: "/basic-sciences",
    image: `${basePath}/image1_background.png`,
  },
];

const newsItems: NewsItem[] = [
  { category: "Events", title: "Coming Soon!", href: "/news#events" },
  { category: "Events", title: "Coming Soon!", href: "/news#jobs" },
  { category: "News of Interest", title: "New Report: Coming Soon!", href: "/news" },
];

export default function Home() {
  const [heroImageSrc, setHeroImageSrc] = useState(`${basePath}/homepage.png`);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-slate-900 md:text-7xl">
                OMS Nexus
              </h1>
              <p className="mt-6 max-w-xl text-xl leading-snug text-slate-700 md:text-2xl">
                A centralized evidence-based hub for residents and surgeons. Facilitating clinical mastery through shared inquiry and advanced surgical principles.
              </p>
              <div className="mt-8">
                <Link
                  href="/basic-sciences"
                  className="inline-flex rounded-lg bg-blue-800 px-6 py-3 text-xl font-semibold text-white shadow-md transition hover:bg-blue-700"
                >
                  Enter the Curriculum
                </Link>
              </div>
            </div>

            <div className="justify-self-end">
              <div className="overflow-hidden rounded-sm border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src={heroImageSrc}
                  alt="OMS visual"
                  className="h-auto w-[520px] max-w-full object-contain"
                  onError={() => setHeroImageSrc("/homepage.png")}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-3">
              <div className="rounded-lg border border-slate-300 px-4 py-2 text-slate-500">Search</div>
            </div>
            <div className="grid md:grid-cols-3">
              <div className="border-b border-slate-200 p-6 md:border-b-0 md:border-r">
                <h3 className="text-4xl font-medium text-slate-900">Clinical Lectures</h3>
                <p className="mt-3 text-2xl text-slate-700">Latest: Maxillofacial Trauma Management</p>
                <Link href="/basic-sciences" className="mt-6 inline-block text-2xl text-slate-800 hover:text-slate-950">
                  [Browse All Modules]
                </Link>
              </div>
              <div className="border-b border-slate-200 p-6 md:border-b-0 md:border-r">
                <h3 className="text-4xl font-medium text-slate-900">Research &amp; Trials</h3>
                <p className="mt-3 text-2xl text-slate-700">New Upload: Bone Grafting Meta-Analysis</p>
                <Link href="/resources" className="mt-6 inline-block text-2xl text-slate-800 hover:text-slate-950">
                  [Access Library]
                </Link>
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-medium text-slate-900">Peer Discussion</h3>
                <p className="mt-3 text-2xl text-slate-700">Active: Management of Third Molar Complications</p>
                <Link href="/community" className="mt-6 inline-block text-2xl text-slate-800 hover:text-slate-950">
                  [Join Conversation]
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HUB RESOURCES */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.18),transparent_42%),linear-gradient(145deg,#02153f_0%,#062d6f_50%,#041a4e_100%)] p-7 shadow-[0_25px_80px_-30px_rgba(14,165,233,0.65)] md:p-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
            Home / Lectures / Basic Sciences
          </p>
          <h2 className="mt-2 text-center text-4xl font-bold leading-tight text-white md:text-6xl">
            Basic Sciences
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-lg leading-relaxed text-blue-100">
            Build your foundation with structured topics, chapter progression, and high-yield modules for OMFS training.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20">
              + Start New Discussion
            </button>
            <button className="rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-cyan-50 backdrop-blur">
              Systems &amp; Conditions
            </button>
            <button className="rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-cyan-50 backdrop-blur">
              Clinical Application
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {["All", "Fundamental", "Clinical", "Advanced"].map((chip) => (
              <span
                key={chip}
                className="rounded-lg border border-cyan-200/30 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {hubCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group relative overflow-hidden rounded-2xl border border-cyan-200/25 bg-white/5 p-4 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-cyan-200/45 hover:shadow-[0_20px_40px_-20px_rgba(56,189,248,0.7)]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-35 transition-opacity duration-200 group-hover:opacity-45"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-blue-950/40 to-blue-950/90" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full border border-cyan-200/40 bg-cyan-300/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-100">
                      {card.level}
                    </span>
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-cyan-50"
                      style={{
                        background: `conic-gradient(#84cc16 ${card.progress}%, rgba(255,255,255,0.14) ${card.progress}% 100%)`,
                      }}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d2b64]">{card.progress}%</div>
                    </div>
                  </div>
                  <h3 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-[2rem]">{card.title}</h3>
                  <p className="mt-2 text-lg text-cyan-100/90">
                    {card.lessons} lessons • {card.progress}% complete
                  </p>
                  <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-blue-950/80">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-lime-300"
                      style={{ width: `${card.progress}%` }}
                    />
                  </div>
                  <p className="mt-3 text-base text-cyan-100/90">
                    {card.completed}/{card.lessons} lessons
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-cyan-200/25 bg-white/10 px-4 py-4 backdrop-blur md:px-8">
            <div className="grid gap-4 text-center text-cyan-100 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">Units Completed</p>
                <p className="mt-1 text-4xl font-semibold">7</p>
              </div>
              <div className="md:border-x md:border-cyan-200/25">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">Total Lessons</p>
                <p className="mt-1 text-4xl font-semibold">67+</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">Overall Progress</p>
                <p className="mt-1 text-4xl font-semibold">61%</p>
              </div>
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-blue-950/80">
              <div className="h-full w-[61%] rounded-full bg-gradient-to-r from-cyan-400 to-lime-300" />
            </div>
          </div>
        </div>
      </section>

      {/* NEWS + TRAINING FEATURE */}
      <section className="relative overflow-hidden px-4 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.2),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.18),transparent_35%),linear-gradient(135deg,#030712_0%,#0b173f_50%,#101a3f_100%)]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${basePath}/image1_background.png')` }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div>
            <h2 className="text-4xl font-bold text-white md:text-5xl">HUB NEWS</h2>
            <div className="mt-3 h-1.5 w-36 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            <p className="mt-4 text-xl text-slate-300">
              Events, job opportunities, and news of interest.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {newsItems.map((n) => (
              <Link
                key={n.title}
                href={n.href}
                className="rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
              >
                <p className="text-sm font-bold uppercase tracking-wide text-blue-900">{n.category}</p>
                <h3 className="mt-2 text-2xl font-semibold leading-snug text-slate-900">{n.title}</h3>
                <p className="mt-3 text-lg font-medium text-slate-600">Learn more →</p>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-bold text-white md:text-5xl">TRAINING & WEBINARS</h2>
              <div className="mt-3 h-1.5 w-56 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>
            <Link href="/training" className="text-2xl font-medium text-slate-300 hover:text-white">
              View all →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-8 shadow-xl">
              <div className="flex items-start gap-5">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 text-5xl text-white shadow-lg">
                  🗓️
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 md:text-4xl">UPCOMING WEBINAR</h3>
                  <p className="mt-3 text-xl text-slate-700 md:text-2xl">Title • Date • Speaker</p>
                </div>
              </div>
              <Link
                href="/training"
                className="mt-8 inline-block rounded-2xl bg-blue-700 px-8 py-3 text-xl font-semibold text-white shadow-lg transition hover:bg-blue-600"
              >
                REGISTER
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-8 shadow-xl">
              <div className="flex items-start gap-5">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 text-5xl text-white shadow-lg">
                  🧠
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 md:text-4xl">LECTURE LIBRARY</h3>
                  <p className="mt-3 text-xl text-slate-700 md:text-2xl">200+ Curated Talks</p>
                </div>
              </div>
              <Link
                href="/training"
                className="mt-8 inline-block rounded-2xl bg-blue-700 px-8 py-3 text-xl font-semibold text-white shadow-lg transition hover:bg-blue-600"
              >
                EXPLORE LIBRARY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Stay up-to-date</h2>
          <p className="mt-2 text-gray-600">
            Get the latest news and training announcements (no spam).
          </p>

          <form
            className="mt-5 flex max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Demo form — connect Mailchimp/ConvertKit later.");
            }}
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
