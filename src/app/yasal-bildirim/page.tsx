import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Yasal Bildirim",
  description:
    "Mabsan Oluklu Mukavva Kutu Sanayi A.Ş. yasal bildirim, telif hakkı ve fikri mülkiyet bilgileri.",
  alternates: { canonical: "/yasal-bildirim" },
  robots: { index: true, follow: false },
};

export default function YasalBildirimPage() {
  return (
    <LegalLayout title="Yasal Bildirim">
      <p>
        1988 yılından bu yana ulusal ve uluslararası müşterilere sunduğumuz hizmetlerimizde, ilgili tüm yasal düzenlemelere ve sektörel standartlara uygun hareket etmekteyiz.
      </p>

      <h3>Telif Hakkı ve Fikri Mülkiyet Hakları</h3>
      <p>
        Bu web sitesinde yer alan tüm içerik, görseller, metinler, logolar ve diğer materyaller, aksi belirtilmedikçe Mabsan Oluklu Mukavva Kutu Sanayi A.Ş.&apos;ye ait olup, tüm telif hakları saklıdır.
      </p>

      <h3>Gizlilik Politikası</h3>
      <p>
        Web sitemizi ziyaret eden kullanıcılarımızın gizliliği bizim için önceliklidir. Kişisel veriler, 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında işlenmektedir.
      </p>

      <h3>Kullanım Şartları</h3>
      <p>
        Bu web sitesini kullanarak, kullanım şartlarımızı kabul etmiş sayılırsınız. Web sitesinde sunulan bilgiler ve hizmetler, önceden bildirimde bulunulmaksızın değiştirilebilir.
      </p>

      <h3>Sorumluluk Reddi</h3>
      <p>
        Bu web sitesinde yer alan bilgilerin güncel ve doğru olması için azami çaba gösterilmekle birlikte, içeriğin doğruluğu, eksiksizliği veya kullanım sonucunda doğabilecek herhangi bir zarardan Mabsan sorumlu tutulamaz.
      </p>

      <h3>İletişim</h3>
      <p>
        <strong>Telefon:</strong> +90 (0216) 484 18 00<br />
        <strong>E-posta:</strong> info@mabsan.com<br />
        <strong>Adres:</strong> Büyükbakkalköy, Kaşif Sk. No: 15, 34858 Maltepe / İstanbul
      </p>
    </LegalLayout>
  );
}
