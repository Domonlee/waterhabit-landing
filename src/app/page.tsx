import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

export default function Home() {
  return (
    <main>
      <LanguageToggle />
      <Hero />
      <Features />
      <Screenshots />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
