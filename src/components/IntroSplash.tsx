"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { usePathname } from "next/navigation";
import { getLangFromPath } from "@/lib/i18n";

const STORAGE_KEY = "mabsan_intro_seen";

const dict = {
  tr: { skip: "Atla →", muteOn: "Sesi aç", muteOff: "Sesi kapat", brand: "Mabsan · 1988 — Bugün" },
  en: { skip: "Skip →", muteOn: "Unmute", muteOff: "Mute", brand: "Mabsan · 1988 — Today" },
} as const;

export default function IntroSplash() {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const t = dict[lang];
  const [show, setShow] = useState(false);
  const [hiding, setHiding] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Show on mount unless already seen this session
  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (!seen) {
      setShow(true);
      // Block body scroll while playing
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const close = () => {
    setHiding(true);
    document.body.style.overflow = "";
    sessionStorage.setItem(STORAGE_KEY, "1");
    setTimeout(() => setShow(false), 600);
  };

  const toggleSound = () => {
    setMuted((m) => {
      const next = !m;
      if (videoRef.current) videoRef.current.muted = next;
      return next;
    });
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black transition-opacity duration-600 ${
        hiding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      onContextMenu={(e) => e.preventDefault()}
    >
      <video
        ref={videoRef}
        autoPlay
        muted={muted}
        playsInline
        onEnded={close}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/MabsanYeniLQ_sesliSon.mp4" type="video/mp4" />
      </video>

      {/* Overlay controls */}
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <button
          onClick={toggleSound}
          aria-label={muted ? t.muteOn : t.muteOff}
          className="w-11 h-11 rounded-full border-2 border-white/40 hover:border-white text-white bg-black/40 backdrop-blur transition flex items-center justify-center"
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
        <button
          onClick={close}
          className="px-6 py-2.5 rounded-full border-2 border-white/40 hover:border-red-bright hover:text-red-bright text-white text-sm font-display tracking-widest uppercase bg-black/40 backdrop-blur transition"
        >
          {t.skip}
        </button>
      </div>

      {/* Bottom-left brand stamp */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-3 text-white/80">
        <span className="w-2 h-2 rounded-full bg-red-bright shadow-[0_0_10px_rgba(250,0,0,0.8)]" />
        <span className="text-xs font-display tracking-[0.3em] uppercase">
          {t.brand}
        </span>
      </div>
    </div>
  );
}
