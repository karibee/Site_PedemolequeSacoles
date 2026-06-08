import { products } from "@/data/products";
import { menuContent } from "@/data/site";
import { ProductCard } from "./ProductCard";

export function Menu() {
  return (
    <section id="cardapio" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            {menuContent.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold text-foreground">
            {menuContent.title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {menuContent.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
