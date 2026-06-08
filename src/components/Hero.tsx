import heroImg from "@/assets/images/hero.jpg";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { buildWhatsappLink } from "@/data/site";

export function Hero() {
  return (
    <section id="topo" className="relative min-h-dvh flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/30 to-primary/40"
      />

      <div className="container-page relative z-10 py-32 sm:py-40">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <span aria-hidden>🌴</span> Sabor de verão, feito à mão
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            O sacolé artesanal que <span className="text-secondary">refresca</span> o seu dia.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/90 max-w-xl">
            Polpa de fruta fresca, receita de família e aquele friozinho gostoso
            de quando o verão chega. Feitos com carinho, entregues com pressa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cardapio" className="btn-primary">
              Ver Cardápio
            </a>
            <a
              href={buildWhatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <WhatsAppIcon className="size-5" />
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
