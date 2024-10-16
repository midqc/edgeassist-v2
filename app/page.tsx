import HeroSection from "../components/HeroSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Messages from "../components/Messages";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <Navbar />
      <HeroSection />
      <Messages />
      <FAQ />
      <Footer />
    </div>
  );
}
