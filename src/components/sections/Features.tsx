import {
  DownloadCloud,
  Library,
  Crown,
  Headphones,
  BarChart3,
  Brain,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: DownloadCloud,
    title: "Audiokitoblarni offline",
    description: "Internetga ulanmasdan tinglash uchun audiokitoblarni qurilmangizga yuklab oling.",
  },
  {
    icon: Library,
    title: "Mutolaaxonam",
    description: "Shaxsiy javoningiz va o'qish kuzatuvi — sevimli kitoblaringiz bir joyda.",
  },
  {
    icon: Crown,
    title: "Premium kitoblar",
    description: "Faqat Premium foydalanuvchilar uchun ochiq bo'lgan eksklyuziv kitoblar.",
  },
  {
    icon: Headphones,
    title: "Tovushbezak",
    description: "Kinematik audiokitob tajribasi — musiqa va sado effektlari bilan boyitilgan.",
  },
  {
    icon: BarChart3,
    title: "Faollik statistikasi",
    description: "O'qish odatlaringizni kuzating: kunlik, haftalik va oylik natijalar.",
  },
  {
    icon: Brain,
    title: "Kitob bo'yicha quiz",
    description: "Har bir kitobdan keyin bilimingizni mustahkamlash uchun qiziqarli testlar.",
  },
];

export function Features() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Nega Premium?
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            Mutolaa Premium imkoniyatlari
          </h2>
          <p className="mt-4 text-muted-foreground">
            O'qish va tinglashni yangi bosqichga olib chiqadigan oltita asosiy xususiyat.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="reveal group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform group-hover:scale-110">
                  <Icon size={24} strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
