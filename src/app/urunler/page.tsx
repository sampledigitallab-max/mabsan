import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import PageIntro from "@/components/PageIntro";
import media from "@/media.json";
import { sectors } from "@/data/sectors";

const m = media as Record<string, string>;

export const metadata: Metadata = {
  title: "Ürünlerimiz — 8 Sektöre Özel Oluklu Mukavva Çözümleri",
  description:
    "E-ticaret, endüstriyel, perakende, kozmetik, yaş meyve-sebze, FMCG, otomotiv ve take-away sektörlerine özel oluklu mukavva ve özel kutu çözümleri.",
  alternates: { canonical: "/urunler" },
};

export default function UrunlerPage() {
  return (
    <>
      <PageHero title="Ürünler" />
      <PageIntro
        title="Her sektöre özel ambalaj çözümleri."
        description="E-ticaretten otomotive, kozmetikten gıdaya, 8 ana sektörde markalara özel olarak geliştirdiğimiz oluklu mukavva ve ofset çözümlerimiz."
      />

      {/* KATEGORİLER */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container-x space-y-24 md:space-y-32">
          {sectors.map((cat, i) => {
            const reverse = i % 2 === 1;
            return (
              <div id={cat.slug} key={cat.slug}>
                <Reveal>
                  <div className={`grid md:grid-cols-12 gap-8 items-center ${reverse ? "md:[direction:rtl]" : ""}`}>
                    <div className={`md:col-span-7 ${reverse ? "md:[direction:ltr]" : ""}`}>
                      <Link
                        href={`/urunler/${cat.slug}`}
                        className="block group relative aspect-[16/10] rounded-2xl overflow-hidden border border-red-deep/30 hover:border-red-bright/60 transition"
                      >
                        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                          <source src={m[cat.video]} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-5 right-5 inline-flex items-center gap-2 bg-black/70 backdrop-blur-sm border border-red-bright/40 px-4 py-2 rounded-full text-white text-xs font-display tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition">
                          Detay
                          <span aria-hidden>→</span>
                        </div>
                      </Link>
                    </div>
                    <div className={`md:col-span-5 ${reverse ? "md:[direction:ltr]" : ""}`}>
                      <div className="timeline-year-display text-[64px] md:text-[140px] leading-none mb-2">
                        0{i + 1}
                      </div>
                      <h3 className="font-anybody-bold italic text-3xl md:text-4xl text-white mb-5 text-balance">
                        {cat.header}
                      </h3>
                      <p className="text-white/60 leading-relaxed mb-6">{cat.info}</p>
                      <Link
                        href={`/urunler/${cat.slug}`}
                        className="inline-flex items-center gap-2 text-red-bright hover:text-white transition font-display tracking-[0.2em] uppercase text-xs"
                      >
                        Sektör Detayı
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* DİĞER SEKTÖRLER — galeri */}
      <section className="py-24 md:py-32 bg-red-darker">
        <div className="container-x">
          <Reveal>
            <p className="text-red-bright text-sm font-display tracking-[0.3em] uppercase mb-5">Sektörler</p>
            <h2 className="font-anybody-bold italic text-3xl md:text-4xl text-white max-w-3xl mb-16 text-balance leading-[1.05]">
              Sektörünüz için ürettiğimiz çözümler.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {sectors.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/urunler/${s.slug}`}
                  className="group relative aspect-[3/4] overflow-hidden rounded-[20px_0_20px_0] bg-black border border-red-bright/20 hover:border-red-bright/60 transition block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m[s.photo]}
                    alt={s.shortTitle}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-anybody-bold italic text-white text-lg md:text-xl leading-tight">
                      {s.shortTitle}
                    </p>
                    <div className="h-px w-8 bg-red-bright mt-2" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
