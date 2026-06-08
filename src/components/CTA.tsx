import ctaImg from "@/assets/images/cta.jpg";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { buildWhatsappLink } from "@/data/site";

export function CTA() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden">
      <img
        src={ctaImg}
        alt=""
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />

      <div className="container-page relative z-10 py-24 sm:py-32 text-center text-background">
        <span className="inline-flex rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
          Bora refrescar?
        </span>
        <h2 id="cta-title" className="mt-5 font-display text-4xl sm:text-6xl font-bold max-w-3xl mx-auto leading-tight">
          O verão chega antes quando você pede um <span className="text-secondary">Pedemoleque</span>.
        </h2>
        <p className="mt-5 text-lg text-background/90 max-w-xl mx-auto">
          Faça seu pedido agora pelo WhatsApp e receba os sacolés gelados,
          prontos pra adoçar o seu dia.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href={buildWhatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp text-base px-8 py-4"
          >
            <WhatsAppIcon className="size-6" />
            Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
