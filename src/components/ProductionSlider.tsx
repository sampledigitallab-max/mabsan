"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import media from "@/media.json";
import { getLangFromPath } from "@/lib/i18n";

const m = media as Record<string, string>;

type Slide = {
  n: string;
  label: string;
  hook: string;
  desc: string;
  bgVideo: string;
  cardImage?: string;
  cardVideo?: string;
};

const slidesByLang: Record<"tr" | "en", Slide[]> = {
  tr: [
    {
      n: "01",
      label: "Geri Dönüşüm",
      hook: "Sürdürülebilir bir dünya için ilk adımımız geri dönüşüm.",
      desc: "Hurda kâğıtları çevre dostu geri dönüşüm sürecinden geçirerek dünyaya yeniden kazandırıyoruz.",
      bgVideo: "karton_1.mp4",
      cardVideo: "karton_1.mp4",
    },
    {
      n: "02",
      label: "Yüksek Teknoloji",
      hook: "Ürünlerinizi korumak için teknolojiye güveniyoruz.",
      desc: "Geri dönüştürülen malzemeler yüksek teknolojili makinelerle sağlam ve dayanıklı bobin kâğıtlara dönüştürülüyor.",
      bgVideo: "mabsan1080low.mp4",
      cardImage: "kart_2.png",
    },
    {
      n: "03",
      label: "Oluklu Mukavva",
      hook: "36 yıllık tecrübemizle en iyi bildiğimiz işi yapıyoruz.",
      desc: "Kâğıt bobinlerini oluklu mukavva makinelerinde işleyerek oluk formunu veriyoruz; düz tabaka mukavva üretimi.",
      bgVideo: "karton_videolar.mp4",
      cardImage: "kart_3.png",
    },
    {
      n: "04",
      label: "Markaya Özel",
      hook: "Marka itibarınız için fark yaratan çözümler tasarlıyoruz.",
      desc: "Hassas kesim, baskı ve özel yapıştırma işlemleriyle son ürün koli ve kutulara dönüştürüyoruz.",
      bgVideo: "rotate.mp4",
      cardImage: "kart_4.png",
    },
  ],
  en: [
    {
      n: "01",
      label: "Recycling",
      hook: "Recycling is our first step toward a sustainable world.",
      desc: "We bring waste paper back to life through an eco-friendly recycling process.",
      bgVideo: "karton_1.mp4",
      cardVideo: "karton_1.mp4",
    },
    {
      n: "02",
      label: "High Technology",
      hook: "We trust technology to protect your products.",
      desc: "Recycled materials are turned into strong, durable paper reels using high-tech machinery.",
      bgVideo: "mabsan1080low.mp4",
      cardImage: "kart_2.png",
    },
    {
      n: "03",
      label: "Corrugated Board",
      hook: "We do what we do best — backed by 36 years of experience.",
      desc: "Paper reels are processed on corrugating lines to form the flute pattern, producing flat corrugated sheets.",
      bgVideo: "karton_videolar.mp4",
      cardImage: "kart_3.png",
    },
    {
      n: "04",
      label: "Custom Solutions",
      hook: "We design solutions that elevate your brand's reputation.",
      desc: "Through precision die-cutting, printing and special gluing we transform sheets into finished cases and boxes.",
      bgVideo: "rotate.mp4",
      cardImage: "kart_4.png",
    },
  ],
};

const dict = {
  tr: { header: "kâğıtla başlayan güvenilir markalara uzanan bir yolculuk" },
  en: { header: "a journey from paper to trusted brands" },
} as const;

export default function ProductionSlider() {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const slides = slidesByLang[lang];
  const t = dict[lang];

  const [idx, setIdx] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [auto]);

  const next = () => {
    setAuto(false);
    setIdx((i) => (i + 1) % slides.length);
  };
  const prev = () => {
    setAuto(false);
    setIdx((i) => (i - 1 + slides.length) % slides.length);
  };

  const current = slides[idx];
  const nextSlide = slides[(idx + 1) % slides.length];

  return (
    <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden">
      {/* Üst satır — sol dot + ──── + sağda yazı */}
      <div className="flex items-center gap-3 px-6 md:px-10 pt-5">
        <span className="w-3 h-3 rounded-full bg-red-bright shadow-[0_0_12px_rgba(250,0,0,0.8)]" />
        <span className="flex-1 h-px bg-white/25" />
        <span className="font-anybody-bold italic text-white text-base md:text-lg whitespace-nowrap">
          {t.header}
        </span>
      </div>

      <div className="relative">
        {/* Orijinal arka.svg pattern — sağda bina silüetleri */}
        {m["arka.svg"] && (
          <Image
            src={m["arka.svg"]}
            alt=""
            fill
            sizes="100vw"
            className="absolute inset-0 object-cover pointer-events-none opacity-90"
            priority={false}
          />
        )}
        {/* Hafif gradient — sol tarafta yazıların okunabilirliği için, sağ kenarda silüetler görünür kalsın */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-6 md:p-12 items-center min-h-[480px] md:min-h-[540px]">
          {/* LEFT — quote + desc + arrows */}
          <div className="md:col-span-5 space-y-5">
            <h3 className="font-anybody-bold italic text-white text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.15] text-balance">
              &ldquo;{current.hook}&rdquo;
            </h3>
            <p className="text-white/55 text-sm md:text-base leading-relaxed font-anybody italic max-w-md">
              {current.desc}
            </p>

            <div className="flex items-center gap-3 pt-8">
              <button
                onClick={prev}
                aria-label="Önceki"
                className="w-12 h-12 rounded-full border border-white/30 hover:border-red-bright text-white hover:text-red-bright transition flex items-center justify-center"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Sonraki"
                className="w-12 h-12 rounded-full border border-white/30 hover:border-red-bright text-white hover:text-red-bright transition flex items-center justify-center"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT — gri gölgeli panel + sphere panelin ARKASINDA + ortalı kart fotoğrafı + sağda peek */}
          <div className="md:col-span-7 relative flex items-stretch justify-end gap-3">
            {/* Panel wrapper — sphere'i panel'in arkasında konumlandırmak için */}
            <div className="relative w-full max-w-[340px] md:max-w-[360px]">
              {/* Sphere — panel'in ARKASINDA, sol-üst köşesinden taşıyor (sadece taşan kısmı görünür) */}
              <div
                className="absolute -top-6 md:-top-8 -left-2 md:-left-4 w-[110px] h-[110px] md:w-[135px] md:h-[135px] rounded-full z-0"
                style={{
                  background:
                    "radial-gradient(circle at 32% 30%, #c44545 0%, #9c1e1e 40%, #6e0a0a 75%, #3a0202 100%)",
                  boxShadow:
                    "0 0 40px rgba(155,30,30,0.35), inset -10px -10px 40px rgba(0,0,0,0.55), inset 10px 10px 30px rgba(255,255,255,0.05)",
                }}
              />

              {/* Gri gölgeli panel — sphere'in üstünde (z-10) */}
              <div
                className="relative z-10 rounded-2xl pt-8 md:pt-10 px-5 md:px-6 pb-8 md:pb-10 min-h-[560px] md:min-h-[600px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(140,140,140,0.28) 0%, rgba(90,90,90,0.32) 50%, rgba(60,60,60,0.35) 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -30px 60px rgba(0,0,0,0.30), 0 20px 50px rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* 01 + başlık — panel içinde sola yaslı (sphere panelin arkasında olduğundan çakışma yok) */}
                <div className="flex items-center mb-8 md:mb-10">
                  <span className="font-anybody-bold italic text-white text-[3rem] md:text-[3.75rem] leading-[0.85] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] mr-3">
                    {current.n}
                  </span>
                  <h4 className="font-anybody italic text-white text-lg md:text-xl lg:text-2xl leading-[1.05]">
                    {current.label.split(" ").map((w, i) => (
                      <span key={i} className="block">{w}</span>
                    ))}
                  </h4>
                </div>

              {/* Kart fotoğrafı — daha ince uzun (3:4 portrait) */}
              <div className="relative w-full max-w-[220px] md:max-w-[240px] aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-black mx-auto">
                {current.cardVideo ? (
                  <video
                    key={current.cardVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={m[current.cardVideo]} type="video/mp4" />
                  </video>
                ) : current.cardImage && m[current.cardImage] ? (
                  <Image
                    src={m[current.cardImage]}
                    alt={current.label}
                    fill
                    className="object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              </div>
            </div>

            {/* Sonraki kart peek — panelin dışında sağda dikey ince şerit */}
            <div
              className="hidden md:block relative w-16 rounded-2xl overflow-hidden border border-white/10 opacity-40 self-stretch"
              style={{
                background:
                  "linear-gradient(180deg, rgba(140,140,140,0.28) 0%, rgba(60,60,60,0.35) 100%)",
              }}
            >
              {nextSlide.cardVideo ? (
                <video
                  key={`peek-${nextSlide.cardVideo}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                  <source src={m[nextSlide.cardVideo]} type="video/mp4" />
                </video>
              ) : nextSlide.cardImage && m[nextSlide.cardImage] ? (
                <Image
                  src={m[nextSlide.cardImage]}
                  alt=""
                  fill
                  className="object-cover opacity-60"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
