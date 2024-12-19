import React, { useState } from "react";
import logo from "../assets/images/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-slate-50 h-auto sm:h-24 flex flex-col sm:flex-row items-center px-5 py-3 sm:py-5 justify-between drop-shadow-lg">
      {/* Logo */}
      {/* <div className="logo text-lg text-[#0B9AD6] font-semibold w-full sm:w-auto px-5 sm:px-10 text-left">
        <span className="pr-2 text-black font-bold text-xl">DR</span>FITNESS💪
      </div> */}
      <div className="w-full sm:w-auto px-5 sm:px-10">
        <img src={logo} alt="" className="h-20 w-46"/>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div
        className="block sm:hidden text-2xl cursor-pointer ml-auto"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </div>

      {/* Links Section */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row gap-5 sm:gap-[4rem] items-center mt-5 sm:mt-0 w-full sm:w-auto`}
      >
        <div className="flex flex-col sm:flex-row gap-5 font-[500] w-full sm:w-auto text-center sm:text-left">
          <a href="#" className="hover:text-[#0B9AD6]">Home</a>
          <a href="#" className="hover:text-[#0B9AD6]">About us</a>
          <a href="#" className="hover:text-[#0B9AD6]">Coaches</a>
          <a href="#" className="hover:text-[#0B9AD6]">Facility</a>
          <a href="#" className="hover:text-[#0B9AD6]">Pricing</a>
        </div>
        <div className="mt-3 sm:mt-0">
          <button className="border px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-[#0B9AD6] text-white hover:bg-[#086ba5]">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
