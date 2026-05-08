"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import media from "@/media.json";
import { getLangFromPath } from "@/lib/i18n";

const m = media as Record<string, string>;

type Sector = {
  key: string;
  trName: string;
  enName: string;
  video: string;
  iconLight: string;
  iconRed: string;
  trHref: string;
  enHref: string;
};

const sectors: Sector[] = [
  { key: "eticaret",    trName: "E-Ticaret",       enName: "E-Commerce",     video: "eticaret.mp4",      iconLight: "e_ticaret_b.svg",  iconRed: "e_ticaret.svg",  trHref: "/urunler#eticaret",    enHref: "/en/products#e-commerce" },
  { key: "endustriyel", trName: "Endüstriyel",     enName: "Industrial",     video: "endustriyel.mp4",   iconLight: "endustriyel_b.svg", iconRed: "endustriyel.svg", trHref: "/urunler#endustriyel", enHref: "/en/products#industrial" },
  { key: "perakende",   trName: "Perakende",       enName: "Retail",         video: "perakende.mp4",     iconLight: "perakende_b.svg",  iconRed: "perakende.svg",  trHref: "/urunler#perakende",   enHref: "/en/products#retail" },
  { key: "kozmetik",    trName: "Kozmetik",        enName: "Cosmetics",      video: "kozmetik.mp4",      iconLight: "kozmetik_b.svg",   iconRed: "kozmetik.svg",   trHref: "/urunler#kozmetik",    enHref: "/en/products#cosmetics" },
  { key: "yasmeyve",    trName: "Yaş Meyve Sebze", enName: "Fresh Produce",  video: "yasmeyvesebze.mp4", iconLight: "ilac_b.svg",       iconRed: "ilac.svg",       trHref: "/urunler#yasmeyve",    enHref: "/en/products#fresh-produce" },
  { key: "fmcg",        trName: "FMCG",            enName: "FMCG",           video: "FMCG.mp4",          iconLight: "ilac_b.svg",       iconRed: "ilac.svg",       trHref: "/urunler#fmcg",        enHref: "/en/products#fmcg" },
  { key: "otomotiv",    trName: "Otomotiv",        enName: "Automotive",     video: "otomotiv.mp4",      iconLight: "otomotiv_b.svg",   iconRed: "otomotiv.svg",   trHref: "/urunler#otomotiv",    enHref: "/en/products#automotive" },
  { key: "takeaway",    trName: "Take-Away",       enName: "Take-Away",      video: "takeaway.mp4",      iconLight: "kozmetik_b.svg",   iconRed: "kozmetik.svg",   trHref: "/urunler#takeaway",    enHref: "/en/products#take-away" },
];

const dict = {
  tr: { header: "Her sektörün ihtiyacını biliyoruz", detail: "Detay →" },
  en: { header: "We know every industry's needs", detail: "Detail →" },
} as const;

export default function ExpandingSectorCards() {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const t = dict[lang];
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="redline bg-black/30 p-4 md:p-5">
      {/* Header line — orijinal: ● yazı ──── ● */}
      <div className="flex items-center gap-3 mb-5 px-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-bright shadow-[0_0_10px_rgba(250,0,0,0.7)]" />
        <span className="font-anybody-bold italic text-white text-base md:text-lg whitespace-nowrap">
          {t.header}
        </span>
        <span className="flex-1 h-px bg-white/30" />
        <span className="w-3 h-3 rounded-full bg-red-bright shadow-[0_0_12px_rgba(250,0,0,0.8)]" />
      </div>

      {/* Cards row — uniform genişlik, ortalı, dar gap */}
      <div className="flex gap-1 justify-center overflow-x-auto md:overflow-visible">
        {sectors.map((s, i) => {
          const isOpen = hovered === s.key;
          const sectorName = lang === "en" ? s.enName : s.trName;
          const sectorHref = lang === "en" ? s.enHref : s.trHref;
          return (
            <Link
              key={s.key}
              href={sectorHref}
              onMouseEnter={() => setHovered(s.key)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(s.key)}
              onBlur={() => setHovered(null)}
              className="group relative overflow-hidden rounded-[20px_0_20px_0] cursor-pointer block flex-shrink-0"
              style={{
                width: isOpen ? 230 : 130,
                height: 360,
                transition: "width 0.45s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
              }}
            >
              {/* Default state: parlak gri (chrome) altta + Rectangle.svg gri efekt üstte */}
              {!isOpen && (
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #c0c0c0 0%, #e8e8e8 20%, #ffffff 50%, #e8e8e8 80%, #b8b8b8 100%)",
                  }}
                >
                  {m["Rectangle.svg"] && (
                    <Image
                      src={m["Rectangle.svg"]}
                      alt=""
                      fill
                      sizes="200px"
                      className="object-cover mix-blend-multiply opacity-90"
                    />
                  )}

                  {/* Number top-left — kırmızı altıgen + italic 01 */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span
                      aria-hidden
                      className="block w-2.5 h-2.5 bg-red-bright shadow-[0_0_8px_rgba(250,0,0,0.7)]"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}
                    />
                    <span className="font-anybody-bold italic text-black/85 text-xs tracking-wider">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Bottom: dikey isim + ikon */}
                  <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-3">
                    <div className="w-7 h-7 opacity-70">
                      {m[s.iconLight] && (
                        <Image
                          src={m[s.iconLight]}
                          alt=""
                          width={28}
                          height={28}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                    <div
                      className="font-anybody-bold italic text-black/85 text-[13px] tracking-wider whitespace-nowrap"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                        transformOrigin: "center",
                      }}
                    >
                      {sectorName}
                    </div>
                  </div>
                </div>
              )}

              {/* Hover state: black + video */}
              {isOpen && (
                <div className="absolute inset-0 bg-black">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-55"
                  >
                    <source src={m[s.video]} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />

                  <div className="absolute inset-0 flex flex-col justify-between p-4 z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-bright" />
                      <span className="text-red-bright text-[10px] font-display tracking-wider">
                        0{i + 1}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      {m[s.iconRed] && (
                        <Image
                          src={m[s.iconRed]}
                          alt=""
                          width={28}
                          height={28}
                          className="w-7 h-7 object-contain"
                        />
                      )}
                      <h3 className="text-white font-anybody-bold italic text-2xl leading-tight">
                        {sectorName}
                      </h3>
                      <div className="h-px w-10 bg-red-bright" />
                      <p className="text-white/70 text-[10px] uppercase tracking-widest font-display">
                        {t.detail}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
