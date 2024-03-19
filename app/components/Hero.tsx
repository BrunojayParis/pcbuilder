import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface HeroProps {
  heroImage: StaticImageData;
}

const Hero: FC<HeroProps> = ({ heroImage }) => {
  return (
    <section className="container flex h-screen justify-center mx-auto text-center lg:rounded-b-xl overflow-hidden">
      <Image src={heroImage} alt="pc" className="w-full h-full object-cover" priority />
      <div className="absolute my-40">
        <h1 className="z-10 text-6xl font-bold text-white">
          BE THE BEST PLAYER
        </h1>
        <p className="text-white font-bold">
          Don't let your current PC hold you back
        </p>
        <button className="w-20 h-10 mt-10 text-white font-bold border ">
          Explore
        </button>
      </div>
    </section>
  );
};

export default Hero;
