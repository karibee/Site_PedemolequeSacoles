import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { site, buildWhatsappLink } from "@/data/site";

const links = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#galeria", label: "Galeria" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_2px_20px_-12px_rgba(0,0,0,0.2)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="container-page flex items-center justify-between py-3"
      >
        <a href="#topo" className="flex items-center gap-2 group" aria-label={`${site.brand} - início`}>
          <span aria-hidden className="text-3xl">🍧</span>
          <span className="font-display text-lg sm:text-xl font-bold text-foreground leading-tight">
            {site.brand}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href={buildWhatsappLink()} target="_blank" rel="noreferrer" className="btn-whatsapp text-sm">
            <WhatsAppIcon className="size-5" />
            <span>WhatsApp</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="md:hidden inline-flex size-11 items-center justify-center rounded-full bg-card text-foreground shadow-card"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden container-page pb-4"
        >
          <ul className="flex flex-col gap-1 rounded-2xl bg-card p-3 shadow-card">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-semibold text-foreground hover:bg-muted"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a
                href={buildWhatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-full"
              >
                <WhatsAppIcon className="size-5" />
                <span>Pedir pelo WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
