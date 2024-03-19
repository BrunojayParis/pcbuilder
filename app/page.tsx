import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Options from "./components/Options";
import logo from "../public/logo.png";
import hero from "../public/hero.jpg";

export default function Home() {
  return (
    <div className="bg-slate-700">
      <Nav logo={logo} />
      <Hero heroImage={hero} />
      {/* <Options
        // javelin={javelin}
        // hellfire={hellfire}
        // tomahawk={tomahawk}
        // harpoon={harpoon} 
      /> */}

    </div>
  );
}
