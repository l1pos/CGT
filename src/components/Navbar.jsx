import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/CGT-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-20 py-3 px-10 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-black/70 border-b border-white/10 shadow-[0_0_20px_rgba(0,255,200,0.1)]"
          : "bg-transparent"
      }`}
    >
      {/* === Left side === */}
      <div className="flex items-center flex-1">
        {/* LOGO */}
        <div className="flex items-center gap-3 select-none ml-[5px]">
          <motion.img
            src={logo}
            alt="Company Group Logo"
            className="w-12 h-12 object-contain"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <div className="flex flex-col items-start leading-[1.1] text-white font-[Orbitron] font-bold tracking-wide">
            <span className="text-[18px]">Company</span>
            <span className="text-[18px] text-[#00E0FF]">Group</span>
          </div>
        </div>
      </div>

      {/* === Center menu === */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="bg-[#0d0d0d]/60 backdrop-blur-xl border border-[#00E0FF]/20 rounded-2xl px-10 py-3 shadow-[inset_0_0_10px_rgba(0,255,200,0.2)]">
          <ul className="flex gap-12 text-base font-[Orbitron] font-semibold text-gray-300 uppercase tracking-widest">
            {["Home", "Catalog", "About Us", "Contacts"].map((item) => (
              <li
                key={item}
                className="relative cursor-pointer group hover:text-[#00E0FF] transition-all"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00E0FF] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* === Right side (mobile button) === */}
      <div className="flex justify-end flex-1 md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* === Mobile Menu === */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full right-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 text-gray-300 md:hidden"
          >
            {["Home", "Catalog", "About Us", "Contacts"].map((item) => (
              <li
                key={item}
                onClick={toggleMenu}
                className="hover:text-[#00E0FF] transition"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
