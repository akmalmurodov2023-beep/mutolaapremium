import { Apple, Play, Smartphone } from "lucide-react";

const LINKS = {
  appStore: "https://apps.apple.com/uz/app/mutolaa/id6475738561",
  googlePlay:
    "https://play.google.com/store/apps/details?id=uz.mutolaa.commercial.mutolaa",
  appGallery: "https://appgallery.huawei.com/app/C112126107",
};

interface StoreButtonsProps {
  variant?: "light" | "dark";
  showAppGallery?: boolean;
  /** Mobile: full-width stacked buttons. Desktop: inline. */
  stack?: boolean;
}

export function StoreButtons({
  variant = "light",
  showAppGallery = false,
  stack = true,
}: StoreButtonsProps) {
  const isDark = variant === "dark";
  const base =
    "inline-flex items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 active:scale-[0.98] shadow-soft";
  const widthCls = stack ? "w-full sm:w-auto" : "";
  const primaryStyle = isDark
    ? "bg-white text-ink hover:bg-white/90"
    : "bg-ink text-white hover:bg-ink/90";
  const secondaryStyle = isDark
    ? "bg-white/15 text-white border border-white/30 backdrop-blur-sm hover:bg-white/25"
    : "bg-white text-ink border border-border hover:border-primary/50";

  return (
    <div className={`flex ${stack ? "flex-col sm:flex-row" : "flex-row"} flex-wrap gap-3`}>
      <a
        href={LINKS.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${primaryStyle} ${widthCls}`}
      >
        <Apple size={22} />
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[10px] opacity-70">Yuklab oling</span>
          <span>App Store</span>
        </div>
      </a>
      <a
        href={LINKS.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${primaryStyle} ${widthCls}`}
      >
        <Play size={22} />
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[10px] opacity-70">Yuklab oling</span>
          <span>Google Play</span>
        </div>
      </a>
      {showAppGallery && (
        <a
          href={LINKS.appGallery}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${secondaryStyle} ${widthCls}`}
        >
          <Smartphone size={22} />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[10px] opacity-70">Yuklab oling</span>
            <span>App Gallery</span>
          </div>
        </a>
      )}
    </div>
  );
}
