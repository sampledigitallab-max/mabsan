/**
 * i18n: TR (default) ve EN (route prefix /en) için slug haritalama + helper'lar.
 * Her sayfanın iki dildeki path'i burada tanımlı; switcher ve dil tespiti bu mapı kullanır.
 */

export type Lang = "tr" | "en";

// TR path → EN path
export const tr2en: Record<string, string> = {
  "/": "/en",
  "/kurumsal": "/en/about",
  "/uretim": "/en/production",
  "/urunler": "/en/products",
  "/urunler/eticaret": "/en/products/e-commerce",
  "/urunler/endustriyel": "/en/products/industrial",
  "/urunler/perakende": "/en/products/retail",
  "/urunler/kozmetik": "/en/products/cosmetics",
  "/urunler/yasmeyvesebze": "/en/products/fresh-produce",
  "/urunler/fmcg": "/en/products/fmcg",
  "/urunler/otomotiv": "/en/products/automotive",
  "/urunler/takeaway": "/en/products/take-away",
  "/kariyer": "/en/careers",
  "/iletisim": "/en/contact",
  "/blog": "/en/blog",
  "/surdurulebilirlik": "/en/sustainability",
  "/gizlilik": "/en/privacy",
  "/cerez-politikasi": "/en/cookie-policy",
  "/hizmetler-ve-sartlar": "/en/terms",
  "/yasal-bildirim": "/en/legal",
};

// EN path → TR path (otomatik ters çevir)
export const en2tr: Record<string, string> = Object.fromEntries(
  Object.entries(tr2en).map(([tr, en]) => [en, tr])
);

// TR sektör slug → EN sektör slug
export const sectorTr2En: Record<string, string> = {
  eticaret: "e-commerce",
  endustriyel: "industrial",
  perakende: "retail",
  kozmetik: "cosmetics",
  yasmeyvesebze: "fresh-produce",
  fmcg: "fmcg",
  otomotiv: "automotive",
  takeaway: "take-away",
};

export const sectorEn2Tr: Record<string, string> = Object.fromEntries(
  Object.entries(sectorTr2En).map(([tr, en]) => [en, tr])
);

export function getLangFromPath(path: string): Lang {
  return path === "/en" || path.startsWith("/en/") ? "en" : "tr";
}

/**
 * Mevcut path'in diğer dildeki karşılığını üretir.
 * Blog detay (/blog/123) ve sektör detayları için dinamik dönüşüm yapar.
 */
export function getCounterpartPath(currentPath: string): string {
  // Tam eşleşme — statik route'lar
  if (currentPath in tr2en) return tr2en[currentPath];
  if (currentPath in en2tr) return en2tr[currentPath];

  // Blog detay
  if (currentPath.startsWith("/en/blog/")) {
    return "/blog/" + currentPath.replace(/^\/en\/blog\//, "");
  }
  if (currentPath.startsWith("/blog/")) {
    return "/en/blog/" + currentPath.replace(/^\/blog\//, "");
  }

  // Sektör detay
  if (currentPath.startsWith("/en/products/")) {
    const enSlug = currentPath.replace(/^\/en\/products\//, "");
    const trSlug = sectorEn2Tr[enSlug];
    return trSlug ? `/urunler/${trSlug}` : "/urunler";
  }
  if (currentPath.startsWith("/urunler/")) {
    const trSlug = currentPath.replace(/^\/urunler\//, "");
    const enSlug = sectorTr2En[trSlug];
    return enSlug ? `/en/products/${enSlug}` : "/en/products";
  }

  // Fallback — kök
  return getLangFromPath(currentPath) === "en" ? "/" : "/en";
}
