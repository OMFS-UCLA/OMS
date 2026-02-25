export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">OMS Nexus</h3>
          <p className="mt-2 text-sm text-gray-600">
            A virtual forum where technologists, researchers, and clinicians connect, learn,
            share, and innovate.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>
          <p className="mt-2 text-sm text-gray-600">your-email@domain.org</p>
          <p className="text-sm text-gray-600">Your address line</p>
        </div>

        <div>
          <h3 className="font-semibold">Social</h3>
          <div className="mt-2 flex flex-wrap gap-3 text-sm">
            <a className="text-gray-700 hover:text-gray-900" href="#">Twitter</a>
            <a className="text-gray-700 hover:text-gray-900" href="#">LinkedIn</a>
            <a className="text-gray-700 hover:text-gray-900" href="#">YouTube</a>
            <a className="text-gray-700 hover:text-gray-900" href="#">GitHub</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} OMS Nexus
      </div>
    </footer>
  );
}
