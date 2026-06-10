import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const aboutImg = "/assets/logo_pedemoleque-AoRrnzC8.png";
const ctaImg = "/assets/cta-AeV_praia-fqrSclim.jpg";
const g1 = "/assets/gallery-1-B-1GMu5l.jpg";
const g2 = "/assets/gallery-2-Bj4vrgUm.jpg";
const g3 = "/assets/gallery-3-BzfLFEzg.jpg";
const g4 = "/assets/gallery-4-CISU0OFH.jpg";
const g5 = "/assets/gallery-5-Bjff3eou.webp";
const g6 = "/assets/gallery-6-azoSWKU0.jpg";
const g7 = "/assets/gallery-7-DCq7c0AA.png";
const heroImg = "/assets/hero-sec--3Yl_z0q.jpg";
const site = {
  url: "https://pedemolequesacoles.netlify.app/",
  brand: "Pedemoleque Sacolés",
  whatsappNumber: "5521984845936",
  instagram: "https://instagram.com/andreia_sacoles",
  whatsappMessage: "Olá! Gostaria de fazer um pedido dos sacolés Pedemoleque 🍧"
};
const integrations = {
  googleAdsId: "AW-17722458846",
  googleSiteVerification: "LPCtnlex6JJxMChjYR-E9hh_aMMbySvJ2uQxY5VGlU8"
};
const seo = {
  title: "Pedemoleque Sacolés | Sacolés artesanais na Região dos Lagos",
  description: "Pedemoleque Sacolés prepara sacolés artesanais com frutas naturais, produção artesanal e sabor de verão para praia, Arraial do Cabo e Região dos Lagos.",
  keywords: "Pedemoleque Sacolés, sacolés artesanais, sacolé artesanal, frutas naturais, produção artesanal, praia, Arraial do Cabo, Região dos Lagos, sacolés na praia",
  author: site.brand,
  canonicalUrl: site.url,
  ogImage: `${site.url}logo_pedemoleque.png`,
  home: {
    title: "Pedemoleque Sacolés | Sacolés artesanais em Arraial do Cabo",
    description: "Sacolés artesanais feitos com frutas naturais, cuidado em pequenas levas e sabor de verão para praia, Arraial do Cabo e Região dos Lagos. Peça pelo WhatsApp.",
    ogTitle: "Pedemoleque Sacolés | Sacolés artesanais com frutas naturais",
    ogDescription: "Conheça os sacolés artesanais da Pedemoleque Sacolés: fruta de verdade, produção artesanal e frescor para curtir na praia e na Região dos Lagos."
  }
};
const buildWhatsappLink = (message) => `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  message ?? site.whatsappMessage
)}`;
const buildProductWhatsappMessage = (productName, productPrice) => `Olá! Quero pedir o sacolé de ${productName} (${productPrice}) 🍧`;
const navigationLinks = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#galeria", label: "Galeria" }
];
const socialLinks = {
  whatsapp: {
    label: "WhatsApp",
    orderLabel: "Pedir pelo WhatsApp",
    productOrderLabel: "Pedir agora",
    ariaLabel: "Falar no WhatsApp"
  },
  instagram: {
    label: "Instagram",
    ariaLabel: "Seguir no Instagram",
    href: site.instagram
  }
};
const heroContent = {
  image: heroImg,
  eyebrowIcon: "🌴",
  eyebrow: "Sabor de verão, feito à mão",
  titlePrefix: "O sacolé artesanal que ",
  titleHighlight: "refresca",
  titleSuffix: " o seu dia.",
  description: "Polpa de fruta fresca, oferecendo aquele geladinho gostoso de quando o verão chega. Feitos com carinho, entregues com pressa.",
  primaryCta: {
    href: "#cardapio",
    label: "Ver Cardápio"
  },
  whatsappCta: {
    label: "Pedir pelo WhatsApp"
  }
};
const menuContent = {
  eyebrow: "Cardápio",
  title: "Sabores que abraçam o calor.",
  description: "Todos feitos com polpa fresca, sem conservantes. Escolha o seu favorito e peça direto pelo WhatsApp."
};
const aboutContent = {
  image: aboutImg,
  imageAlt: "Mãos despejando polpa de fruta tropical em tubos de sacolé",
  eyebrow: "Sobre a marca",
  title: "Um pedacinho de verão em cada sacolé.",
  descriptionPrefix: "A ",
  descriptionBrand: site.brand,
  descriptionSuffix: " nasceu no quintal de casa, usando realmente a fruta verdadeira com a vontade de devolver às pessoas aquele sabor natural, fugindo dos ingredientes industrializados. Hoje, levamos o frescor do verão para a sua casa, sua festa e seu dia a dia, feitos um a um, do nosso jeito.",
  valuesTitle: "Nossos valores",
  values: [
    {
      title: "Fruta de verdade",
      text: "Selecionamos polpas frescas e ingredientes de qualidade, sem corantes nem conservantes."
    },
    {
      title: "Sabor mais natural",
      text: "Valorizamos sabores mais naturais, com menos artificialidade e mais proximidade com os ingredientes de verdade.."
    },
    {
      title: "Cuidado em cada etapa",
      text: "Do preparo ao congelamento, tudo é feito em pequenas levas, com atenção aos detalhes."
    }
  ],
  mission: {
    eyebrow: "Missão",
    text: "Refrescar momentos com sabor de verdade, do jeito artesanal que só quem ama o que faz consegue entregar."
  }
};
const highlights = [
  {
    icon: "🍓",
    title: "Produção Artesanal",
    description: "Feitos um a um, com frutas selecionadas e sem conservantes. O sabor que só o cuidado caseiro entrega."
  },
  {
    icon: "🌴",
    title: "Sabores Tropicais",
    description: "Maracujá, coco, manga, banana e muito mais. A fruta in natura no centro de tudo."
  },
  {
    icon: "💬",
    title: "Pedido pelo WhatsApp",
    description: "Atendimento direto, rápido e sem complicação. Escolha, peça e receba geladinho."
  }
];
const testimonialsContent = {
  eyebrow: "Avaliações",
  title: "Quem prova, volta sempre.",
  ratingLabel: "5 estrelas"
};
const testimonials = [
  {
    name: "Andréia R.",
    role: "Cliente desde 2022",
    quote: "O melhor sacolé que já provei. Dá pra sentir o sabor da fruta de verdade."
  },
  {
    name: "Rafael T.",
    role: "Veranista",
    quote: "Fizemos a encomenda pra galera aqui, e todo mundo elogiou."
  },
  {
    name: "Juliana M.",
    role: "Vizinha de bairro",
    quote: "Atendimento impecável pelo WhatsApp, entregam rapidinho. Recomendo demais!"
  }
];
const galleryContent = {
  eyebrow: "Galeria",
  title: "O verão nas suas mãos.",
  dialogLabel: "Visualização da galeria",
  closeLabel: "Fechar",
  previousLabel: "Imagem anterior",
  nextLabel: "Próxima imagem",
  openImageLabelPrefix: "Abrir imagem:",
  images: [
    { src: g1, alt: "Praia de Figueira" },
    { src: ctaImg, alt: "Vendendo na praia de Figueira" },
    { src: g2, alt: "Carrinho de sacolés na praia de Figueira" },
    { src: aboutImg, alt: "Preparação artesanal dos sacolés" },
    { src: heroImg, alt: "Sacolés em cenário tropical (Gerado por IA)" },
    { src: g3, alt: "Por do sol na lagoa de Figueira" },
    { src: g4, alt: "Sacolé de morango com nutella" },
    { src: g5, alt: "Menção nos stories de cliente" },
    { src: g6, alt: "Morango utilizado na produção dos sacolés" },
    { src: g7, alt: "Sacolé de Banana Caramelizada" }
  ]
};
const ctaContent = {
  image: ctaImg,
  eyebrow: "Bora refrescar?",
  titleId: "cta-title",
  titlePrefix: "O verão chega antes quando você pede um ",
  titleHighlight: "Pedemoleque",
  titleSuffix: ".",
  description: "Faça seu pedido agora pelo WhatsApp e receba os sacolés gelados, prontos pra adoçar o seu dia.",
  buttonLabel: "Pedir pelo WhatsApp"
};
const footerContent = {
  description: "Sacolés artesanais feitos com fruta de verdade. Frescor de verão entregue na sua porta.",
  navigationTitle: "Navegação",
  contactTitle: "Fale com a gente",
  copyrightSuffix: "Todos os direitos reservados."
};
const appCss = "/assets/styles-63cnR-eb.css";
const googleTagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${integrations.googleAdsId}');
`;
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Página não encontrada" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "A página que você procura não existe ou foi movida." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Voltar para o início"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "Esta página não carregou" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Algo deu errado por aqui. Você pode tentar novamente ou voltar ao início." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Tentar novamente"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Voltar para o início"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { name: "author", content: seo.author },
      {
        name: "google-site-verification",
        content: integrations.googleSiteVerification
      },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: seo.canonicalUrl },
      { property: "og:site_name", content: site.brand },
      { property: "og:image", content: seo.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
      { name: "twitter:image", content: seo.ogImage }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "icon",
        href: "/favicon.png?v=2",
        type: "image/png",
        sizes: "280x280"
      },
      {
        rel: "shortcut icon",
        href: "/favicon.png?v=2",
        type: "image/png"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${integrations.googleAdsId}`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { dangerouslySetInnerHTML: { __html: googleTagScript } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter = () => import("./index-O8xmLKVe.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: seo.home.title
    }, {
      name: "description",
      content: seo.home.description
    }, {
      name: "keywords",
      content: seo.keywords
    }, {
      name: "author",
      content: seo.author
    }, {
      property: "og:title",
      content: seo.home.ogTitle
    }, {
      property: "og:description",
      content: seo.home.ogDescription
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: seo.canonicalUrl
    }, {
      property: "og:site_name",
      content: site.brand
    }, {
      property: "og:image",
      content: seo.ogImage
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: seo.home.ogTitle
    }, {
      name: "twitter:description",
      content: seo.home.ogDescription
    }, {
      name: "twitter:image",
      content: seo.ogImage
    }],
    links: [{
      rel: "canonical",
      href: seo.canonicalUrl
    }, {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,800&family=Nunito:wght@400;600;700;800&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  socialLinks as a,
  buildWhatsappLink as b,
  highlights as c,
  buildProductWhatsappMessage as d,
  aboutContent as e,
  testimonials as f,
  galleryContent as g,
  heroContent as h,
  ctaContent as i,
  footerContent as j,
  menuContent as m,
  navigationLinks as n,
  router as r,
  site as s,
  testimonialsContent as t
};
