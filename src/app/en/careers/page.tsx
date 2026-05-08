import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import KariyerForm from "@/components/KariyerForm";
import media from "@/media.json";

const m = media as Record<string, string>;

export const metadata: Metadata = {
  title: "Careers — Join the Mabsan Family",
  description:
    "Mabsan stands for growth and expertise. Send your CV to join our production, sales, design and customer relations teams. Open positions in Maltepe, Istanbul.",
  alternates: {
    canonical: "/en/careers",
    languages: { tr: "/kariyer", en: "/en/careers" },
  },
};

const pillars = [
  {
    title: "Mabsan Stands for Growth",
    desc: "From production to sales, from design to customer relations, we believe in growth at every step. The journey you start here doesn't stay still — you'll constantly meet new paths and opportunities.",
    image: "Discover_1.svg",
    reverse: false,
  },
  {
    title: "Mabsan Stands for Expertise",
    desc: "At Mabsan, we work with care and expertise. Across every department we collaborate with the best in their field, and we trust our teams completely. Here, you can lead in your area of professional expertise.",
    image: "Discover_2.svg",
    reverse: true,
  },
];

export default function CareersPageEN() {
  return (
    <>
      <PageHero title="Careers" />

      {/* GROWTH + EXPERTISE — alternate layout */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-black">
        <div className="container-x space-y-20 md:space-y-28">
          {pillars.map((p) => (
            <Reveal key={p.title} delay={0.1}>
              <div
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  p.reverse ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={p.reverse ? "md:[direction:ltr]" : ""}>
                  <h2 className="font-anybody-bold italic text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance mb-6">
                    {p.title}
                  </h2>
                  <p className="font-anybody italic text-white/55 text-base md:text-lg leading-relaxed max-w-lg">
                    {p.desc}
                  </p>
                </div>

                <div className={p.reverse ? "md:[direction:ltr]" : ""}>
                  <div
                    className="relative aspect-[5/4] bg-black border border-white/10 overflow-hidden"
                    style={{
                      borderRadius: p.reverse
                        ? "120px 30px 30px 120px"
                        : "30px 120px 120px 30px",
                    }}
                  >
                    {m[p.image] && (
                      <Image
                        src={m[p.image]}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHO IS A MABSAN PERSON — form */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-8">
              <h2 className="font-anybody-bold italic text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Join the Mabsan Family
              </h2>
              <p className="font-anybody italic text-white/55 text-sm md:text-base leading-relaxed max-w-xs md:text-right">
                &ldquo;A space for those who are open to innovation, confident in themselves and their teams, and design-driven thinkers.&rdquo;
              </p>
            </div>

            <p className="font-anybody italic text-white/75 text-base md:text-lg mb-10 max-w-3xl">
              If you'd like to be part of Mabsan, fill out the form to get in touch with us.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <KariyerForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
