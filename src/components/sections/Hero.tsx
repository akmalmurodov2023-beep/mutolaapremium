import { PromoBlock } from "@/components/PromoBlock";
import { StoreButtons } from "@/components/StoreButtons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/context";
import heroPhone from "@/assets/screenshots/hero.png";
import logo from "@/assets/mutolaa-logo.png";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-background">
      {/* decorative blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[460px] w-[460px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--primary), transparent)" }}
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 pt-8 sm:px-8 sm:pt-10">
        {/* Logo */}
        <a href="/" className="inline-flex shrink-0 items-center" aria-label="Mutolaa">
          <img src={logo} alt="Mutolaa" className="h-12 w-auto shrink-0 sm:h-16 lg:h-20" />
        </a>
        <div className="shrink-0">
          <LanguageSwitcher />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Left */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            {t.hero.badge}
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {t.hero.titleLine1}
            <span className="block text-primary">{t.hero.titleLine2}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <span className="font-semibold text-ink">{t.hero.description1}</span>
            {t.hero.description2}
          </p>

          <div className="mt-7">
            <PromoBlock size="lg" />
          </div>

          <div className="mt-7">
            <StoreButtons />
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div>
              <div className="font-display text-xl font-extrabold text-ink">{t.hero.statBooks}</div>
              <div>{t.hero.statBooksLabel}</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-display text-xl font-extrabold text-ink">{t.hero.statRating}</div>
              <div>{t.hero.statRatingLabel}</div>
            </div>
          </div>
        </div>

        {/* Right — phone mockup */}
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 mx-auto h-full w-3/4 rounded-[3rem] opacity-60 blur-2xl"
            style={{ background: "var(--primary)" }}
          />
          <div className="mx-auto w-full max-w-[320px]">
            <img
              src={heroPhone}
              alt={t.hero.phoneAlt}
              className="w-full drop-shadow-[0_30px_60px_rgba(255,147,69,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
