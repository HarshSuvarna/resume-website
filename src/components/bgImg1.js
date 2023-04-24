import { Parallax } from "react-parallax";
import naneghat2 from "../images/naneghat2.jpg";

export function BgImg1() {
  return (
    <Parallax className="image" bgImage={naneghat2} strength={300}>
      <div className="content">
        <span className="img-txt"> Harsh Suvarna</span>
      </div>
    </Parallax>
  );
}
