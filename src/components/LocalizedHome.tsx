import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { DiscountBanner } from "@/components/sections/DiscountBanner";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Compare } from "@/components/sections/Compare";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { I18nProvider } from "@/i18n/context";
import type { Locale } from "@/i18n/types";

export function LocalizedHome({ locale }: { locale: Locale }) {
  const ref = useScrollReveal();
  return (
    <I18nProvider locale={locale}>
      <main ref={ref} className="min-h-screen bg-background text-foreground">
        <Hero />
        <Features />
        <DiscountBanner />
        <HowItWorks />
        <Compare />
        <Faq />
        <FinalCta />
        <Footer />
      </main>
    </I18nProvider>
  );
}
