import { useEffect, useState } from "react";
import { Copy, Check, ArrowDown } from "lucide-react";

/**
 * Sticky bottom bar shown on mobile only.
 * Appears after the user scrolls past the hero, hides on the final CTA section.
 */
export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const docH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      // show after 600px, hide near bottom (last 700px)
      const nearBottom = y + winH > docH - 700;
      setVisible(y > 600 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("AKMAL20");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div
      className={[
        "fixed inset-x-0 bottom-0 z-50 lg:hidden",
        "transition-transform duration-300 ease-out",
        visible ? "translate-y-0" : "translate-y-full",
      ].join(" ")}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-3 mb-3 flex items-center gap-2 rounded-2xl border border-border bg-card/95 p-2 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md">
        <button
          onClick={handleCopy}
          className={[
            "flex flex-1 items-center gap-2 rounded-xl border-2 border-dashed px-3 py-2 text-left transition-colors active:scale-[0.98]",
            copied ? "border-emerald-500/60 bg-emerald-50" : "border-primary/50 bg-primary-soft",
          ].join(" ")}
          aria-label="Promokodni nusxalash"
        >
          <div className="flex min-w-0 flex-1 flex-col leading-tight">
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Promokod
            </span>
            <span className="font-display text-base font-extrabold text-ink" style={{ letterSpacing: "0.05em" }}>
              AKMAL20
            </span>
          </div>
          {copied ? (
            <Check size={18} className="shrink-0 text-emerald-500" />
          ) : (
            <Copy size={18} className="shrink-0 text-primary" />
          )}
        </button>
        <a
          href="#qollanma"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft active:scale-95"
        >
          Qo'llanma
          <ArrowDown size={16} />
        </a>
      </div>
    </div>
  );
}
