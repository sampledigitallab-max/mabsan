"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import media from "@/media.json";
import { getLangFromPath } from "@/lib/i18n";

const m = media as Record<string, string>;

const machinesByLang = {
  tr: [
    {
      id: "1",
      spec: "173 cm B+C",
      line: "Oluklu Mukavva Hattı",
      detail:
        "Mabsan, bir atölyede sanat ve el emeğiyle şekillenmeye başladı. İlk katman, geleneksel sanat ve yaratıcılığın doğuşunu temsil eder. İlk nefesini aldığında bir kutu olarak hayata geldi.",
    },
  ],
  en: [
    {
      id: "1",
      spec: "173 cm B+C",
      line: "Corrugated Board Line",
      detail:
        "Mabsan was first shaped in a small workshop, with craft and skilled hands. The first layer represents the birth of traditional craftsmanship and creativity — the moment a box came to life.",
    },
  ],
};

const dict = {
  tr: { title1: "Makina", title2: "Parkurlarımız", prev: "Önceki", next: "Sonraki" },
  en: { title1: "Our Machine", title2: "Lineup", prev: "Previous", next: "Next" },
} as const;

export default function MakinaParkur() {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const machines = machinesByLang[lang];
  const t = dict[lang];

  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(420);

  useEffect(() => {
    const onResize = () => setStep(window.innerWidth < 768 ? 320 : 420);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const photo = m["Makina_Data.png"] || "/media/Makina_Data.1738ffa7f81e427fd964.png";
  const maxIdx = Math.max(0, machines.length - 1);
  const next = () => setIdx((i) => Math.min(i + 1, maxIdx));
  const prev = () => setIdx((i) => Math.max(i - 1, 0));

  return (
    <div className="grid md:grid-cols-12 gap-8 items-center">
      {/* Sol: başlık + metin + ←→ */}
      <div className="md:col-span-4">
        <h2 className="font-anybody-bold italic text-white text-4xl md:text-5xl leading-[1.05] mb-6 text-balance">
          {t.title1}
          <br />
          {t.title2}
        </h2>
        <p className="text-white/55 text-sm leading-relaxed font-anybody italic max-w-sm mb-6">
          {machines[idx].detail}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            disabled={idx === 0}
            aria-label={t.prev}
            className="w-12 h-12 rounded-full border-2 border-white/30 hover:border-red-bright text-white hover:text-red-bright disabled:opacity-25 disabled:cursor-not-allowed transition flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            disabled={idx >= maxIdx}
            aria-label={t.next}
            className="w-12 h-12 rounded-full border-2 border-white/30 hover:border-red-bright text-white hover:text-red-bright disabled:opacity-25 disabled:cursor-not-allowed transition flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Sağ: kart slider */}
      <div className="md:col-span-8 overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${idx * (step + 20)}px)` }}
        >
          {machines.map((mc) => (
            <div
              key={mc.id}
              className="flex-shrink-0 rounded-[20px_0_20px_0] bg-soft-gray/30 border border-red-deep/30 overflow-hidden relative"
              style={{ width: step, height: 320 }}
            >
              {/* Glowing red dot top-left of header */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-start gap-3">
                <span className="w-9 h-9 rounded-full bg-red-bright/20 border border-red-bright shadow-[0_0_18px_rgba(250,0,0,0.7)] mt-0.5 flex-shrink-0" />
                <div className="leading-tight">
                  <p className="font-display text-white text-base md:text-lg">
                    {mc.spec}
                  </p>
                  <p className="font-anybody italic text-white/80 text-sm md:text-base">
                    {mc.line}
                  </p>
                </div>
              </div>

              {/* Photo bottom */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] overflow-hidden">
                <Image
                  src={photo}
                  alt={mc.line}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
