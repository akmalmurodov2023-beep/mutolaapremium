import { Apple, Play, Smartphone } from "lucide-react";
import { useI18n } from "@/i18n/context";

const LINKS = {
  appStore: "https://apps.apple.com/uz/app/mutolaa/id6475738561",
  googlePlay:
    "https://play.google.com/store/apps/details?id=uz.mutolaa.commercial.mutolaa",
  appGallery: "https://appgallery.huawei.com/app/C112126107",
};

interface StoreButtonsProps {
  variant?: "light" | "dark";
  showAppGallery?: boolean;
}

export function StoreButtons({ variant = "light", showAppGallery = false }: StoreButtonsProps) {
  const { t } = useI18n();
  const isDark = variant === "dark";
  const base =
    "inline-flex items-center gap-3 rounded-xl px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 active:scale-95 shadow-soft";
  const primaryStyle = isDark
    ? "bg-white text-ink hover:bg-white/90"
    : "bg-ink text-white hover:bg-ink/90";
  const secondaryStyle = isDark
    ? "bg-white/15 text-white border border-white/30 backdrop-blur-sm hover:bg-white/25"
    : "bg-white text-ink border border-border hover:border-primary/50";

  return (
    <div className="flex flex-wrap gap-3">
      <a href={LINKS.appStore} target="_blank" rel="noopener noreferrer" className={`${base} ${primaryStyle}`}>
        <Apple size={22} />
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[10px] opacity-70">{t.store.download}</span>
          <span>App Store</span>
        </div>
      </a>
      <a href={LINKS.googlePlay} target="_blank" rel="noopener noreferrer" className={`${base} ${primaryStyle}`}>
        <Play size={22} />
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[10px] opacity-70">{t.store.download}</span>
          <span>Google Play</span>
        </div>
      </a>
      {showAppGallery && (
        <a
          href={LINKS.appGallery}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${secondaryStyle}`}
        >
          <Smartphone size={22} />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[10px] opacity-70">{t.store.download}</span>
            <span>App Gallery</span>
          </div>
        </a>
      )}
    </div>
  );
}
