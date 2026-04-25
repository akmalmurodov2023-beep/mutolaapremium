import step1 from "@/assets/screenshots/step-1.png";
import step2 from "@/assets/screenshots/step-2.png";
import step3 from "@/assets/screenshots/step-3.png";
import step4 from "@/assets/screenshots/step-4.png";
import step5 from "@/assets/screenshots/step-5.png";
import step6 from "@/assets/screenshots/step-6.png";
import step7 from "@/assets/screenshots/step-7.png";
import step8 from "@/assets/screenshots/step-8.png";
import step9 from "@/assets/screenshots/step-9.png";
import { useI18n } from "@/i18n/context";

const IMAGES = [step1, step2, step3, step4, step5, step6, step7, step8, step9];

export function HowItWorks() {
  const { t } = useI18n();
  return (
    <section id="qollanma" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {t.how.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            {t.how.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.how.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {t.how.steps.map((step, idx) => (
            <div
              key={step.title}
              className="reveal group relative flex flex-col"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {/* Phone screenshot */}
              <div className="relative mx-auto w-full max-w-[260px]">
                <div
                  aria-hidden
                  className="absolute inset-x-6 top-6 -z-10 h-full rounded-[3rem] bg-primary/20 blur-2xl"
                />
                <img
                  src={IMAGES[idx]}
                  alt={`${t.how.stepLabel(idx + 1)}: ${step.title}`}
                  loading="lazy"
                  className="relative w-full drop-shadow-[0_20px_40px_rgba(255,147,69,0.25)] transition-transform duration-500 group-hover:-translate-y-2"
                />
                <div className="absolute -top-2 -left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-lg font-extrabold text-primary-foreground shadow-glow ring-4 ring-cream">
                  {idx + 1}
                </div>
              </div>

              <div className="mt-5 text-center">
                <h3 className="font-display text-lg font-bold text-ink">
                  {t.how.stepLabel(idx + 1)}: {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
