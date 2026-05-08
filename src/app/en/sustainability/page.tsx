import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import BelgelerCarousel from "@/components/BelgelerCarousel";

export const metadata: Metadata = {
  title: "Sustainability Documents",
  description:
    "Certificates, reports and documents under Mabsan's Sustainability Policy.",
  alternates: {
    canonical: "/en/sustainability",
    languages: { tr: "/surdurulebilirlik", en: "/en/sustainability" },
  },
};

const documents = Array.from({ length: 19 }, (_, i) => ({
  label: `document ${i + 1}`,
  href: `/belgeler/belge-${i + 1}.pdf`,
}));

export default function SustainabilityPageEN() {
  return (
    <>
      <PageHero title="Sustainability" />

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
