import BestTeams from "./components/Home/BestTeams/BestTeams";
import Brainstorming from "./components/Home/Brainstorming";
import Collaboration from "./components/Home/Collaboration/Collaboration";
import Hero from "./components/Home/Hero";
import HybridWork from "./components/Home/HybridWork";
import Intregation from "./components/Home/Intregation";
import SectionPart from "./components/Home/SectionPart";
import TrustedUs from "./components/Home/TrustedUs";
import UiuxDesign from "./components/Home/UiuxDesign";

function App() {
  return (
    <>
      <Hero />
      <TrustedUs />
      <Collaboration />
      <HybridWork />
      <Intregation />
      <SectionPart />
      <Brainstorming />
      <UiuxDesign />
      <BestTeams />
    </>
  );
}

export default App;
