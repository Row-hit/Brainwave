import { check, check2 } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap   ">
      {pricing.map((item, i) => (
        <div
          key={item.id}
          id={`card${i}`}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-5 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-5 "
        >
          <h4
            className={`h4 mb-4 ${
              i == 0
                ? "text-color-2"
                : i == 1
                ? "text-color-1"
                : "text-color-3 "
            }`}
          >
            {item.title}
          </h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3 font-sora"> $ </div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {" "}
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@me.com"}
            white={!!item.price}
          >
            {item.price ? "Get-Started" : "Contact-Us"}
          </Button>
          <ul>
            {item.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start py-5 border-t  border-n-6 "
              >
                <img src={check} width={24} height={24} />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
