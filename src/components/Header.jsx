import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import { useEffect, useState } from "react";
import { HamburgerMenu } from "./design/Header";
import MenuSvg from "../assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathName = useLocation();
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    if (openNav) {
      setOpenNav(false);
      enablePageScroll();
    } else {
      setOpenNav(true);
      disablePageScroll();
    }
  };
  const handleNav = () => {
    if (!openNav) return;

    enablePageScroll();
    setOpenNav(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full  z-50   border-b border-n-6 ${
        openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className={`flex items-center px-5 lg:px-7 xl:px-10 max-lg:py-4`}>
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="brainwave" />
        </a>

        <nav
          className={` ${
            openNav ? "flex" : "hidden"
          } fixed top-[5rem] left-0 bottom-0 right-0 bg-n-8 lg:static 
         lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto   lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleNav}
                className={`block font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile && "lg:hidden"
                } p-6  md:py-8 lg:-mr-0.25 lg:text-xs xl:text-sm lg:font-semibold ${
                  item.url === pathName.hash ? "z-2 text-n-1" : "text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-10`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="!hidden lg:!flex" href="#login">
          Sign In
        </Button>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNav}>
          <MenuSvg openNav={openNav} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
