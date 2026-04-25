import { Check, X } from "lucide-react";

interface Row {
  label: string;
  free: boolean;
  premium: boolean;
}

const ROWS: Row[] = [
  { label: "Online mutolaa", free: true, premium: true },
  { label: "Elektron kitoblarni yuklab olish", free: true, premium: true },
  { label: "Audiokitobni yuklab olish", free: false, premium: true },
  { label: "Premium kitoblar", free: false, premium: true },
  { label: "Tovushbezak", free: false, premium: true },
  { label: "Kitob bo'yicha quiz", free: false, premium: true },
  { label: "Mutolaaxonam", free: false, premium: true },
];

export function Compare() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Taqqoslash
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            Bepul va Premium farqi
          </h2>
        </div>

        <div className="reveal mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="grid grid-cols-[1.4fr_1fr_1fr]">
            {/* Header */}
            <div className="bg-muted px-5 py-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-8">
              Imkoniyat
            </div>
            <div className="bg-muted px-3 py-5 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-6">
              Bepul
            </div>
            <div className="bg-primary px-3 py-5 text-center sm:px-6">
              <div className="font-display text-base font-extrabold text-primary-foreground">
                Premium
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
                AKMAL20 −20%
              </div>
            </div>

            {/* Rows */}
            {ROWS.map((row, i) => (
              <div key={row.label} className="contents">
                <div
                  className={[
                    "px-5 py-4 text-sm font-medium text-ink sm:px-8 sm:text-base",
                    i % 2 === 1 ? "bg-cream/50" : "",
                  ].join(" ")}
                >
                  {row.label}
                </div>
                <div
                  className={[
                    "flex items-center justify-center px-3 py-4 sm:px-6",
                    i % 2 === 1 ? "bg-cream/50" : "",
                  ].join(" ")}
                >
                  {row.free ? (
                    <Check className="text-emerald-500" size={20} />
                  ) : (
                    <X className="text-muted-foreground/50" size={20} />
                  )}
                </div>
                <div
                  className={[
                    "flex items-center justify-center px-3 py-4 sm:px-6",
                    "bg-primary-soft",
                  ].join(" ")}
                >
                  {row.premium ? (
                    <Check className="text-primary" size={22} strokeWidth={3} />
                  ) : (
                    <X className="text-muted-foreground/50" size={20} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
