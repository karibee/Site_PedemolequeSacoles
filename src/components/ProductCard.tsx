import type { Product } from "@/data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { buildWhatsappLink } from "@/data/site";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const link = buildWhatsappLink(
    `Olá! Quero pedir o sacolé de ${product.name} (${product.price}) 🍧`,
  );

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-card border border-border/60 transition-all hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-square overflow-hidden bg-sand">
        <img
          src={product.image}
          alt={`Sacolé sabor ${product.name}`}
          width={800}
          height={800}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-tropical px-3 py-1 text-xs font-bold text-tropical-foreground shadow-sm">
            {product.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold text-foreground">{product.name}</h3>
          <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-sm font-bold text-secondary-foreground">
            {product.price}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Pedir sacolé de ${product.name} pelo WhatsApp`}
          className="btn-whatsapp mt-5 text-sm"
        >
          <WhatsAppIcon className="size-4" />
          Pedir agora
        </a>
      </div>
    </article>
  );
}
