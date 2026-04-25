import { BookOpen } from "lucide-react";
import { PromoBlock } from "@/components/PromoBlock";
import { StoreButtons } from "@/components/StoreButtons";
import { ScreenshotPlaceholder } from "@/components/ScreenshotPlaceholder";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-background">
      {/* decorative blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[460px] w-[460px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--primary), transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 sm:pt-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
            <BookOpen size={20} strokeWidth={2.5} />
          </div>
          <span className="font-display text-lg font-extrabold tracking-tight">Mutolaa</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Left */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Mutolaa Premium uchun maxsus taklif
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Mutolaa Premium —
            <span className="block text-primary">20% chegirma bilan</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <span className="font-semibold text-ink">AKMAL20</span> promokodi orqali oylik va
            yillik tarifga 20% chegirma oling. Minglab audio va elektron kitoblarga to'liq kirish
            — istalgan joyda, istalgan vaqtda.
          </p>

          <div className="mt-7">
            <PromoBlock size="lg" />
          </div>

          <div className="mt-7">
            <StoreButtons />
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div>
              <div className="font-display text-xl font-extrabold text-ink">10 000+</div>
              <div>Kitob va audiokitob</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-display text-xl font-extrabold text-ink">4.8★</div>
              <div>App Store reytingi</div>
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
          <div className="mx-auto w-full max-w-[280px]">
            <ScreenshotPlaceholder index={0} label="Mutolaa ilovasi" />
          </div>
        </div>
      </div>
    </section>
  );
}
