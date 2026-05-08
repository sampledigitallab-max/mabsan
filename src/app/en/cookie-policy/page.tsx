import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie usage on the Mabsan website, types of cookies and a guide to managing your browser settings.",
  alternates: {
    canonical: "/en/cookie-policy",
    languages: { tr: "/cerez-politikasi", en: "/en/cookie-policy" },
  },
  robots: { index: true, follow: false },
};

export default function CookiePolicyPageEN() {
  return (
    <LegalLayout title="Cookie Policy">
      <p>
        At Mabsan Oluklu Mukavva Kutu Sanayi A.Ş., we use cookies to improve the experience of users visiting our website and to optimize our services.
      </p>

      <h3>What Is a Cookie?</h3>
      <p>
        Cookies are small text files placed on your device when you visit our website. These files help us remember your preferences and improve site performance.
      </p>

      <h3>Which Cookies Do We Use?</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Essential Cookies:</strong> Required for our website to perform its core functions.</li>
        <li><strong>Performance Cookies:</strong> Used to analyze the performance and functionality of our site.</li>
        <li><strong>Targeting and Advertising Cookies:</strong> Deliver content and ads tailored to user preferences.</li>
      </ul>

      <h3>Managing Cookies</h3>
      <p>
        You can change your cookie preferences from your browser settings. If you don't accept cookie usage, some features of our site may not work properly.
      </p>

      <h3>Contact</h3>
      <p>
        <strong>Phone:</strong> +90 (0216) 484 18 00<br />
        <strong>E-mail:</strong> info@mabsan.com
      </p>
    </LegalLayout>
  );
}
