"use client";

import { useEffect, useRef } from "react";
import media from "@/media.json";

const m = media as Record<string, string>;

export default function KartonVideoBand() {
  const ref = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (ref.current) ref.current.playbackRate = 3;
  }, []);
  return (
    <div className="flex justify-center">
      <video
        ref={ref}
        autoPlay
        loop
        muted
        playsInline
        className="bg-black rounded-[0_40px_0_40px] w-[80%] h-auto"
      >
        <source src={m["karton_videolar.mp4"]} type="video/mp4" />
      </video>
    </div>
  );
}
