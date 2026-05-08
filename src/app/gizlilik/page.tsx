import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Mabsan kişisel verilerin korunması ve gizlilik politikası. KVKK kapsamında veri toplama, işleme, saklama ve haklarınız hakkında detaylı bilgi.",
  alternates: { canonical: "/gizlilik" },
  robots: { index: true, follow: false },
};

export default function GizlilikPage() {
  return (
    <LegalLayout title="Gizlilik Politikası">
      <p>
        1988 yılından bu yana ulusal ve uluslararası müşterilerimize sunduğumuz hizmetlerde gizlilik, güvenlik ve şeffaflık ilkesini önceliğimiz olarak görmekteyiz. Bu Gizlilik Politikası, kişisel verilerinizin nasıl toplandığını, işlendiğini ve korunduğunu açıklamaktadır.
      </p>

      <h3>Kişisel Verilerin Toplanması ve Kullanımı</h3>
      <p>
        Web sitemizi ziyaret ettiğinizde, tarafınızdan sağlanan ya da otomatik olarak toplanan kişisel veriler, hizmetlerimizi geliştirmek ve sizinle daha iyi iletişim kurmak amacıyla işlenir. Toplanan veriler arasında isim, e-posta adresi, telefon numarası gibi bilgiler yer alabilir.
      </p>

      <h3>Kişisel Verilerin İşlenme Amaçları</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Sunduğumuz hizmetlerin kalitesini artırmak ve size özelleştirilmiş çözümler sunmak,</li>
        <li>Sizinle iletişim kurmak ve talep ettiğiniz bilgileri sağlamak,</li>
        <li>İlgili yasal düzenlemelere uygun yükümlülüklerimizi yerine getirmek.</li>
      </ul>

      <h3>Veri Güvenliği</h3>
      <p>
        Kişisel verilerinizin güvenliğini sağlamak adına en güncel güvenlik önlemleri ve teknolojiler kullanılmaktadır. Verileriniz yetkisiz erişim, kayıp, kötüye kullanım veya izinsiz değişikliklere karşı korunmaktadır.
      </p>

      <h3>Üçüncü Taraflarla Paylaşım</h3>
      <p>
        Kişisel verileriniz, açık rızanız olmaksızın üçüncü taraflarla paylaşılmamaktadır. Ancak, yasal zorunluluklar veya hizmet sağlayıcılarla iş birliği gereği belirli durumlarda veri paylaşımı yapılabilir.
      </p>

      <h3>Haklarınız (KVKK)</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
        <li>Düzeltilmesini veya silinmesini talep etme,</li>
        <li>İşleme faaliyetlerine ilişkin bilgi alma,</li>
        <li>Verilerinizin işlenmesine itiraz etme.</li>
      </ul>

      <h3>İletişim</h3>
      <p>
        <strong>Telefon:</strong> +90 (0216) 484 18 00<br />
        <strong>E-posta:</strong> info@mabsan.com<br />
        <strong>Adres:</strong> Büyükbakkalköy, Kaşif Sk. No: 15, 34858 Maltepe / İstanbul
      </p>
    </LegalLayout>
  );
}
