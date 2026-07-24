import { Hero } from "../components/home/Hero";
import { TrustSection } from "../components/home/TrustSection";
import { SixPillars } from "../components/home/SixPillars";
import { ScaleNumbers } from "../components/home/ScaleNumbers";
import { NeuralEducation } from "../components/home/NeuralEducation";
import { CampusLife } from "../components/home/CampusLife";
import { Experiences } from "../components/home/Experiences";
import { DirectorMessage } from "../components/home/DirectorMessage";
import { WhyVVP } from "../components/home/WhyVVP";
import { Testimonials } from "../components/home/Testimonials";
import { Awards } from "../components/home/Awards";
import { FinalCTA } from "../components/home/FinalCTA";

export function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <SixPillars />
      <ScaleNumbers />
      <NeuralEducation />
      <CampusLife />
      <Experiences />
      <WhyVVP />
      <DirectorMessage />
      <Testimonials />
      <Awards />
      <FinalCTA />
    </main>
  );
}
