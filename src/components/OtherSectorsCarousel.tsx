"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import media from "@/media.json";
import type { Sector } from "@/data/sectors";
import { getLangFromPath, type Lang } from "@/lib/i18n";

const m = media as Record<string, string>;

const dict = {
  tr: { prev: "Önceki", next: "Sonraki", page: "Sayfa" },
  en: { prev: "Previous", next: "Next", page: "Page" },
} as const;

export default function OtherSectorsCarousel({
  sectors,
}: {
  sectors: Sector[];
}) {
  const pathname = usePathname() || "/";
  const lang: Lang = getLangFromPath(pathname);
  const t = dict[lang];

  const [idx, setIdx] = useState(0);
  const visible = 2;
  const max = Math.max(0, sectors.length - visible);

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(max, i + 1));

  return (
    <div className="relative">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 md:gap-6">
        <button
          onClick={prev}
          disabled={idx === 0}
          aria-label={t.prev}
          className="w-12 h-12 rounded-full border border-white/30 hover:border-red-bright text-white hover:text-red-bright transition flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(${-idx} * (50% + 12px)))`,
            }}
          >
            {sectors.map((s) => (
              <div
                key={s.slug}
                className="w-full md:w-1/2 flex-shrink-0 px-1.5 md:px-3"
              >
                <Link
                  href={lang === "en" ? `/en/products/${s.enSlug}` : `/urunler/${s.slug}`}
                  className="block group relative bg-black/60 border border-red-deep/50 hover:border-red-bright/70 transition rounded-[40px_0_40px_0] overflow-hidden"
                >
                  <div className="aspect-[5/3] bg-black flex items-center justify-center overflow-hidden border-b border-red-deep/40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m[s.photo]}
                      alt={s.shortTitle}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-700"
                    />
                  </div>
                  <div className="p-6 md:p-8 text-center">
                    <h3 className="font-anybody italic text-white text-xl md:text-2xl mb-3">
                      {lang === "en" ? s.enShortTitle : s.shortTitle}
                    </h3>
                    <p className="text-white/55 text-xs md:text-sm leading-relaxed line-clamp-4">
                      {lang === "en" ? s.enInfo : s.info}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          disabled={idx >= max}
          aria-label={t.next}
          className="w-12 h-12 rounded-full border border-white/30 hover:border-red-bright text-white hover:text-red-bright transition flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: max + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`${t.page} ${i + 1}`}
            className={`h-1 rounded-full transition-all ${
              i === idx ? "bg-red-bright w-8" : "bg-white/30 w-4 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
