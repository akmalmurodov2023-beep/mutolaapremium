import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n/context";

export function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {t.faq.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            {t.faq.title}
          </h2>
        </div>

        <div className="reveal mt-10 space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={[
                  "overflow-hidden rounded-2xl border bg-card transition-all",
                  isOpen ? "border-primary/40 shadow-soft" : "border-border",
                ].join(" ")}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-ink sm:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={[
                      "shrink-0 text-primary transition-transform duration-300",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>
                <div
                  className={[
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
