"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { usePathname } from "next/navigation";
import media from "@/media.json";
import { getLangFromPath } from "@/lib/i18n";

const m = media as Record<string, string>;

const dict = {
  tr: { play: "Mabsan Tanıtım Filmini oynat", close: "Kapat", title: "Mabsan Tanıtım Filmi" },
  en: { play: "Play the Mabsan promotional film", close: "Close", title: "Mabsan Promotional Film" },
} as const;

export default function TanitimFilmi() {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const t = dict[lang];
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.play().catch(() => {});
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (videoRef.current) videoRef.current.pause();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Find Mabsan logo (mabsan.svg or mabsan_logo)
  const logo = m["mabsan.svg"] || m["mabsan_logo_wr.png"];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative w-full aspect-video bg-black overflow-hidden block"
        aria-label={t.play}
      >
        {/* Background red logo */}
        {logo && (
          <Image
            src={logo}
            alt=""
            fill
            className="object-contain p-[15%] opacity-90"
          />
        )}

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/15 border-2 border-white/30 backdrop-blur flex items-center justify-center group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
            <Play size={36} className="text-white ml-1.5" fill="currentColor" strokeWidth={0} />
          </div>
        </div>

        {/* Label */}
        <div className="absolute inset-x-0 top-1/2 mt-16 md:mt-24 flex justify-center pointer-events-none">
          <span className="font-anybody-bold italic text-white text-3xl md:text-5xl tracking-tight drop-shadow-2xl">
            {t.title}
          </span>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label={t.close}
            className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-white/40 hover:border-red-bright text-white hover:text-red-bright transition flex items-center justify-center bg-black/50"
          >
            <X size={22} />
          </button>
          <div className="w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <video
              ref={videoRef}
              autoPlay
              controls
              playsInline
              className="w-full h-full object-contain"
            >
              <source src="/video/MabsanYeniLQ_sesliSon.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}
