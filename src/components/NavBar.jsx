import { BorderBeam } from "@stianlarsen/border-beam";
import React, { useCallback, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto xl:w-9/12 flex justify-between items-center bg-gray-900 px-6 py-5 rounded-2xl backdrop-blur-xl">
        {/* Logo */}
        <div className="text-2xl font-bold">YUNUS</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  `block px-4 border-b border-red-200 py-2 rounded-full transition ${
                    isActive ? "bg-red-600 text-white" : "hover:bg-[#7A34F2]"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Resume
          <BorderBeam
            size={300}
            duration={20}
            // colorFrom="#7A34F2"
            // colorTo="#87CEEB"
            colorFrom={"#015551"}
            colorTo={"#FE4F2D"}
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-900 w-3/12 z-10 text-center absolute top-16 left-0">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href} className="p-4 border-b border-gray-700">
              <NavLink
                to={href}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md transition ${
                    isActive ? "bg-[#7A34F2] text-white" : "hover:bg-[#7A34F2]"
                  }`
                }
                onClick={toggleMenu} // Close menu on click
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
