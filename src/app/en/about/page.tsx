import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import PageIntro from "@/components/PageIntro";
import StackedYearTimeline from "@/components/StackedYearTimeline";
import TanitimFilmi from "@/components/TanitimFilmi";
import YonetimGrid from "@/components/YonetimGrid";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "About — Experience Since 1988",
  description:
    "Mabsan's 36-year story, mission, vision and management team. Learn about our corrugated cardboard production facility in Maltepe / Istanbul.",
  alternates: { canonical: "/en/about", languages: { tr: "/kurumsal", en: "/en/about" } },
};

export default function AboutPageEN() {
  return (
    <>
      <PageHero title="About" />
      <PageIntro
        title="36 years of experience, renewed courage."
        description="Since 1988 we've been proud to be the trusted packaging partner of national and international brands."
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

      {/* ABOUT US */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x">
          <Reveal>
            <SectionDivider label="About Us" dotPosition="right" className="mb-10" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-4xl space-y-6 text-white/80 text-base md:text-lg leading-relaxed">
              <p>
                Since 1988 we have been proud to be the trusted packaging partner of national and international brands. We earned that trust with our courage to keep growing, our commitment to global production standards, our investments in technology and the equal care we give to every customer.
              </p>
              <p>
                Thanks to our wide customer portfolio and high-quality product range, we have become one of the leading companies in our industry. Without ever compromising on our principles, our steady growth strengthens our position among the most respected names in our sector.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x">
          <Reveal>
            <SectionDivider label="Mission" dotPosition="right" className="mb-10" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-4xl text-white/85 text-lg md:text-2xl leading-relaxed font-anybody italic">
              With quality products, innovative designs and long-term, trust-based customer relationships, we add value to the reputation and operations of the brands we work with.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VISION */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x">
          <Reveal>
            <SectionDivider label="Vision" dotPosition="right" className="mb-10" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-4xl text-white/85 text-lg md:text-2xl leading-relaxed font-anybody italic">
              To be one of the leading producers driving the sustainable transformation of the corrugated cardboard industry, and the most reliable partner across every sector — from retail to automotive.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="py-20 md:py-28 bg-black overflow-hidden">
        <div className="container-x">
          <Reveal>
            <StackedYearTimeline />
          </Reveal>
        </div>
      </section>

      {/* MANAGEMENT TEAM */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x">
          <Reveal>
            <SectionDivider label="Management Team" dotPosition="right" className="mb-10" />
          </Reveal>
          <Reveal delay={0.1}>
            <YonetimGrid />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-14">
              <SectionDivider label="About Us" dotPosition="left" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
