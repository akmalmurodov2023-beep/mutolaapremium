import { PromoBlock } from "@/components/PromoBlock";
import { StoreButtons } from "@/components/StoreButtons";
import heroPhone from "@/assets/screenshots/hero.png";
import logo from "@/assets/mutolaa-logo.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-background">
      {/* decorative blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[360px] w-[360px] rounded-full opacity-40 blur-3xl sm:h-[460px] sm:w-[460px]"
        style={{ background: "radial-gradient(closest-side, var(--primary), transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 sm:pt-10">
        {/* Logo */}
        <a href="/" className="inline-flex items-center" aria-label="Mutolaa">
          <img src={logo} alt="Mutolaa" className="h-12 w-auto sm:h-16 lg:h-20" />
        </a>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-8 sm:gap-12 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Left */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-3 py-1 text-[11px] font-semibold text-primary sm:text-xs">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Mutolaa Premium uchun maxsus taklif
          </span>

          <h1 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.05] text-ink sm:mt-5 sm:text-5xl lg:text-6xl">
            Mutolaa Premium —
            <span className="block text-primary">20% chegirma bilan</span>
          </h1>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            <span className="font-semibold text-ink">AKMAL20</span> promokodi orqali oylik va
            yillik tarifga 20% chegirma oling. Minglab audio va elektron kitoblarga to'liq kirish.
          </p>

          <div className="mt-6 sm:mt-7">
            <PromoBlock size="lg" />
          </div>

          <div className="mt-5 sm:mt-7">
            <StoreButtons />
          </div>

          <div className="mt-7 flex items-center gap-5 text-sm text-muted-foreground sm:mt-8 sm:gap-6">
            <div>
              <div className="font-display text-lg font-extrabold text-ink sm:text-xl">10 000+</div>
              <div className="text-xs sm:text-sm">Kitob va audiokitob</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-display text-lg font-extrabold text-ink sm:text-xl">4.8★</div>
              <div className="text-xs sm:text-sm">App Store reytingi</div>
            </div>
          </div>
        </div>

        {/* Right — phone mockup */}
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 mx-auto h-full w-3/4 rounded-[3rem] opacity-50 blur-2xl sm:opacity-60"
            style={{ background: "var(--primary)" }}
          />
          <div className="mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[320px]">
            <img
              src={heroPhone}
              alt="Mutolaa Premium ilovasi"
              className="w-full drop-shadow-[0_20px_40px_rgba(255,147,69,0.3)] sm:drop-shadow-[0_30px_60px_rgba(255,147,69,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
