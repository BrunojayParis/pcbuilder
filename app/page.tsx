import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Options from "./components/Options";

import logo from "../public/logo.png";
import hero from "../public/hero.jpg";
import javelin from "../public/q300l-v2-white.png";
import hellfire from "../public/q300l-v2.png";
import tomahawk from "../public/nr200.png";


export default function Home() {
  return (
    <div className="bg-slate-700">
      <Nav logo={logo} />
      <Hero heroImage={hero} />
      <Options
        javelin={javelin}
        hellfire={hellfire}
        tomahawk={tomahawk}
      />
    </div>
  );
}
