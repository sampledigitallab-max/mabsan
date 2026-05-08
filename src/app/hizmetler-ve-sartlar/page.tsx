import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Hizmet ve Şartlar",
  description:
    "Mabsan web sitesi kullanım koşulları, hizmet şartları ve yasal sorumluluklar.",
  alternates: { canonical: "/hizmetler-ve-sartlar" },
  robots: { index: true, follow: false },
};

export default function HizmetlerPage() {
  return (
    <LegalLayout title="Hizmet ve Şartlar">
      <p>
        1988 yılından bu yana müşterilerimize kaliteli ve güvenilir hizmetler sunuyoruz. Bu Hizmet ve Şartlar, web sitemizin kullanımına ilişkin kuralları belirler. Web sitemizi kullanarak bu şartları kabul etmiş sayılırsınız.
      </p>

      <h3>Hizmet Kullanımı</h3>
      <p>
        Sitemizi yalnızca yasal ve etik amaçlarla kullanabilirsiniz. Web sitesine zarar verecek veya üçüncü tarafların haklarını ihlal edecek eylemler yasaktır.
      </p>

      <h3>Fikri Mülkiyet</h3>
      <p>
        Web sitesindeki tüm içerik Mabsan Oluklu Mukavva Kutu Sanayi A.Ş.&apos;ye aittir. Yazılı izin olmadan içeriklerin kopyalanması veya ticari kullanımı yasaktır.
      </p>

      <h3>Sorumluluk Reddi</h3>
      <p>
        Web sitemizdeki bilgiler olduğu gibi sunulmaktadır. Bu bilgilerin doğruluğu veya eksiksizliği konusunda garanti verilmez. Kullanıcılar, bilgileri kendi sorumluluğunda kullanır.
      </p>

      <h3>Üçüncü Taraf Bağlantılar</h3>
      <p>
        Sitemizdeki üçüncü taraf bağlantılar bilgilendirme amaçlıdır. Bu sitelerin içeriği veya politikaları üzerinde kontrolümüz bulunmamaktadır.
      </p>

      <h3>Değişiklik Hakkı</h3>
      <p>
        Bu şartlar, önceden bildirim yapılmaksızın değiştirilebilir. Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer.
      </p>

      <h3>İletişim</h3>
      <p>
        <strong>Telefon:</strong> +90 (0216) 484 18 00<br />
        <strong>E-posta:</strong> info@mabsan.com
      </p>
    </LegalLayout>
  );
}
