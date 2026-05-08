import Link from "next/link";
import { notFound } from "next/navigation";
import { Lock } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import PageIntro from "@/components/PageIntro";
import MaterialSlider from "@/components/MaterialSlider";
import OtherSectorsCarousel from "@/components/OtherSectorsCarousel";
import ProductGallery3D from "@/components/ProductGallery3D";
import KartonVideoBand from "@/components/KartonVideoBand";
import media from "@/media.json";
import { sectors, waves, papers, getSectorBySlug } from "@/data/sectors";

const m = media as Record<string, string>;

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.enSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug, "en");
  if (!sector) return {};
  const url = `/en/products/${sector.enSlug}`;
  const ogImage = m[sector.render3d] || m[sector.photo];
  return {
    title: sector.enHeader,
    description: sector.enInfo.slice(0, 160),
    alternates: {
      canonical: url,
      languages: { tr: `/urunler/${sector.slug}`, en: url },
    },
    openGraph: {
      type: "website",
      url,
      title: sector.enHeader,
      description: sector.enInfo.slice(0, 160),
      images: ogImage ? [{ url: ogImage, alt: sector.enHeader }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: sector.enHeader,
      description: sector.enInfo.slice(0, 160),
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function SectorDetailPageEN({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug, "en");
  if (!sector) notFound();

  const others = sectors.filter((s) => s.enSlug !== sector.enSlug);
  const index = sectors.findIndex((s) => s.enSlug === sector.enSlug);
  void index;

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mabsan.com";
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: sector.enHeader,
    description: sector.enInfo,
    category: sector.enName,
    image: m[sector.render3d] ? `${SITE_URL}${m[sector.render3d]}` : undefined,
    brand: { "@type": "Brand", name: "Mabsan" },
    manufacturer: {
      "@type": "Organization",
      name: "Mabsan Oluklu Mukavva Kutu Sanayi A.Ş.",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <PageHero title={sector.enName} />
      <PageIntro title={sector.enHeader} description={sector.enInfo} />

      {/* TECHNICAL SPECS */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container-x">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
              {/* LEFT — blueprint + 3D */}
              <div className="lg:col-span-6 relative bg-black border-y border-white/10 py-12 md:py-16 px-6 md:px-10 flex items-center justify-center min-h-[480px]">
                <div className="grid grid-cols-2 gap-6 md:gap-10 w-full max-w-xl items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m[sector.blueprint]}
                    alt={`${sector.enName} blueprint`}
                    className="w-full h-auto opacity-90"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m[sector.render3d]}
                    alt={`${sector.enName} 3D box`}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* RIGHT — specs panel */}
              <div className="lg:col-span-6 bg-[#1a1818] rounded-3xl p-8 md:p-12 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-8">
                  <h2 className="font-anybody-bold italic text-white text-3xl md:text-5xl leading-[1.05]">
                    Technical
                    <br />
                    Specifications
                  </h2>
                  <a
                    href={m["Fefco_standard.pdf"]}
                    download="Fefco_standard.pdf"
                    aria-label="Download FEFCO standard PDF"
                    className="flex items-center gap-2 group"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m["fefco.png"]}
                      alt="FEFCO"
                      className="h-9 md:h-11 bg-white rounded px-2 py-1"
                    />
                    <span
                      aria-hidden
                      className="inline-flex w-7 h-7 rounded-full bg-green-500 text-white items-center justify-center group-hover:translate-y-1 transition"
                    >
                      ↓
                    </span>
                  </a>
                </div>

                <div className="flex-1 space-y-0">
                  {sector.enSpecs.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-4 border-b border-white/15 last:border-b-0"
                    >
                      <span className="font-anybody italic text-white/85 text-base md:text-lg">
                        {s.label}
                      </span>
                      {s.value && (
                        <span className="font-anybody-bold italic text-white text-base md:text-lg">
                          {s.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-10 mt-2 border-t border-white/10">
                  {(
                    [
                      sector.closure === "Kilitli"
                        ? { kind: "lucide" as const, label: "Locked" }
                        : { kind: "svg" as const, icon: "yapiskanli.svg", label: "Glued" },
                      { kind: "svg" as const, icon: "katlama.svg", label: "Folded" },
                      { kind: "svg" as const, icon: "pim.svg", label: "Pin" },
                    ]
                  ).map((f, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 text-center">
                      {f.kind === "lucide" ? (
                        <Lock
                          size={36}
                          strokeWidth={1.5}
                          className="text-white/90 h-8 md:h-10 w-auto"
                        />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={m[f.icon]}
                          alt={f.label}
                          className="h-8 md:h-10 brightness-0 invert opacity-90"
                        />
                      )}
                      <span className="font-anybody italic text-white/75 text-sm md:text-base">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BIG ROTATING BOX VIDEO BAND */}
      <section className="py-10 md:py-14 bg-black">
        <Reveal>
          <KartonVideoBand />
        </Reveal>
      </section>

      {/* CORRUGATED FLUTES */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container-x">
          <Reveal>
            <h2 className="font-anybody-bold italic text-white text-3xl md:text-5xl text-center mb-12 md:mb-16 leading-[1.05]">
              Corrugated Types
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <MaterialSlider
              title="Corrugated Flute Types"
              category="Corrugated"
              bgImage="mukavva_cinsleri_background.svg"
              cardImage="Mukavva_Data.png"
              items={waves.map((w) => ({ name: w.enName, desc: w.enDesc }))}
            />
          </Reveal>
        </div>
      </section>

      {/* PRODUCT GALLERY #1 */}
      <section className="py-12 md:py-16 bg-black">
        <Reveal>
          <ProductGallery3D start={22} count={21} />
        </Reveal>
      </section>

      {/* PAPER TYPES */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container-x">
          <Reveal>
            <h2 className="font-anybody-bold italic text-white text-3xl md:text-5xl text-center mb-12 md:mb-16 leading-[1.05]">
              Paper Types
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <MaterialSlider
              title="Paper Types"
              category="Paper"
              bgImage="kagit_cinsleri_background.svg"
              cardImage="Mukavva_Data.png"
              items={papers.map((p) => ({ name: p.enName + " Paper", desc: p.enDesc }))}
            />
          </Reveal>
        </div>
      </section>

      {/* PRODUCT GALLERY #2 */}
      <section className="py-12 md:py-16 bg-black">
        <Reveal>
          <ProductGallery3D start={1} count={21} reverse />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-red-darker border-y border-red-bright/20">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-anybody-bold italic text-3xl md:text-5xl text-white mb-6 text-balance leading-[1.05]">
                Want a quote tailored to the {sector.enName.toLowerCase()} industry?
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                With 36 years of experience, let us design corrugated and print solutions tailored to your needs.
              </p>
              <Link
                href="/en/contact"
                className="inline-flex items-center gap-3 bg-red-bright hover:bg-red-mid text-white px-8 py-4 rounded-full font-display tracking-[0.2em] uppercase text-sm transition"
              >
                Get in Touch
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OTHER INDUSTRIES */}
      <section className="py-20 md:py-28 bg-red-darker relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-red-bright/30 blur-3xl" />
        </div>
        <div className="container-x relative z-10">
          <Reveal>
            <h2 className="font-anybody-bold italic text-white text-3xl md:text-5xl text-center mb-12 md:mb-16 leading-[1.05]">
              Other Industries
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <OtherSectorsCarousel sectors={others} />
          </Reveal>
        </div>
      </section>

      {/* Back link */}
      <div className="bg-black py-10">
        <div className="container-x">
          <Link
            href="/en/products"
            className="inline-flex items-center gap-2 text-white/60 hover:text-red-bright transition text-sm font-display tracking-[0.2em] uppercase"
          >
            <span aria-hidden>←</span> All Industries
          </Link>
        </div>
      </div>
    </>
  );
}
