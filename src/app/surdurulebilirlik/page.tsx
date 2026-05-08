import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import BelgelerCarousel from "@/components/BelgelerCarousel";

export const metadata: Metadata = {
  title: "Sürdürülebilirlik Belgeleri",
  description:
    "Mabsan Sürdürülebilirlik Politikası kapsamındaki sertifikalar, raporlar ve belgeler.",
  alternates: { canonical: "/surdurulebilirlik" },
};

// 19 belge — public/belgeler/belge-{1..19}.pdf
const documents = Array.from({ length: 19 }, (_, i) => ({
  label: `belge ${i + 1}`,
  href: `/belgeler/belge-${i + 1}.pdf`,
}));

export default function SurdurulebilirlikPage() {
  return (
    <>
      <PageHero title="Sürdürülebilirlik" />

      <section className="py-16 md:py-24 bg-black min-h-screen">
        <div className="container-x">
          <Reveal>
            <BelgelerCarousel documents={documents} itemsPerPage={6} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
