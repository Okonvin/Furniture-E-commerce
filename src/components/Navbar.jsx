import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useCart } from "./CartContext";
import CartDrawer from "./CartDrawer";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const { itemCount } = useCart();

  const links = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    {
      label: "About",
      dropdown: [
        { to: "/about", label: "About" },
        { to: "/blog", label: "Blog" },
      ],
    },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="w-full sticky top-0 z-30 bg-white">
        <div className="w-[90%] lg:w-[80%] flex justify-between items-center my-4 mx-auto px-2.5">
          <Link to="/">
            <img src="/assets/Frame_logo.svg" alt="logo" className="cursor-pointer h-8 sm:h-10" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex gap-8 xl:gap-15 items-center text-lg xl:text-[20px] font-semibold">
            {links.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative group py-1">
                  <button className="flex items-center gap-1 border-b-2 border-transparent group-hover:border-[#B8912F] transition-colors duration-200 cursor-pointer">
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Dropdown panel */}
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                    <div className="bg-white shadow-lg border border-[#E4E4E4] min-w-[160px] py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block px-5 py-2.5 text-base font-medium text-[#3A3A3A] hover:bg-[#F9F1E7] hover:text-[#B88E2F] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.to}>
                  <Link to={link.to} className="border-b-2 border-transparent hover:border-[#B8912F] transition-colors duration-200 py-1">
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="hidden md:flex items-center gap-6 xl:gap-15">
            <img src="/assets/user_account-alert.svg" alt="Account" className="w-6 h-6 cursor-pointer" />
            <img src="/assets/akar-icons_search.svg" alt="Search" className="w-6 h-6 cursor-pointer" />
            <img src="/assets/akar-icons_heart.svg" alt="Wishlist" className="w-6 h-6 cursor-pointer" />
            <button onClick={() => setIsCartOpen(true)} className="relative cursor-pointer" aria-label="Open cart">
              <img src="/assets/shopping-cart.svg" alt="Cart" className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#B88E2F] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
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
              {links.map((link) =>
                link.dropdown ? (
                  <li key={link.label}>
                    <button
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className="flex items-center justify-between w-full border-b-2 border-transparent hover:border-[#B8912F] transition-colors duration-200 py-1 cursor-pointer"
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
                    </button>

                    {mobileAboutOpen && (
                      <ul className="flex flex-col gap-3 mt-3 pl-4 border-l-2 border-[#E4E4E4]">
                        {link.dropdown.map((item) => (
                          <li key={item.to}>
                            <Link
                              to={item.to}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileAboutOpen(false);
                              }}
                              className="text-base font-medium text-[#3A3A3A] hover:text-[#B88E2F] transition-colors"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={link.to}>
                    <Link to={link.to} onClick={() => setIsOpen(false)} className="border-b-2 border-transparent hover:border-[#B8912F] transition-colors duration-200 py-1">
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <div className="flex gap-6 mt-4 md:hidden">
              <img src="/assets/user_account-alert.svg" alt="Account" className="w-6 h-6" />
              <img src="/assets/akar-icons_search.svg" alt="Search" className="w-6 h-6" />
              <img src="/assets/akar-icons_heart.svg" alt="Wishlist" className="w-6 h-6" />
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsCartOpen(true);
                }}
                className="relative cursor-pointer"
                aria-label="Open cart"
              >
                <img src="/assets/shopping-cart.svg" alt="Cart" className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#B88E2F] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>

      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default Navbar;
