import { ScreenshotPlaceholder } from "../ScreenshotPlaceholder";

interface Step {
  title: string;
  description: string;
}

const STEPS: Step[] = [
  { title: "Ilovani oching", description: "Mutolaa ilovasini qurilmangizda ishga tushiring." },
  { title: "Premium bo'limiga o'ting", description: "Asosiy menyudan «Premium» yoki «Obuna» bo'limini tanlang." },
  { title: "Tarifni tanlang", description: "Sizga mos keladigan oylik yoki yillik tarifni belgilang." },
  { title: "Promokod kiritish", description: "To'lov sahifasida «Promokod kiritish» tugmasini bosing." },
  { title: "AKMAL20 ni kiriting", description: "Promokod maydoniga AKMAL20 deb yozing va tasdiqlang." },
  { title: "Chegirmani tekshiring", description: "20% chegirma qo'llanganini va yangi narxni ko'ring." },
  { title: "To'lov usulini tanlang", description: "Karta yoki boshqa qulay to'lov usulini belgilang." },
  { title: "To'lovni tasdiqlang", description: "To'lovni xavfsiz tarzda yakunlang — bir necha soniya yetarli." },
  { title: "Premium faollashdi", description: "Tabriklaymiz! Endi barcha Premium imkoniyatlardan foydalaning." },
];

export function HowItWorks() {
  return (
    <section id="qollanma" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Qanday ulanish
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            9 ta sodda qadamda Premium
          </h2>
          <p className="mt-4 text-muted-foreground">
            AKMAL20 promokodini qo'llash va 20% chegirma olish uchun batafsil qo'llanma.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, idx) => (
            <div
              key={step.title}
              className="reveal group relative rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="absolute -top-4 left-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-base font-extrabold text-primary-foreground shadow-glow">
                {idx + 1}
              </div>

              <div className="mt-2 mb-5">
                <ScreenshotPlaceholder index={idx + 1} label={`Screenshot ${idx + 1}`} />
              </div>

              <h3 className="font-display text-lg font-bold text-ink">
                {idx + 1}-qadam: {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
