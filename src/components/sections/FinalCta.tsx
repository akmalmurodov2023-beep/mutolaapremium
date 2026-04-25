import { PromoBlock } from "@/components/PromoBlock";
import { StoreButtons } from "@/components/StoreButtons";
import { useI18n } from "@/i18n/context";

export function FinalCta() {
  const { t } = useI18n();
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="reveal font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          {t.finalCta.titlePart1}
          <span className="text-primary">{t.finalCta.titleAccent}</span>
          {t.finalCta.titlePart2}
        </h2>
        <p className="reveal mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg">
          {t.finalCta.description}
        </p>

        <div className="reveal mt-8 flex justify-center">
          <PromoBlock variant="dark" size="lg" />
        </div>

        <div className="reveal mt-8 flex justify-center">
          <StoreButtons variant="dark" showAppGallery />
        </div>
      </div>
    </section>
  );
}
