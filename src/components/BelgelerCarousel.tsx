"use client";

import { useState, useRef, TouchEvent } from "react";
import { Leaf, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { getLangFromPath } from "@/lib/i18n";

type Doc = { label: string; href: string };

type Props = {
  documents: Doc[];
  itemsPerPage?: number;
};

const dict = {
  tr: { prev: "Önceki sayfa", next: "Sonraki sayfa", page: "Sayfa" },
  en: { prev: "Previous page", next: "Next page", page: "Page" },
} as const;

export default function BelgelerCarousel({ documents, itemsPerPage = 6 }: Props) {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const t = dict[lang];

  const [page, setPage] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Sayfa başına sabit (default 6) → 19 belge için 6+6+6+1 = 4 sayfa
  const total = documents.length;
  const pageCount = Math.ceil(total / itemsPerPage);
  const pages: Doc[][] = Array.from({ length: pageCount }, (_, i) =>
    documents.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
  );

  const next = () => setPage((p) => (p + 1) % pageCount);
  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) prev();
    else if (dx < -50) next();
    touchStartX.current = null;
  };

  return (
    <div className="relative">
      {/* Slide pencere — overflow-hidden, içeride translateX ile kaydırma */}
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((slice, sIdx) => (
            <div
              key={sIdx}
              className="w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
            >
              {slice.map((doc) => (
                <a
                  key={doc.label}
                  href={doc.href}
                  download
                  className="relative aspect-square rounded-xl overflow-hidden border border-red-deep/30 group transition hover:border-red-bright"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 45%, #ce0d0d 0%, #7e0a0a 45%, #3a0202 75%, #1a0000 100%)",
                    boxShadow:
                      "inset 0 0 40px rgba(0,0,0,0.5), 0 0 30px rgba(250,0,0,0.15)",
                  }}
                >
                  {/* Yaprak — yeşil */}
                  <div className="absolute inset-0 flex items-center justify-center pb-12">
                    <Leaf
                      size={56}
                      strokeWidth={1.2}
                      className="text-green-500 fill-green-500/90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                    />
                  </div>

                  {/* Başlık — italic underline */}
                  <div className="absolute left-0 right-0 bottom-12 text-center px-3">
                    <span className="font-anybody italic text-white text-base md:text-lg underline underline-offset-4 decoration-white/70">
                      {doc.label}
                    </span>
                  </div>

                  {/* Alt indir bandı */}
                  <div className="absolute left-0 right-0 bottom-0 h-10 bg-black/55 backdrop-blur-[2px] flex items-center justify-center group-hover:bg-black/75 transition">
                    <Download
                      size={18}
                      strokeWidth={1.5}
                      className="text-white/85 group-hover:text-red-bright transition"
                    />
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Sol-sağ ok butonları + alt nokta navigation */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={prev}
          aria-label={t.prev}
          className="w-12 h-12 rounded-full border border-white/30 hover:border-red-bright text-white hover:text-red-bright transition flex items-center justify-center"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-2">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`${t.page} ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === page ? "bg-red-bright w-10" : "bg-white/30 w-5 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label={t.next}
          className="w-12 h-12 rounded-full border border-white/30 hover:border-red-bright text-white hover:text-red-bright transition flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
