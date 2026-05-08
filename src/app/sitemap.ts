import type { MetadataRoute } from "next";
import { sectors } from "@/data/sectors";
import { getAllPosts } from "@/lib/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mabsan.com";

// TR path → EN path haritası (statik sayfalar)
const STATIC_PAIRS: Array<[string, string]> = [
  ["/", "/en"],
  ["/kurumsal", "/en/about"],
  ["/uretim", "/en/production"],
  ["/urunler", "/en/products"],
  ["/surdurulebilirlik", "/en/sustainability"],
  ["/kariyer", "/en/careers"],
  ["/iletisim", "/en/contact"],
  ["/blog", "/en/blog"],
  ["/gizlilik", "/en/privacy"],
  ["/cerez-politikasi", "/en/cookie-policy"],
  ["/hizmetler-ve-sartlar", "/en/terms"],
  ["/yasal-bildirim", "/en/legal"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Statik sayfalar — TR ve EN için ayrı entry, hreflang alternates ile bağlı
  const staticEntries = STATIC_PAIRS.flatMap(([trPath, enPath]) => {
    const alternates = {
      languages: {
        tr: `${SITE_URL}${trPath}`,
        en: `${SITE_URL}${enPath}`,
      },
    };
    const priority = trPath === "/" ? 1.0 : 0.8;
    return [
      {
        url: `${SITE_URL}${trPath}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority,
        alternates,
      },
      {
        url: `${SITE_URL}${enPath}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority,
        alternates,
      },
    ];
  });

  // Sektör detayları — TR ve EN
  const sectorEntries = sectors.flatMap((s) => {
    const alternates = {
      languages: {
        tr: `${SITE_URL}/urunler/${s.slug}`,
        en: `${SITE_URL}/en/products/${s.enSlug}`,
      },
    };
    return [
      {
        url: `${SITE_URL}/urunler/${s.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates,
      },
      {
        url: `${SITE_URL}/en/products/${s.enSlug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates,
      },
    ];
  });

  // Blog yazıları — TR ve EN (id'ler ortak)
  const blogEntries = getAllPosts("tr").flatMap((p) => {
    const alternates = {
      languages: {
        tr: `${SITE_URL}/blog/${p.id}`,
        en: `${SITE_URL}/en/blog/${p.id}`,
      },
    };
    return [
      {
        url: `${SITE_URL}/blog/${p.id}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates,
      },
      {
        url: `${SITE_URL}/en/blog/${p.id}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates,
      },
    ];
  });

  return [...staticEntries, ...sectorEntries, ...blogEntries];
}
