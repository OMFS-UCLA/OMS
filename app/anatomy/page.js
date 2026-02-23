"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const anatomyCards = [
  {
    title: "Head and Neck Anatomy",
    track: "Fundamental",
    lessons: 12,
    progress: 80,
    href: "/anatomy",
    image: "/image1_background.png",
  },
  {
    title: "Radiographic Landmarks",
    track: "Clinical",
    lessons: 10,
    progress: 62,
    href: "/anatomy",
    image: "/logo2.png",
  },
  {
    title: "Cranial Nerve Mapping",
    track: "Clinical",
    lessons: 8,
    progress: 70,
    href: "/anatomy",
    image: "/pathology1.png",
  },
  {
    title: "Cross-Sectional Imaging",
    track: "Advanced",
    lessons: 11,
    progress: 55,
    href: "/anatomy",
    image: "/logo_nobackground.png",
  },
  {
    title: "Facial Spaces",
    track: "Fundamental",
    lessons: 9,
    progress: 50,
    href: "/anatomy",
    image: "/image1_background.png",
  },
  {
    title: "CBCT Essentials",
    track: "Advanced",
    lessons: 7,
    progress: 45,
    href: "/anatomy",
    image: "/cellorganelles1.png",
  },
];

export default function AnatomyPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resolveImage = (path) =>
    path && path.startsWith("/") ? `${basePath}${path}` : path;

  const [keyword, setKeyword] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("All");

  const tracks = ["All", "Fundamental", "Clinical", "Advanced"];

  const filteredCards = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    return anatomyCards.filter((card) => {
      const matchesKeyword =
        !q || `${card.title} ${card.track}`.toLowerCase().includes(q);
      const matchesTrack =
        selectedTrack === "All" || card.track === selectedTrack;
      return matchesKeyword && matchesTrack;
    });
  }, [keyword, selectedTrack]);

  const totalLessons = filteredCards.reduce((sum, card) => sum + card.lessons, 0);
  const avgProgress = filteredCards.length
    ? Math.round(
        filteredCards.reduce((sum, card) => sum + card.progress, 0) /
          filteredCards.length
      )
    : 0;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.14),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.12),transparent_22%),linear-gradient(135deg,#050c2f_0%,#0b2150_45%,#101938_100%)] pb-14">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.14),transparent_30%),linear-gradient(120deg,rgba(2,6,23,0.22),rgba(4,19,58,0.18))]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_10px] opacity-25" />

        <div className="relative mx-auto max-w-[1700px] px-6 pb-8 pt-14 text-white xl:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-cyan-300">▸</span>
            <Link href="/training" className="hover:text-white">
              Lectures
            </Link>
            <span className="mx-2 text-cyan-300">▸</span>
            <span className="text-white">Anatomy & Radiology</span>
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            Anatomy & Radiology
          </h1>
          <p className="mt-3 max-w-3xl text-xl text-slate-200">
            Build clinical confidence with structured anatomy, imaging pathways,
            and high-yield diagnostic modules for OMFS training.
          </p>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center">
            <Link
              href="/community"
              className="rounded-xl border border-cyan-300/40 bg-gradient-to-r from-blue-700/85 to-cyan-600/85 px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-cyan-900/20 hover:brightness-110"
            >
              + Start New Discussion
            </Link>
            <div className="flex max-w-xl flex-1 items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
              <span className="text-xl">🔎</span>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search topics..."
                className="w-full bg-transparent text-base text-white outline-none placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {tracks.map((track) => (
              <button
                key={track}
                type="button"
                onClick={() => setSelectedTrack(track)}
                className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                  selectedTrack === track
                    ? "border-cyan-300 bg-cyan-500/20 text-white"
                    : "border-white/20 bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                {track}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1700px] px-6 pt-3 xl:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-cyan-200/25 bg-[linear-gradient(150deg,rgba(16,30,76,0.55),rgba(8,20,58,0.62))] p-6 shadow-[0_14px_40px_-22px_rgba(8,145,178,0.75)] backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-cyan-200/45"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-24 transition group-hover:opacity-32"
                style={{ backgroundImage: `url('${resolveImage(card.image)}')` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]" />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                    {card.track}
                  </span>
                  <span className="text-2xl text-cyan-200/80 transition group-hover:translate-x-1">
                    ›
                  </span>
                </div>
                <h2 className="mt-5 text-[2rem] font-bold leading-tight text-white">
                  {card.title}
                </h2>
                <p className="mt-5 text-xl text-slate-200">
                  📘 {card.lessons} Lessons • {card.progress}% Complete
                </p>
                <div className="mt-4 h-3 rounded-full bg-slate-900/60">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                    style={{ width: `${card.progress}%` }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-cyan-200/25 bg-[linear-gradient(150deg,rgba(16,30,76,0.5),rgba(8,20,58,0.58))] px-6 py-5 text-white shadow-[0_14px_40px_-22px_rgba(8,145,178,0.75)] backdrop-blur">
          <div className="grid gap-4 text-center md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-wide text-cyan-200">Topics</p>
              <p className="mt-1 text-4xl font-bold">{filteredCards.length}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-cyan-200">Lessons</p>
              <p className="mt-1 text-4xl font-bold">{totalLessons}+</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-cyan-200">Avg Completion</p>
              <p className="mt-1 text-4xl font-bold">{avgProgress}%</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
