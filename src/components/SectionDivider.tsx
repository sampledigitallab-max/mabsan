/**
 * Orijinal Mabsan section başlık çizgisi.
 * dotPosition: "left" → ●━━━━ Başlık (sonraki section'a giriş)
 *              "right" → Başlık ━━━━ ● (mevcut section başlığı)
 */
export default function SectionDivider({
  label,
  dotPosition = "right",
  className = "",
}: {
  label: string;
  dotPosition?: "left" | "right";
  className?: string;
}) {
  const dot = (
    <span className="w-3 h-3 rounded-full bg-red-bright shadow-[0_0_12px_rgba(250,0,0,0.8)] flex-shrink-0" />
  );
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {dotPosition === "left" && dot}
      {dotPosition === "left" && (
        <>
          <span className="font-anybody-bold italic text-white text-2xl md:text-3xl whitespace-nowrap">
            {label}
          </span>
          <span className="flex-1 h-px bg-white/40" />
        </>
      )}
      {dotPosition === "right" && (
        <>
          <span className="font-anybody-bold italic text-white text-2xl md:text-3xl whitespace-nowrap">
            {label}
          </span>
          <span className="flex-1 h-px bg-white/40" />
          {dot}
        </>
      )}
    </div>
  );
}
