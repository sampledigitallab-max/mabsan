import type { Lang } from "@/lib/i18n";

export type SectorSpec = { label: string; value: string };

export type Sector = {
  slug: string;        // TR slug
  enSlug: string;      // EN slug
  name: string;
  enName: string;
  shortTitle: string;
  enShortTitle: string;
  header: string;
  enHeader: string;
  info: string;
  enInfo: string;
  video: string;
  photo: string;
  blueprint: string;
  render3d: string;
  specs: SectorSpec[];     // TR
  enSpecs: SectorSpec[];   // EN
  closure: "Yapışkanlı" | "Kilitli";
};

export const sectors: Sector[] = [
  {
    slug: "eticaret",
    enSlug: "e-commerce",
    name: "E-Ticaret",
    enName: "E-Commerce",
    shortTitle: "E-Ticaret",
    enShortTitle: "E-Commerce",
    header: "E-Ticaret Ürünleri",
    enHeader: "E-Commerce Products",
    info: "Koşullar ne olursa olsun satışın 7/24 devam etmesi gereken e-ticaret sektöründe hız ve güven kilit önem taşır. E-ticaret uzmanlığımızla, online işletmeniz ve müşterileriniz için güvenilir, yenilikçi ve sürdürülebilir çözümler sunacağımıza güvenebilirsiniz.",
    enInfo: "In an e-commerce sector where sales must continue 24/7 under any conditions, speed and reliability are essential. With our e-commerce expertise, you can count on us to deliver reliable, innovative and sustainable solutions for your online business and your customers.",
    video: "eticaret.mp4",
    photo: "kutu_1.jpg",
    blueprint: "sektor_eticaret_teknik.png",
    render3d: "sektor_eticaret_3d.png",
    specs: [
      { label: "En", value: "110 mm" },
      { label: "Boy", value: "130 mm" },
      { label: "Yükseklik", value: "60 mm" },
      { label: "Kutu ve kapak", value: "" },
      { label: "4 nokta yapıştırma", value: "" },
    ],
    enSpecs: [
      { label: "Width", value: "110 mm" },
      { label: "Length", value: "130 mm" },
      { label: "Height", value: "60 mm" },
      { label: "Box and lid", value: "" },
      { label: "4-point gluing", value: "" },
    ],
    closure: "Yapışkanlı",
  },
  {
    slug: "endustriyel",
    enSlug: "industrial",
    name: "Endüstriyel",
    enName: "Industrial",
    shortTitle: "Endüstriyel",
    enShortTitle: "Industrial",
    header: "Endüstriyel Ürünleri",
    enHeader: "Industrial Products",
    info: "Endüstriyel pazarda ürünün güvenliği her şeyden önemlidir. Ağır ve hantal ürünlerden tehlikeli maddelere kadar, endüstriyel ürünlerin lojistik zorluklarına dayanabilecek esnek seçenekler sunmak kritik önem taşır. Bu nedenle oluklu mukavva çözümlerimiz, nakliye sırasında dayanıklılık ve güvenilirlik sağlamak için kapsamlı testlerden geçirilir.",
    enInfo: "In the industrial market, product safety is paramount. From heavy and bulky goods to hazardous materials, it's critical to offer flexible options that can withstand the logistical challenges of industrial products. That's why our corrugated solutions go through extensive testing to ensure durability and reliability during transport.",
    video: "endustriyel.mp4",
    photo: "kutu_2.jpg",
    blueprint: "sektor_endustriyel_teknik.png",
    render3d: "sektor_endustriyel_3d.png",
    specs: [
      { label: "En", value: "110 mm" },
      { label: "Boy", value: "130 mm" },
      { label: "Yükseklik", value: "60 mm" },
      { label: "Kilitli kurulum", value: "" },
      { label: "Dayanıklı çift duvar", value: "" },
    ],
    enSpecs: [
      { label: "Width", value: "110 mm" },
      { label: "Length", value: "130 mm" },
      { label: "Height", value: "60 mm" },
      { label: "Slot-lock build", value: "" },
      { label: "Durable double wall", value: "" },
    ],
    closure: "Kilitli",
  },
  {
    slug: "perakende",
    enSlug: "retail",
    name: "Perakende",
    enName: "Retail",
    shortTitle: "Perakende",
    enShortTitle: "Retail",
    header: "Perakende Ürünleri",
    enHeader: "Retail Products",
    info: "Günümüz tüketicilerinin satın alma kararlarında paketlemenin gücü tartışılmaz. Sadece tasarım değil güvenli ve kullanıcı davranışlarının hesaba katıldığı paketlemeler satışlarda büyük farklar yaratır. Ulusal ve uluslararası pek çok perakende markasıyla edindiğimiz deneyimimize güvenebilirsiniz.",
    enInfo: "Packaging plays an undeniable role in shoppers' purchasing decisions today. Beyond visual design, packaging that is safe and accounts for user behavior makes a meaningful difference at the shelf. You can rely on our experience built with many national and international retail brands.",
    video: "perakende.mp4",
    photo: "kutu_3.jpg",
    blueprint: "sektor_perakende_teknik.png",
    render3d: "sektor_perakende_3d.png",
    specs: [
      { label: "En", value: "150 mm" },
      { label: "Boy", value: "130 mm" },
      { label: "Yükseklik", value: "90 mm" },
      { label: "Kilitli kurulum", value: "" },
      { label: "Ergonomik gövde", value: "" },
    ],
    enSpecs: [
      { label: "Width", value: "150 mm" },
      { label: "Length", value: "130 mm" },
      { label: "Height", value: "90 mm" },
      { label: "Slot-lock build", value: "" },
      { label: "Ergonomic body", value: "" },
    ],
    closure: "Kilitli",
  },
  {
    slug: "kozmetik",
    enSlug: "cosmetics",
    name: "Kozmetik",
    enName: "Cosmetics",
    shortTitle: "Kozmetik",
    enShortTitle: "Cosmetics",
    header: "Kozmetik Ürünleri",
    enHeader: "Cosmetics Products",
    info: "Rekabetin yüksek olduğu kozmetik pazarında, markaların mevcut ve yeni tüketicilerin akıllarında kalması zorlaşıyor. Bu da görsel ve doku alanında sürekli inovasyona ihtiyaç duyulmasına neden oluyor. Güvenilir ve yaratıcı bir iş ortağı olarak, ürünlerinizin öne çıkmasına yardımcı olmak için yanınızdayız.",
    enInfo: "In a highly competitive cosmetics market, staying memorable to existing and new consumers is harder than ever — driving the constant need for innovation in visuals and texture. As a reliable, creative partner, we stand by you to help your products stand out.",
    video: "kozmetik.mp4",
    photo: "kutu_4.jpg",
    blueprint: "sektor_kozmetik_teknik.png",
    render3d: "sektor_kozmetik_3d.png",
    specs: [
      { label: "En", value: "540 mm" },
      { label: "Boy", value: "430 mm" },
      { label: "Yükseklik", value: "980 mm" },
      { label: "Kolay kurulum", value: "" },
      { label: "Dayanıklı gövde", value: "" },
    ],
    enSpecs: [
      { label: "Width", value: "540 mm" },
      { label: "Length", value: "430 mm" },
      { label: "Height", value: "980 mm" },
      { label: "Easy assembly", value: "" },
      { label: "Durable body", value: "" },
    ],
    closure: "Yapışkanlı",
  },
  {
    slug: "yasmeyvesebze",
    enSlug: "fresh-produce",
    name: "Yaş Meyve-Sebze",
    enName: "Fresh Produce",
    shortTitle: "Yaş Meyve-Sebze",
    enShortTitle: "Fresh Produce",
    header: "Yaş Meyve-Sebze Ürünleri",
    enHeader: "Fresh Produce Packaging",
    info: "Tedarik zinciri boyunca bozulmaya karşı koruma gerektiren yüksek hacimli yaş meyve-sebze ürünlerinde, güçlü ve güvenilir paketleme çözümleri kullanmak çok önemlidir. Her ürün türü için özenle tasarlanmış kâğıt bazlı çözümlerimiz, sürdürülebilirlik vaadimizi yerine getirirken, gıda ürünlerini korumak için tasarlanmış, test edilmiş ve üretilmiştir.",
    enInfo: "For high-volume fresh produce that needs spoilage protection across the supply chain, strong and reliable packaging is critical. Carefully designed for each produce type, our paper-based solutions deliver on our sustainability promise while being engineered, tested and produced to protect food products.",
    video: "yasmeyvesebze.mp4",
    photo: "kutu_5.jpg",
    blueprint: "sektor_yasmeyvesebze_teknik.png",
    render3d: "sektor_yasmeyvesebze_3d.png",
    specs: [
      { label: "En", value: "540 mm" },
      { label: "Boy", value: "430 mm" },
      { label: "Yükseklik", value: "120 mm" },
      { label: "Kolay kurulum", value: "" },
      { label: "Dayanıklı gövde", value: "" },
    ],
    enSpecs: [
      { label: "Width", value: "540 mm" },
      { label: "Length", value: "430 mm" },
      { label: "Height", value: "120 mm" },
      { label: "Easy assembly", value: "" },
      { label: "Durable body", value: "" },
    ],
    closure: "Kilitli",
  },
  {
    slug: "fmcg",
    enSlug: "fmcg",
    name: "FMCG",
    enName: "FMCG",
    shortTitle: "FMCG",
    enShortTitle: "FMCG",
    header: "FMCG Ürünleri",
    enHeader: "FMCG Products",
    info: "Hızlı tüketim ürünlerinde ambalaj ve teşhirler, tüketicileri karar anlarında etkilemek için kritik araçlardır. Ürünlerinizin fark yaratması ve tedarik zincirinde verimliliği korumak için kapsamlı FMCG deneyimimizden yararlanıyoruz.",
    enInfo: "In fast-moving consumer goods, packaging and displays are essential tools for influencing shoppers at the moment of decision. We draw on our deep FMCG experience to help your products stand out — and to keep efficiency high across the supply chain.",
    video: "FMCG.mp4",
    photo: "kutu_6.jpg",
    blueprint: "sektor_fmcg_teknik.png",
    render3d: "sektor_fmcg_3d.png",
    specs: [
      { label: "En", value: "420 mm" },
      { label: "Boy", value: "95 mm" },
      { label: "Yükseklik", value: "120 mm" },
      { label: "3 nokta yapıştırma", value: "" },
      { label: "Kolay kurulum", value: "" },
    ],
    enSpecs: [
      { label: "Width", value: "420 mm" },
      { label: "Length", value: "95 mm" },
      { label: "Height", value: "120 mm" },
      { label: "3-point gluing", value: "" },
      { label: "Easy assembly", value: "" },
    ],
    closure: "Yapışkanlı",
  },
  {
    slug: "otomotiv",
    enSlug: "automotive",
    name: "Otomotiv",
    enName: "Automotive",
    shortTitle: "Otomotiv",
    enShortTitle: "Automotive",
    header: "Otomotiv Ürünleri",
    enHeader: "Automotive Products",
    info: "İster küçük ister büyük, ister hafif ister ağır bileşenleri paketliyor olalım, amaca uygun ve sürdürülebilir paketleme çözümleri sunmak için kanıtlanmış bilimsel yöntemler kullanıyoruz. Sürtünmeye ve korozyona dayanıklı paketler de dahil olmak üzere ürün yelpazemiz, tedarik zincirinizin fiziksel gereksinimlerini karşılamak için tasarlanmıştır.",
    enInfo: "Whether we're packaging small or large, light or heavy components, we apply proven scientific methods to deliver fit-for-purpose, sustainable packaging solutions. Our range — including friction- and corrosion-resistant packaging — is designed to meet the physical demands of your supply chain.",
    video: "otomotiv.mp4",
    photo: "kutu_7.jpg",
    blueprint: "sektor_otomotiv_teknik.png",
    render3d: "sektor_otomotiv_3d.png",
    specs: [
      { label: "En", value: "420 mm" },
      { label: "Boy", value: "230 mm" },
      { label: "Yükseklik", value: "120 mm" },
      { label: "Seperatörlü", value: "" },
      { label: "1 nokta yapıştırma", value: "" },
    ],
    enSpecs: [
      { label: "Width", value: "420 mm" },
      { label: "Length", value: "230 mm" },
      { label: "Height", value: "120 mm" },
      { label: "With separator", value: "" },
      { label: "1-point gluing", value: "" },
    ],
    closure: "Yapışkanlı",
  },
  {
    slug: "takeaway",
    enSlug: "take-away",
    name: "Take-Away",
    enName: "Take-Away",
    shortTitle: "Take-Away",
    enShortTitle: "Take-Away",
    header: "Take-Away Ürünleri",
    enHeader: "Take-Away Products",
    info: "Fast-food zincirlerinden fine dining restoranlarına kadar günümüzün yeme-içme sektöründe hizmet verenler çevresel etkilerini önemsiyor; plastik yerine kâğıt bazlı paketleri tercih ediyor. Take-away veya paket servislerinizde müşterilerinizin memnuniyetini garantiye almak için bize güvenebilirsiniz.",
    enInfo: "From fast-food chains to fine-dining restaurants, today's foodservice operators care about their environmental footprint and choose paper-based packaging over plastic. You can count on us to ensure customer satisfaction in your take-away or delivery service.",
    video: "takeaway.mp4",
    photo: "kutu_8.jpg",
    blueprint: "sektor_takeaway_teknik.png",
    render3d: "sektor_takeaway_3d.png",
    specs: [
      { label: "En", value: "350 mm" },
      { label: "Boy", value: "360 mm" },
      { label: "Yükseklik", value: "95 mm" },
      { label: "4 nokta yapıştırma", value: "" },
      { label: "Kolay kurulum", value: "" },
    ],
    enSpecs: [
      { label: "Width", value: "350 mm" },
      { label: "Length", value: "360 mm" },
      { label: "Height", value: "95 mm" },
      { label: "4-point gluing", value: "" },
      { label: "Easy assembly", value: "" },
    ],
    closure: "Yapışkanlı",
  },
];

/** Aktif dile göre sektörü slug ile bul. */
export const getSectorBySlug = (slug: string, lang: Lang = "tr") =>
  lang === "en"
    ? sectors.find((s) => s.enSlug === slug)
    : sectors.find((s) => s.slug === slug);

// ===== Mukavva (oluklu) dalga tipleri =====
export const waves = [
  {
    letter: "E",
    name: "E Dalga",
    enName: "E-Flute",
    desc: "En küçük dalga formuna sahip olan E-dalga, ince ve hafif ürün ihtiyacı olan müşterilerimiz için ideal bir çözüm sunar. Ambalaj, kutu ve karton üretiminde sıklıkla tercih edilir.",
    enDesc: "With the smallest flute profile, E-flute is an ideal choice for customers needing thin, lightweight packaging. Frequently preferred for packaging, boxes and cartons.",
  },
  {
    letter: "B",
    name: "B Dalga",
    enName: "B-Flute",
    desc: "Orta büyüklükteki dalga formuna sahip olan B-dalga, dayanıklılık gerektiren ürünler için sıklıkla kullanılır. Elektronik, beyaz eşya ve diğer sanayi ürünlerinin ambalajlanmasında tercih edilir.",
    enDesc: "With a medium flute profile, B-flute is widely used where durability is required — preferred for packaging electronics, white goods and other industrial products.",
  },
  {
    letter: "C",
    name: "C Dalga",
    enName: "C-Flute",
    desc: "Daha büyük dalga formuna sahip olan C-dalga, süpermarket ürünleri, endüstriyel ve tarımsal ürünlerin ambalajlanmasında kullanılır. Dayanıklılık ve koruma özellikleriyle ön plana çıkar.",
    enDesc: "With a larger flute profile, C-flute is used for supermarket goods and industrial or agricultural product packaging. Stands out for its strength and protective qualities.",
  },
  {
    letter: "A",
    name: "A Dalga",
    enName: "A-Flute",
    desc: "En büyük dalga formuna sahip olan A-dalga, özellikle ağır ve hacimli ürünlerin ambalajlanmasında kullanılır. Yüksek dayanıklılık sunar.",
    enDesc: "With the largest flute profile, A-flute is used especially for heavy and bulky product packaging. Provides high durability.",
  },
];

// ===== Kâğıt cinsleri =====
export const papers = [
  {
    name: "Kraft",
    enName: "Kraft",
    desc: "Doğal, kahverengi renkli ve yüksek dayanıklılığa sahip olan kraft kâğıt, oluklu mukavva üretiminde en sık kullanılan kâğıt türüdür. Mukavemet, nem ve yırtılma direnci özellikleriyle öne çıkar.",
    enDesc: "Natural, brown-colored kraft paper has high durability and is the most commonly used paper in corrugated production. Stands out for its strength and resistance to moisture and tearing.",
  },
  {
    name: "Beyaz",
    enName: "White",
    desc: "Beyaz renkli, düz ve pürüzsüz yüzeye sahip olan bu kâğıt türü, daha yüksek baskı kalitesi gerektiren ürünlerin üretiminde tercih edilir. Ambalaj ve kutu tasarımlarında kullanışlıdır.",
    enDesc: "With its smooth, white surface, this paper is preferred where higher print quality is required. Useful for packaging and box designs.",
  },
  {
    name: "Geri Dönüştürülmüş",
    enName: "Recycled",
    desc: "Çevre dostu bir seçenek olan geri dönüştürülmüş kâğıt, kaynak tasarrufu sağlaması ve sürdürülebilirlik ilkelerimize uygunluğu nedeniyle önem verdiğimiz bir hammaddedir.",
    enDesc: "An eco-friendly option, recycled paper saves resources and aligns with our sustainability principles — a raw material we particularly value.",
  },
  {
    name: "Özel Kaplı",
    enName: "Special-Coated",
    desc: "Yüzeyi özel kaplamalarla güçlendirilmiş olan bu kâğıt türü, neme, yağa veya suya karşı yüksek direnç sağlar. Gıda, ilaç ve elektronik ürün ambalajlarında sıklıkla kullanılır.",
    enDesc: "Surface-strengthened with special coatings, this paper provides high resistance to moisture, oil and water. Often used in food, pharmaceutical and electronics packaging.",
  },
];
