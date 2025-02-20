import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { smallSphere, stars } from "../assets";

const Stars = () => {
  return (
    <ScrollParallax>
      <MouseParallax>
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex ">
          <img
            src={smallSphere}
            alt="sphere"
            className="relative z-1"
            width={255}
            height={255}
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="stars"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>
      </MouseParallax>
    </ScrollParallax>
  );
};

export default Stars;
