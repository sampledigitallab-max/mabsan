import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Mabsan personal data protection and privacy policy. Detailed information on data collection, processing, storage and your rights under GDPR / KVKK.",
  alternates: {
    canonical: "/en/privacy",
    languages: { tr: "/gizlilik", en: "/en/privacy" },
  },
  robots: { index: true, follow: false },
};

export default function PrivacyPageEN() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        In the services we have offered to our national and international customers since 1988, we treat privacy, security and transparency as our top priorities. This Privacy Policy explains how your personal data is collected, processed and protected.
      </p>

      <h3>Collection and Use of Personal Data</h3>
      <p>
        When you visit our website, the personal data you provide or that is automatically collected is processed to improve our services and communicate with you more effectively. The data collected may include information such as your name, e-mail address and phone number.
      </p>

      <h3>Purposes of Processing Personal Data</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>To improve the quality of our services and offer you tailored solutions,</li>
        <li>To communicate with you and provide the information you request,</li>
        <li>To fulfill our obligations in line with applicable legal regulations.</li>
      </ul>

      <h3>Data Security</h3>
      <p>
        Up-to-date security measures and technologies are used to protect your personal data. Your data is safeguarded against unauthorized access, loss, misuse and unauthorized changes.
      </p>

      <h3>Sharing with Third Parties</h3>
      <p>
        Your personal data is not shared with third parties without your explicit consent. However, data may be shared in certain cases due to legal obligations or in collaboration with our service providers.
      </p>

      <h3>Your Rights (KVKK)</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>To learn whether your personal data is being processed,</li>
        <li>To request rectification or deletion,</li>
        <li>To obtain information about the processing activities,</li>
        <li>To object to the processing of your data.</li>
      </ul>

      <h3>Contact</h3>
      <p>
        <strong>Phone:</strong> +90 (0216) 484 18 00<br />
        <strong>E-mail:</strong> info@mabsan.com<br />
        <strong>Address:</strong> Büyükbakkalköy, Kaşif Sk. No: 15, 34858 Maltepe / Istanbul
      </p>
    </LegalLayout>
  );
}
