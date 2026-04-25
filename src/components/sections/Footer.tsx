import { Send, Phone, Globe } from "lucide-react";
import logo from "@/assets/mutolaa-logo.png";
import { useI18n } from "@/i18n/context";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-white/10 bg-ink py-12 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="Mutolaa"
            className="h-12 w-auto brightness-0 invert sm:h-14"
          />
          <p className="mt-4 text-sm leading-relaxed">{t.footer.tagline}</p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            {t.footer.contact}
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="https://t.me/promokoduzbekistan_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Send size={16} /> @promokoduzbekistan_bot
              </a>
            </li>
            <li>
              <a
                href="tel:+998773590100"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone size={16} /> +998 77 359 01 00
              </a>
            </li>
            <li>
              <a
                href="https://promakod.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Globe size={16} /> {t.footer.partner}: promakod.uz
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            {t.footer.note}
          </h4>
          <p className="mt-4 text-xs leading-relaxed">{t.footer.noteText}</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 text-center text-xs sm:px-8">
        {t.footer.copyright}
      </div>
    </footer>
  );
}
