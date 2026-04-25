import { Send, Phone } from "lucide-react";
import logo from "@/assets/mutolaa-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-12 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="Mutolaa"
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed">
            O'zbek tilidagi audio va elektron kitoblar kutubxonasi. Bilim va mutolaa har doim yoningizda.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Aloqa
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="https://t.me/akmal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Send size={16} /> Telegram: @akmal
              </a>
            </li>
            <li>
              <a
                href="tel:+998000000000"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone size={16} /> +998 00 000 00 00
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Eslatma
          </h4>
          <p className="mt-4 text-xs leading-relaxed">
            Bu sayt Mutolaa loyihasining rasmiy hamkori tomonidan tayyorlangan. AKMAL20 promokodi
            orqali Mutolaa Premium tarifiga 20% chegirma taqdim etiladi.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 text-center text-xs sm:px-8">
        © 2026 Mutolaa Premium hamkorlik landingi. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
