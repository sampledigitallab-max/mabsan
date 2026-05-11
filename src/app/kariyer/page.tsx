import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import KariyerForm from "@/components/KariyerForm";
import media from "@/media.json";

const m = media as Record<string, string>;

export const metadata: Metadata = {
  title: "Kariyer — Mabsan Ailesine Katıl",
  description:
    "Mabsan'da gelişim ve uzmanlık var. Üretim, satış, tasarım ve müşteri ilişkileri ekiplerimize katılmak için CV'ni gönder. İstanbul Maltepe'de açık pozisyonlar.",
  alternates: { canonical: "/kariyer" },
};

const pillars = [
  {
    title: "Mabsan'ın İçinde Gelişim Var",
    desc: "Üretimden satışa, tasarımdan müşteri ilişkilerine her aşamada gelişimin önemine inanıyoruz. Burada başlayacağın yolculuğunda yolun sabit kalmaz, sürekli yeni yollar ve fırsatlarla karşılaşırsın.",
    image: "Discover_1.svg",
    reverse: false,
  },
  {
    title: "Mabsan'ın İçinde Uzmanlık Var",
    desc: "Mabsan'da işimizi özenle ve uzmanlıkla yaparız. Tüm departmanlarımızda işini en iyi yapanlarla çalışır, ekiplerimize sonsuz güven duyarız. Burada profesyonel olduğun alanda söz sahibi olabilirsin.",
    image: "Discover_2.svg",
    reverse: true,
  },
];

export default function KariyerPage() {
  return (
    <>
      <PageHero title="Kariyer" />

      {/* MABSANLI KİMDİR? — siyah BG, sadece form alanları beyaz */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-8">
              <h1 className="font-anybody-bold italic text-white text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-balance">
                Mabsanlı Kimdir?
              </h1>
              <p className="font-anybody italic text-white/55 text-sm md:text-base leading-relaxed max-w-xs md:text-right">
                &ldquo;Burası yenilliğe açık, kendine ve ekibine güvenen, tasarım odaklı düşünenlerin dünyası.&rdquo;
              </p>
            </div>

            <p className="font-anybody italic text-white/75 text-base md:text-lg mb-10 max-w-3xl">
              Sen de bir Mabsanlı olmak istiyorsan, formu doldurarak bizimle iletişime geçebilirsin.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <KariyerForm />
          </Reveal>
        </div>
      </section>

      {/* GELİŞİM + UZMANLIK — alternate metin/görsel layout, organik kavisli görsel kartı */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container-x space-y-20 md:space-y-28">
          {pillars.map((p) => (
            <Reveal key={p.title} delay={0.1}>
              <div
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  p.reverse ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Metin */}
                <div className={p.reverse ? "md:[direction:ltr]" : ""}>
                  <h2 className="font-anybody-bold italic text-white text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-balance mb-6">
                    {p.title}
                  </h2>
                  <p className="font-anybody italic text-white/55 text-base md:text-lg leading-relaxed max-w-lg">
                    {p.desc}
                  </p>
                </div>

                {/* Organik kavisli görsel kartı — invert filter KALDIRILDI, SVG orijinal görüntü */}
                <div className={p.reverse ? "md:[direction:ltr]" : ""}>
                  <div
                    className="relative aspect-[5/4] bg-black overflow-hidden"
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
    </>
  );
}
