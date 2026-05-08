import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import PageIntro from "@/components/PageIntro";
import TanitimFilmi from "@/components/TanitimFilmi";
import SectionDivider from "@/components/SectionDivider";
import Istatistikler from "@/components/Istatistikler";
import UretimDongusu from "@/components/UretimDongusu";
import MakinaParkur from "@/components/MakinaParkur";
import media from "@/media.json";

const m = media as Record<string, string>;

export const metadata: Metadata = {
  title: "Production Process — From Recycling to Custom Solutions",
  description:
    "Mabsan's 4-step production process: recycling, high technology, corrugated board manufacturing and brand-specific solutions. Modern machine lineup and sustainable production.",
  alternates: {
    canonical: "/en/production",
    languages: { tr: "/uretim", en: "/en/production" },
  },
};

const steps = [
  {
    n: "01",
    title: "Recycling",
    hook: "Recycling is our first step toward a sustainable world.",
    desc: "We bring waste paper back to life through an eco-friendly recycling process.",
    image: "uretim_geri_donusum.jpg",
  },
  {
    n: "02",
    title: "High Technology",
    hook: "We trust technology to protect your products.",
    desc: "Recycled materials are turned into strong, durable paper reels using high-tech machinery.",
    image: "uretim_yuksek_teknoloji.png",
  },
  {
    n: "03",
    title: "Corrugated Board",
    hook: "We do what we do best — backed by 36 years of experience.",
    desc: "Paper reels are processed on corrugating lines to form the flute pattern. Flat liners and fluted papers are then combined to produce flat corrugated sheets.",
    image: "uretim_oluklu_mukavva.jpg",
  },
  {
    n: "04",
    title: "Custom Solutions",
    hook: "We design solutions that elevate your brand's reputation.",
    desc: "Through precision die-cutting, printing and special gluing we transform corrugated sheets into finished cases and boxes.",
    image: "uretim_markaya_ozel.jpg",
  },
];

const waves = [
  { letter: "E", name: "E-Flute", desc: "With the smallest flute profile, E-flute is an ideal choice for customers needing thin, lightweight packaging. Frequently preferred for packaging, boxes and cartons." },
  { letter: "B", name: "B-Flute", desc: "With a medium flute profile, B-flute is widely used where durability is required — preferred for packaging electronics, white goods and other industrial products." },
  { letter: "C", name: "C-Flute", desc: "With a larger flute profile, C-flute is used for supermarket goods and industrial or agricultural product packaging. It stands out with its strength and protective qualities." },
  { letter: "A", name: "A-Flute", desc: "With the largest flute profile, A-flute is used especially for heavy and bulky product packaging. Provides high durability." },
];

const papers = [
  { name: "Kraft", desc: "Natural, brown-colored kraft paper has high durability and is the most commonly used paper in corrugated production. Stands out for its strength and resistance to moisture and tearing." },
  { name: "White", desc: "With its smooth, white surface, this paper is preferred where higher print quality is required. Useful for packaging and box designs." },
  { name: "Recycled", desc: "An eco-friendly option, recycled paper saves resources and aligns with our sustainability principles — a raw material we particularly value." },
  { name: "Special-Coated", desc: "Surface-strengthened with special coatings, this paper provides high resistance to moisture, oil and water. Often used in food, pharmaceutical and electronics packaging." },
];

export default function ProductionPageEN() {
  return (
    <>
      <PageHero title="Production" />
      <PageIntro
        title="Valuable production starts with trust."
        description="At Mabsan, the production cycle starts with trust. Drawing on 36 years of experience, we first analyze the needs of each industry and develop the most innovative solutions with our forward-thinking approach."
      />

      {/* PROMOTIONAL FILM */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x">
          <Reveal>
            <SectionDivider label="Promotional Film" dotPosition="right" className="mb-10" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="redline">
              <TanitimFilmi />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUABLE PRODUCTION */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <h2 className="font-anybody-bold italic text-white text-5xl md:text-7xl leading-[0.95] mb-8 text-balance">
              Valuable
              <br />
              Production
            </h2>
            <p className="text-white/65 text-base md:text-lg leading-relaxed font-anybody italic">
              At Mabsan, the production cycle starts with trust. Drawing on 36 years of experience, we first analyze the needs of each industry and develop the most innovative solutions with our forward-thinking approach. Together with our skilled team, we design boxes and cases that keep your products safe and put your brand front and center. Throughout this process we never compromise on quality — because we know our valued customers have trusted us for 36 years for exactly this reason.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] rounded-[40px_0_40px_0] overflow-hidden border border-red-deep/30 redline">
              <Image
                src={m["Makina_Data.png"] || "/media/Makina_Data.1738ffa7f81e427fd964.png"}
                alt="Mabsan production"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTION CYCLE — Venn diagram */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        <div className="container-x">
          <Reveal>
            <SectionDivider label="Production Cycle" dotPosition="right" className="mb-16" />
          </Reveal>
          <Reveal delay={0.1}>
            <UretimDongusu />
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x">
          <Reveal>
            <Istatistikler />
          </Reveal>
        </div>
      </section>

      {/* MACHINE LINEUP */}
      <section className="py-20 md:py-28 bg-black border-t border-red-deep/20">
        <div className="container-x">
          <Reveal>
            <MakinaParkur />
          </Reveal>
        </div>
      </section>

      {/* 4 PRODUCTION STAGES */}
      <section className="py-24 md:py-32 bg-black border-t border-red-deep/20">
        <div className="container-x">
          <Reveal>
            <p className="text-red-bright text-sm font-display tracking-[0.3em] uppercase mb-5">
              4-Stage Production
            </p>
            <h2 className="font-anybody-bold italic text-4xl md:text-6xl text-white max-w-4xl mb-20 text-balance leading-[1.05]">
              Our circular production process.
            </h2>
          </Reveal>

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, i) => {
              const reverse = i % 2 === 1;
              return (
                <Reveal key={step.n} delay={0.1}>
                  <div className={`grid md:grid-cols-12 gap-8 items-center ${reverse ? "md:[direction:rtl]" : ""}`}>
                    <div className={`md:col-span-7 ${reverse ? "md:[direction:ltr]" : ""}`}>
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-red-deep/30 redline">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={m[step.image]} alt={step.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className={`md:col-span-5 ${reverse ? "md:[direction:ltr]" : ""}`}>
                      <div className="timeline-year-display text-[120px] md:text-[180px] mb-2 leading-none">
                        {step.n}
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="font-anybody italic text-lg text-red-bright/90 mb-4 leading-relaxed">
                        {step.hook}
                      </p>
                      <p className="text-white/60 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORRUGATED FLUTES */}
      <section className="py-24 md:py-32 bg-red-darker relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 rounded-full bg-red-bright blur-3xl" />
        </div>
        <div className="container-x relative z-10">
          <Reveal>
            <p className="text-red-bright text-sm font-display tracking-[0.3em] uppercase mb-5">Corrugated Flute Types</p>
            <h2 className="font-anybody-bold italic text-4xl md:text-5xl text-white max-w-3xl mb-16 text-balance leading-[1.05]">
              The right flute profile for your product.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {waves.map((w, i) => (
              <Reveal key={w.letter} delay={i * 0.08}>
                <div className="bg-black border border-red-bright/20 p-8 rounded-2xl h-full hover:border-red-bright/60 transition group">
                  <div className="timeline-year-display text-[120px] mb-4 leading-none group-hover:scale-105 transition origin-bottom-left">
                    {w.letter}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PAPER TYPES */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container-x">
          <Reveal>
            <p className="text-red-bright text-sm font-display tracking-[0.3em] uppercase mb-5">Paper Types</p>
            <h2 className="font-anybody-bold italic text-4xl md:text-5xl text-white max-w-3xl mb-16 text-balance leading-[1.05]">
              The raw materials we use.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 md:gap-8">
            {papers.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="flex gap-6 p-8 bg-soft-gray/30 border border-red-deep/20 rounded-2xl hover:border-red-bright/50 transition">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-red-darker text-red-bright border border-red-bright/40 flex items-center justify-center font-display text-2xl">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white mb-2">{p.name}</h3>
                    <p className="text-white/60 leading-relaxed text-sm">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
