import Link from "next/link";

export default function LectureCards({ eyebrow, title, subtitle, cards }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resolveImage = (path) =>
    path && path.startsWith("/") ? `${basePath}${path}` : path;

  return (
    <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600">{eyebrow}</p>
      <h2 className="mt-2 text-4xl font-bold text-gray-900">{title}</h2>
      <p className="mt-3 max-w-3xl text-lg text-gray-600">{subtitle}</p>

      {cards.length === 0 ? (
        <p className="mt-8 rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-center text-base text-gray-600">
          No matching lectures found for this filter.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${resolveImage(card.image)}')` }}
              />
              <div className="space-y-2 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600">
                  {card.topic}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.speaker}</p>
                <p className="text-sm text-gray-500">{card.duration}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
