"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FileText, Check, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import media from "@/media.json";
import { getLangFromPath } from "@/lib/i18n";

const m = media as Record<string, string>;

const dict = {
  tr: {
    name: "Ad-Soyad",
    phone: "Telefon",
    email: "E-mail",
    cv: "CV",
    bio: "Kendinden kısaca bahseder misin?",
    send: "Gönder",
    sending: "Gönderiliyor…",
    doneTitle: "Başvurun bize ulaştı.",
    doneText:
      "Teşekkür ederiz. CV'ni inceleyeceğiz; uygun pozisyon olduğunda insan kaynakları ekibimiz seninle iletişime geçecek.",
  },
  en: {
    name: "Full Name",
    phone: "Phone",
    email: "E-mail",
    cv: "CV",
    bio: "Tell us a bit about yourself",
    send: "Send",
    sending: "Sending…",
    doneTitle: "Your application has reached us.",
    doneText:
      "Thank you. We'll review your CV; if there's a suitable opening, our HR team will get in touch with you.",
  },
} as const;

export default function KariyerForm() {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const t = dict[lang];

  const fileRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="bg-white border border-red-bright/30 rounded-2xl p-10 md:p-16 text-center shadow-[0_4px_30px_rgba(0,0,0,0.06)]">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-bright/10 border border-red-bright/40 mb-5">
          <Check className="text-red-bright" size={28} />
        </div>
        <h3 className="font-anybody-bold italic text-3xl md:text-4xl text-black mb-3 text-balance">
          {t.doneTitle}
        </h3>
        <p className="text-black/60 leading-relaxed max-w-lg mx-auto">
          {t.doneText}
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
      {/* SOL — Pill rounded form alanları (beyaz BG'ye uygun) */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          required
          placeholder={t.name}
          className="w-full bg-white border-2 border-red-bright/50 hover:border-red-bright focus:border-red-bright focus:outline-none text-black px-6 py-4 rounded-full transition placeholder:text-black/40 font-anybody italic shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
        />

        <input
          type="tel"
          name="phone"
          required
          placeholder={t.phone}
          className="w-full bg-white border-2 border-red-bright/50 hover:border-red-bright focus:border-red-bright focus:outline-none text-black px-6 py-4 rounded-full transition placeholder:text-black/40 font-anybody italic shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
        />

        <input
          type="email"
          name="email"
          required
          placeholder={t.email}
          className="w-full bg-white border-2 border-red-bright/50 hover:border-red-bright focus:border-red-bright focus:outline-none text-black px-6 py-4 rounded-full transition placeholder:text-black/40 font-anybody italic shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
        />

        {/* CV — pill, sağda dosya ikonu */}
        <input
          ref={fileRef}
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          required
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="w-full flex items-center justify-between gap-3 bg-white border-2 border-red-bright/50 hover:border-red-bright focus:border-red-bright px-6 py-4 rounded-full text-left transition font-anybody italic shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
        >
          <span className={fileName ? "text-black" : "text-black/40"}>
            {fileName ?? t.cv}
          </span>
          <FileText size={18} className="text-black/60 shrink-0" />
        </button>

        {/* Textarea */}
        <textarea
          name="bio"
          required
          rows={3}
          placeholder={t.bio}
          className="w-full bg-white border-2 border-red-bright/50 hover:border-red-bright focus:border-red-bright focus:outline-none text-black px-6 py-4 rounded-3xl transition resize-none placeholder:text-black/40 font-anybody italic shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
        />

        {/* Gönder — kırmızı pill + sağda arrow */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-between gap-3 bg-gradient-to-r from-red-bright to-red-mid hover:to-red-bright disabled:opacity-60 text-white pl-8 pr-3 py-3 rounded-full font-anybody italic text-lg transition shadow-[0_4px_20px_rgba(250,0,0,0.35)] hover:shadow-[0_6px_30px_rgba(250,0,0,0.5)] min-w-[220px]"
          >
            <span>{submitting ? t.sending : t.send}</span>
            <span className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center">
              <ArrowRight size={18} />
            </span>
          </button>
        </div>
      </form>

      {/* SAĞ — workers_man figürü (siyah BG üstünde orijinal soluk wireframe) */}
      <div className="relative hidden md:block">
        {m["workers_man.svg"] && (
          <Image
            src={m["workers_man.svg"]}
            alt=""
            width={520}
            height={520}
            className="w-full h-auto opacity-90"
          />
        )}
      </div>
    </div>
  );
}
