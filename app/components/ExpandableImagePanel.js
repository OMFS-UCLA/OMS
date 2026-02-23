"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ExpandableImagePanel({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group block w-full cursor-zoom-in"
        aria-label="Expand image"
      >
        <div className="relative h-[24rem] w-full overflow-hidden bg-slate-50 md:h-[34rem]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain transition duration-200 group-hover:scale-[1.01]"
            sizes="(max-width: 768px) 100vw, 900px"
            priority
          />
        </div>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/75 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image view"
        >
          <div className="relative h-[88vh] w-[96vw] max-w-[1800px]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              fill
              className="rounded-xl object-contain shadow-2xl"
              sizes="96vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
