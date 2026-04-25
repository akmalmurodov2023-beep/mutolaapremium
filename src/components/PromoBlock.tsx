import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface PromoBlockProps {
  variant?: "light" | "dark";
  size?: "md" | "lg";
  fullWidth?: boolean;
}

export function PromoBlock({
  variant = "light",
  size = "md",
  fullWidth = false,
}: PromoBlockProps) {
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
        // Mobile: full width row; desktop: inline
        fullWidth ? "flex w-full" : "inline-flex w-full sm:w-auto",
        "items-center gap-2 rounded-2xl border-2 border-dashed p-2 sm:gap-3 sm:p-3",
        isDark
          ? "border-white/40 bg-white/10 backdrop-blur-sm"
          : "border-primary/50 bg-primary-soft",
      ].join(" ")}
    >
      <div className="flex min-w-0 flex-1 flex-col px-2 sm:px-3">
        <span
          className={[
            "text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-[10px]",
            isDark ? "text-white/70" : "text-muted-foreground",
          ].join(" ")}
        >
          Promokod
        </span>
        <span
          className={[
            "font-display font-extrabold tabular-nums leading-none",
            isLg ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl lg:text-3xl",
            isDark ? "text-white" : "text-ink",
          ].join(" ")}
          style={{ letterSpacing: "0.05em" }}
        >
          AKMAL20
        </span>
      </div>
      <button
        onClick={handleCopy}
        className={[
          "shrink-0 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all active:scale-95 sm:px-5 sm:py-3 sm:text-sm",
          copied
            ? "bg-emerald-500 text-white"
            : isDark
              ? "bg-white text-ink hover:bg-white/90"
              : "bg-primary text-primary-foreground hover:opacity-90",
        ].join(" ")}
        aria-label="Promokodni nusxalash"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        <span className="hidden xs:inline sm:inline">
          {copied ? "Nusxalandi" : "Nusxalash"}
        </span>
        <span className="xs:hidden sm:hidden">{copied ? "OK" : "Olish"}</span>
      </button>
    </div>
  );
}
