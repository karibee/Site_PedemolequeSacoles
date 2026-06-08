import { aboutContent } from "@/data/site";
import { HandmadeSeal } from "./HandmadeSeal";

export function About() {
  return (
    <section id="sobre" className="bg-sand py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={aboutContent.image}
            alt={aboutContent.imageAlt}
            width={1280}
            height={1280}
            loading="lazy"
            className="aspect-square w-full rounded-[2rem] object-cover shadow-card"
          />
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 hidden sm:flex size-32 items-center justify-center rounded-full bg-secondary text-5xl shadow-soft rotate-6"
          >
            <HandmadeSeal className="size-28" />
          </div>
        </div>

        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            {aboutContent.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold text-foreground">
            {aboutContent.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {aboutContent.descriptionPrefix}<strong>{aboutContent.descriptionBrand}</strong>{aboutContent.descriptionSuffix}
          </p>

          <div className="mt-8 space-y-4">
            <h3 className="font-display text-lg font-bold text-foreground">{aboutContent.valuesTitle}</h3>
            <ul className="grid gap-3 sm:grid-cols-3">
              {aboutContent.values.map((v) => (
                <li
                  key={v.title}
                  className="rounded-2xl bg-card p-4 border border-border/60"
                >
                  <p className="font-bold text-foreground">{v.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-tropical bg-card p-5">
            <p className="text-sm uppercase tracking-wider font-bold text-tropical">
              {aboutContent.mission.eyebrow}
            </p>
            <p className="mt-1 text-foreground">
              {aboutContent.mission.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
