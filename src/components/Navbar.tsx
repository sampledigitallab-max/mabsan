"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import media from "@/media.json";
import { sectors } from "@/data/sectors";
import {
  getLangFromPath,
  getCounterpartPath,
  sectorTr2En,
  type Lang,
} from "@/lib/i18n";

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const navByLang: Record<Lang, NavItem[]> = {
  tr: [
    { href: "/kurumsal", label: "Kurumsal" },
    { href: "/uretim", label: "Üretim" },
    {
      href: "/urunler",
      label: "Ürünler",
      children: sectors.map((s) => ({
        href: `/urunler/${s.slug}`,
        label: s.shortTitle,
      })),
    },
    { href: "/kariyer", label: "Kariyer" },
    { href: "/blog", label: "Blog" },
    { href: "/iletisim", label: "İletişim" },
  ],
  en: [
    { href: "/en/about", label: "About" },
    { href: "/en/production", label: "Production" },
    {
      href: "/en/products",
      label: "Products",
      children: sectors.map((s) => ({
        href: `/en/products/${sectorTr2En[s.slug] || s.slug}`,
        // shortTitle EN karşılıklarıyla
        label:
          ({
            eticaret: "E-Commerce",
            endustriyel: "Industrial",
            perakende: "Retail",
            kozmetik: "Cosmetics",
            yasmeyvesebze: "Fresh Produce",
            fmcg: "FMCG",
            otomotiv: "Automotive",
            takeaway: "Take-Away",
          } as Record<string, string>)[s.slug] || s.shortTitle,
      })),
    },
    { href: "/en/careers", label: "Careers" },
    { href: "/en/blog", label: "Blog" },
    { href: "/en/contact", label: "Contact" },
  ],
};

export default function Navbar() {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const otherLangPath = getCounterpartPath(pathname);
  const otherLang: Lang = lang === "tr" ? "en" : "tr";

  const homeHref = lang === "tr" ? "/" : "/en";
  const nav = navByLang[lang];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/85 backdrop-blur-md border-b border-red-deep/30" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-24 md:h-28">
        <Link href={homeHref} className="flex items-center gap-2 shrink-0">
          <Image
            src={(media as Record<string, string>)["mabsan.svg"] || "/media/mabsan.e2e0e3493e750a77d740fd309d82850b.svg"}
            alt="Mabsan"
            width={240}
            height={44}
            priority
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-display tracking-wide text-white/80 hover:text-red-bright transition-colors uppercase"
                >
                  {item.label}
                </Link>
              );
            }
            const isOpen = openSubmenu === item.href;
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenSubmenu(item.href)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-sm font-display tracking-wide text-white/80 hover:text-red-bright transition-colors uppercase py-9 md:py-10"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-1 transition-all duration-200 ${
                    isOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="min-w-[260px] bg-black/95 backdrop-blur-md border border-red-deep/40 rounded-2xl py-3 shadow-2xl shadow-red-bright/10">
                    {item.children!.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="flex items-center gap-3 px-5 py-2.5 text-sm text-white/75 hover:text-red-bright hover:bg-red-darker/40 transition group"
                      >
                        <span className="w-1 h-1 rounded-full bg-red-bright/40 group-hover:bg-red-bright transition" />
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Dil switcher (TR | EN) */}
          <Link
            href={otherLangPath}
            aria-label={lang === "tr" ? "Switch to English" : "Türkçeye geç"}
            className="ml-3 px-3 py-1.5 rounded-full border border-white/25 hover:border-red-bright text-xs font-display tracking-[0.2em] uppercase text-white/70 hover:text-red-bright transition"
          >
            {otherLang.toUpperCase()}
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="lg:hidden p-2 text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 border-t border-red-deep/30 max-h-[80vh] overflow-y-auto">
          <nav className="container-x py-6 flex flex-col gap-1">
            {nav.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const expanded = mobileSubmenu === item.href;
              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-display tracking-wide text-white/90 py-3 uppercase"
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <div key={item.href} className="border-b border-red-deep/20 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex-1 text-base font-display tracking-wide text-white/90 py-3 uppercase"
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() =>
                        setMobileSubmenu(expanded ? null : item.href)
                      }
                      aria-label="Alt menü"
                      className="p-3 text-white/70"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {expanded && (
                    <div className="pb-3 pl-4 flex flex-col gap-1">
                      {item.children!.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-white/70 py-2 hover:text-red-bright"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile dil switcher */}
            <Link
              href={otherLangPath}
              onClick={() => setOpen(false)}
              className="mt-4 self-start px-4 py-2 rounded-full border border-white/25 text-sm font-display tracking-[0.2em] uppercase text-white/80"
            >
              {otherLang.toUpperCase()}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
