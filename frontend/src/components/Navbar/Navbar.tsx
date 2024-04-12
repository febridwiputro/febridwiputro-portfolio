import React, { useState } from "react";

import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-10 md:px-20 py-6 bg-primary text-white z-10">
      <a className="text-3xl font-semibold text-white" href="/">
        Portfolio
      </a>
      <div className="md:hidden">
        <img
          className="block w-8 h-8 cursor-pointer"
          src={getImageUrl(menuOpen ? "nav/closeIcon.png" : "nav/menuIcon.png")}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <ul className={`md:flex md:gap-8 md:items-center md:w-auto ${menuOpen ? "block" : "hidden"}`}>
        <li>
          <a className="text-lg text-white" href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a className="text-lg text-white" href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
        </li>
        <li>
          <a className="text-lg text-white" href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a className="text-lg text-white" href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};