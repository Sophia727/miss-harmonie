import React, { useState } from "react";
import logo from "../assets/missharmonie_logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" text-black font-light sticky top-0 lg:w-screen align-middle mx-auto md:m-0 md:flex justify-between bg-myPink z-50 py-0 lg:px-[5rem]">
      <div className="flex justify-between ">
        <a href="#home" className="p-0">
          <img src={logo} alt="Miss Harmonie logo" className="w-32 lg:w-[180px] " />
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="text-myGrey md:hidden font-thin text-xl"
        >
          <i className="fa-solid fa-ellipsis-vertical  m-5"></i>
        </button>
      </div>

      <nav className="mt-2">
        <ul
          className={`md:flex gap-4 pr-0 md:pr3 justify-between align-middle absolute left-0 md:static w-[100%] md:py-1 lg:px-8 transition-all duration-500 ease-in
            ${open ? "top-[69px]" : "top-[-380px]"} `}
        >
          <li
            onClick={() => {
              setOpen(!open);
            }}
            className=" p-3 hover:bg-[#bbb5aad2] bg-myPink hover:text-white transition-all duration-200"
          >
            <a href="#home"> Accueil</a>
          </li>
          <li
            onClick={() => {
              setOpen(!open);
            }}
            className=" p-3 hover:bg-[#bbb5aad2]  bg-myPink hover:text-white transition-all duration-200"
          >
            <a href="#about">A propos </a>
          </li>
          <li
            onClick={() => {
              setOpen(!open);
            }}
            className="p-3 hover:bg-[#bbb5aad2]  bg-myPink hover:text-white transition-all duration-200"
          >
            <a href="#services">Nos prestations</a>
          </li>
          <li
            onClick={() => {
              setOpen(!open);
            }}
            className="p-3 hover:bg-[#bbb5aad2]  bg-myPink hover:text-white transition-all duration-200"
          >
            <a href="#contact">Contactez nous!</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
