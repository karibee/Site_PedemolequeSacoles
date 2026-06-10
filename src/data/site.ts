import aboutImg from "@/assets/images/morango-abt.jpg";
import ctaImg from "@/assets/images/cta-AeV_praia.jpg";
import g1 from "@/assets/images/gallery-1.jpg";
import g2 from "@/assets/images/gallery-2.jpg";
import g3 from "@/assets/images/gallery-3.jpg";
import g4 from "@/assets/images/gallery-4.jpg";
import g5 from "@/assets/images/gallery-5.jpg";
import heroImg from "@/assets/images/hero-sec.png";

export const site = {
  brand: "Pedemoleque Sacolés",
  tagline: "Sacolés artesanais",
  whatsappNumber: "5521984845936",
  instagram: "https://instagram.com/andreia_sacoles",
  whatsappMessage: "Olá! Gostaria de fazer um pedido dos sacolés Pedemoleque 🍧",
};

export const buildWhatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    message ?? site.whatsappMessage,
  )}`;

export const buildProductWhatsappMessage = (productName: string, productPrice: string) =>
  `Olá! Quero pedir o sacolé de ${productName} (${productPrice}) 🍧`;

export const navigationLinks = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#galeria", label: "Galeria" },
];

export const socialLinks = {
  whatsapp: {
    label: "WhatsApp",
    orderLabel: "Pedir pelo WhatsApp",
    productOrderLabel: "Pedir agora",
    ariaLabel: "Falar no WhatsApp",
  },
  instagram: {
    label: "Instagram",
    ariaLabel: "Seguir no Instagram",
    href: site.instagram,
  },
};

export const heroContent = {
  image: heroImg,
  eyebrowIcon: "🌴",
  eyebrow: "Sabor de verão, feito à mão",
  titlePrefix: "O sacolé artesanal que ",
  titleHighlight: "refresca",
  titleSuffix: " o seu dia.",
  description:
    "Polpa de fruta fresca, receita de família e aquele friozinho gostoso de quando o verão chega. Feitos com carinho, entregues com pressa.",
  primaryCta: {
    href: "#cardapio",
    label: "Ver Cardápio",
  },
  whatsappCta: {
    label: "Pedir pelo WhatsApp",
  },
};

export const menuContent = {
  eyebrow: "Cardápio",
  title: "Sabores que abraçam o calor.",
  description:
    "Todos feitos com polpa fresca, sem conservantes. Escolha o seu favorito e peça direto pelo WhatsApp.",
};

export const aboutContent = {
  image: aboutImg,
  imageAlt: "Mãos despejando polpa de fruta tropical em tubos de sacolé",
  eyebrow: "Sobre a marca",
  title: "Um pedacinho de verão em cada sacolé.",
  descriptionPrefix: "A ",
  descriptionBrand: site.brand,
  descriptionSuffix:
    " nasceu no quintal de casa, com frutas colhidas do pé e a vontade de devolver às pessoas aquele sabor de infância. Hoje, levamos o frescor do verão para a sua casa, sua festa e seu dia a dia — feitos um a um, do nosso jeito.",
  valuesTitle: "Nossos valores",
  values: [
    { title: "Fruta de verdade", text: "Selecionamos polpas frescas, sem corantes nem conservantes." },
    { title: "Receita de família", text: "Cada sabor nasce da cozinha da vó, com tempo e carinho." },
    { title: "Cuidado em cada etapa", text: "Do preparo ao congelamento, tudo é feito em pequenas levas." },
  ],
  mission: {
    eyebrow: "Missão",
    text:
      "Refrescar momentos com sabor de verdade, do jeito artesanal que só quem ama o que faz consegue entregar.",
  },
};

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

export const testimonialsContent = {
  eyebrow: "Avaliações",
  title: "Quem prova, volta sempre.",
  ratingLabel: "5 estrelas",
};

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

export const galleryContent = {
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
    { src: g5, alt: "Menção nos stories de cliente" }
  ],
};

export const ctaContent = {
  image: ctaImg,
  eyebrow: "Bora refrescar?",
  titleId: "cta-title",
  titlePrefix: "O verão chega antes quando você pede um ",
  titleHighlight: "Pedemoleque",
  titleSuffix: ".",
  description:
    "Faça seu pedido agora pelo WhatsApp e receba os sacolés gelados, prontos pra adoçar o seu dia.",
  buttonLabel: "Pedir pelo WhatsApp",
};

export const footerContent = {
  description:
    "Sacolés artesanais feitos com fruta de verdade. Frescor de verão entregue na sua porta.",
  navigationTitle: "Navegação",
  contactTitle: "Fale com a gente",
  copyrightSuffix: "Todos os direitos reservados.",
};
