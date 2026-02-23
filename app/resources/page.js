"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const tabs = ["Datasets", "Protocols", "Literature", "Projects", "Tools"];

const resourceCards = [
  {
    title: "Post-Op Inflammatory Biomarkers",
    subtitle: "Circulatory inflammation-related microRNA expression data",
    category: "Datasets",
    team: "Cytokinetics",
    tags: ["Deep Learning", "microRNA"],
    uses: 253,
    citations: 15,
    tone:
      "bg-[radial-gradient(circle_at_10%_10%,rgba(236,72,153,0.24),transparent_36%),linear-gradient(145deg,rgba(59,130,246,0.24),rgba(30,64,175,0.22))]",
  },
  {
    title: "TMJ Osteoarthritis Proteomics",
    subtitle: "TMJ degeneration mass spectrometry profiles",
    category: "Projects",
    team: "Deep Proteomics",
    tags: ["Biomarkers", "Mass Spectrometry"],
    uses: 193,
    citations: 8,
    tone:
      "bg-[radial-gradient(circle_at_20%_0%,rgba(251,146,60,0.25),transparent_34%),linear-gradient(145deg,rgba(59,130,246,0.24),rgba(37,99,235,0.2))]",
  },
  {
    title: "OSCC Genomic Risk Markers",
    subtitle: "SNP array data for gene susceptibility and stratification",
    category: "Literature",
    team: "OncoGene Sciences",
    tags: ["Genomic", "Risk Stratification"],
    uses: 162,
    citations: 12,
    tone:
      "bg-[radial-gradient(circle_at_85%_5%,rgba(167,139,250,0.26),transparent_38%),linear-gradient(145deg,rgba(96,165,250,0.22),rgba(59,130,246,0.2))]",
  },
];

export default function Page() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Datasets");

  const filteredCards = useMemo(() => {
    const q = query.trim().toLowerCase();
    return resourceCards.filter((card) => {
      const matchesTab = activeTab === "All" || card.category === activeTab;
      const haystack =
        `${card.title} ${card.subtitle} ${card.category} ${card.team} ${card.tags.join(" ")}`.toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      return matchesTab && matchesQuery;
    });
  }, [activeTab, query]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_18%_12%,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(14,165,233,0.14),transparent_28%),linear-gradient(140deg,#f4f9ff_0%,#eef5ff_45%,#f8fbff_100%)] pb-14">
      <section className="relative overflow-hidden border-b border-blue-200/45 bg-white/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(167,139,250,0.18),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(56,189,248,0.2),transparent_32%)]" />
        <div className="mx-auto max-w-[1700px] px-6 pb-8 pt-12 xl:px-8">
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-blue-700/85">
            <Link href="/" className="hover:text-blue-900">Home</Link>
            <span className="mx-2">▸</span>
            <Link href="/training" className="hover:text-blue-900">Lectures</Link>
            <span className="mx-2">▸</span>
            <span className="text-blue-900">Research Hub</span>
          </p>
          <h1 className="relative mt-4 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Research Hub
          </h1>
          <p className="relative mt-3 max-w-3xl text-xl text-slate-700">
            Access datasets, protocols, literature, projects, and cutting-edge
            tools to drive innovation in OMFS research.
          </p>

          <div className="relative mt-8 grid gap-3 lg:grid-cols-[1fr_auto_auto_auto]">
            <div className="flex items-center gap-3 rounded-xl border border-blue-200/60 bg-white/75 px-4 py-3 backdrop-blur">
              <span className="text-lg text-slate-500">🔎</span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the Research Hub..."
                className="w-full bg-transparent text-base text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
            <button className="rounded-xl border border-blue-200/65 bg-white/75 px-5 py-3 text-base font-semibold text-slate-700 backdrop-blur hover:bg-white">
              ⏳ Filter
            </button>
            <button className="rounded-xl border border-cyan-200/65 bg-gradient-to-r from-blue-600/80 to-cyan-500/80 px-5 py-3 text-base font-semibold text-white shadow-md shadow-cyan-200/30">
              + Upload
            </button>
            <button className="rounded-full border border-blue-200/65 bg-white/75 px-4 py-3 text-base font-semibold text-slate-700 backdrop-blur hover:bg-white">
              👤
            </button>
          </div>

          <div className="relative mt-5 flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg border px-5 py-2.5 text-sm font-semibold transition ${
                  activeTab === tab
                    ? "border-blue-300 bg-blue-500/25 text-blue-900"
                    : "border-blue-200/60 bg-white/55 text-slate-700 hover:bg-white/75"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="toolbox" className="mx-auto mt-7 grid max-w-[1700px] gap-6 px-6 xl:grid-cols-[280px_1fr] xl:px-8">
        <aside className="space-y-4 rounded-2xl border border-blue-200/60 bg-white/70 p-5 shadow-[0_12px_30px_-20px_rgba(37,99,235,0.55)] backdrop-blur">
          <ul className="space-y-3 text-3xl font-semibold text-slate-800">
            <li>🗂️ 268 Datasets</li>
            <li>📄 84 Protocols</li>
            <li>📚 5.3k Papers</li>
            <li>🚀 126 Projects</li>
          </ul>

          <div id="irb" className="border-t border-blue-200/70 pt-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Resources</p>
            <div className="mt-2 rounded-xl border border-blue-200/70 bg-white/65 p-3">
              <p className="text-base font-semibold text-slate-800">Research Hub Citation</p>
              <p className="mt-1 text-sm text-slate-600">@omfs.academy</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700">APA</span>
                <button className="rounded-md border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-4 flex flex-wrap gap-2 rounded-xl border border-blue-200/60 bg-white/65 p-2 backdrop-blur">
            {tabs.map((tab) => (
              <button
                key={`secondary-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  activeTab === tab
                    ? "bg-blue-500/30 text-blue-900"
                    : "text-slate-700 hover:bg-white/80"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCards.map((card) => (
              <article
                key={card.title}
                className={`overflow-hidden rounded-2xl border border-blue-200/60 ${card.tone} bg-white/60 p-5 shadow-[0_15px_35px_-22px_rgba(59,130,246,0.6)] backdrop-blur`}
              >
                <h3 className="text-4xl font-semibold leading-tight text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-xl leading-relaxed text-slate-700">
                  {card.subtitle}
                </p>
                <p className="mt-4 text-lg font-semibold text-blue-800">{card.team}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-blue-200/70 bg-white/65 px-3 py-1 text-sm font-semibold text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between text-base text-slate-700">
                  <span>📁 {card.uses} Uses</span>
                  <span>▪ {card.citations} Citations</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
