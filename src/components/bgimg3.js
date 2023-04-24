import { Parallax } from "react-parallax";
import shiva from "../images/shiva.jpeg";

export function BgImg3() {
  return (
    <Parallax className="image" bgImage={shiva} strength={300}>
      <div className="content">
        <span className="img-txt"> Content</span>
      </div>
    </Parallax>
  );
}
