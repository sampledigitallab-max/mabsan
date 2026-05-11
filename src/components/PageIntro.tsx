import Reveal from "./Reveal";

/**
 * Sayfa intro bölümü — PageHero başlık bandının HEMEN ALTINDA gelen
 * büyük italic başlık + opsiyonel açıklama. Sayfaya özel "uzun başlık" /
 * tagline burada gösterilir (PageHero band'ında sadece sayfa adı kalır).
 */
export default function PageIntro({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="py-14 md:py-20 bg-black">
      <div className="container-x">
        <Reveal>
          <h2 className="font-anybody-bold italic text-white text-2xl md:text-4xl lg:text-5xl leading-[1.05] text-balance mb-5 max-w-4xl">
            {title}
          </h2>
          {description && (
            <p className="font-anybody italic text-white/60 text-base md:text-lg leading-relaxed max-w-3xl">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
