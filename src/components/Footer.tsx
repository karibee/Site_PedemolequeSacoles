import { Instagram } from "lucide-react";
import { BrandMonogram } from "./BrandMonogram";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { site, buildWhatsappLink, footerContent, navigationLinks, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-page py-14 grid gap-10 md:grid-cols-3 md:items-start">
        <div>
          <div className="flex items-center gap-2">
            <span aria-hidden className="text-3xl">
              <BrandMonogram className="size-[1em]" />
            </span>
            <p className="font-display text-xl font-bold">{site.brand}</p>
          </div>
          <p className="mt-3 text-sm text-background/70 max-w-xs">
            {footerContent.description}
          </p>
        </div>

        <nav aria-label="Rodapé">
          <p className="text-xs font-bold uppercase tracking-wider text-background/60">
            {footerContent.navigationTitle}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navigationLinks.map((link) => (
              <li key={link.href}><a href={link.href} className="hover:text-secondary">{link.label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-background/60">
            {footerContent.contactTitle}
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href={buildWhatsappLink()}
              target="_blank"
              rel="noreferrer"
              aria-label={socialLinks.whatsapp.ariaLabel}
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-bold text-whatsapp-foreground hover:brightness-110"
            >
              <WhatsAppIcon className="size-4" /> {socialLinks.whatsapp.label}
            </a>
            <a
              href={socialLinks.instagram.href}
              target="_blank"
              rel="noreferrer"
              aria-label={socialLinks.instagram.ariaLabel}
              className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2 text-sm font-bold text-background hover:bg-background/20"
            >
              <Instagram className="size-4" aria-hidden /> {socialLinks.instagram.label}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-page py-5 text-center text-xs text-background/60">
          © {new Date().getFullYear()} {site.brand}. {footerContent.copyrightSuffix}
        </div>
      </div>
    </footer>
  );
}
