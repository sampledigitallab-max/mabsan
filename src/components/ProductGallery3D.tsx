"use client";

import type { CSSProperties } from "react";
import { usePathname } from "next/navigation";
import media from "@/media.json";
import { getLangFromPath } from "@/lib/i18n";

const m = media as Record<string, string>;

const DISCLAIMER = {
  tr: "Görseller firmamızın daha önce ürettiği kutu çeşitlerine örnek olup, resimlerde görünen marka ürünlerinin satışları, pazarlanması vb. firmamız tarafından yapılmamaktadır. Kutuların üzerinde yer alan markaların her türlü hakları ilgili markalara aittir. Sitemizden ürün görsellerinin haberimiz olmadan alınması ve kullanılmasına muvafakatimiz yoktur. Bu şekilde kullanımlarda her türlü yasal sorumluluk kullanan şahsa aittir.",
  en: "These images are examples of box types previously produced by our company. The brand products visible in the images are not sold or marketed by us. All rights to the brands featured on the boxes belong to their respective owners. We do not consent to product images being taken from our website and used without our knowledge. In such cases, all legal responsibility lies with the user.",
} as const;

const DISCLAIMER_TR = DISCLAIMER.tr;

type ItemStyle = CSSProperties & { "--i": number };

export default function ProductGallery3D({
  start = 1,
  count = 21,
  reverse = false,
}: {
  start?: number;
  count?: number;
  reverse?: boolean;
}) {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const items = Array.from({ length: count }, (_, i) => start + i);
  const productLabel = lang === "en" ? "Product" : "Ürün";
  const disclaimer = DISCLAIMER[lang] ?? DISCLAIMER_TR;
  return (
    <div className="w-full">
      <div className="product-3d-stage">
        <div className={`product-3d-wheel${reverse ? " reverse" : ""}`}>
          {items.map((n, i) => {
            const src = m[`${n}.png`];
            if (!src) return null;
            const style: ItemStyle = { "--i": i };
            return (
              <span key={n} className="product-3d-item" style={style}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`${productLabel} ${n}`} />
              </span>
            );
          })}
        </div>
      </div>
      <p className="text-[10px] md:text-xs text-white/40 leading-relaxed max-w-5xl mx-auto px-6 mt-6 text-center">
        {disclaimer}
      </p>
    </div>
  );
}
