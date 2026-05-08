import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Maltepe / Istanbul Production Facility",
  description:
    "Get in touch with Mabsan: +90 (216) 484 18 00 | info@mabsan.com | Büyükbakkalköy Kaşif Sk. No: 15, 34858 Maltepe / Istanbul. Contact form for quote requests.",
  alternates: {
    canonical: "/en/contact",
    languages: { tr: "/iletisim", en: "/en/contact" },
  },
};

export default function ContactPageEN() {
  return (
    <>
      <PageHero title="Contact" />

      {/* CONTACT — left info + right form */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-x">
          <Reveal>
            <h2 className="font-anybody-bold italic text-white text-2xl md:text-3xl lg:text-4xl text-center mb-12 md:mb-16 text-balance">
              Get in touch with us for collaboration and inquiries.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-14 items-start">
            {/* LEFT — 3 icons + info */}
            <Reveal>
              <div className="space-y-8 md:pt-4">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full border-2 border-red-bright/50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <a
                    href="tel:+902164841800"
                    className="font-anybody italic text-white/85 hover:text-red-bright transition text-base md:text-lg"
                  >
                    +90 (0216) 484 18 00
                  </a>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full border-2 border-red-bright/50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <a
                    href="mailto:info@mabsan.com"
                    className="font-anybody italic text-white/85 hover:text-red-bright transition text-base md:text-lg"
                  >
                    info@mabsan.com
                  </a>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full border-2 border-red-bright/50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <address className="not-italic font-anybody italic text-white/85 text-base md:text-lg leading-relaxed">
                    Büyükbakkalköy, Kaşif Sk.<br />
                    No: 15, 34858 Maltepe<br />
                    Istanbul / Türkiye
                  </address>
                </div>
              </div>
            </Reveal>

            {/* RIGHT — ContactForm */}
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="bg-black pb-20 md:pb-28">
        <div className="container-x">
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.825!2d29.1!3d40.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac0000000000%3A0x0!2sB%C3%BCy%C3%BCkbakkalk%C3%B6y%2C%20Maltepe%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mabsan — Maltepe / Istanbul"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
