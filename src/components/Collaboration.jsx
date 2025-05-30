import { ScrollParallax } from "react-just-parallax";
import { brainwave, brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 md:mb-8 mb-4">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3 " key={item.id}>
                <div className="flex items-center">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <ScrollParallax>
            <Button className="mt-18">Try it Now</Button>
          </ScrollParallax>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="text-n-4 body-2 mb-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <ScrollParallax>
            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100 ">
              <div className="w-60 flex aspect-square m-auto border border-n-6 rounded-full ">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full ">
                  <div className="flex justify-center items-center w-full h-full rounded-full  bg-n-8 m-auto">
                    <img
                      src={brainwaveSymbol}
                      alt="brainwave"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
              </div>
              <ul>
                {collabApps.map((item, index) => (
                  <li
                    key={item.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                      index * 45
                    }`}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl rotate-${
                        index * 45
                      }`}
                    >
                      <img
                        src={item.icon}
                        width={item.width}
                        height={item.height}
                        alt={item.title}
                        className="m-auto"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <LeftCurve />
              <RightCurve />
            </div>
          </ScrollParallax>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
