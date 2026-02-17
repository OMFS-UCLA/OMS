import Link from "next/link";

export default function SubtopicChaptersPage({ title, subtitle, chapters }) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(186,230,253,0.45),transparent_40%),linear-gradient(#f7fbff,#eef5fb)] pb-16">
      <section className="mx-auto max-w-7xl px-4 pt-14">
        <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-lg backdrop-blur">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-cyan-700">
            <Link href="/" className="hover:text-cyan-900">Home</Link>
            <span className="mx-2">▸</span>
            <Link href="/training" className="hover:text-cyan-900">Lectures</Link>
            <span className="mx-2">▸</span>
            <Link href="/basic-sciences" className="hover:text-cyan-900">Basic Sciences</Link>
            <span className="mx-2">▸</span>
            <span className="text-slate-800">{title}</span>
          </p>

          <h1 className="mt-4 text-center text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-4xl text-center text-lg text-slate-600">
            {subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl px-4">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={chapter.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-25"
                style={{ backgroundImage: `url('${chapter.bgImage}')` }}
              />
              <div className="absolute inset-0 bg-white/60" />
              <div className="relative z-10 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-orange-500 px-2 text-sm font-bold text-white">
                    {chapter.id}
                  </span>
                  <span className="text-3xl">{chapter.icon}</span>
                </div>
                <span className="text-2xl text-slate-300 transition group-hover:text-blue-500">›</span>
              </div>
              <h2 className="relative z-10 mt-4 text-center text-3xl font-bold leading-tight text-slate-900">
                {chapter.title}
              </h2>
              <p className="relative z-10 mt-3 text-lg leading-relaxed text-slate-600">{chapter.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
