"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        closeMenu();
      }
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Spacer div to prevent content from going behind the navbar */}
      <div
        className="flex max-w-xl w-full items-center justify-between mx-auto rounded-b-2xl
        bg-white py-4 px-8 mb-6"
      />{" "}
      {/* Adjust the height to match your navbar */}
      <nav
        className={`
        fixed top-0 left-0 right-0
        flex max-w-xl w-full items-center justify-between mx-auto rounded-b-2xl
        bg-white py-4 px-8 transition-all duration-300
        ${isScrolled ? "backdrop-blur-md bg-white/50 z-50 shadow-sm" : "z-10"}
      `}
      >
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.svg" alt="EdgeAssist Logo" width={40} height={40} />
          <span className="text-xl font-medium text-gray-800">EdgeAssist</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-sm text-gray-600 hover:text-blue-500 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div
          className="relative md:hidden"
          ref={menuRef}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
        >
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile menu popup */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                {["Home", "Services", "About", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="block py-3 px-6 text-lg font-medium text-center text-gray-600 hover:text-blue-500 transition duration-300"
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
