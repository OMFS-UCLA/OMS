"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const searchItems = [
  { name: "Home", href: "/", tags: ["home"] },
  { name: "About", href: "/about", tags: ["about", "contact"] },
  { name: "Community", href: "/community", tags: ["community"] },
  { name: "Lectures - Basic Sciences", href: "/basic-sciences", tags: ["lectures", "basic sciences"] },
  { name: "Lectures - Anatomy and Radiology", href: "/anatomy", tags: ["lectures", "anatomy", "radiology"] },
  { name: "Lectures - Surgery and Anesthesiology", href: "/surgery", tags: ["lectures", "surgery", "anesthesiology"] },
  { name: "Lectures - Pharmacology", href: "/basic-sciences", tags: ["lectures", "pharmacology"] },
  { name: "Resources - Digital Toolbox", href: "/resources#toolbox", tags: ["resources", "toolbox"] },
  { name: "Resources - IRB Resources", href: "/resources#irb", tags: ["resources", "irb"] },
  { name: "News", href: "/news", tags: ["news"] },
  { name: "News - Job Opportunities", href: "/news#jobs", tags: ["news", "jobs"] },
  { name: "News - Events", href: "/news#events", tags: ["news", "events"] },
];

function Dropdown({ label, items, href }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {href ? (
        <Link
          href={href}
          className="block rounded-md px-4 py-2.5 text-base font-medium text-gray-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/70 hover:text-red-600"
        >
          {label}
        </Link>
      ) : (
        <button className="rounded-md px-4 py-2.5 text-base font-medium text-gray-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/70 hover:text-red-600">
          {label}
        </button>
      )}

      {open && (
        <div className="absolute left-0 top-full z-50 w-64 pt-2 animate-dropdown-in">
          <div className="rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="block rounded-lg px-3 py-2.5 text-base text-gray-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-gray-100 hover:text-blue-600"
              >
                {it.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const hasQuery = query.trim().length > 0;

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchItems.filter((item) => {
      const haystack = `${item.name} ${item.tags.join(" ")}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  useEffect(() => {
    const onKeyDown = (e) => {
      const target = e.target;
      const isTypingTarget =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;
      if (e.key === "Escape") {
        setSearchOpen(false);
        return;
      }
      if (isTypingTarget) return;
      if (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    setQuery("");
  }, [searchOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* LEFT — LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo2.png"
            alt="Logo"
            className="h-14 w-14 rounded-full object-cover"
          />
          <span className="text-3xl font-semibold text-gray-800">
            OMS Academy
          </span>
        </Link>

        {/* CENTER — MENU */}
        <nav className="hidden md:flex items-center gap-2 text-base font-medium text-gray-700">
          <Link
            href="/"
            className={`rounded-md px-4 py-2.5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/70 hover:text-red-600 ${
              pathname === "/" ? "text-black underline underline-offset-4" : ""
            }`}
          >
            Home
          </Link>

          <Dropdown
            label="About"
            items={[
              { name: "About", href: "/about" },
              { name: "Contact Us", href: "/about#contact" },
            ]}
          />

          <Dropdown
            label="Lectures"
            href="/training"
            items={[
              { name: "Basic Sciences", href: "/basic-sciences" },
              { name: "Anatomy and Radiology", href: "/anatomy" },
              { name: "Surgery and Anesthesiology", href: "/surgery" },
              { name: "Pharmacology", href: "/basic-sciences" },
            ]}
          />

          <Dropdown
            label="Resources"
            items={[
              { name: "Digital Toolbox", href: "/resources#toolbox" },
              { name: "IRB Resources", href: "/resources#irb" },
            ]}
          />

          <Link
            href="/resources"
            className="rounded-md px-4 py-2.5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/70 hover:text-red-600"
          >
            Research HUB
          </Link>

          <Dropdown
            label="News"
            items={[
              { name: "News", href: "/news" },
              { name: "Job Opportunities", href: "/news#jobs" },
              { name: "Events", href: "/news#events" },
            ]}
          />

          <Link
            href="/community"
            className="rounded-md px-4 py-2.5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/70 hover:text-red-600"
          >
            Community
          </Link>
        </nav>

        {/* RIGHT — ICONS */}
        <div className="flex items-center gap-5 text-gray-700">
          <button
            type="button"
            className={`text-2xl transition-all duration-200 hover:scale-110 hover:text-black active:scale-95 ${
              searchOpen ? "animate-search-click-flash scale-110 text-red-600" : ""
            }`}
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            🔍
          </button>
          <button
            type="button"
            className="text-2xl hover:text-black md:hidden"
            onClick={() => alert("Mobile menu coming soon")}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

      </div>

      {searchOpen && (
        <div
          className="animate-search-backdrop fixed inset-0 z-[100] bg-black/45 px-4 py-10"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSearchOpen(false);
          }}
        >
          <div className="animate-search-modal mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-2xl">
            <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3">
              <span className="text-xl text-gray-500">🔍</span>
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, lectures, resources..."
                className="w-full border-none bg-transparent text-base text-gray-900 outline-none placeholder:text-gray-500"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                Esc
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {!hasQuery && (
                <p className="px-3 py-4 text-sm text-gray-500">Start typing to search.</p>
              )}
              {hasQuery && filteredItems.length === 0 && (
                <p className="px-3 py-4 text-sm text-gray-500">No matches found.</p>
              )}
              {hasQuery && filteredItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSearchOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
