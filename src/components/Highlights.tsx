import { highlights } from "@/data/site";

export function Highlights() {
  return (
    <section aria-label="Destaques" className="relative -mt-12 z-20">
      <div className="container-page">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <article
              key={h.title}
              className="rounded-3xl bg-card p-6 shadow-card border border-border/60 transition-transform hover:-translate-y-1"
            >
              <div
                aria-hidden
                className="inline-flex size-14 items-center justify-center rounded-2xl bg-secondary text-3xl"
              >
                {h.icon}
              </div>
              <h2 className="mt-4 text-xl font-bold text-foreground">{h.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {h.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
