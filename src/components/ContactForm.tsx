"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { usePathname } from "next/navigation";
import { getLangFromPath } from "@/lib/i18n";

const dict = {
  tr: {
    name: "Ad Soyad",
    phone: "Telefon",
    company: "Firma Adı",
    email: "E-Mail",
    message: "Mesaj",
    send: "Gönder",
    sending: "Gönderiliyor…",
    sent: "Mesajınız alındı",
  },
  en: {
    name: "Full Name",
    phone: "Phone",
    company: "Company",
    email: "E-Mail",
    message: "Message",
    send: "Send",
    sending: "Sending…",
    sent: "Your message has been received",
  },
} as const;

export default function ContactForm() {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const t = dict[lang];

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 4000);
  }

  const inputClass =
    "w-full bg-white border-2 border-red-bright/50 hover:border-red-bright focus:border-red-bright focus:outline-none text-black px-6 py-4 rounded-full transition placeholder:text-black/40 font-anybody italic shadow-[0_2px_10px_rgba(0,0,0,0.04)]";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input required name="name" type="text" placeholder={t.name} className={inputClass} />
        <input name="phone" type="tel" placeholder={t.phone} className={inputClass} />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input name="company" type="text" placeholder={t.company} className={inputClass} />
        <input required name="email" type="email" placeholder={t.email} className={inputClass} />
      </div>

      <textarea
        required
        name="message"
        rows={5}
        placeholder={t.message}
        className="w-full bg-white border-2 border-red-bright/50 hover:border-red-bright focus:border-red-bright focus:outline-none text-black px-6 py-4 rounded-3xl transition resize-none placeholder:text-black/40 font-anybody italic shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
      />

      <button
        type="submit"
        disabled={status !== "idle"}
        className="w-full bg-gradient-to-r from-red-bright to-red-mid hover:to-red-bright disabled:opacity-60 text-white py-4 rounded-full font-anybody italic text-xl transition shadow-[0_4px_25px_rgba(250,0,0,0.45)] hover:shadow-[0_6px_35px_rgba(250,0,0,0.6)]"
      >
        {status === "sent" ? (
          <span className="inline-flex items-center justify-center gap-2">
            <Check size={20} /> {t.sent}
          </span>
        ) : status === "sending" ? (
          t.sending
        ) : (
          t.send
        )}
      </button>
    </form>
  );
}
