import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/CGT-logo.png"; // путь оставь как у тебя, если другой

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-20 
      py-2 px-4 sm:px-6 md:px-6 lg:px-10
      flex items-center justify-between
      transition-all duration-500 
      ${
        scrolled
          ? "backdrop-blur-md bg-black/70 border-b border-white/10 shadow-[0_0_20px_rgba(0,255,200,0.1)]"
          : "bg-transparent"
      }`}
    >
      {/* LOGO */}
      <div className="flex items-center gap-3 select-none">
        <motion.img
          src={logo}
          alt="CGT Logo"
          className="w-10 h-10 object-contain"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <div className="flex flex-col font-[Orbitron] font-bold tracking-wide text-white leading-[1.1]">
          <span className="text-[16px]">Company</span>
          <span className="text-[16px] text-[#00E0FF]">Group</span>
        </div>
      </div>

      {/* DESKTOP MENU (>= 1024px) */}
      <div className="hidden lg:flex flex-1 justify-center">
        <div className="bg-[#0d0d0d]/60 backdrop-blur-xl border border-[#00E0FF]/20 rounded-2xl px-10 py-3 shadow-[inset_0_0_10px_rgba(0,255,200,0.2)]">
          <ul className="flex gap-12 text-base font-[Orbitron] font-semibold text-gray-300 uppercase tracking-widest">
            <li className="relative cursor-pointer group hover:text-[#00E0FF] transition-all">
              <a href="#home">Home</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00E0FF] transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative cursor-pointer group hover:text-[#00E0FF] transition-all">
              <a href="#catalog">Catalog</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00E0FF] transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative cursor-pointer group hover:text-[#00E0FF] transition-all">
              <a href="#about">About Us</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00E0FF] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      </div>

      {/* MOBILE / TABLET BURGER ( < 1024px ) */}
      <div className="flex lg:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md py-6 flex flex-col items-center gap-6 text-gray-300 lg:hidden"
          >
            <li onClick={toggleMenu} className="hover:text-[#00E0FF]">
              <a href="#home">Home</a>
            </li>
            <li onClick={toggleMenu} className="hover:text-[#00E0FF]">
              <a href="#catalog">Catalog</a>
            </li>
            <li onClick={toggleMenu} className="hover:text-[#00E0FF]">
              <a href="#about">About Us</a>
            </li>
            <li onClick={toggleMenu} className="hover:text-[#00E0FF]">
              <a href="#contacts">Contacts</a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
