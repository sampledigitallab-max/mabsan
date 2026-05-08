"use client";

import { usePathname } from "next/navigation";
import { getLangFromPath } from "@/lib/i18n";

/**
 * Mabsan Üretim Döngüsü — 4 yarım daire halkalı Venn diagram.
 * Üst: Güven, Sağ: Tasarım, Alt: İnovasyon, Sol: Kalite.
 * Ortada "Mabsan Üretim Döngüsü" yazısı.
 */
const dict = {
  tr: {
    top: "Güven",
    right: "Tasarım",
    bottom: "İnovasyon",
    left: "Kalite",
    centerL1: "Mabsan Üretim",
    centerL2: "Döngüsü",
  },
  en: {
    top: "Trust",
    right: "Design",
    bottom: "Innovation",
    left: "Quality",
    centerL1: "Mabsan Production",
    centerL2: "Cycle",
  },
} as const;

export default function UretimDongusu() {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const t = dict[lang];

  return (
    <div className="relative w-full max-w-[860px] aspect-square mx-auto">
      <svg viewBox="0 0 640 640" className="w-full h-full" aria-hidden="true">
        <defs>
          <filter id="ringGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="320" cy="220" r="180" fill="none" stroke="#fa0000" strokeWidth="2.5" opacity="0.85" filter="url(#ringGlow)" />
        <circle cx="420" cy="320" r="180" fill="none" stroke="#fa0000" strokeWidth="2.5" opacity="0.85" filter="url(#ringGlow)" />
        <circle cx="320" cy="420" r="180" fill="none" stroke="#fa0000" strokeWidth="2.5" opacity="0.85" filter="url(#ringGlow)" />
        <circle cx="220" cy="320" r="180" fill="none" stroke="#fa0000" strokeWidth="2.5" opacity="0.85" filter="url(#ringGlow)" />
      </svg>

      {/* Üst */}
      <span className="absolute top-[10%] left-1/2 -translate-x-1/2 font-anybody italic text-white text-xl md:text-3xl">
        {t.top}
      </span>
      {/* Sol — dikey */}
      <span
        className="absolute top-1/2 left-[6%] -translate-y-1/2 font-anybody italic text-white text-xl md:text-3xl"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        {t.left}
      </span>
      {/* Sağ — dikey */}
      <span
        className="absolute top-1/2 right-[6%] -translate-y-1/2 font-anybody italic text-white text-xl md:text-3xl"
        style={{ writingMode: "vertical-rl" }}
      >
        {t.right}
      </span>
      {/* Alt */}
      <span className="absolute bottom-[8%] left-1/2 -translate-x-1/2 font-anybody italic text-white text-xl md:text-3xl">
        {t.bottom}
      </span>

      {/* Ortada metin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-anybody italic text-white/90 text-xl md:text-3xl leading-tight">
          {t.centerL1}
          <br />
          {t.centerL2}
        </p>
      </div>
    </div>
  );
}
