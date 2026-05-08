import Reveal from "./Reveal";

/**
 * Sayfa başlığı bandı — Navbar altına gelen ince başlık şeridi.
 * Sol: büyük italic sayfa adı.
 * Orta-sağ: yatay ince beyaz çizgi.
 * Sağ: kırmızı altıgen sembolü.
 * BG: koyu gri-siyah diagonal gradient (sağ tarafta hafif daha açık).
 *
 * eyebrow / description / video / imageSrc props eski API uyumu için
 * tutuluyor ama yeni tasarımda render edilmiyor.
 */
export default function PageHero({
  title,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  video?: string;
  imageSrc?: string;
}) {
  return (
    <section
      className="relative pt-28 md:pt-32 pb-8 md:pb-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(115deg, #0a0a0a 0%, #1c1c1c 35%, #2e2e2e 70%, #3a3a3a 100%)",
      }}
    >
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-5 md:gap-7 py-3">
            <h1 className="font-anybody-bold italic text-white text-4xl md:text-6xl lg:text-7xl leading-none whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              {title}
            </h1>
            <span className="flex-1 h-px bg-white/30" />
            <span
              aria-hidden
              className="block w-3.5 h-3.5 bg-red-bright shadow-[0_0_14px_rgba(250,0,0,0.8)] flex-shrink-0"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
