import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import Specialities from "./components/Specialities";
import WorkWithMe from "./components/WorkWithMe";

function Home() {
  return (
    <div className="min-h-screen items-center justify-center">
      <Hero />
      <GetInTouch />
      <Specialities />
      <WorkWithMe />
    </div>
  );
}

export default Home;
