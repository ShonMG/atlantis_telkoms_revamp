import { useState, useEffect } from "react";
import LoadingScreen from "@/components/ui/loading-screen";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <LoadingScreen isVisible={isLoading} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
