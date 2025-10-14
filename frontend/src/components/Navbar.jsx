import React from "react";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";

import { navLinks } from "../constants";
const Navbar = () => {
  return (
    <div className="grid grid-cols-[1fr_300px]  gap-30 w-full max-w-[95%] lg:max-w-[80%] 2xl:max-w-[60%] mx-auto py-6 fixed bg-dark z-100 right-0 left-0">
      <div className="flex gap-10 items-center">
        <img src={logo} alt="" className="h-[25px]" />
        <div className="bg-black-100 py-3 px-4 text-xs font-bold w-[400px] rounded flex items-center gap-2 hover:bg-black-300 focus:bg-black-200 transition-all duration-200 ">
          <IoSearch size={18} />

          <input
            type="text"
            className="w-full outline-none"
            placeholder="Suche Aktien, ETFs, Kategorien"
          />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        {navLinks.map((link) => (
          <span className="font-bold cursor-pointer">{link.name}</span>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
