import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Navbar = ({ toggleSidebar }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-between w-full h-22 px-1 py-3 z-20 backdrop-blur-sm bg-black/20">
      <div className="flex items-center gap-1">
        <img className="w-20" src="/PCS logo.png" alt="" />
        <div className="w-[1px] h-8 bg-zinc-50"></div>
        <h1 className="font-medium text-lg text-zinc-50">
          Parihar Crane Service
        </h1>
      </div>
      <div className="p-2" onClick={toggleSidebar}>
        <i className="ri-menu-3-line text-2xl lg:hidden text-zinc-50"></i>
      </div>
      <div className="flex gap-10 items-center max-lg:hidden">
        <Link
          onClick={() => scrollToSection("home-section")}
          className="text-lg text-zinc-50"
        >
          Home
        </Link>
        <Link
          onClick={() => scrollToSection("about-section")}
          className="text-lg text-zinc-50"
        >
          About Us
        </Link>
        <Link
          onClick={() => scrollToSection("services-section")}
          className="text-lg text-zinc-50"
        >
          Our Service
        </Link>

        <button onClick={() => scrollToSection("contact-section")} className="text-xl font-semibold text-yellow-300 px-3 py-2 bg-zinc-50 rounded-md">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
