import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pedemoleque Sacolés — Sacolés artesanais de fruta" },
      {
        name: "description",
        content:
          "Sacolés artesanais feitos com polpa de fruta fresca. Sabores tropicais, sem conservantes. Peça pelo WhatsApp.",
      },
      { property: "og:title", content: "Pedemoleque Sacolés — Sacolés artesanais de fruta" },
      {
        property: "og:description",
        content:
          "Frescor de verão em cada mordida. Maracujá, coco, manga, açaí e muito mais — feitos à mão.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,800&family=Nunito:wght@400;600;700;800&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Highlights />
        <Menu />
        <About />
        <Testimonials />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
