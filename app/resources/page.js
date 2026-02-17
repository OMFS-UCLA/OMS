import Link from "next/link";

export default function ResourcesPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
        Resources
      </p>
      <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
        Coming Soon
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-gray-600">
        We&apos;re building this section now. Please check back soon for tools,
        datasets, and research resources.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
      >
        Back to Home
      </Link>
    </main>
  );
}
