"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { getLangFromPath } from "@/lib/i18n";

type Person = { id: string; name: string; position: string; photo?: string };

const teamByLang: Record<"tr" | "en", Person[]> = {
  tr: [
    { id: "1", name: "Mehmet Mersin", position: "Genel Müdür", photo: "/media/team/mehmet-mersin.jpg" },
    { id: "2", name: "İsmet Akın", position: "Genel Müdür Yardımcısı", photo: "/media/team/ismet-akin.jpg" },
    { id: "3", name: "Hilal Mersin", position: "Pazarlama Direktörü", photo: "/media/team/hilal-mersin.jpg" },
    { id: "4", name: "Mehmet Sabri Mersin", position: "Strateji ve İş Geliştirme Direktörü" },
    { id: "5", name: "Abdullah Karakum", position: "Üretim Planlama Direktörü", photo: "/media/team/abdullah-karakum.jpg" },
  ],
  en: [
    { id: "1", name: "Mehmet Mersin", position: "General Manager (GM)", photo: "/media/team/mehmet-mersin.jpg" },
    { id: "2", name: "İsmet Akın", position: "Deputy General Manager", photo: "/media/team/ismet-akin.jpg" },
    { id: "3", name: "Hilal Mersin", position: "Chief Marketing Officer (CMO)", photo: "/media/team/hilal-mersin.jpg" },
    { id: "4", name: "Mehmet Sabri Mersin", position: "Director of Strategy & Business Development" },
    { id: "5", name: "Abdullah Karakum", position: "Director of Production Planning", photo: "/media/team/abdullah-karakum.jpg" },
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

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [idx, setIdx] = useState(0);
  const [cardW, setCardW] = useState(260);
  const [cardH, setCardH] = useState(340);
  const [gap, setGap] = useState(20);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const compute = () => {
      const vw = window.innerWidth;
      const containerW = viewportRef.current?.clientWidth ?? vw;

      let targetCardW: number;
      let targetCardH: number;
      let targetGap: number;

      if (vw < 640) {
        targetCardW = 200;
        targetCardH = 260;
        targetGap = 14;
      } else if (vw < 1024) {
        targetCardW = 230;
        targetCardH = 300;
        targetGap = 18;
      } else if (vw < 1280) {
        targetCardW = 250;
        targetCardH = 330;
        targetGap = 20;
      } else {
        targetCardW = 280;
        targetCardH = 370;
        targetGap = 22;
      }

      const fit = Math.max(
        1,
        Math.floor((containerW + targetGap) / (targetCardW + targetGap))
      );

      setCardW(targetCardW);
      setCardH(targetCardH);
      setGap(targetGap);
      setVisible(Math.min(fit, team.length));
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [team.length]);

  const step = cardW + gap;
  const maxIdx = Math.max(0, team.length - visible);
  useEffect(() => {
    if (idx > maxIdx) setIdx(maxIdx);
  }, [idx, maxIdx]);
  const next = () => setIdx((i) => Math.min(i + 1, maxIdx));
  const prev = () => setIdx((i) => Math.max(i - 1, 0));

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
      <div ref={viewportRef} className="flex-1 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${idx * step}px)`, gap: `${gap}px` }}
        >
          {team.map((person) => (
            <div
              key={person.id}
              className="flex-shrink-0 flex flex-col gap-3"
              style={{ width: cardW }}
            >
              {/* Rectangular photo card */}
              <div
                className="relative overflow-hidden rounded-2xl border border-red-deep/40 bg-[#1a1818]"
                style={{ width: cardW, height: cardH }}
              >
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 230px, (max-width: 1280px) 250px, 280px"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-darker via-black to-red-darker">
                    <User size={64} className="text-white/30" strokeWidth={1.2} />
                  </div>
                )}
                {/* Subtle bottom gradient for readability if needed later */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              <div className="px-1">
                <p className="font-anybody-bold italic text-white text-base md:text-lg leading-tight">
                  {person.name}
                </p>
                <p className="font-display tracking-wide text-white/65 text-xs md:text-sm mt-1 leading-snug uppercase">
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
