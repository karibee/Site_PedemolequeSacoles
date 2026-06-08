import { Star } from "lucide-react";
import { testimonials, testimonialsContent } from "@/data/site";

export function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            {testimonialsContent.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold text-foreground">
            {testimonialsContent.title}
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="rounded-3xl bg-card p-7 shadow-card border border-border/60 flex flex-col"
            >
              <div className="flex gap-1 text-secondary-foreground" aria-label={testimonialsContent.ratingLabel}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-secondary text-secondary" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-foreground leading-relaxed">
                “{t.quote}”
              </blockquote>
              <footer className="mt-5">
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
