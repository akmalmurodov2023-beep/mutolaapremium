import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface QA {
  q: string;
  a: string;
}

const FAQ: QA[] = [
  {
    q: "AKMAL20 promokodi qancha vaqt amal qiladi?",
    a: "Promokod amal qilish muddati cheklangan bo'lishi mumkin. Iloji boricha tezroq foydalanishingizni tavsiya qilamiz.",
  },
  {
    q: "Promokod yillik tarifga ham qo'llaniladimi?",
    a: "Ha, AKMAL20 promokodi ham oylik, ham yillik tarifga 20% chegirma beradi. Yillik tarifda umumiy tejamkorlik ancha katta bo'ladi.",
  },
  {
    q: "Premium'ni bekor qilsam bo'ladimi?",
    a: "Ha, istalgan vaqtda obunani bekor qilishingiz mumkin. Bekor qilish ilova sozlamalari yoki App Store / Google Play orqali amalga oshiriladi.",
  },
  {
    q: "To'lov qaysi kartalar orqali amalga oshiriladi?",
    a: "To'lov ilova ichidagi qulay usullar orqali amalga oshiriladi — mahalliy va xalqaro kartalar qo'llab-quvvatlanadi.",
  },
  {
    q: "Bir akkauntda nechta qurilmada ishlataman?",
    a: "Bitta akkaunt bilan bir nechta qurilmada (telefon, planshet) tizimga kirishingiz mumkin.",
  },
  {
    q: "Promokod ishlamasa nima qilish kerak?",
    a: "Promokod katta-kichik harflarsiz to'g'ri yozilganini tekshiring: AKMAL20. Agar muammo davom etsa, qo'llab-quvvatlash xizmatiga murojaat qiling.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            Ko'p so'raladigan savollar
          </h2>
        </div>

        <div className="reveal mt-10 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={[
                  "overflow-hidden rounded-2xl border bg-card transition-all",
                  isOpen ? "border-primary/40 shadow-soft" : "border-border",
                ].join(" ")}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-ink sm:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={[
                      "shrink-0 text-primary transition-transform duration-300",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>
                <div
                  className={[
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
