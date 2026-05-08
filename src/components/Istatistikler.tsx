"use client";

import { usePathname } from "next/navigation";
import { getLangFromPath } from "@/lib/i18n";

const statsByLang = {
  tr: [
    { label: "Tesis Kapasitesi", value: "36.000 Ton" },
    { label: "Fabrika Yüzölçümü", value: "7.000 m2" },
    { label: "İhracat", value: "10 Ülke" },
    { label: "Çalışan Sayısı", value: "110" },
  ],
  en: [
    { label: "Plant Capacity", value: "36,000 Tons" },
    { label: "Factory Area", value: "7,000 m²" },
    { label: "Exports", value: "10 Countries" },
    { label: "Employees", value: "110" },
  ],
};

export default function Istatistikler() {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const stats = statsByLang[lang];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center text-center gap-3">
          <span className="text-white text-base md:text-xl font-anybody-bold italic leading-tight">
            {s.label}
          </span>
          <div
            className="kapasite-band w-full max-w-[180px] flex items-center justify-center"
            style={{
              minHeight: 60,
              padding: "12px 24px",
              borderRadius: "40px 0 40px 0",
              background: "var(--red-darker)",
              border: "2px solid #000",
              boxShadow: "0 4px 16px rgba(75,1,1,0.5)",
            }}
          >
            <span className="font-display text-white text-base md:text-lg whitespace-nowrap">
              {s.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
