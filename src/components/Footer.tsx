"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Factory, Leaf } from "lucide-react";
import media from "@/media.json";
import { getLangFromPath, type Lang } from "@/lib/i18n";

const m = media as Record<string, string>;

const socials = [
  { key: "face.svg", label: "Facebook", href: "#" },
  { key: "insta.svg", label: "Instagram", href: "#" },
  { key: "twitter.svg", label: "X", href: "#" },
  { key: "linkedin.svg", label: "LinkedIn", href: "#" },
  { key: "youtube.svg", label: "YouTube", href: "#" },
];

const dict = {
  tr: {
    contact: "İletişim",
    sustainability: "Sürdürülebilirlik",
    sustainabilityPolicy: "Politikası",
    detail: "Detay",
    address: "Adres",
    addr1: "Büyükbakkalköy, Kaşif Sk.",
    addr2: "No: 15, 34858 Maltepe",
    addr3: "İstanbul / Türkiye",
    social: "Sosyal",
    rights: "Tüm Hakları Saklıdır.",
    waLabel: "WhatsApp ile iletişime geç",
    cols: [
      {
        title: "Kurumsal",
        links: [
          { label: "Yönetim Ekibi", href: "/kurumsal#yonetim" },
          { label: "Hakkımızda", href: "/kurumsal" },
          { label: "Misyon", href: "/kurumsal#misyon" },
          { label: "Vizyon", href: "/kurumsal#vizyon" },
        ],
      },
      {
        title: "Sayfalar",
        links: [
          { label: "Kurumsal", href: "/kurumsal" },
          { label: "Üretim", href: "/uretim" },
          { label: "Kariyer", href: "/kariyer" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        title: "Politikalar",
        links: [
          { label: "Yasal Bildirim", href: "/yasal-bildirim" },
          { label: "Gizlilik Politikası", href: "/gizlilik" },
          { label: "Çerez Politikası", href: "/cerez-politikasi" },
          { label: "Hizmet ve Şartlar", href: "/hizmetler-ve-sartlar" },
        ],
      },
    ],
    sustHref: "/surdurulebilirlik",
  },
  en: {
    contact: "Contact",
    sustainability: "Sustainability",
    sustainabilityPolicy: "Policy",
    detail: "Details",
    address: "Address",
    addr1: "Büyükbakkalköy, Kaşif Sk.",
    addr2: "No: 15, 34858 Maltepe",
    addr3: "İstanbul / Türkiye",
    social: "Social",
    rights: "All Rights Reserved.",
    waLabel: "Contact us on WhatsApp",
    cols: [
      {
        title: "Company",
        links: [
          { label: "Management Team", href: "/en/about#yonetim" },
          { label: "About Us", href: "/en/about" },
          { label: "Mission", href: "/en/about#misyon" },
          { label: "Vision", href: "/en/about#vizyon" },
        ],
      },
      {
        title: "Pages",
        links: [
          { label: "About", href: "/en/about" },
          { label: "Production", href: "/en/production" },
          { label: "Careers", href: "/en/careers" },
          { label: "Blog", href: "/en/blog" },
        ],
      },
      {
        title: "Policies",
        links: [
          { label: "Legal Notice", href: "/en/legal" },
          { label: "Privacy Policy", href: "/en/privacy" },
          { label: "Cookie Policy", href: "/en/cookie-policy" },
          { label: "Terms of Service", href: "/en/terms" },
        ],
      },
    ],
    sustHref: "/en/sustainability",
  },
} as const;

export default function Footer() {
  const pathname = usePathname() || "/";
  const lang: Lang = getLangFromPath(pathname);
  const t = dict[lang];

  return (
    <footer className="relative bg-black text-white/70 pt-16 md:pt-24 pb-8 border-t border-red-deep/40">
      {/* 3'lü info kart bloğu */}
      <div className="container-x mb-16 md:mb-20">
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
              <p>
                <a href="tel:+902164841800" className="hover:text-red-bright transition">
                  +90 (0216) 484 18 00
                </a>
              </p>
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
            className="rounded-2xl p-8 md:p-10 text-center border border-red-bright/40 backdrop-blur transition hover:scale-[1.02] hover:border-red-bright relative overflow-hidden block group"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(250,0,0,0.15) 0%, rgba(75,1,1,0.5) 50%, rgba(0,0,0,0.85) 100%)",
              boxShadow: "0 0 50px rgba(250,0,0,0.3)",
            }}
          >
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-full bg-red-bright/15 border border-red-bright/30 flex items-center justify-center shadow-[0_0_30px_rgba(250,0,0,0.4)]">
                <Leaf size={26} strokeWidth={1.5} className="text-green-400" />
              </div>
            </div>
            <h3 className="font-anybody-bold italic text-white text-xl mb-1">
              {t.sustainability}
            </h3>
            <p className="font-anybody-bold italic text-white text-2xl border-b border-red-bright/40 inline-block pb-1">
              {t.sustainabilityPolicy}
            </p>
            <span className="block mt-5 mx-auto w-fit text-xs font-display tracking-[0.25em] uppercase text-white/80 bg-black/60 border border-white/15 group-hover:border-red-bright/60 px-5 py-2 rounded-full transition">
              {t.detail}
            </span>
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
            <address className="not-italic space-y-1 text-white/60 text-sm font-anybody italic leading-relaxed">
              <p>{t.addr1}</p>
              <p>{t.addr2}</p>
              <p>{t.addr3}</p>
            </address>
          </div>
        </div>
      </div>

      {/* Alt 4 sütun: Sosyal + 3 link sütunu */}
      <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 pb-8">
        {/* Sosyal + Logo */}
        <div className="col-span-2 md:col-span-1 space-y-5">
          <h4 className="font-anybody-bold italic text-white text-2xl">{t.social}</h4>
          <Image
            src={m["mabsan_logo_wr.png"] || "/media/mabsan_logo_wr.11f0158feac787aa6c72.png"}
            alt="Mabsan"
            width={140}
            height={40}
            className="h-9 w-auto brightness-0 invert"
          />
          <div className="flex items-center gap-2.5">
            {socials.map(
              (s) =>
                m[s.key] && (
                  <a
                    key={s.key}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-red-bright/30 border border-white/10 hover:border-red-bright/50 flex items-center justify-center transition"
                  >
                    <Image
                      src={m[s.key]}
                      alt=""
                      width={16}
                      height={16}
                      className="brightness-0 invert"
                    />
                  </a>
                )
            )}
          </div>
          <p className="text-[11px] text-white/35 leading-relaxed pt-2">
            Copyright © {new Date().getFullYear()} – Mabsan
            <br />
            {t.rights}
          </p>
        </div>

        {/* 3 link sütunu */}
        {t.cols.map((col) => (
          <div key={col.title}>
            <h4 className="font-anybody-bold italic text-white text-xl mb-5">
              {col.title}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/55 hover:text-red-bright transition inline-flex items-center"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/902164841800"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.waLabel}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1faa54] shadow-lg shadow-black/40 flex items-center justify-center transition hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.357.566-1 3.65 3.622-.95zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
        </svg>
      </a>
    </footer>
  );
}
