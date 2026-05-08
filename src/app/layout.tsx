import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroSplash from "@/components/IntroSplash";
import { getLangFromPath } from "@/lib/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mabsan.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mabsan | 1988'den Bu Yana Oluklu Mukavva Kutu Üreticisi",
    template: "%s | Mabsan",
  },
  description:
    "Mabsan Oluklu Mukavva Kutu San. ve Tic. Ltd. Şti. — E-ticaretten endüstriyele 8 sektöre özel oluklu mukavva, ofset baskı ve özel kutu çözümleri. 1988'den bu yana güvenilir ambalaj çözüm ortağınız.",
  keywords: [
    "oluklu mukavva",
    "kutu üretimi",
    "ambalaj",
    "e-ticaret kutu",
    "endüstriyel kutu",
    "kozmetik ambalaj",
    "FEFCO",
    "ofset baskı kutu",
    "Mabsan",
    "İstanbul ambalaj",
  ],
  authors: [{ name: "Mabsan Oluklu Mukavva Kutu Sanayi A.Ş." }],
  creator: "Mabsan",
  publisher: "Mabsan Oluklu Mukavva Kutu Sanayi A.Ş.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Mabsan",
    title: "Mabsan | 1988'den Bu Yana Oluklu Mukavva Kutu Üreticisi",
    description:
      "E-ticaretten endüstriyele 8 sektöre özel oluklu mukavva, ofset baskı ve özel kutu çözümleri. 36 yıllık tecrübeyle markanızın güvenilir ambalaj ortağı.",
    images: [
      {
        url: "/media/blog_detail_photo.0bdd209ccd65d4f8ef96.png",
        width: 1200,
        height: 630,
        alt: "Mabsan Oluklu Mukavva Üretim Tesisi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mabsan | Oluklu Mukavva Kutu Üreticisi",
    description:
      "8 sektöre özel oluklu mukavva ve özel kutu çözümleri. 1988'den bu yana güvenilir ambalaj ortağı.",
    images: ["/media/blog_detail_photo.0bdd209ccd65d4f8ef96.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Manufacturing",
  manifest: "/manifest.webmanifest",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mabsan Oluklu Mukavva Kutu Sanayi A.Ş.",
  alternateName: "Mabsan",
  url: SITE_URL,
  logo: `${SITE_URL}/media/mabsan.e2e0e3493e750a77d740fd309d82850b.svg`,
  foundingDate: "1988",
  description:
    "1988'den bu yana ulusal ve uluslararası markaların güvenilir paketleme çözüm ortağı.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Büyükbakkalköy, Kaşif Sk. No: 15",
    addressLocality: "Maltepe",
    addressRegion: "İstanbul",
    postalCode: "34858",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-216-484-18-00",
    contactType: "customer service",
    email: "info@mabsan.com",
    availableLanguage: ["Turkish", "English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/mabsan",
    "https://www.instagram.com/mabsan",
    "https://www.facebook.com/mabsan",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Middleware'in set ettiği x-pathname'i okuyup html lang'ını dinamik ayarla.
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";
  const lang = getLangFromPath(pathname);

  return (
    <html lang={lang} className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <IntroSplash />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
