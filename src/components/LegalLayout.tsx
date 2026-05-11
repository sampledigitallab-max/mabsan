"use client";

import Reveal from "./Reveal";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { getLangFromPath } from "@/lib/i18n";

const dict = {
  tr: { eyebrow: "Yasal" },
  en: { eyebrow: "Legal" },
} as const;

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const t = dict[lang];

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32 bg-black min-h-screen">
      <div className="container-x max-w-3xl">
        <Reveal>
          <p className="text-red-bright font-display text-sm tracking-[0.3em] uppercase mb-4">{t.eyebrow}</p>
          <h1 className="font-anybody-bold italic text-white text-3xl md:text-4xl leading-tight text-balance mb-12">{title}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="max-w-none text-white/80 leading-relaxed space-y-5 [&_h3]:font-anybody-bold [&_h3]:italic [&_h3]:text-2xl [&_h3]:text-red-bright [&_h3]:mt-10 [&_h3]:mb-2 [&_strong]:text-white [&_a]:text-red-bright [&_a:hover]:underline [&_ul]:my-2 [&_li]:my-1">
            {children}
          </div>
        </Reveal>
      </div>
    </article>
  );
}
