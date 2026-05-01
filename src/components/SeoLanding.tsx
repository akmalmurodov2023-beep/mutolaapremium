import { Link } from "@tanstack/react-router";
import { I18nProvider } from "@/i18n/context";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { DiscountBanner } from "@/components/sections/DiscountBanner";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Compare } from "@/components/sections/Compare";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import type { Locale } from "@/i18n/types";
import { LOCALE_META } from "@/i18n/types";
import { SEO_KEYWORDS, type SeoKeyword } from "@/i18n/seoKeywords";

export function SeoLanding({ locale, keyword }: { locale: Locale; keyword: SeoKeyword }) {
  const prefix = LOCALE_META[locale].pathPrefix;
  const related = SEO_KEYWORDS[locale].filter((k) => k.slug !== keyword.slug).slice(0, 12);

  return (
    <I18nProvider locale={locale}>
      <main className="min-h-screen bg-background text-foreground">
        <section className="container mx-auto px-4 pt-10 pb-6 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{keyword.h1}</h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl">{keyword.intro}</p>
        </section>
        <Hero />
        <Features />
        <DiscountBanner />
        <HowItWorks />
        <Compare />
        <Faq />
        <FinalCta />
        <section className="container mx-auto px-4 py-12 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold mb-4">More</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {related.map((k) => (
              <li key={k.slug}>
                <Link
                  to={`${prefix}/p/${k.slug}` as string}
                  className="text-primary hover:underline"
                >
                  {k.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <Footer />
      </main>
    </I18nProvider>
  );
}
