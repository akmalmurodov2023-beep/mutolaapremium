import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface PromoBlockProps {
  variant?: "light" | "dark";
  size?: "md" | "lg";
}

export function PromoBlock({ variant = "light", size = "md" }: PromoBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("AKMAL20");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const isDark = variant === "dark";
  const isLg = size === "lg";

  return (
    <div
      className={[
        "inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-3 rounded-2xl border-2 border-dashed p-3 sm:p-4",
        isDark
          ? "border-white/40 bg-white/10 backdrop-blur-sm"
          : "border-primary/50 bg-primary-soft",
      ].join(" ")}
    >
      <div className="flex flex-col px-2">
        <span
          className={[
            "text-[10px] font-semibold uppercase tracking-[0.18em]",
            isDark ? "text-white/70" : "text-muted-foreground",
          ].join(" ")}
        >
          Promokod
        </span>
        <span
          className={[
            "font-display font-extrabold tabular-nums",
            isLg ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
            isDark ? "text-white" : "text-ink",
          ].join(" ")}
          style={{ letterSpacing: "0.06em" }}
        >
          AKMAL20
        </span>
      </div>
      <button
        onClick={handleCopy}
        className={[
          "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all active:scale-95",
          copied
            ? "bg-emerald-500 text-white"
            : isDark
              ? "bg-white text-ink hover:bg-white/90"
              : "bg-primary text-primary-foreground hover:opacity-90",
        ].join(" ")}
        aria-label="Promokodni nusxalash"
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
        {copied ? "Nusxalandi" : "Nusxalash"}
      </button>
    </div>
  );
}
