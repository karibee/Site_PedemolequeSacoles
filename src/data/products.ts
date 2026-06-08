import maracuja from "@/assets/images/p-maracuja.jpg";
import coco from "@/assets/images/p-coco.jpg";
import morango from "@/assets/images/p-morango.jpg";
import manga from "@/assets/images/p-manga.jpg";
import abacaxi from "@/assets/images/p-abacaxi.jpg";
import acai from "@/assets/images/p-acai.jpg";
import chocolate from "@/assets/images/p-chocolate.jpg";

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
    name: "Maracujá",
    description: "Polpa fresca de maracujá com toque de mel — azedinho na medida.",
    price: "R$ 6,00",
    image: maracuja,
    tag: "Mais pedido",
  },
  {
    id: "coco",
    name: "Coco Cremoso",
    description: "Leite de coco natural batido com pedacinhos de coco fresco.",
    price: "R$ 6,00",
    image: coco,
  },
  {
    id: "morango",
    name: "Morango ao Leite",
    description: "Morangos selecionados batidos com leite condensado artesanal.",
    price: "R$ 7,00",
    image: morango,
    tag: "Favorito",
  },
  {
    id: "manga",
    name: "Manga Tropical",
    description: "Manga madura batida na hora — doce, suculenta e refrescante.",
    price: "R$ 6,00",
    image: manga,
  },
  {
    id: "abacaxi",
    name: "Abacaxi com Hortelã",
    description: "Abacaxi pérola com folhas frescas de hortelã. Verão puro.",
    price: "R$ 6,00",
    image: abacaxi,
  },
  {
    id: "acai",
    name: "Açaí da Amazônia",
    description: "Açaí puro batido com banana — energia tropical em cada mordida.",
    price: "R$ 8,00",
    image: acai,
    tag: "Novidade",
  },
  {
    id: "chocolate",
    name: "Chocolate Belga",
    description: "Cacau nobre derretido em leite cremoso. Para os chocólatras.",
    price: "R$ 7,00",
    image: chocolate,
  },
];
