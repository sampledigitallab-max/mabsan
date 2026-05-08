import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import RotatingHero from "@/components/RotatingHero";
import ExpandingSectorCards from "@/components/ExpandingSectorCards";
import ProductionSlider from "@/components/ProductionSlider";
import StackedYearTimeline from "@/components/StackedYearTimeline";
import media from "@/media.json";

const m = media as Record<string, string>;

export default function HomePage() {
  return (
    <>
      {/* HERO — beyaz kutu (mabsan1080low) + "Bu Kutunun İçinde [dönen] var" + 36 YILLIK TECRÜBE */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-black">
        {/* Center rotating box video */}
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
        {/* Subtle vignette so corner text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />

        <div className="relative z-10 h-full flex flex-col justify-end container-x pb-10 md:pb-14">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            {/* Sol-alt: Bu Kutunun İçinde + dönen kelime + var */}
            <Reveal>
              <div>
                <p className="bukutu-line text-white text-2xl md:text-4xl mb-1">
                  Bu Kutunun İçinde
                </p>
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl leading-[1.0] font-anybody-bold italic flex items-center gap-3 flex-wrap">
                  <RotatingHero /> <span className="text-white">var</span>
                </h1>
              </div>
            </Reveal>

            {/* Sağ-alt: 36 YILLIK / TECRÜBE */}
            <Reveal delay={0.3}>
              <div className="flex items-end gap-3 self-start md:self-end">
                <span className="font-anybody-bold italic text-white text-6xl md:text-[6rem] leading-[0.85]">
                  36
                </span>
                <div className="flex flex-col text-white text-xs md:text-base uppercase tracking-[0.18em] pb-1.5 leading-snug font-display">
                  <span>YILLIK</span>
                  <span className="font-anybody-bold italic">TECRÜBE</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BLACK BAND */}
      <div className="black-band w-full" />

      {/* KAPASİTE / SEKTÖR ŞERİDİ */}
      <section className="bg-black py-2 overflow-hidden">
        <div className="kapasite-band mx-auto" style={{ width: "105%", marginLeft: "-2.5%" }}>
          <div className="flex items-center justify-around h-[75px] text-white text-sm md:text-base font-display tracking-widest uppercase px-6 overflow-x-auto">
            <span className="whitespace-nowrap">Oluklu Mukavva</span>
            <span className="text-white/50 hidden md:inline">·</span>
            <span className="whitespace-nowrap">Ofset</span>
            <span className="text-white/50 hidden md:inline">·</span>
            <span className="hidden md:inline whitespace-nowrap">Hassas Kesim</span>
            <span className="hidden md:inline text-white/50">·</span>
            <span className="whitespace-nowrap">FEFCO Standart</span>
            <span className="text-white/50 hidden md:inline">·</span>
            <span className="hidden md:inline whitespace-nowrap">İhracat</span>
            <span className="hidden md:inline text-white/50">·</span>
            <span className="whitespace-nowrap">Sürdürülebilir</span>
          </div>
        </div>
      </section>

      {/* SECTORS — yana açılan kartlar (orijinal sektor_button hover pattern'i) */}
      <section className="py-24 md:py-32 bg-black border-t border-red-deep/20">
        <div className="container-x">
          <div className="section-baslik mb-12 inline-block">
            <h2 className="text-2xl md:text-4xl">DİĞER SEKTÖRLER</h2>
          </div>
          <Reveal>
            <p className="text-white/60 max-w-2xl text-lg mb-12">
              Hangi sektördesiniz? E-ticaretten otomotive, gıdadan kozmetiğe — kartın üzerine gelin, sektörünüzün hikayesini izleyin.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <ExpandingSectorCards />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12">
              <Link href="/urunler" className="inline-flex items-center gap-2 text-red-bright font-display text-sm tracking-widest uppercase border-b border-red-bright/40 hover:border-red-bright pb-1 hover:gap-3 transition-all">
                Tüm Ürünleri Gör <ChevronRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEĞERLİ ÜRETİM — orijinal slider (sol metin + orta kırmızı disk + sağ kart) */}
      <section className="py-24 md:py-32 bg-black border-t border-red-deep/20">
        <div className="container-x">
          <Reveal>
            <p className="text-red-bright text-sm font-display tracking-[0.3em] uppercase mb-3">
              Değerli Üretim
            </p>
            <h2 className="font-anybody-bold italic text-3xl md:text-5xl text-white max-w-3xl text-balance leading-[1.05] mb-10">
              Döngüsel üretim sürecimiz.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <ProductionSlider />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <Link href="/uretim" className="btn-mabsan inline-flex items-center gap-2 px-8 py-4">
                Üretim Sürecinin Tamamı <ChevronRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. KISIM — Stacked yıl tipografisi timeline */}
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
