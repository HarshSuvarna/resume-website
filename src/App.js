import { Navbar } from "./components/Navbar";
import { BgImg1 } from "./components/bgImg1";
import { BgImg2 } from "./components/bgimg2";
import { BgImg3 } from "./components/bgimg3";
import { AboutMe } from "./components/AboutMe";

function App() {
  return (
    <div>
      <Navbar />
      <BgImg1 />
      <AboutMe />
      <BgImg2 />
      <BgImg3 />
    </div>
  );
}

export default App;
