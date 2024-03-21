import { StaticImageData } from "next/image";
import { FC } from "react";
import Card from "./Card";



interface OptionsProps {
  javelin: StaticImageData;
  hellfire: StaticImageData;
  tomahawk: StaticImageData;
}

const Options: FC<OptionsProps> = ({javelin, hellfire, tomahawk}) => {
  return (
    <section className="flex flex-col mx-auto text-center py-10">
      <h2 className="text-4xl font-bold text-white">Ready. Set. Game</h2>
      <div className="flex flex-col gap-10 mx-10 mt-12 md:flex-row ">
        <Card
          href="/Mini1"
          title="JAVELIN"
          subtitle="Se arranca fuerte. La mejor combinación de procesadores de 6 núcleos con NVIDIA® RTX™ 30 series y el nuevo gabinete Q300L V2."
          photo={javelin}
        />
        <Card
          href="/Mini2"
          title="HELLFIRE"
          subtitle="No andamos con vueltas con Hellfire. Procesadores de 12 núcleos con NVIDIA® RTX™ que pueden con todo en 1440p."
          photo={hellfire}
        />
        <Card
          href="/Mini3"
          title="TOMAHAWK"
          subtitle="Lo mejor de lo mejor. Procesadores de infinitos nucleos y GPU NVIDIA® RTX™ en el gabinete mas demandado, el NR200."
          photo={tomahawk}
        />
      </div>
    </section>
  );
};

export default Options;
