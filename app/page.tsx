import HeroSection from "../components/HeroSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Messages from "@/components/Messages";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 my-6">
      <HeroSection />
      <Messages />
      <FAQ />
      <Footer />
    </div>
  );
}
