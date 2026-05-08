import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import RotatingHero from "@/components/RotatingHero";
import ExpandingSectorCards from "@/components/ExpandingSectorCards";
import ProductionSlider from "@/components/ProductionSlider";
import StackedYearTimeline from "@/components/StackedYearTimeline";
import media from "@/media.json";

const m = media as Record<string, string>;

export const metadata: Metadata = {
  title: "Mabsan — Corrugated Packaging Solutions",
  description:
    "36 years of experience in corrugated cardboard, offset and custom packaging. Industry-specific solutions from e-commerce to automotive.",
  alternates: { canonical: "/en", languages: { tr: "/", en: "/en" } },
};

export default function HomePageEN() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={m["mabsan1080low.mp4"]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />

        <div className="relative z-10 h-full flex flex-col justify-end container-x pb-10 md:pb-14">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <Reveal>
              <div>
                <p className="bukutu-line text-white text-2xl md:text-4xl mb-1">
                  Inside This Box Lives
                </p>
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl leading-[1.0] font-anybody-bold italic flex items-center gap-3 flex-wrap">
                  <RotatingHero />
                </h1>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex items-end gap-3 self-start md:self-end">
                <span className="font-anybody-bold italic text-white text-6xl md:text-[6rem] leading-[0.85]">
                  36
                </span>
                <div className="flex flex-col text-white text-xs md:text-base uppercase tracking-[0.18em] pb-1.5 leading-snug font-display">
                  <span>YEARS OF</span>
                  <span className="font-anybody-bold italic">EXPERIENCE</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BLACK BAND */}
      <div className="black-band w-full" />

      {/* CAPACITY BAND */}
      <section className="bg-black py-2 overflow-hidden">
        <div className="kapasite-band mx-auto" style={{ width: "105%", marginLeft: "-2.5%" }}>
          <div className="flex items-center justify-around h-[75px] text-white text-sm md:text-base font-display tracking-widest uppercase px-6 overflow-x-auto">
            <span className="whitespace-nowrap">Corrugated</span>
            <span className="text-white/50 hidden md:inline">·</span>
            <span className="whitespace-nowrap">Offset</span>
            <span className="text-white/50 hidden md:inline">·</span>
            <span className="hidden md:inline whitespace-nowrap">Precision Die-Cut</span>
            <span className="hidden md:inline text-white/50">·</span>
            <span className="whitespace-nowrap">FEFCO Standard</span>
            <span className="text-white/50 hidden md:inline">·</span>
            <span className="hidden md:inline whitespace-nowrap">Export</span>
            <span className="hidden md:inline text-white/50">·</span>
            <span className="whitespace-nowrap">Sustainable</span>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-24 md:py-32 bg-black border-t border-red-deep/20">
        <div className="container-x">
          <div className="section-baslik mb-12 inline-block">
            <h2 className="text-2xl md:text-4xl">INDUSTRIES WE SERVE</h2>
          </div>
          <Reveal>
            <p className="text-white/60 max-w-2xl text-lg mb-12">
              Which industry are you in? From e-commerce to automotive, food to cosmetics — hover over a card to see your industry's story.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <ExpandingSectorCards />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12">
              <Link
                href="/en/products"
                className="inline-flex items-center gap-2 text-red-bright font-display text-sm tracking-widest uppercase border-b border-red-bright/40 hover:border-red-bright pb-1 hover:gap-3 transition-all"
              >
                View All Products <ChevronRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUABLE PRODUCTION */}
      <section className="py-24 md:py-32 bg-black border-t border-red-deep/20">
        <div className="container-x">
          <Reveal>
            <p className="text-red-bright text-sm font-display tracking-[0.3em] uppercase mb-3">
              Valuable Production
            </p>
            <h2 className="font-anybody-bold italic text-3xl md:text-5xl text-white max-w-3xl text-balance leading-[1.05] mb-10">
              Our circular production process.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <ProductionSlider />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <Link href="/en/production" className="btn-mabsan inline-flex items-center gap-2 px-8 py-4">
                Full Production Process <ChevronRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 md:py-32 bg-black border-t border-red-deep/20 overflow-hidden">
        <div className="container-x">
          <Reveal>
            <StackedYearTimeline />
          </Reveal>
        </div>
      </section>

    </>
  );
}
