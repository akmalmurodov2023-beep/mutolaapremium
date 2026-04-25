import {
  DownloadCloud,
  Library,
  Crown,
  Headphones,
  BarChart3,
  Brain,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/i18n/context";

const ICONS: LucideIcon[] = [DownloadCloud, Library, Crown, Headphones, BarChart3, Brain];

export function Features() {
  const { t } = useI18n();
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {t.features.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            {t.features.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.features.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((f, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={f.title}
                className="reveal group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform group-hover:scale-110">
                  <Icon size={24} strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
