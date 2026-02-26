import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Purpose } from "./components/Purpose";
import { TargetAudience } from "./components/TargetAudience";
import { CoreFeatures } from "./components/CoreFeatures";
import { IndianEcosystem } from "./components/IndianEcosystem";
import { GovernanceTrust } from "./components/GovernanceTrust";
import { SupportSection } from "./components/SupportSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="w-full min-h-screen bg-white"
      style={{ fontFamily: "'Poppins-Regular', sans-serif", scrollBehavior: "smooth" }}
    >
      <Navbar />
      <main>
        <Hero />
        <Purpose />
        <TargetAudience />
        <CoreFeatures />
        <IndianEcosystem />
        <GovernanceTrust />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}
