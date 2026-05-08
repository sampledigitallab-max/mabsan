"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLangFromPath } from "@/lib/i18n";

const WORDS_BY_LANG = {
  tr: ["Kalite", "Güven", "Tasarım", "İnovasyon"],
  en: ["Quality", "Trust", "Design", "Innovation"],
} as const;

export default function RotatingHero() {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const words = WORDS_BY_LANG[lang];

  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % words.length);
        setVisible(true);
      }, 600);
    }, 2800);
    return () => clearInterval(cycle);
  }, [words.length]);

  return (
    <span
      className={`font-anybody-bold inline-block min-w-[5ch] ${visible ? "fade-in" : "fade-out"}`}
      style={{ color: "#FF0000" }}
    >
      {words[idx]}
    </span>
  );
}
