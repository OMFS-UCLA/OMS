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
      "bg-[radial-gradient(circle_at_25%_18%,rgba(56,189,248,0.45),transparent_35%),linear-gradient(155deg,#09122f_0%,#1f2f82_100%)]",
    icon: "▶️",
  },
  {
    title: "Research HUB",
    desc: "Tools, datasets, and publishing",
    href: "/resources",
    imageClass:
      "bg-[radial-gradient(circle_at_70%_20%,rgba(192,132,252,0.45),transparent_35%),linear-gradient(155deg,#261b63_0%,#5f2ca8_100%)]",
    icon: "🧪",
  },
  {
    title: "Community",
    desc: "Forums and collaboration",
    href: "/community",
    imageClass:
      "bg-[radial-gradient(circle_at_30%_25%,rgba(56,189,248,0.45),transparent_35%),linear-gradient(155deg,#0f2552_0%,#1f4da5_100%)]",
    icon: "👥",
  },
  {
    title: "News",
    desc: "Latest insights and updates",
    href: "/news",
    imageClass:
      "bg-[radial-gradient(circle_at_80%_18%,rgba(125,211,252,0.45),transparent_35%),linear-gradient(155deg,#1a2757_0%,#3967b8_100%)]",
    icon: "📰",
  },
];

const newsItems: NewsItem[] = [
  { category: "Events", title: "Coming Soon!", href: "/news#events" },
  { category: "Events", title: "Coming Soon!", href: "/news#jobs" },
  { category: "News of Interest", title: "New Report: Coming Soon!", href: "/news" },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 text-slate-900">
              <img src={`${basePath}/logo2.png`} alt="OMS Academy logo" className="h-8 w-8 rounded-full object-cover" />
              <span className="text-2xl font-semibold tracking-tight">OMS Academy</span>
            </Link>
            <div className="flex flex-wrap items-center gap-6 text-lg text-slate-700">
              <Link href="/basic-sciences" className="hover:text-slate-900">Curriculum</Link>
              <Link href="/training" className="hover:text-slate-900">Case Review</Link>
              <Link href="/resources" className="hover:text-slate-900">Research Hub</Link>
              <Link href="/community" className="hover:text-slate-900">Community</Link>
              <Link
                href="/about"
                className="rounded-xl border border-slate-400 bg-white px-4 py-2 font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Log In / Join
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-slate-900 md:text-7xl">
                The OMS Collaboratory
              </h1>
              <p className="mt-6 max-w-xl text-xl leading-snug text-slate-700 md:text-2xl">
                A centralized evidence-based hub for residents and surgeons. Facilitating clinical mastery through shared inquiry and advanced surgical principles.
              </p>
              <div className="mt-8">
                <Link
                  href="/basic-sciences"
                  className="inline-flex rounded-lg bg-blue-800 px-6 py-3 text-xl font-semibold text-white shadow-md transition hover:bg-blue-700"
                >
                  [Enter the Curriculum]
                </Link>
              </div>
            </div>

            <div className="justify-self-end">
              <div className="overflow-hidden rounded-sm border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src={`${basePath}/boneimage1.png`}
                  alt="OMS visual"
                  className="h-[360px] w-[520px] max-w-full object-cover"
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-indigo-300/30 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.28),transparent_34%),radial-gradient(circle_at_83%_20%,rgba(244,114,182,0.26),transparent_36%),linear-gradient(145deg,#040a2e_0%,#151a54_40%,#180e3f_100%)] p-8 shadow-[0_30px_90px_-35px_rgba(59,130,246,0.8)] md:p-12">
          <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" />
          <h2 className="mt-6 text-center text-4xl font-bold leading-tight text-white md:text-6xl md:whitespace-nowrap">
            OMFS - ALL IN ONE PLACE
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-indigo-100 md:text-xl">
            A unified platform for lectures, research tools, community collaboration,
            and specialty updates.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {hubCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group overflow-hidden rounded-[1.8rem] border border-blue-200/35 bg-white/5 backdrop-blur-xl transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-20px_rgba(125,211,252,0.85)]"
              >
                <div className={`relative flex h-52 items-center justify-center border-b border-blue-200/30 ${card.imageClass}`}>
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-fuchsia-400/25 to-transparent" />
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/45 bg-white/10 shadow-[inset_0_0_22px_rgba(191,219,254,0.35)]">
                    <span className="text-6xl drop-shadow-[0_0_10px_rgba(125,211,252,0.7)]">{card.icon}</span>
                  </div>
                </div>
                <div className="bg-[linear-gradient(180deg,rgba(10,22,68,0.92),rgba(8,12,44,0.95))] p-6 text-center">
                  <h3 className="text-3xl font-semibold leading-tight text-white md:text-4xl">{card.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-indigo-100 md:text-xl">{card.desc}</p>
                </div>
              </Link>
            ))}
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
