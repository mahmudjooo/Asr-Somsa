import StatsBanner from "@/components/Banner";
import AsosiyOyna from "./AsosiyOyna";
import AboutSection from "@/components/About";
import SomsaVideoSection from "@/components/SomsaVideoSection";
import ImageSliderSection from "@/components/Slider";
import RightSideSlider from "@/components/RigthSlider";

function Home() {
  return (
    <div>
      <AsosiyOyna />
      <StatsBanner />
      <SomsaVideoSection />
      <RightSideSlider />
      <AboutSection />
      <ImageSliderSection />
    </div>
  );
}

export default Home;
