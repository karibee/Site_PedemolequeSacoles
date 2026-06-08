import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { site, buildWhatsappLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-page py-14 grid gap-10 md:grid-cols-3 md:items-start">
        <div>
          <div className="flex items-center gap-2">
            <span aria-hidden className="text-3xl">🍧</span>
            <p className="font-display text-xl font-bold">{site.brand}</p>
          </div>
          <p className="mt-3 text-sm text-background/70 max-w-xs">
            Sacolés artesanais feitos com fruta de verdade. Frescor de verão
            entregue na sua porta.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <p className="text-xs font-bold uppercase tracking-wider text-background/60">
            Navegação
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#cardapio" className="hover:text-secondary">Cardápio</a></li>
            <li><a href="#sobre" className="hover:text-secondary">Sobre</a></li>
            <li><a href="#avaliacoes" className="hover:text-secondary">Avaliações</a></li>
            <li><a href="#galeria" className="hover:text-secondary">Galeria</a></li>
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-background/60">
            Fale com a gente
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href={buildWhatsappLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="Falar no WhatsApp"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-bold text-whatsapp-foreground hover:brightness-110"
            >
              <WhatsAppIcon className="size-4" /> WhatsApp
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Seguir no Instagram"
              className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2 text-sm font-bold text-background hover:bg-background/20"
            >
              <Instagram className="size-4" aria-hidden /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-page py-5 text-center text-xs text-background/60">
          © {new Date().getFullYear()} {site.brand}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
