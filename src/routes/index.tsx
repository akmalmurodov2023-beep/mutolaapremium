import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { DiscountBanner } from "@/components/sections/DiscountBanner";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Compare } from "@/components/sections/Compare";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const ref = useScrollReveal();
  return (
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
  );
}
