"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import media from "@/media.json";
import { getLangFromPath } from "@/lib/i18n";

const m = media as Record<string, string>;

const dict = {
  tr: { prev: "Önceki", next: "Sonraki", slide: "Slayt" },
  en: { prev: "Previous", next: "Next", slide: "Slide" },
} as const;

type Item = {
  name: string;
  desc: string;
};

export default function MaterialSlider({
  title,
  category,
  items,
  bgImage,
  cardImage = "Mukavva_Data.png",
}: {
  title: string;
  category: string;
  items: Item[];
  bgImage: string;
  cardImage?: string;
}) {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const t = dict[lang];

  const [idx, setIdx] = useState(0);
  const current = items[idx];
  const next = () => setIdx((i) => (i + 1) % items.length);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);

  return (
    <div className="relative overflow-hidden rounded-3xl">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${m[bgImage] || ""})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-6 md:p-12 items-center min-h-[420px] md:min-h-[480px]">
        {/* LEFT label column */}
        <div className="md:col-span-3">
          <h3 className="font-anybody-bold italic text-white text-3xl md:text-4xl leading-[1.05]">
            {title.split(" ").map((w, i) => (
              <span key={i} className="block">
                {w}
              </span>
            ))}
          </h3>
        </div>

        {/* CENTER red disk */}
        <div className="md:col-span-3 flex items-center justify-center md:justify-start relative">
          <div
            className="w-28 h-28 md:w-36 md:h-36 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, #ff4040 0%, #ce0d0d 50%, #4b0101 100%)",
              boxShadow:
                "0 0 50px rgba(250,0,0,0.5), inset 0 0 25px rgba(0,0,0,0.4)",
            }}
          />
        </div>

        {/* RIGHT card */}
        <div className="md:col-span-6">
          <div
            className="relative bg-black/80 backdrop-blur-sm border border-red-bright/30 rounded-2xl p-6 md:p-7 flex flex-col gap-5 -ml-0 md:-ml-32"
          >
            <div>
              <p className="font-display text-white/95 text-base md:text-lg mb-1 leading-tight">
                {current.name.trim()}
              </p>
              <p className="text-white/60 text-xs md:text-sm">{category}</p>
            </div>
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m[cardImage]}
                alt={current.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="font-anybody italic text-white/70 text-sm leading-relaxed">
              {current.desc}
            </p>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`${t.slide} ${i + 1}`}
                    className={`h-1 rounded-full transition-all ${
                      i === idx
                        ? "bg-red-bright w-8"
                        : "bg-white/30 w-4 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label={t.prev}
                  className="w-10 h-10 rounded-full border border-white/40 hover:border-red-bright text-white hover:text-red-bright transition flex items-center justify-center"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  aria-label={t.next}
                  className="w-10 h-10 rounded-full border border-white/40 hover:border-red-bright text-white hover:text-red-bright transition flex items-center justify-center"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
