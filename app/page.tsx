import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import ProfBackground from "./components/ProfBackground";
import Specialities from "./components/Specialities";
import TherapistIntroduction from "./components/TherapistIntroduction";
import WorkWithMe from "./components/WorkWithMe";

function Home() {
  return (
    <div className="min-h-screen items-center justify-center">
      <Hero />
      <GetInTouch />
      <Specialities />
      <WorkWithMe />
      <TherapistIntroduction />
      <FAQ />
      <ProfBackground />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;
