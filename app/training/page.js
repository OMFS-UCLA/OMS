import Link from "next/link";

export default function TrainingPage() {
  return (
    <main className="bg-gray-100 pb-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(88,28,135,0.5),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.35),transparent_40%),linear-gradient(120deg,#09052f_0%,#11084a_45%,#1a1f68_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] bg-[size:9px_9px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(59,130,246,0.25)_50%,transparent)] opacity-25" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-24 text-white md:flex-row md:items-end md:justify-between">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Lectures</h1>
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200/90">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2 text-cyan-300">▸</span>
            <span className="text-white">Lectures</span>
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-6 max-w-7xl px-4">
        <div className="rounded-2xl border border-gray-200 bg-gray-100 p-8 shadow-sm md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-semibold text-gray-900">Lectures</h2>
              <p className="mt-5 max-w-xl text-xl leading-relaxed text-gray-700">
                Find lectures in oral and maxillofacial surgery training, focusing on
                foundational principles, anatomy, and surgical sciences.
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-gray-900">Find by Topic</h3>
              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Enter your Keyword"
                  className="w-full rounded-lg border border-gray-300 bg-white px-5 py-4 text-xl text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
                <select className="w-full rounded-lg border border-gray-300 bg-white px-5 py-4 text-xl text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                  <option>— Select Tags —</option>
                  <option>Basic Sciences</option>
                  <option>Anatomy</option>
                  <option>Surgical Sciences</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
