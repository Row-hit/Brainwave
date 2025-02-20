import { smallSphere, stars } from "../assets";
import { LeftLine, RightLine } from "./design/Pricing";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import Stars from "./Stars";

const Pricing = () => {
  return (
    <Section className="overflow-hidden " id="pricing">
      <div className="container relative z-2 ">
        <Stars />
        <Heading
          tag="Get started  with Brainwave"
          title="Pay once, use forever "
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10 ">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b "
            href="/pricing"
          >
            {" "}
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
