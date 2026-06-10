import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { s as site, n as navigationLinks, a as socialLinks, b as buildWhatsappLink, h as heroContent, c as highlights, m as menuContent, e as aboutContent, t as testimonialsContent, f as testimonials, g as galleryContent, i as ctaContent, j as footerContent, d as buildProductWhatsappMessage } from "./router-9dy85AfG.mjs";
import { X, M as Menu$1, S as Star, C as ChevronLeft, a as ChevronRight, I as Instagram } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function BrandMonogram({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 48 48",
      className,
      fill: "none",
      "aria-hidden": "true",
      focusable: "false",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "24", cy: "24", r: "21", fill: "var(--color-primary)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "24", cy: "24", r: "18", stroke: "var(--color-foreground)", strokeWidth: "2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "24",
            y: "31",
            textAnchor: "middle",
            fontFamily: "var(--font-display)",
            fontSize: "25",
            fontWeight: "800",
            fill: "var(--color-foreground)",
            children: "P"
          }
        )
      ]
    }
  );
}
function WhatsAppIcon({ className, ...rest }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      className,
      fill: "currentColor",
      "aria-hidden": rest["aria-hidden"] ?? true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84a11.8 11.8 0 0 0 1.62 5.96L0 24l6.34-1.66a11.83 11.83 0 0 0 5.7 1.45h.01c6.53 0 11.84-5.3 11.84-11.84a11.76 11.76 0 0 0-3.37-8.47ZM12.05 21.5h-.01a9.65 9.65 0 0 1-4.92-1.35l-.35-.21-3.76.99 1-3.67-.23-.38a9.62 9.62 0 0 1-1.5-5.14c0-5.32 4.34-9.66 9.67-9.66a9.6 9.6 0 0 1 6.83 2.83 9.6 9.6 0 0 1 2.83 6.84c0 5.32-4.34 9.66-9.66 9.66Zm5.3-7.23c-.3-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.3-.15-1.24-.46-2.37-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.5.15-.18.2-.3.3-.5.1-.2.05-.36-.02-.5-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5l-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.07 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.72-.7 1.96-1.38.24-.69.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34Z" })
    }
  );
}
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const nextScrolled = window.scrollY > 80;
      setScrolled((current) => current === nextScrolled ? current : nextScrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-[0_2px_20px_-12px_rgba(0,0,0,0.2)]" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            "aria-label": "Navegação principal",
            className: "container-page flex items-center justify-between py-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#topo", className: "flex items-center gap-2 group", "aria-label": `${site.brand} - início`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "text-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandMonogram, { className: "size-[1em]" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg sm:text-xl font-bold text-foreground leading-tight", children: site.brand })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-8", children: navigationLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  className: "text-sm font-semibold text-foreground/80 hover:text-primary transition-colors",
                  children: l.label
                }
              ) }, l.href)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: buildWhatsappLink(), target: "_blank", rel: "noreferrer", className: "btn-whatsapp text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "size-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: socialLinks.whatsapp.label })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setOpen((v) => !v),
                  "aria-expanded": open,
                  "aria-controls": "mobile-menu",
                  "aria-label": open ? "Fechar menu" : "Abrir menu",
                  className: "md:hidden inline-flex size-11 items-center justify-center rounded-full bg-card text-foreground shadow-card",
                  children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu$1, { className: "size-5" })
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "mobile-menu",
            className: "md:hidden container-page pb-4",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-1 rounded-2xl bg-card p-3 shadow-card", children: [
              navigationLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  onClick: () => setOpen(false),
                  className: "block rounded-xl px-4 py-3 font-semibold text-foreground hover:bg-muted",
                  children: l.label
                }
              ) }, l.href)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: buildWhatsappLink(),
                  target: "_blank",
                  rel: "noreferrer",
                  className: "btn-whatsapp w-full",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "size-5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: socialLinks.whatsapp.orderLabel })
                  ]
                }
              ) })
            ] })
          }
        )
      ]
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "topo", className: "relative min-h-dvh flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: heroContent.image,
        alt: "",
        width: 1920,
        height: 1280,
        fetchPriority: "high",
        className: "absolute inset-0 size-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 bg-gradient-to-br from-black/55 via-black/30 to-primary/40"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page relative z-10 py-32 sm:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl text-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide uppercase", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: heroContent.eyebrowIcon }),
        " ",
        heroContent.eyebrow
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]", children: [
        heroContent.titlePrefix,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: heroContent.titleHighlight }),
        heroContent.titleSuffix
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base sm:text-lg text-background/90 max-w-xl", children: heroContent.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: heroContent.primaryCta.href, className: "btn-primary", children: heroContent.primaryCta.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: buildWhatsappLink(),
            target: "_blank",
            rel: "noreferrer",
            className: "btn-outline",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "size-5" }),
              heroContent.whatsappCta.label
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
function Highlights() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-label": "Destaques", className: "relative -mt-12 z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:gap-6 md:grid-cols-3", children: highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      className: "rounded-3xl bg-card p-6 shadow-card border border-border/60 transition-transform hover:-translate-y-1",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "inline-flex size-14 items-center justify-center rounded-2xl bg-secondary text-3xl",
            children: h.icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-bold text-foreground", children: h.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: h.description })
      ]
    },
    h.title
  )) }) }) });
}
const maracuja = "/assets/maracuja-LF3ta62C.jpg";
const morango = "/assets/morango-CXVdLLFi.jpg";
const morango_nutella = "/assets/morango_e_nutella-B-nyW4U_.jpg";
const manga = "/assets/manga-CIyY9zV9.jpg";
const amendoim = "/assets/amendoim-DiRt73zB.jpg";
const banana = "/assets/banana-CzP6xisO.jpg";
const chocolate = "/assets/chocolate-Dx0STDid.jpg";
const tropical = "/assets/tropical-C3dLsbiV.jpg";
const limao = "/assets/limao-C7kM6p8I.jpg";
const products = [
  {
    id: "maracuja",
    name: "Mousse de Maracujá",
    description: "Polpa de maracujá natural ao leite, cremosa e equilibrada.",
    price: "R$ 8,00",
    image: maracuja
  },
  {
    id: "limao",
    name: "Limão ao Leite",
    description: "Suco de limão natural, suave e refrescante.",
    price: "R$ 8,00",
    image: limao
  },
  {
    id: "amendoim",
    name: "Amendoim Torrado",
    description: "Amendoim torrado ao leite, com sabor intenso e cremoso.",
    price: "R$ 8,00",
    image: amendoim,
    tag: "Favoritos"
  },
  {
    id: "morango_nutella",
    name: "Morango com Nutella",
    description: "Morango ao leite combinado com o sabor irresistível da Nutella.",
    price: "R$ 8,00",
    image: morango_nutella,
    tag: "Mais pedido!"
  },
  {
    id: "manga",
    name: "Manga Tropical",
    description: "Suco de manga natural ao leite, doce e cheio de sabor.",
    price: "R$ 8,00",
    image: manga
  },
  {
    id: "morango",
    name: "Morango ao Leite",
    description: "Morango ao leite cremoso, feito com fruta de verdade.",
    price: "R$ 8,00",
    image: morango
  },
  {
    id: "banana",
    name: "Banana Caramelizada",
    description: "Vitamina de banana com doce de banana caseiro caramelizado.",
    price: "R$ 8,00",
    image: banana,
    tag: "Favoritos"
  },
  {
    id: "chocolate",
    name: "Chocolate Cremoso",
    description: "Achocolatado ao leite com textura cremosa e sabor marcante.",
    price: "R$ 8,00",
    image: chocolate
  },
  {
    id: "tropical",
    name: "Água de Coco Tropical",
    description: "Frutas tropicais combinadas com água de coco natural.",
    price: "R$ 8,00",
    image: tropical,
    tag: "Novidade"
  }
];
function ProductCard({ product }) {
  const link = buildWhatsappLink(buildProductWhatsappMessage(product.name, product.price));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex flex-col overflow-hidden rounded-3xl bg-card shadow-card border border-border/60 transition-all hover:-translate-y-1 hover:shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-sand", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: product.image,
          alt: `Sacolé sabor ${product.name}`,
          width: 800,
          height: 800,
          loading: "lazy",
          className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
        }
      ),
      product.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-3 rounded-full bg-tropical px-3 py-1 text-xs font-bold text-tropical-foreground shadow-sm", children: product.tag })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 rounded-full bg-secondary px-3 py-1 text-sm font-bold text-secondary-foreground", children: product.price })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground", children: product.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: link,
          target: "_blank",
          rel: "noreferrer",
          "aria-label": `Pedir sacolé de ${product.name} pelo WhatsApp`,
          className: "btn-whatsapp mt-5 text-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "size-4" }),
            socialLinks.whatsapp.productOrderLabel
          ]
        }
      )
    ] })
  ] });
}
function Menu() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cardapio", className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold uppercase tracking-wider text-primary", children: menuContent.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl sm:text-5xl font-bold text-foreground", children: menuContent.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base text-muted-foreground", children: menuContent.description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sobre", className: "bg-sand py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid gap-12 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: aboutContent.image,
        alt: aboutContent.imageAlt,
        width: 1280,
        height: 1280,
        loading: "lazy",
        className: "aspect-square w-full rounded-[2rem] object-cover shadow-card"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold uppercase tracking-wider text-primary", children: aboutContent.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl sm:text-5xl font-bold text-foreground", children: aboutContent.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: [
        aboutContent.descriptionPrefix,
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: aboutContent.descriptionBrand }),
        aboutContent.descriptionSuffix
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-foreground", children: aboutContent.valuesTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-3 sm:grid-cols-3", children: aboutContent.values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "rounded-2xl bg-card p-4 border border-border/60",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: v.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: v.text })
            ]
          },
          v.title
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border-l-4 border-tropical bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-wider font-bold text-tropical", children: aboutContent.mission.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-foreground", children: aboutContent.mission.text })
      ] })
    ] })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "avaliacoes", className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold uppercase tracking-wider text-primary", children: testimonialsContent.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl sm:text-5xl font-bold text-foreground", children: testimonialsContent.title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-12 grid gap-6 md:grid-cols-3", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: "rounded-3xl bg-card p-7 shadow-card border border-border/60 flex flex-col",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", "aria-label": testimonialsContent.ratingLabel, children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-[#FACC15] text-[#FACC15]", "aria-hidden": true }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 flex-1 text-foreground leading-relaxed", children: [
            "“",
            t.quote,
            "”"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t.role })
          ] })
        ]
      },
      t.name
    )) })
  ] }) });
}
function Gallery() {
  const [active, setActive] = reactExports.useState(null);
  const { images } = galleryContent;
  const close = reactExports.useCallback(() => setActive(null), []);
  const prev = reactExports.useCallback(
    () => setActive((i) => i === null ? null : (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = reactExports.useCallback(
    () => setActive((i) => i === null ? null : (i + 1) % images.length),
    [images.length]
  );
  reactExports.useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "galeria", className: "bg-sand py-20 sm:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold uppercase tracking-wider text-primary", children: galleryContent.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl sm:text-5xl font-bold text-foreground", children: galleryContent.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-12 grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-3", children: images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: i === 0 ? "row-span-2 col-span-2 md:col-span-1 md:row-span-2" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActive(i),
          "aria-label": `${galleryContent.openImageLabelPrefix} ${img.alt}`,
          className: "group relative block size-full overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: img.src,
                alt: img.alt,
                loading: "lazy",
                className: "size-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "aria-hidden": true,
                className: "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              }
            )
          ]
        }
      ) }, img.src)) })
    ] }),
    active !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": galleryContent.dialogLabel,
        className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm",
        onClick: close,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: close,
              "aria-label": galleryContent.closeLabel,
              className: "absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-background/15 text-background hover:bg-background/25",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                prev();
              },
              "aria-label": galleryContent.previousLabel,
              className: "absolute left-2 sm:left-6 inline-flex size-12 items-center justify-center rounded-full bg-background/15 text-background hover:bg-background/25",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "max-h-[85vh] max-w-5xl", onClick: (e) => e.stopPropagation(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: images[active].src,
                alt: images[active].alt,
                className: "max-h-[80vh] w-auto rounded-2xl object-contain"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "mt-3 text-center text-sm text-background/80", children: images[active].alt })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                next();
              },
              "aria-label": galleryContent.nextLabel,
              className: "absolute right-2 sm:right-6 inline-flex size-12 items-center justify-center rounded-full bg-background/15 text-background hover:bg-background/25",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {})
            }
          )
        ]
      }
    )
  ] });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-labelledby": ctaContent.titleId, className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: ctaContent.image,
        alt: "",
        width: 1920,
        height: 1080,
        loading: "lazy",
        className: "absolute inset-0 size-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page relative z-10 py-24 sm:py-32 text-center text-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground", children: ctaContent.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { id: ctaContent.titleId, className: "mt-5 font-display text-4xl sm:text-6xl font-bold max-w-3xl mx-auto leading-tight", children: [
        ctaContent.titlePrefix,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: ctaContent.titleHighlight }),
        ctaContent.titleSuffix
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-background/90 max-w-xl mx-auto", children: ctaContent.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: buildWhatsappLink(),
          target: "_blank",
          rel: "noreferrer",
          className: "btn-whatsapp text-base px-8 py-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "size-6" }),
            ctaContent.buttonLabel
          ]
        }
      ) })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-foreground text-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-14 grid gap-10 md:grid-cols-3 md:items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "text-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandMonogram, { className: "size-[1em]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-bold", children: site.brand })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-background/70 max-w-xs", children: footerContent.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Rodapé", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-background/60", children: footerContent.navigationTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm", children: navigationLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link.href, className: "hover:text-secondary", children: link.label }) }, link.href)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-background/60", children: footerContent.contactTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: buildWhatsappLink(),
              target: "_blank",
              rel: "noreferrer",
              "aria-label": socialLinks.whatsapp.ariaLabel,
              className: "inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-bold text-whatsapp-foreground hover:brightness-110",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "size-4" }),
                " ",
                socialLinks.whatsapp.label
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: socialLinks.instagram.href,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": socialLinks.instagram.ariaLabel,
              className: "inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2 text-sm font-bold text-background hover:bg-background/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-4", "aria-hidden": true }),
                " ",
                socialLinks.instagram.label
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-background/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-5 text-center text-xs text-background/60", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      site.brand,
      ". ",
      footerContent.copyrightSuffix
    ] }) })
  ] });
}
function LandingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Highlights, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  LandingPage as component
};
