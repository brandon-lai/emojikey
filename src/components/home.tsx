import React, { useRef } from "react";
import Navbar from "./landing/Navbar";
import HeroSection from "./landing/HeroSection";
import FeatureCards from "./landing/FeatureCards";

function Home() {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen min-h-screen bg-white">
      <Navbar onFeaturesClick={scrollToFeatures} />
      <main className="pt-20">
        <HeroSection />
        <div ref={featuresRef}>
          <FeatureCards />
        </div>
      </main>
    </div>
  );
}

export default Home;
