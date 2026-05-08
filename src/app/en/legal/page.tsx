import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Legal Notice",
  description:
    "Mabsan Oluklu Mukavva Kutu Sanayi A.Ş. legal notice, copyright and intellectual property information.",
  alternates: {
    canonical: "/en/legal",
    languages: { tr: "/yasal-bildirim", en: "/en/legal" },
  },
  robots: { index: true, follow: false },
};

export default function LegalNoticePageEN() {
  return (
    <LegalLayout title="Legal Notice">
      <p>
        In the services we have offered to national and international customers since 1988, we act in accordance with all applicable legal regulations and industry standards.
      </p>

      <h3>Copyright and Intellectual Property Rights</h3>
      <p>
        All content, images, text, logos and other materials on this website belong to Mabsan Oluklu Mukavva Kutu Sanayi A.Ş. unless otherwise stated, and all copyrights are reserved.
      </p>

      <h3>Privacy Policy</h3>
      <p>
        The privacy of users visiting our website is a top priority for us. Personal data is processed in accordance with the Turkish Personal Data Protection Law No. 6698 (KVKK).
      </p>

      <h3>Terms of Use</h3>
      <p>
        By using this website, you are deemed to have accepted our terms of use. Information and services offered on the website may be changed without prior notice.
      </p>

      <h3>Disclaimer</h3>
      <p>
        While every effort is made to keep the information on this website accurate and up to date, Mabsan cannot be held responsible for the accuracy or completeness of the content, or for any damages that may arise from its use.
      </p>

      <h3>Contact</h3>
      <p>
        <strong>Phone:</strong> +90 (0216) 484 18 00<br />
        <strong>E-mail:</strong> info@mabsan.com<br />
        <strong>Address:</strong> Büyükbakkalköy, Kaşif Sk. No: 15, 34858 Maltepe / Istanbul
      </p>
    </LegalLayout>
  );
}
