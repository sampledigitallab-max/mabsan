"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const milestones = [
  { year: "1988", header: "KURULUŞ", body: "Yolculuğumuz İstanbul'da başladı." },
  { year: "1995", header: "İLK OTOMASYON", body: "Slotter makineleri ile otomasyon dönemi." },
  { year: "2002", header: "DEPOLAMA", body: "4 ayrı lokasyonda büyüme." },
  { year: "2005", header: "İHRACAT", body: "Azerbaycan & Türki Cumhuriyetlere açılım." },
  { year: "2010", header: "OLUKLU MUKAVVA", body: "Sayılı üretici arasına girdik." },
  { year: "2015", header: "KAPASİTE x2", body: "Inline otomatik kutu makineleri." },
  { year: "2020", header: "TAM HAT", body: "E ve EB dalga üretimleri." },
  { year: "2024", header: "YENİLENEN MARKA", body: "36 yıllık tecrübe, yeni kimlik." },
];

export default function MilestoneSlider() {
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(320);

  useEffect(() => {
    const onResize = () => setStep(window.innerWidth < 768 ? 260 : 320);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const visibleCount = step === 260 ? 1 : 3;
  const maxIdx = Math.max(0, milestones.length - visibleCount);
  const next = () => setIdx((i) => Math.min(i + 1, maxIdx));
  const prev = () => setIdx((i) => Math.max(i - 1, 0));

  return (
    <div className="relative">
      <div className="flex items-end justify-between mb-8 gap-6 flex-wrap">
        <div>
          <p className="text-red-bright font-display text-sm tracking-[0.3em] uppercase mb-2">
            36 yılda büyük adımlar
          </p>
          <h2 className="font-anybody-bold italic text-white text-3xl md:text-5xl text-balance leading-[1.05] max-w-2xl">
            1988&apos;den bugüne yatırımlarımız.
          </h2>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={prev}
            disabled={idx === 0}
            aria-label="Önceki"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 hover:border-red-bright text-white hover:text-red-bright disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center justify-center"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            disabled={idx === maxIdx}
            aria-label="Sonraki"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 hover:border-red-bright text-white hover:text-red-bright disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center justify-center"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${idx * (step + 20)}px)` }}
        >
          {milestones.map((m, i) => {
            const isActive = i === idx;
            return (
              <div
                key={m.year}
                className={`flex-shrink-0 rounded-[30px_0_30px_0] border backdrop-blur transition-all duration-500 ${
                  isActive
                    ? "bg-red-bright/15 border-red-bright/50"
                    : "bg-white/5 border-white/10 hover:border-red-bright/30"
                }`}
                style={{ width: step, height: 420 }}
              >
                <div className="p-7 h-full flex flex-col justify-between">
                  <div>
                    <div className="timeline-year-display text-7xl md:text-8xl leading-[0.85] mb-1">
                      {m.year}
                    </div>
                    <div className="h-px w-12 bg-red-bright mt-3 mb-5" />
                    <h3 className="font-display text-white text-lg tracking-wider mb-3">
                      {m.header}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed font-anybody italic">
                      {m.body}
                    </p>
                  </div>
                  <div className="text-white/30 text-xs tracking-widest">
                    0{i + 1} / 0{milestones.length}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
