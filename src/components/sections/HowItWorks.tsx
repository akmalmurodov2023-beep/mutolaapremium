import step1 from "@/assets/screenshots/step-1.png";
import step2 from "@/assets/screenshots/step-2.png";
import step3 from "@/assets/screenshots/step-3.png";
import step4 from "@/assets/screenshots/step-4.png";
import step5 from "@/assets/screenshots/step-5.png";
import step6 from "@/assets/screenshots/step-6.png";
import step7 from "@/assets/screenshots/step-7.png";
import step8 from "@/assets/screenshots/step-8.png";
import step9 from "@/assets/screenshots/step-9.png";

interface Step {
  title: string;
  description: string;
  image: string;
}

const STEPS: Step[] = [
  {
    title: "Ilovani oching",
    description: "App Store yoki Google Play'dan Mutolaa ilovasini yuklab oling va oching.",
    image: step1,
  },
  {
    title: "Tizimga kiring",
    description: "Telefon raqam yoki Google/Apple orqali akkauntingizga kiring.",
    image: step2,
  },
  {
    title: "Sahifam bo'limiga o'ting",
    description: "Pastki menyudan «Sahifam» bo'limini tanlang.",
    image: step3,
  },
  {
    title: "«Premium» tugmasini bosing",
    description: "Sahifam ro'yxatidan «Premium» qatorini tanlang.",
    image: step4,
  },
  {
    title: "«Obuna bo'lish» ni bosing",
    description: "Mutolaa Premium ekranida pastdagi to'q sariq tugmani bosing.",
    image: step5,
  },
  {
    title: "Tarifni tanlang",
    description: "Yillik tarifni tanlang — eng tejamkor variant — va «Davom etish» ni bosing.",
    image: step6,
  },
  {
    title: "«Chegirma promokodi» ni oching",
    description: "To'lov ekranida «Chegirma promokodi» qatoriga tegining.",
    image: step7,
  },
  {
    title: "AKMAL20 ni kiriting",
    description: "Promokod maydoniga AKMAL20 deb yozing va «Tasdiqlash» ni bosing.",
    image: step8,
  },
  {
    title: "Chegirma qo'llandi — to'lang",
    description: "−20% chegirma qo'llanganini ko'ring va «Obuna bo'lish» orqali to'lovni yakunlang.",
    image: step9,
  },
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

        <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, idx) => (
            <div
              key={step.title}
              className="reveal group relative flex flex-col"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {/* Phone screenshot (already framed) */}
              <div className="relative mx-auto w-full max-w-[260px]">
                <div
                  aria-hidden
                  className="absolute inset-x-6 top-6 -z-10 h-full rounded-[3rem] bg-primary/20 blur-2xl"
                />
                <img
                  src={step.image}
                  alt={`${idx + 1}-qadam: ${step.title}`}
                  loading="lazy"
                  className="relative w-full drop-shadow-[0_20px_40px_rgba(255,147,69,0.25)] transition-transform duration-500 group-hover:-translate-y-2"
                />
                {/* Step number badge */}
                <div className="absolute -top-2 -left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-lg font-extrabold text-primary-foreground shadow-glow ring-4 ring-cream">
                  {idx + 1}
                </div>
              </div>

              {/* Caption */}
              <div className="mt-5 text-center">
                <h3 className="font-display text-lg font-bold text-ink">
                  {idx + 1}-qadam: {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
