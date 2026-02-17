"use client";
import Link from "next/link";

type NewsItem = {
  category: string;
  title: string;
  href: string;
};

type HubCard = {
  title: string;
  desc: string;
  href: string;
  imageClass: string;
  icon: string;
};

const hubCards: HubCard[] = [
  {
    title: "Lectures",
    desc: "Interactive lectures and tutorials",
    href: "/training",
    imageClass:
      "bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.35),transparent_40%),linear-gradient(140deg,#0b1028_0%,#1b2460_100%)]",
    icon: "▶️",
  },
  {
    title: "Research HUB",
    desc: "Tools, datasets, and publishing",
    href: "/resources",
    imageClass:
      "bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.45),transparent_40%),linear-gradient(140deg,#1a1d4b_0%,#2d1972_100%)]",
    icon: "🧪",
  },
  {
    title: "Community",
    desc: "Forums and collaboration",
    href: "/community",
    imageClass:
      "bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.35),transparent_45%),linear-gradient(140deg,#101934_0%,#1e3a8a_100%)]",
    icon: "👥",
  },
  {
    title: "News",
    desc: "Latest insights and updates",
    href: "/news",
    imageClass:
      "bg-[radial-gradient(circle_at_80%_20%,rgba(125,211,252,0.35),transparent_40%),linear-gradient(140deg,#1b2d52_0%,#315d9e_100%)]",
    icon: "📰",
  },
];

const newsItems: NewsItem[] = [
  { category: "Events", title: "Upcoming Workshop on Digital Health", href: "/news#events" },
  { category: "Job Opportunities", title: "Assistant Professor Position – Digital Biomarkers", href: "/news#jobs" },
  { category: "News of Interest", title: "New Report: Trends in Mobile Health", href: "/news" },
];

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image1_background.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/75" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                Learning Platform of Oral and Maxillofacial Surgery
              </h1>
              <img
                src="/logo_nobackground.png"
                alt="OMS Academy logo"
                className="mx-auto h-auto w-[26rem] max-w-[80vw] shrink-0 object-contain sm:w-[30rem] lg:w-[36rem]"
              />
            </div>
            <p className="mt-4 text-xl font-bold text-gray-800 sm:text-2xl">
              Building a Community Hub for Resounses to learn Basic Sciences and Principles of Surgery.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/about"
                className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Learn More
              </Link>
              <Link
                href="/news"
                className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                View News
              </Link>
              <Link
                href="/basic-sciences"
                className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Lectures - Basic Sciences
              </Link>
              <Link
                href="/surgery"
                className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Lectures - Surgery and Anesthesiology
              </Link>
              <Link
                href="/anatomy"
                className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Lectures - Anatomy and Radiology
              </Link>
              <Link
                href="/resources"
                className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Research HUB
              </Link>
              <Link
                href="/basic-sciences"
                className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Lectures - Pharmacology
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-gray-600">
              <Link className="underline hover:text-gray-900" href="/about">About</Link>
              <span>•</span>
              <Link className="underline hover:text-gray-900" href="/resources">Resources</Link>
              <span>•</span>
              <Link className="underline hover:text-gray-900" href="/community">Community</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HUB RESOURCES */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-slate-700 bg-[radial-gradient(circle_at_85%_15%,rgba(148,163,184,0.25),transparent_30%),linear-gradient(135deg,#030712_0%,#070f2e_45%,#0f172a_100%)] p-8 md:p-12">
          <h2 className="text-center text-4xl font-semibold leading-tight text-white md:text-6xl md:whitespace-nowrap">
            OMFS - ALL IN ONE PLACE
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-slate-300 md:text-xl">
            Discover a unified learning ecosystem for lectures, research tools,
            collaborative community spaces, and the latest specialty updates.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {hubCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/40 backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/30"
              >
                <div className={`flex h-52 items-center justify-center ${card.imageClass}`}>
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 shadow-inner shadow-sky-200/20">
                    <span className="text-6xl">{card.icon}</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-3xl font-semibold leading-tight text-white md:text-4xl">{card.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-slate-300 md:text-xl">{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS + TRAINING FEATURE */}
      <section className="relative overflow-hidden px-4 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.2),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.18),transparent_35%),linear-gradient(135deg,#030712_0%,#0b173f_50%,#101a3f_100%)]" />
        <div className="absolute inset-0 bg-[url('/image1_background.png')] bg-cover bg-center opacity-20" />

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
