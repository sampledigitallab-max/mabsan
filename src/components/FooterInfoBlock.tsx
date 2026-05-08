"use client";

import { Phone, Factory, Leaf } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLangFromPath, type Lang } from "@/lib/i18n";

const dict = {
  tr: {
    contact: "İletişim",
    sustainability: "Sürdürülebilirlik",
    sustainabilityPolicy: "Politikası",
    sustainabilityNote: "Çevre dostu üretim taahhüdümüz",
    address: "Adres",
    addr1: "Büyükbakkalköy, Kaşif Sk.",
    addr2: "No: 15, 34858 Maltepe",
    addr3: "İstanbul / Türkiye",
    sustHref: "/surdurulebilirlik",
  },
  en: {
    contact: "Contact",
    sustainability: "Sustainability",
    sustainabilityPolicy: "Policy",
    sustainabilityNote: "Our commitment to eco-friendly production",
    address: "Address",
    addr1: "Büyükbakkalköy, Kaşif Sk.",
    addr2: "No: 15, 34858 Maltepe",
    addr3: "İstanbul / Türkiye",
    sustHref: "/en/sustainability",
  },
} as const;

export default function FooterInfoBlock() {
  const pathname = usePathname() || "/";
  const lang: Lang = getLangFromPath(pathname);
  const t = dict[lang];

  return (
    <section className="relative bg-black overflow-hidden pb-20 md:pb-28 pt-32 md:pt-40">
      {/* Üst dekor: kırmızı 3D geometrik bloklar */}
      <div className="absolute top-0 left-0 right-0 h-48 md:h-72 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,1) 100%)",
            zIndex: 2,
          }}
        />
        <div className="absolute inset-x-0 top-0 h-full">
          <div
            className="absolute -top-10 -left-10 w-[55%] h-full"
            style={{
              background:
                "linear-gradient(135deg, #ce0d0d 0%, #9c0c02 35%, #4b0101 70%, transparent 100%)",
              clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
              transform: "skewY(-5deg)",
              opacity: 0.85,
            }}
          />
          <div
            className="absolute top-4 left-[28%] w-[40%] h-[80%]"
            style={{
              background:
                "linear-gradient(135deg, #fa0000 0%, #9c0c02 50%, #4b0101 100%)",
              clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0% 100%)",
              transform: "skewY(-7deg)",
              opacity: 0.9,
              boxShadow: "0 10px 60px rgba(250,0,0,0.4)",
            }}
          />
          <div
            className="absolute top-2 right-[15%] w-[35%] h-[75%]"
            style={{
              background:
                "linear-gradient(135deg, #ce0d0d 0%, #4b0101 60%, transparent 100%)",
              clipPath: "polygon(20% 0, 100% 0, 100% 80%, 0% 100%)",
              transform: "skewY(3deg)",
              opacity: 0.7,
            }}
          />
          <div
            className="absolute -top-6 left-[8%] w-32 h-32 md:w-44 md:h-44"
            style={{
              background:
                "linear-gradient(135deg, #ff4040 0%, #9c0c02 100%)",
              transform: "rotate(45deg)",
              boxShadow: "0 0 60px rgba(250,0,0,0.6)",
            }}
          />
        </div>
      </div>

      {/* 3'lü info kart bloğu */}
      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {/* İletişim */}
          <div className="rounded-2xl p-8 md:p-10 border border-white/10 bg-black/70 backdrop-blur text-center hover:border-red-bright/40 transition">
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <Phone size={22} strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="font-display text-white text-xl tracking-wider mb-4">
              {t.contact}
            </h3>
            <div className="space-y-1.5 text-white/60 text-sm font-anybody italic">
              <p>+90 (0216) 484 18 00</p>
              <p>
                <a href="mailto:info@mabsan.com" className="hover:text-red-bright transition">
                  info@mabsan.com
                </a>
              </p>
              <p>
                <a href="https://mabsan.com" className="hover:text-red-bright transition">
                  Mabsan.com
                </a>
              </p>
            </div>
          </div>

          {/* Sürdürülebilirlik Politikası */}
          <Link
            href={t.sustHref}
            className="rounded-2xl p-8 md:p-10 text-center border border-red-bright/40 backdrop-blur transition hover:scale-[1.02] hover:border-red-bright relative overflow-hidden block"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(250,0,0,0.15) 0%, rgba(75,1,1,0.5) 50%, rgba(0,0,0,0.85) 100%)",
              boxShadow: "0 0 50px rgba(250,0,0,0.3)",
            }}
          >
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-full bg-red-bright/15 border border-red-bright/30 flex items-center justify-center text-red-bright shadow-[0_0_30px_rgba(250,0,0,0.4)]">
                <Leaf size={26} strokeWidth={1.5} className="text-green-400" />
              </div>
            </div>
            <h3 className="font-display text-white text-xl tracking-wider mb-3">
              {t.sustainability}
            </h3>
            <p className="font-anybody-bold italic text-white text-2xl border-b border-red-bright/40 inline-block pb-1">
              {t.sustainabilityPolicy}
            </p>
            <p className="text-white/50 text-xs mt-4 font-anybody italic">
              {t.sustainabilityNote}
            </p>
          </Link>

          {/* Adres */}
          <div className="rounded-2xl p-8 md:p-10 border border-white/10 bg-black/70 backdrop-blur text-center hover:border-red-bright/40 transition">
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <Factory size={22} strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="font-display text-white text-xl tracking-wider mb-4">
              {t.address}
            </h3>
            <div className="space-y-1 text-white/60 text-sm font-anybody italic leading-relaxed">
              <p>{t.addr1}</p>
              <p>{t.addr2}</p>
              <p>{t.addr3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
