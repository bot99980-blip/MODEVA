import { Discount } from "../components/Discount";
import { Wrapper } from "../components/Wrapper";
import { Piano } from "../components/Piano";
import { Slider } from "../components/Slider";
import { Recs } from "../components/Recs";

export const Home = () => {
  return (
    <main>
      <Discount />
      <Wrapper />
      <Piano />
      <Slider
        img="https://s10.iimage.su/s/31/gQGoXgExudSQ2fljPYqUl414Eo7gE6V0ZdNzKeohb.png"
        title="THE BEST DRESS FOR THE BEST WOMAN"
      />
      <Slider
        img="https://s10.iimage.su/s/31/gMuSXrAxcgzdqf2LahzHEEmGfhpNnrWkiJ8Rr2f5W.png"
        title="BEST OUTFIT FOR YOUR HAPPINESS"
      />
      <Recs />
    </main>
  );
};
