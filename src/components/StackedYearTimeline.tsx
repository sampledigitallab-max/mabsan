"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { getLangFromPath } from "@/lib/i18n";

const milestonesByLang = {
  tr: [
    { year1: "19", year2: "88", title: "Kuruluş", text: "Yolculuğumuz 1988 yılında İstanbul'da başladı." },
    { year1: "19", year2: "91", title: "İlk Otomasyon Yatırımı", text: "Otomatik kutu makinesi olan slotter makinelerine yatırım yaparak otomasyona ilk adımımızı attık." },
    { year1: "19", year2: "94", title: "Depolama Yatırımları", text: "Mevcut alanımıza sığmayarak 4 ayrı lokasyonda ek depolama alanları kurduk ve işlettik." },
    { year1: "19", year2: "98", title: "İhracat Adımlarımız", text: "Yeni lokasyonumuza geçerek üretim kapasitemizi artırdık; ilk kez Azerbaycan ve Türki Cumhuriyetlere ihracata başladık." },
    { year1: "19", year2: "99", title: "Oluklu Mukavva Üretimi", text: "İlk oluklu mukavva makinesi yatırımlarımızı yaparak Türkiye'de oluklu mukavva üretimi yapan sayılı şirket arasına girdik." },
    { year1: "20", year2: "04", title: "Kapasite Yatırımları", text: "Müşteri portföyümüzün genişlemesiyle birlikte yeni inline otomatik kutu makineleri satın alarak üretim kapasitemizi katladık." },
    { year1: "20", year2: "07", title: "Ürün Portfolyosu Genişliyor", text: "Değişen alışkanlıklara uyum sağlamak ve sektöre yön vermek için kesim makineleri yatırımlarımızla ürün çeşitliliğimizi artırdık." },
    { year1: "20", year2: "11", title: "Oluklu Mukavva Hattı Büyüyor", text: "Yeni hattımızla birlikte E dalga ve EB dalga üretimlerini gerçekleştirerek mukavva ve koli kutu olarak tüm ürün çeşitlerini kendi bünyesinde üreten bir tesis haline geldik." },
    { year1: "20", year2: "16", title: "Ofset Ürünler", text: "Ürün gamımızı ofset ürünlerle genişlettik ve matbaa alanına geçiş yaptık." },
    { year1: "20", year2: "19", title: "Yeni Fabrika Yatırımı", text: "Daha çok güven, tasarım ve inovasyon için yeni fabrikamıza geçiş yaptık." },
    { year1: "20", year2: "24", title: "Yeni Bir Mabsan", text: "36 yıllık deneyimimizden aldığımız güç ve gelecek hayallerimizden aldığımız cesaretle yolculuğumuza yenilenen markamızla devam ediyoruz." },
  ],
  en: [
    { year1: "19", year2: "88", title: "Founded", text: "Our journey began in Istanbul in 1988." },
    { year1: "19", year2: "91", title: "First Automation Investment", text: "We took our first automation step by investing in slotter machines — automated box-making lines." },
    { year1: "19", year2: "94", title: "Storage Investments", text: "Outgrowing our facility, we set up and operated additional storage at four separate locations." },
    { year1: "19", year2: "98", title: "Export Steps", text: "We moved to a new facility and increased our production capacity, beginning exports to Azerbaijan and the Turkic states for the first time." },
    { year1: "19", year2: "99", title: "Corrugated Board Production", text: "With our first corrugated board line investment, we joined the small group of corrugated producers in Turkey." },
    { year1: "20", year2: "04", title: "Capacity Investments", text: "As our customer portfolio expanded, we acquired new inline automatic box machines and multiplied our production capacity." },
    { year1: "20", year2: "07", title: "Expanding Product Portfolio", text: "To keep pace with shifting habits and lead the industry, we increased product variety through die-cutter investments." },
    { year1: "20", year2: "11", title: "Growing Corrugated Line", text: "With our new line we began producing E-flute and EB-flute, becoming a fully integrated facility manufacturing all corrugated and box variants in-house." },
    { year1: "20", year2: "16", title: "Offset Products", text: "We expanded our product range with offset solutions and stepped into the printing field." },
    { year1: "20", year2: "19", title: "New Factory Investment", text: "We moved to our new factory for greater reliability, design and innovation." },
    { year1: "20", year2: "24", title: "A New Mabsan", text: "Drawing strength from 36 years of experience and courage from our future ambitions, we continue our journey under our renewed brand." },
  ],
};

const dict = {
  tr: { eyebrow: "36 Yılda Büyük Adımlar", title: "Yolculuğumuz.", end: "✦ son durak", up: "Önceki yıl", down: "Sonraki yıl" },
  en: { eyebrow: "Big Steps in 36 Years", title: "Our Journey.", end: "✦ end of the road", up: "Previous year", down: "Next year" },
} as const;

export default function StackedYearTimeline() {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const milestones = milestonesByLang[lang];
  const t = dict[lang];

  const [idx, setIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const current = milestones[idx];
  const next = milestones[idx + 1];

  const goUp = () => {
    if (idx === 0) return;
    setIdx(idx - 1);
    setAnimKey((k) => k + 1);
  };
  const goDown = () => {
    if (idx >= milestones.length - 1) return;
    setIdx(idx + 1);
    setAnimKey((k) => k + 1);
  };

  return (
    <div className="relative">
      {/* Section header */}
      <div className="mb-12">
        <p className="text-red-bright font-display text-xs tracking-[0.3em] uppercase mb-3">
          {t.eyebrow}
        </p>
        <h2 className="font-anybody-bold italic text-white text-3xl md:text-5xl text-balance leading-[0.95]">
          {t.title}
        </h2>
      </div>

      {/* Big prefix "19" / "20" — değişen ortak prefix, fade animasyon */}
      <div className="relative h-[140px] md:h-[200px] mb-2">
        <div
          key={`prefix-${current.year1}-${animKey}`}
          className="absolute left-0 top-0 leading-[0.85] select-none fade-in"
          style={{
            fontFamily: '"Anybody", serif',
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: "clamp(120px, 18vw, 240px)",
            background: "linear-gradient(317.85deg, #fa0000 -41.59%, rgba(250,0,0,0) 143.46%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            filter: "drop-shadow(0 0 30px rgba(250,0,0,0.4))",
          }}
        >
          {current.year1}
        </div>
      </div>

      {/* Two columns: active card + next preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch min-h-[420px]">
        {/* ACTIVE CARD (left) */}
        <div
          key={`active-${idx}-${animKey}`}
          className="relative redline bg-black/40 backdrop-blur p-6 md:p-10 fade-in"
        >
          <div className="flex items-stretch gap-4 md:gap-6 h-full">
            {/* Big year2 number */}
            <div className="flex-shrink-0">
              <div
                className="font-anybody-bold italic text-white leading-[0.85] select-none"
                style={{
                  fontSize: "clamp(120px, 14vw, 200px)",
                  textShadow: "0 0 40px rgba(255,255,255,0.15)",
                }}
              >
                {current.year2}
              </div>
            </div>

            {/* Right column: arrows + content */}
            <div className="flex-1 flex flex-col gap-3 min-h-[320px] justify-between py-1">
              <button
                onClick={goUp}
                disabled={idx === 0}
                aria-label={t.up}
                className="self-start w-12 h-12 rounded-full border-2 border-white/30 hover:border-red-bright text-white hover:text-red-bright disabled:opacity-25 disabled:cursor-not-allowed transition flex items-center justify-center"
              >
                <ChevronUp size={22} />
              </button>

              <div className="flex flex-col gap-3 my-auto">
                <h3 className="font-anybody-bold italic text-white text-2xl md:text-3xl leading-tight">
                  {current.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed font-anybody italic max-w-md">
                  {current.text}
                </p>
              </div>

              <button
                onClick={goDown}
                disabled={idx >= milestones.length - 1}
                aria-label={t.down}
                className="self-start w-12 h-12 rounded-full border-2 border-white/30 hover:border-red-bright text-white hover:text-red-bright disabled:opacity-25 disabled:cursor-not-allowed transition flex items-center justify-center"
              >
                <ChevronDown size={22} />
              </button>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-3 right-4 text-white/30 text-[10px] tracking-widest font-display">
            {String(idx + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
          </div>
        </div>

        {/* NEXT PREVIEW (right, dim) */}
        <div className="hidden md:block relative bg-black/20 border border-white/5 rounded-[20px_0_20px_0] p-6 md:p-10 opacity-50">
          {next ? (
            <div className="flex items-stretch gap-4 md:gap-6 h-full">
              <div
                className="font-anybody-bold italic text-white/80 leading-[0.85] select-none"
                style={{
                  fontSize: "clamp(100px, 12vw, 180px)",
                }}
              >
                {next.year2}
              </div>
              <div className="flex flex-col gap-3 my-auto">
                <h3 className="font-anybody-bold italic text-white/80 text-xl md:text-2xl leading-tight">
                  {next.title}
                </h3>
                <p className="text-white/40 text-xs md:text-sm leading-relaxed font-anybody italic line-clamp-3 max-w-sm">
                  {next.text}
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-white/30 italic">
              {t.end}
            </div>
          )}
        </div>
      </div>

      {/* Pagination indicator */}
      <div className="flex items-center justify-center gap-1.5 mt-10">
        {milestones.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIdx(i);
              setAnimKey((k) => k + 1);
            }}
            aria-label={`${milestones[i].year1}${milestones[i].year2}`}
            className={`h-1 rounded-full transition-all ${
              i === idx ? "bg-red-bright w-10" : "bg-white/20 w-4 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
