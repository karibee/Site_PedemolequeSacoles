import aboutImg from "@/assets/images/about.jpg";

const values = [
  { title: "Fruta de verdade", text: "Selecionamos polpas frescas, sem corantes nem conservantes." },
  { title: "Receita de família", text: "Cada sabor nasce da cozinha da vó, com tempo e carinho." },
  { title: "Cuidado em cada etapa", text: "Do preparo ao congelamento, tudo é feito em pequenas levas." },
];

export function About() {
  return (
    <section id="sobre" className="bg-sand py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Mãos despejando polpa de fruta tropical em tubos de sacolé"
            width={1280}
            height={1280}
            loading="lazy"
            className="aspect-square w-full rounded-[2rem] object-cover shadow-card"
          />
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 hidden sm:flex size-32 items-center justify-center rounded-full bg-secondary text-5xl shadow-soft rotate-6"
          >
            🥭
          </div>
        </div>

        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            Sobre a marca
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold text-foreground">
            Um pedacinho de verão em cada sacolé.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A <strong>Pedemoleque Sacolés</strong> nasceu no quintal de casa, com
            frutas colhidas do pé e a vontade de devolver às pessoas aquele
            sabor de infância. Hoje, levamos o frescor do verão para a sua casa,
            sua festa e seu dia a dia — feitos um a um, do nosso jeito.
          </p>

          <div className="mt-8 space-y-4">
            <h3 className="font-display text-lg font-bold text-foreground">Nossos valores</h3>
            <ul className="grid gap-3 sm:grid-cols-3">
              {values.map((v) => (
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
              Missão
            </p>
            <p className="mt-1 text-foreground">
              Refrescar momentos com sabor de verdade, do jeito artesanal que
              só quem ama o que faz consegue entregar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
