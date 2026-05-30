import { Discount } from "../components/Discount";
import { Wrapper } from "../components/Wrapper";
import { Piano } from "../components/Piano";
import { Slider } from "../components/Slider";

export const Home = () => {
  return (
    <main>
      <Discount />
      <Wrapper />
      <Piano />
      <Slider title="THE BEST DRESS FOR THE BEST WOMAN" />
    </main>
  );
};
