import { PromoBlock } from "@/components/PromoBlock";
import { StoreButtons } from "@/components/StoreButtons";

export function FinalCta() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="reveal font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          Hoziroq <span className="text-primary">mutolaani</span> boshlang
        </h2>
        <p className="reveal mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg">
          AKMAL20 promokodi bilan Mutolaa Premium tarifiga 20% chegirma. Minglab kitoblar va
          audiokitoblarga to'liq kirishni qo'lga kiriting.
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
