import { PromoBlock } from "../PromoBlock";

export function DiscountBanner() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className="reveal relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-16 lg:py-20"
          style={{
            background:
              "linear-gradient(135deg, var(--primary) 0%, color-mix(in oklab, var(--primary) 80%, #ff6a1a) 100%)",
          }}
        >
          {/* decorative circles */}
          <div
            aria-hidden
            className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-white/5"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                Maxsus taklif
              </span>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-display text-7xl font-extrabold leading-none text-white sm:text-8xl">
                  −20%
                </span>
                <span className="text-lg font-semibold text-white/90">chegirma</span>
              </div>
              <p className="mt-4 max-w-md text-lg text-white/90">
                <span className="font-bold">AKMAL20</span> promokodi bilan istalgan tarifga —
                oylik yoki yillik.
              </p>
              <div className="mt-6">
                <PromoBlock variant="dark" size="lg" />
              </div>
            </div>

            <div className="space-y-4">
              <PriceRow label="Oylik tarif" original="29 000 so'm" discounted="23 200 so'm" />
              <PriceRow
                label="Yillik tarif"
                original="290 000 so'm"
                discounted="232 000 so'm"
                highlight
              />
              <p className="text-xs text-white/70">
                * Narxlar taxminiy ko'rsatilgan. Aniq narxlar ilovada ko'rsatiladi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceRow({
  label,
  original,
  discounted,
  highlight,
}: {
  label: string;
  original: string;
  discounted: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "flex items-center justify-between rounded-2xl px-5 py-4 backdrop-blur-sm",
        highlight ? "bg-white text-ink" : "bg-white/15 text-white",
      ].join(" ")}
    >
      <div>
        <div className={`text-xs font-semibold uppercase tracking-wider ${highlight ? "text-primary" : "text-white/70"}`}>
          {label} {highlight && "• Tejamkor"}
        </div>
        <div className="mt-1 flex items-baseline gap-3">
          <span className="font-display text-2xl font-extrabold">{discounted}</span>
          <span className={`text-sm line-through ${highlight ? "text-muted-foreground" : "text-white/60"}`}>
            {original}
          </span>
        </div>
      </div>
      <div
        className={[
          "rounded-full px-3 py-1 text-xs font-bold",
          highlight ? "bg-primary text-primary-foreground" : "bg-white text-primary",
        ].join(" ")}
      >
        −20%
      </div>
    </div>
  );
}
