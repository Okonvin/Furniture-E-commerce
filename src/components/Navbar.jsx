 

import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="w-full">
        <div className="w-[90%] lg:w-[80%] flex justify-between items-center my-4 mx-auto px-2.5">
          <Link to="/">
            <img src="/assets/Frame_logo.svg" alt="logo" className="cursor-pointer h-8 sm:h-10" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex gap-8 xl:gap-15 items-center text-lg xl:text-[20px] font-semibold">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="border-b-2 border-transparent hover:border-[#B8912F] transition-colors duration-200 py-1">{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-6 xl:gap-15">
            <img src="/assets/user_account-alert.svg" alt="Account" className="w-6 h-6 cursor-pointer" />
            <img src="/assets/akar-icons_search.svg" alt="Search" className="w-6 h-6 cursor-pointer" />
            <img src="/assets/akar-icons_heart.svg" alt="Wishlist" className="w-6 h-6 cursor-pointer" />
            <img src="/assets/shopping-cart.svg" alt="Cart" className="w-6 h-6 cursor-pointer" />
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* Mobile menu  */}
        {isOpen && (
          <div className="lg:hidden w-[90%] mx-auto pb-4">
            <ul className="flex flex-col gap-4 text-lg font-semibold">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} onClick={() => setIsOpen(false)} className="border-b-2 border-transparent hover:border-[#B8912F] transition-colors duration-200 py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-6 mt-4 md:hidden">
              <img src="/assets/user_account-alert.svg" alt="Account" className="w-6 h-6" />
              <img src="/assets/akar-icons_search.svg" alt="Search" className="w-6 h-6" />
              <img src="/assets/akar-icons_heart.svg" alt="Wishlist" className="w-6 h-6" />
              <img src="/assets/shopping-cart.svg" alt="Cart" className="w-6 h-6" />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;