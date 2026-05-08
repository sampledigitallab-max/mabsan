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
  title: "Üretim Süreci — Geri Dönüşümden Markaya Özel Çözüme",
  description:
    "Mabsan'ın 4 aşamalı üretim süreci: geri dönüşüm, yüksek teknoloji, oluklu mukavva üretimi ve markaya özel çözümler. Modern makina parkuru ve sürdürülebilir üretim.",
  alternates: { canonical: "/uretim" },
};

// SubjectsData (orijinal id:1-4) — markanın gönderdiği 4 aşama görseli
const steps = [
  {
    n: "01",
    title: "Geri Dönüşüm",
    hook: "Sürdürülebilir bir dünya için ilk adımımız geri dönüşüm.",
    desc: "Hurda kâğıtları, çevre dostu geri dönüşüm sürecinden geçirerek dünyaya yeniden kazandırıyoruz.",
    image: "uretim_geri_donusum.jpg",
  },
  {
    n: "02",
    title: "Yüksek Teknoloji",
    hook: "Ürünlerinizi korumak için teknolojiye güveniyoruz.",
    desc: "Geri dönüştürülen malzemeler, yüksek teknolojili makinelerle sağlam ve dayanıklı bobin kâğıtlara dönüştürülüyor.",
    image: "uretim_yuksek_teknoloji.png",
  },
  {
    n: "03",
    title: "Oluklu Mukavva",
    hook: "36 yıllık tecrübemizle en iyi bildiğimiz işi yapıyoruz.",
    desc: "Kâğıt bobinlerini, oluklu mukavva makinelerinde işleyerek oluk formunu veriyoruz. Düz kâğıtları ve oluk formu kazandırılmış kâğıtları birleştirerek düz tabaka mukavva üretimine geçiyoruz.",
    image: "uretim_oluklu_mukavva.jpg",
  },
  {
    n: "04",
    title: "Markaya Özel Çözümler",
    hook: "Marka itibarınız için fark yaratan çözümler tasarlıyoruz.",
    desc: "Oluklu mukavva levhaları, hassas kesim, baskı ve özel yapıştırma işlemlerinden geçirerek son ürün olan koli ve kutulara dönüştürüyoruz.",
    image: "uretim_markaya_ozel.jpg",
  },
];

// MukavvaData (orijinal)
const waves = [
  { letter: "E", name: "E Dalga", desc: "En küçük dalga formuna sahip olan E-dalga, ince ve hafif ürün ihtiyacı olan müşterilerimiz için ideal bir çözüm sunar. Ambalaj, kutu ve karton üretiminde sıklıkla tercih edilir." },
  { letter: "B", name: "B Dalga", desc: "Orta büyüklükteki dalga formuna sahip olan B-dalga, dayanıklılık gerektiren ürünler için sıklıkla kullanılır. Elektronik, beyaz eşya ve diğer sanayi ürünlerinin ambalajlanmasında tercih edilir." },
  { letter: "C", name: "C Dalga", desc: "Daha büyük dalga formuna sahip olan C-dalga, süpermarket ürünleri, endüstriyel ve tarımsal ürünlerin ambalajlanmasında kullanılır. Dayanıklılık ve koruma özellikleriyle ön plana çıkar." },
  { letter: "A", name: "A Dalga", desc: "En büyük dalga formuna sahip olan A-dalga, özellikle ağır ve hacimli ürünlerin ambalajlanmasında kullanılır. Yüksek dayanıklılık sunar." },
];

// KagitData (orijinal)
const papers = [
  { name: "Kraft", desc: "Doğal, kahverengi renkli ve yüksek dayanıklılığa sahip olan kraft kâğıt, oluklu mukavva üretiminde en sık kullanılan kâğıt türüdür. Mukavemet, nem ve yırtılma direnci özellikleriyle öne çıkar." },
  { name: "Beyaz", desc: "Beyaz renkli, düz ve pürüzsüz yüzeye sahip olan bu kâğıt türü, daha yüksek baskı kalitesi gerektiren ürünlerin üretiminde tercih edilir. Ambalaj ve kutu tasarımlarında kullanışlıdır." },
  { name: "Geri Dönüştürülmüş", desc: "Çevre dostu bir seçenek olan geri dönüştürülmüş kâğıt, kaynak tasarrufu sağlaması ve sürdürülebilirlik ilkelerimize uygunluğu nedeniyle önem verdiğimiz bir hammaddedir." },
  { name: "Özel Kaplı", desc: "Yüzeyi özel kaplamalarla güçlendirilmiş olan bu kâğıt türü, neme, yağa veya suya karşı yüksek direnç sağlar. Gıda, ilaç ve elektronik ürün ambalajlarında sıklıkla kullanılır." },
];

export default function UretimPage() {
  return (
    <>
      <PageHero title="Üretim" />
      <PageIntro
        title="Değerli üretim, güvende başlar."
        description="Mabsan'da üretim döngüsü öncelikle güvenle başlar. 36 yıllık birikimimizle önce sektörel ihtiyaçları analiz eder, inovatif bakış açımızla en yenilikçi çözümleri geliştiririz."
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

      {/* DEĞERLİ ÜRETİM — sol başlık+italic metin + sağ yuvarlatılmış foto */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <h2 className="font-anybody-bold italic text-white text-5xl md:text-7xl leading-[0.95] mb-8 text-balance">
              Değerli
              <br />
              Üretim
            </h2>
            <p className="text-white/65 text-base md:text-lg leading-relaxed font-anybody italic">
              Mabsan&apos;da üretim döngüsü öncelikle güvenle başlar. 36 yıllık birikimimizle önce sektörel ihtiyaçları analiz eder inovatif bakış açımızla en yenilikçi çözümleri geliştiririz. Yetkin çalışan kadromuzla ürünlerinizi güvende tutacak ve markanızı öne çıkaracak kutu ve koliler tasarlarız. Tüm bu süreçte kaliteden asla ödün vermeyiz. Çünkü değerli müşterilerimizin bu sayede 36 yıldır bize güvendiğini biliriz.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] rounded-[40px_0_40px_0] overflow-hidden border border-red-deep/30 redline">
              <Image
                src={m["Makina_Data.png"] || "/media/Makina_Data.1738ffa7f81e427fd964.png"}
                alt="Mabsan üretim"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MABSAN ÜRETİM DÖNGÜSÜ — Venn diagram */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        <div className="container-x">
          <Reveal>
            <SectionDivider label="Üretim Döngüsü" dotPosition="right" className="mb-16" />
          </Reveal>
          <Reveal delay={0.1}>
            <UretimDongusu />
          </Reveal>
        </div>
      </section>

      {/* İSTATİSTİKLER */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x">
          <Reveal>
            <Istatistikler />
          </Reveal>
        </div>
      </section>

      {/* MAKINA PARKURLARIMIZ */}
      <section className="py-20 md:py-28 bg-black border-t border-red-deep/20">
        <div className="container-x">
          <Reveal>
            <MakinaParkur />
          </Reveal>
        </div>
      </section>

      {/* 4 ÜRETİM AŞAMASI (mevcut, SubjectsData) */}
      <section className="py-24 md:py-32 bg-black border-t border-red-deep/20">
        <div className="container-x">
          <Reveal>
            <p className="text-red-bright text-sm font-display tracking-[0.3em] uppercase mb-5">
              4 Aşamalı Üretim
            </p>
            <h2 className="font-anybody-bold italic text-4xl md:text-6xl text-white max-w-4xl mb-20 text-balance leading-[1.05]">
              Döngüsel üretim sürecimiz.
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
                        <img
                          src={m[step.image]}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
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

      {/* MUKAVVA / DALGALAR */}
      <section className="py-24 md:py-32 bg-red-darker relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 rounded-full bg-red-bright blur-3xl" />
        </div>
        <div className="container-x relative z-10">
          <Reveal>
            <p className="text-red-bright text-sm font-display tracking-[0.3em] uppercase mb-5">Oluklu Mukavva Cinsleri</p>
            <h2 className="font-anybody-bold italic text-4xl md:text-5xl text-white max-w-3xl mb-16 text-balance leading-[1.05]">
              Ürününüze uygun dalga formu.
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

      {/* KAĞIT CİNSLERİ */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container-x">
          <Reveal>
            <p className="text-red-bright text-sm font-display tracking-[0.3em] uppercase mb-5">Kâğıt Cinsleri</p>
            <h2 className="font-anybody-bold italic text-4xl md:text-5xl text-white max-w-3xl mb-16 text-balance leading-[1.05]">
              Kullandığımız hammaddeler.
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
