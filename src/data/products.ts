import maracuja from "@/assets/images/real/sacoles/maracuja.png";
import morango from "@/assets/images/real/sacoles/morango.png";
import morango_nutella from "@/assets/images/real/sacoles/morango_e_nutella.png";
import manga from "@/assets/images/real/sacoles/manga.png";
import amendoim from "@/assets/images/real/sacoles/amendoim.png";
import banana from "@/assets/images/real/sacoles/banana.png";
import chocolate from "@/assets/images/real/sacoles/chocolate.png";
import tropical from "@/assets/images/real/sacoles/tropical.png";
import limao from "@/assets/images/real/sacoles/limao.png";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

export const products: Product[] = [
    {
    id: "maracuja",
    name: "Mousse de Maracujá",
    description: "Polpa de maracujá natural ao leite, cremosa e equilibrada.",
    price: "R$ 8,00",
    image: maracuja,
    },

    {
    id: "limao",
    name: "Limão ao Leite",
    description: "Suco de limão natural com creme de leite, suave e refrescante.",
    price: "R$ 8,00",
    image: limao,
    },

    {
    id: "amendoim",
    name: "Amendoim Torrado",
    description: "Amendoim torrado ao leite, com sabor intenso e cremoso.",
    price: "R$ 8,00",
    image: amendoim,
    tag: "Favoritos",
    },

    {
    id: "morango_nutella",
    name: "Morango com Nutella",
    description: "Morango ao leite combinado com o sabor irresistível da Nutella.",
    price: "R$ 8,00",
    image: morango_nutella,
    tag: "Mais pedido!",
    },

    {
    id: "manga",
    name: "Manga Tropical",
    description: "Suco de manga natural ao leite, doce e cheio de sabor.",
    price: "R$ 8,00",
    image: manga,
    },

    {
    id: "morango",
    name: "Morango ao Leite",
    description: "Morango ao leite cremoso, feito com fruta de verdade.",
    price: "R$ 8,00",
    image: morango,
    },

    {
    id: "banana",
    name: "Banana Caramelizada",
    description: "Vitamina de banana com doce de banana caseiro caramelizado.",
    price: "R$ 8,00",
    image: banana,
    tag: "Favoritos",
    },

    {
    id: "chocolate",
    name: "Chocolate Cremoso",
    description: "Achocolatado ao leite com textura cremosa e sabor marcante.",
    price: "R$ 8,00",
    image: chocolate,
    },

    {
    id: "tropical",
    name: "Água de Coco Tropical",
    description: "Frutas tropicais combinadas com água de coco natural.",
    price: "R$ 8,00",
    image: tropical,
    tag: "Novidade",
    },
];
