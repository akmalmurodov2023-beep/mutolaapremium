import { Check, X } from "lucide-react";
import { useI18n } from "@/i18n/context";

const FREE = [true, true, false, false, false, false, false];

export function Compare() {
  const { t } = useI18n();
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {t.compare.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            {t.compare.title}
          </h2>
        </div>

        <div className="reveal mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="grid grid-cols-[1.4fr_1fr_1fr]">
            <div className="bg-muted px-5 py-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-8">
              {t.compare.feature}
            </div>
            <div className="bg-muted px-3 py-5 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-6">
              {t.compare.free}
            </div>
            <div className="bg-primary px-3 py-5 text-center sm:px-6">
              <div className="font-display text-base font-extrabold text-primary-foreground">
                {t.compare.premium}
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
                {t.compare.promoTag}
              </div>
            </div>

            {t.compare.rows.map((label, i) => (
              <div key={label} className="contents">
                <div
                  className={[
                    "px-5 py-4 text-sm font-medium text-ink sm:px-8 sm:text-base",
                    i % 2 === 1 ? "bg-cream/50" : "",
                  ].join(" ")}
                >
                  {label}
                </div>
                <div
                  className={[
                    "flex items-center justify-center px-3 py-4 sm:px-6",
                    i % 2 === 1 ? "bg-cream/50" : "",
                  ].join(" ")}
                >
                  {FREE[i] ? (
                    <Check className="text-emerald-500" size={20} />
                  ) : (
                    <X className="text-muted-foreground/50" size={20} />
                  )}
                </div>
                <div className="flex items-center justify-center px-3 py-4 sm:px-6 bg-primary-soft">
                  <Check className="text-primary" size={22} strokeWidth={3} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
