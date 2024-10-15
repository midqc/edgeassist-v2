import HeroSection from "../components/HeroSection";
import WhatWeDo from "../components/WhatWeDo";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 my-6">
      <HeroSection />
      <WhatWeDo />
      <FAQ />
      <Footer />
    </div>
  );
}
