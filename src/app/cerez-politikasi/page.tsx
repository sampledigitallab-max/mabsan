import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Mabsan web sitesinin çerez kullanımı, çerez türleri ve tarayıcı ayarlarınızı yönetme rehberi.",
  alternates: { canonical: "/cerez-politikasi" },
  robots: { index: true, follow: false },
};

export default function CerezPolitikasiPage() {
  return (
    <LegalLayout title="Çerez Politikası">
      <p>
        Mabsan Oluklu Mukavva Kutu Sanayi A.Ş. olarak, web sitemizi ziyaret eden kullanıcıların deneyimini geliştirmek ve hizmetlerimizi optimize etmek amacıyla çerezler kullanmaktayız.
      </p>

      <h3>Çerez Nedir?</h3>
      <p>
        Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza yerleştirilen küçük metin dosyalarıdır. Bu dosyalar, kullanıcı tercihlerinizi hatırlamamıza ve site performansını iyileştirmemize yardımcı olur.
      </p>

      <h3>Hangi Çerezleri Kullanıyoruz?</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Zorunlu Çerezler:</strong> Web sitemizin temel işlevlerini yerine getirmesi için gereklidir.</li>
        <li><strong>Performans Çerezleri:</strong> Sitemizin performansını ve işlevselliğini analiz etmek için kullanılır.</li>
        <li><strong>Hedefleme ve Reklam Çerezleri:</strong> Kullanıcı tercihlerine göre özelleştirilmiş içerikler ve reklamlar sunar.</li>
      </ul>

      <h3>Çerezlerin Yönetimi</h3>
      <p>
        Çerez tercihlerinizi tarayıcı ayarlarınızdan değiştirebilirsiniz. Çerez kullanımını kabul etmediğiniz takdirde, sitemizin bazı işlevleri düzgün çalışmayabilir.
      </p>

      <h3>İletişim</h3>
      <p>
        <strong>Telefon:</strong> +90 (0216) 484 18 00<br />
        <strong>E-posta:</strong> info@mabsan.com
      </p>
    </LegalLayout>
  );
}
