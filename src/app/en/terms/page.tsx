import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Mabsan website terms of use, service conditions and legal responsibilities.",
  alternates: {
    canonical: "/en/terms",
    languages: { tr: "/hizmetler-ve-sartlar", en: "/en/terms" },
  },
  robots: { index: true, follow: false },
};

export default function TermsPageEN() {
  return (
    <LegalLayout title="Terms of Service">
      <p>
        Since 1988 we have been delivering quality, reliable services to our customers. These Terms of Service set out the rules for using our website. By using our website, you are deemed to have accepted these terms.
      </p>

      <h3>Use of Service</h3>
      <p>
        You may use our site only for lawful and ethical purposes. Actions that would harm the website or violate the rights of third parties are prohibited.
      </p>

      <h3>Intellectual Property</h3>
      <p>
        All content on the website belongs to Mabsan Oluklu Mukavva Kutu Sanayi A.Ş. Copying or commercial use of any content without written permission is prohibited.
      </p>

      <h3>Disclaimer</h3>
      <p>
        Information on our website is provided as-is. We make no warranty as to the accuracy or completeness of this information. Users access and use it at their own risk.
      </p>

      <h3>Third-Party Links</h3>
      <p>
        Third-party links on our site are for informational purposes only. We have no control over the content or policies of those sites.
      </p>

      <h3>Right to Change</h3>
      <p>
        These terms may be changed without prior notice. Changes take effect from the moment they are published on our website.
      </p>

      <h3>Contact</h3>
      <p>
        <strong>Phone:</strong> +90 (0216) 484 18 00<br />
        <strong>E-mail:</strong> info@mabsan.com
      </p>
    </LegalLayout>
  );
}
