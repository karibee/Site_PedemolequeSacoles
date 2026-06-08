import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import g1 from "@/assets/images/gallery-1.jpg";
import g2 from "@/assets/images/gallery-2.jpg";
import hero from "@/assets/images/hero.jpg";
import cta from "@/assets/images/cta.jpg";
import about from "@/assets/images/about.jpg";
import morango from "@/assets/images/p-morango.jpg";

const images = [
  { src: g1, alt: "Criança feliz segurando sacolé na praia" },
  { src: cta, alt: "Sacolés coloridos sobre o gelo" },
  { src: g2, alt: "Cooler cheio de sacolés gelados" },
  { src: about, alt: "Preparação artesanal dos sacolés" },
  { src: hero, alt: "Sacolés em cenário tropical" },
  { src: morango, alt: "Sacolé de morango com frutas frescas" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % images.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <section id="galeria" className="bg-sand py-20 sm:py-28">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            Galeria
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold text-foreground">
            O verão nas suas mãos.
          </h2>
        </div>

        <ul className="mt-12 grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-3">
          {images.map((img, i) => (
            <li key={img.src} className={i === 0 ? "row-span-2 col-span-2 md:col-span-1 md:row-span-2" : ""}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Abrir imagem: ${img.alt}`}
                className="group relative block size-full overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="size-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualização da galeria"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            <X />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Imagem anterior"
            className="absolute left-2 sm:left-6 inline-flex size-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            <ChevronLeft />
          </button>
          <figure className="max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[active].src}
              alt={images[active].alt}
              className="max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {images[active].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Próxima imagem"
            className="absolute right-2 sm:right-6 inline-flex size-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
