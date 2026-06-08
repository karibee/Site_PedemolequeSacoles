export const site = {
  brand: "Pedemoleque Sacolés",
  tagline: "Sacolés artesanais",
  whatsappNumber: "5511999999999", // troque pelo número real
  instagram: "https://instagram.com/pedemolequesacoles",
  whatsappMessage: "Olá! Gostaria de fazer um pedido dos sacolés Pedemoleque 🍧",
};

export const buildWhatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    message ?? site.whatsappMessage,
  )}`;

export const highlights = [
  {
    icon: "🍓",
    title: "Produção Artesanal",
    description:
      "Feitos um a um, com frutas selecionadas e sem conservantes. O sabor que só o cuidado caseiro entrega.",
  },
  {
    icon: "🌴",
    title: "Sabores Tropicais",
    description:
      "Maracujá, coco, manga, açaí e muito mais — a fruta in natura no centro de tudo.",
  },
  {
    icon: "💬",
    title: "Pedido pelo WhatsApp",
    description:
      "Atendimento direto, rápido e sem complicação. Escolha, peça e receba geladinho.",
  },
];

export const testimonials = [
  {
    name: "Mariana S.",
    role: "Cliente desde 2022",
    quote:
      "O melhor sacolé que já provei. Dá pra sentir o sabor da fruta de verdade, parece feito em casa pela minha avó.",
  },
  {
    name: "Rafael T.",
    role: "Festa de aniversário",
    quote:
      "Fizemos a encomenda pra festa do meu filho e foi um sucesso. Todo mundo elogiou o sabor e a apresentação.",
  },
  {
    name: "Juliana M.",
    role: "Vizinha de bairro",
    quote:
      "Atendimento impecável pelo WhatsApp, entregam rapidinho e sempre congeladinho. Recomendo demais!",
  },
];
