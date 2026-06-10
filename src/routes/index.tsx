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
import { seo, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo.home.title },
      {
        name: "description",
        content: seo.home.description,
      },
      { name: "keywords", content: seo.keywords },
      { name: "author", content: seo.author },
      { property: "og:title", content: seo.home.ogTitle },
      {
        property: "og:description",
        content: seo.home.ogDescription,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: seo.canonicalUrl },
      { property: "og:site_name", content: site.brand },
      { property: "og:image", content: seo.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.home.ogTitle },
      { name: "twitter:description", content: seo.home.ogDescription },
      { name: "twitter:image", content: seo.ogImage },
    ],
    links: [
      { rel: "canonical", href: seo.canonicalUrl },
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
