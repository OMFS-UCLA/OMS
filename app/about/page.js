export default function AboutPage() {
  return (
    <main className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            OMS Nexus
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            About Our Learning Hub
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            We build practical, structured education for oral and maxillofacial
            surgery trainees, with focused tracks across basic sciences,
            surgery, anatomy, pharmacology, and research.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        {[
          { title: "Mission", body: "Deliver clear, high-yield teaching for OMFS learners at every level." },
          { title: "Approach", body: "Case-based lessons, chapter progression, and practical clinical framing." },
          { title: "Community", body: "Collaborative space for trainees, educators, and specialty professionals." },
        ].map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-slate-700">{item.body}</p>
          </article>
        ))}
      </section>

      <section id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-semibold text-slate-900">Contact Us</h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            For partnerships, speaking requests, or contributor opportunities,
            reach out and include your area of interest.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Email</p>
              <p className="mt-1 text-lg font-medium text-slate-900">contact@omsacademy.org</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Collaboration</p>
              <p className="mt-1 text-lg font-medium text-slate-900">community@omsacademy.org</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
