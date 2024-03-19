import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface OptionsProps {
  javelin: StaticImageData;
  hellfire: StaticImageData;
  tomahawk: StaticImageData;
  harpoon: StaticImageData;
}

const Options: FC<OptionsProps> = ({}) => {
  return (
    <section className="flex flex-col h-screen mx-auto text-center mt-10">
      <h2 className="text-4xl font-bold text-white">Ready. Set. Game</h2>
      <div className="flex gap-10 mx-auto mt-12">
        <p>Javelin</p>
        <p>Hellfire</p>
        <p>Tomahawk</p>
        <p>Harpoon</p>
      </div>
    </section>
  );
};

export default Options;
