import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import PageIntro from "@/components/PageIntro";
import StackedYearTimeline from "@/components/StackedYearTimeline";
import TanitimFilmi from "@/components/TanitimFilmi";
import YonetimGrid from "@/components/YonetimGrid";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Kurumsal — 1988'den Bu Yana Tecrübe",
  description:
    "Mabsan'ın 36 yıllık hikayesi, misyon-vizyonu ve yönetim kadrosu. İstanbul Maltepe'de bulunan oluklu mukavva üretim tesisimiz hakkında detaylı bilgi.",
  alternates: { canonical: "/kurumsal" },
};

export default function KurumsalPage() {
  return (
    <>
      <PageHero title="Kurumsal" />
      <PageIntro
        title="36 yıllık tecrübe, yenilenen cesaret."
        description="1988 yılından bu yana ulusal ve uluslararası markaların paketleme çözümlerinde güvenilir ortağı olmaktan gurur duyuyoruz."
      />

      {/* TANITIM FİLMİ */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x">
          <Reveal>
            <SectionDivider label="Tanıtım Filmi" dotPosition="right" className="mb-10" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="redline">
              <TanitimFilmi />
            </div>
          </Reveal>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x">
          <Reveal>
            <SectionDivider label="Hakkımızda" dotPosition="right" className="mb-10" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-4xl space-y-6 text-white/80 text-base md:text-lg leading-relaxed">
              <p>
                1988 yılından bu yana ulusal ve uluslararası markaların paketleme çözümlerinde güvenilir ortağı olmaktan gurur duyuyoruz. Bu güveni; sürekli gelişime olan cesaretimizle, global üretim standartlarına bağlılığımızla, teknoloji yatırımlarımızla ve her müşterimize eşit özen yaklaşımımızla kazandık.
              </p>
              <p>
                Geniş müşteri portföyümüz ve kaliteli ürün yelpazemiz sayesinde sektörümüzün önde gelen firmalarından biri haline geldik. İlkelerimizden asla taviz vermeden, istikrarlı büyümemiz sayesinde sektörümüzün en saygın firmaları arasındaki konumumuzu güçlendiriyoruz.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MİSYON */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x">
          <Reveal>
            <SectionDivider label="Misyon" dotPosition="right" className="mb-10" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-4xl text-white/85 text-lg md:text-2xl leading-relaxed font-anybody italic">
              Kaliteli ürünler, yenilikçi tasarımlar ve uzun soluklu güvene dayalı müşteri ilişkileriyle çalıştığımız markaların itibarına ve iş süreçlerine katma değer kazandırırız.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VİZYON */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x">
          <Reveal>
            <SectionDivider label="Vizyon" dotPosition="right" className="mb-10" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-4xl text-white/85 text-lg md:text-2xl leading-relaxed font-anybody italic">
              Oluklu mukavva sektörünün sürdürülebilir dönüşümünde öncü üreticilerden biri olarak perakendeden otomotive her sektörde en güvenilir iş ortağı olmak.
            </p>
          </Reveal>
        </div>
      </section>

      {/* YOLCULUĞUMUZ */}
      <section className="py-20 md:py-28 bg-black overflow-hidden">
        <div className="container-x">
          <Reveal>
            <StackedYearTimeline />
          </Reveal>
        </div>
      </section>

      {/* YÖNETİM EKİBİMİZ */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x">
          <Reveal>
            <SectionDivider label="Yönetim Ekibimiz" dotPosition="right" className="mb-10" />
          </Reveal>
          <Reveal delay={0.1}>
            <YonetimGrid />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-14">
              <SectionDivider label="Hakkımızda" dotPosition="left" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
