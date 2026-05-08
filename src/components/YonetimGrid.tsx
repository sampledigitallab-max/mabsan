"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import media from "@/media.json";
import { getLangFromPath } from "@/lib/i18n";

const m = media as Record<string, string>;

const teamByLang = {
  tr: [
    { id: "1", name: "Ayla Haktan", position: "Genel Müdürü" },
    { id: "2", name: "Ali Kara", position: "Muhasebe Müdürü" },
    { id: "3", name: "Fatma Demir", position: "İnsan Kaynakları Müdürü" },
    { id: "4", name: "Mehmet Yılmaz", position: "Teknoloji Müdürü" },
    { id: "5", name: "Zeynep Güler", position: "Pazarlama Müdürü" },
    { id: "6", name: "Hasan Karadeniz", position: "Satış Müdürü" },
  ],
  en: [
    { id: "1", name: "Ayla Haktan", position: "General Manager" },
    { id: "2", name: "Ali Kara", position: "Finance Manager" },
    { id: "3", name: "Fatma Demir", position: "HR Manager" },
    { id: "4", name: "Mehmet Yılmaz", position: "Technology Manager" },
    { id: "5", name: "Zeynep Güler", position: "Marketing Manager" },
    { id: "6", name: "Hasan Karadeniz", position: "Sales Manager" },
  ],
};

const dict = {
  tr: { prev: "Önceki", next: "Sonraki" },
  en: { prev: "Previous", next: "Next" },
} as const;

export default function YonetimGrid() {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const team = teamByLang[lang];
  const t = dict[lang];

  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(190);
  const [visible, setVisible] = useState(5);

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setStep(160);
        setVisible(2);
      } else if (w < 1024) {
        setStep(180);
        setVisible(3);
      } else {
        setStep(200);
        setVisible(5);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIdx = Math.max(0, team.length - visible);
  const next = () => setIdx((i) => Math.min(i + 1, maxIdx));
  const prev = () => setIdx((i) => Math.max(i - 1, 0));

  const photo = m["yonetim.png"] || "/media/yonetim.52f47eaccc464c854bca.png";

  return (
    <div className="flex items-center gap-3 md:gap-5">
      {/* Prev */}
      <button
        onClick={prev}
        disabled={idx === 0}
        aria-label={t.prev}
        className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 hover:border-red-bright text-white hover:text-red-bright disabled:opacity-25 disabled:cursor-not-allowed transition flex items-center justify-center bg-black"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Cards viewport */}
      <div className="flex-1 overflow-hidden">
        <div
          className="flex gap-3 md:gap-5 transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${idx * step}px)` }}
        >
          {team.map((person) => (
            <div
              key={person.id}
              className="flex-shrink-0 flex flex-col items-center gap-3 text-center"
              style={{ width: step - (step < 180 ? 16 : 20) }}
            >
              {/* Round avatar with red duotone */}
              <div
                className="relative rounded-full overflow-hidden border border-red-bright/40"
                style={{
                  width: step < 180 ? 100 : 130,
                  height: step < 180 ? 100 : 130,
                  background:
                    "radial-gradient(circle at 50% 30%, rgba(250,80,80,0.8) 0%, rgba(150,30,30,0.6) 100%)",
                  boxShadow: "0 0 25px rgba(250,0,0,0.2)",
                }}
              >
                <Image
                  src={photo}
                  alt={person.name}
                  fill
                  className="object-cover"
                  style={{
                    filter: "saturate(1.2) hue-rotate(-10deg) brightness(0.9)",
                    mixBlendMode: "luminosity",
                    opacity: 0.85,
                  }}
                />
                {/* Red tint overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(250,90,90,0.45) 0%, rgba(180,30,30,0.45) 100%)",
                    mixBlendMode: "color",
                  }}
                />
              </div>

              <div className="px-1 leading-tight">
                <p className="font-anybody italic text-white text-[13px] md:text-[15px]">
                  {person.name}
                </p>
                <p className="font-anybody italic text-white/70 text-[11px] md:text-[13px] mt-0.5 leading-tight">
                  {person.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next */}
      <button
        onClick={next}
        disabled={idx === maxIdx}
        aria-label={t.next}
        className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 hover:border-red-bright text-white hover:text-red-bright disabled:opacity-25 disabled:cursor-not-allowed transition flex items-center justify-center bg-black"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
