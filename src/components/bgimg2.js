import { Parallax } from "react-parallax";
import forest from "../images/forest.jpeg";

export function BgImg2() {
  return (
    <Parallax className="image" bgImage={forest} strength={300}>
      <div className="content">
        <span className="img-txt"> ofrst</span>
      </div>
    </Parallax>
  );
}
