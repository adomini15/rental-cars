import Navbar from "@/components/shared/Navbar/Navbar";
import Block1 from "./components/Block-1/Block-1";
import BrandsSlider from "./components/Brands-Slider/Brands-Slider";
import Features from "./components/Features/Features";
import Fleet from "./components/Fleet/Fleet";
import DriveToday from "./components/DriveToday/DriveToday";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Block1 />
      <BrandsSlider />
      <Features />
      <Fleet />
      <DriveToday />
    </div>
  );
}
