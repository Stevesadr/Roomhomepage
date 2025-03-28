import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import BtnNav from "./fichers/BtnNav";
import hanburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const items = ["home", "shop", "about", "contact"];
  return (
    <div className="absolute top-0 left-0 z-50">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-75"
          onClick={toggleMenu}
        />
      )}

      <nav className="">
        <div className="flex w-2xs md:w-96 mt-6  md:p-5 md:mt-4 ml-4 md:gap-12 md:items-center justify-center">
          <div className=" md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none "
            >
              <img src={hanburger} alt="hanburger" />
            </button>
          </div>
          <div className="w-full flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>

          <div className="hidden md:flex gap-6  items-center justify-center">
            {items.map((items) => {
              return <BtnNav>{items}</BtnNav>;
            })}
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-x-0 left-0 top-0 w-full h-20 bg-white text-black transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-32"
        } z-50`}
      >
        <div className=" w-full h-full flex items-center justify-around">
          <div>
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              <img src={close} alt="close" />
            </button>
          </div>
          <div className="flex gap-2 font-medium">
            {items.map((item) => {
              return <p>{item}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
