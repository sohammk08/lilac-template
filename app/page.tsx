import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Office from "./components/Office";
import GetInTouch from "./components/GetInTouch";
import WorkWithMe from "./components/WorkWithMe";
import Specialities from "./components/Specialities";
import ProfBackground from "./components/ProfBackground";
import TherapistIntroduction from "./components/TherapistIntroduction";

function Home() {
  return (
    <div className="min-h-screen items-center justify-center">
      <Hero />
      <GetInTouch />
      <Specialities />
      <WorkWithMe />
      <TherapistIntroduction />
      <Office />
      <FAQ />
      <ProfBackground />
      <CTA />
    </div>
  );
}

export default Home;
