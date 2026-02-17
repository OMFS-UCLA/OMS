"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import LectureCards from "../components/LectureCards";

const surgeryCards = [
  {
    topic: "Surgery",
    title: "Preoperative Planning",
    speaker: "Dr. R. Johnson",
    duration: "35 min lecture",
    href: "/surgery",
    image: "/image1_background.png",
  },
  {
    topic: "Surgery",
    title: "Mandibular Trauma Principles",
    speaker: "Dr. K. Ahmed",
    duration: "51 min lecture",
    href: "/surgery",
    image: "/logo2.png",
  },
  {
    topic: "Surgery",
    title: "Postoperative Complications",
    speaker: "Dr. L. Rivera",
    duration: "44 min lecture",
    href: "/surgery",
    image: "/logo_nobackground.png",
  },
];

export default function SurgeryPage() {
  const [keyword, setKeyword] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const tags = useMemo(() => surgeryCards.map((card) => card.title), []);

  const filteredCards = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    return surgeryCards.filter((card) => {
      const matchesKeyword =
        !q ||
        `${card.title} ${card.topic} ${card.speaker} ${card.duration}`
          .toLowerCase()
          .includes(q);
      const matchesTag = !selectedTag || card.title === selectedTag;
      return matchesKeyword && matchesTag;
    });
  }, [keyword, selectedTag]);

  return (
    <main className="bg-gray-100 pb-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(88,28,135,0.5),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.35),transparent_40%),linear-gradient(120deg,#09052f_0%,#11084a_45%,#1a1f68_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] bg-[size:9px_9px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(59,130,246,0.25)_50%,transparent)] opacity-25" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-24 text-white md:flex-row md:items-end md:justify-between">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Surgery</h1>
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200/90">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2 text-cyan-300">▸</span>
            <Link href="/training" className="hover:text-white">Lectures</Link>
            <span className="mx-2 text-cyan-300">▸</span>
            <span className="text-white">Surgery</span>
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-6 max-w-7xl px-4">
        <div className="rounded-2xl border border-gray-200 bg-gray-100 p-8 shadow-sm md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-semibold text-gray-900">Overview</h2>
              <p className="mt-5 max-w-xl text-xl leading-relaxed text-gray-700">
                Access lecture content focused on surgical planning, operative
                workflows, decision-making, and advanced principles in oral and
                maxillofacial surgery.
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-gray-900">Find by Topic</h3>
              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Enter your Keyword"
                  className="w-full rounded-lg border border-gray-300 bg-white px-5 py-4 text-xl text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-5 py-4 text-xl text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">— Select Tags —</option>
                  {tags.map((tag) => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/training"
              className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Back to Lectures
            </Link>
            <Link
              href="/basic-sciences"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Go to Basic Sciences
            </Link>
          </div>
        </div>

        <LectureCards
          eyebrow="Lecture Library"
          title="Surgical Sciences Lectures"
          subtitle="Click any card to open a lecture. Replace these sample cards with your own case-based and procedure-specific lecture links."
          cards={filteredCards}
        />
      </section>
    </main>
  );
}
