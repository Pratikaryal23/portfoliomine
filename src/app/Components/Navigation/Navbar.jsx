"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleNavClick = (item) => {
    setActiveSection(item.toLowerCase());
    closeNav();
  };

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-slate-950/95 backdrop-blur-xl shadow-2xl border-b border-purple-500/20" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 h-20 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            <motion.div
              className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(147, 51, 234, 0.5)",
                  "0 0 30px rgba(219, 39, 119, 0.5)",
                  "0 0 20px rgba(147, 51, 234, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              PA
            </motion.div>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, staggerChildren: 0.1 }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <motion.button
                  onClick={() => handleNavClick(item)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "text-purple-400"
                      : "text-white hover:text-purple-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {/* Active indicator */}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                      layoutId="activeTab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-lg -z-10 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              </motion.li>
            ))}
            
            {/* CTA Button */}
            <motion.button
              className="relative px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Let's Talk</span>
            </motion.button>
          </motion.ul>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleNav}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center"
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                navOpen ? "rotate-45 translate-y-0.5" : ""
              }`}
            />
            <motion.span
              className={`w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
                navOpen ? "opacity-0" : ""
              }`}
            />
            <motion.span
              className={`w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
                navOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {navOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeNav}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-20 left-4 right-4 bg-slate-950/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl z-50 md:hidden overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="p-6">
                <motion.ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.button
                        onClick={() => handleNavClick(item)}
                        className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                          activeSection === item.toLowerCase()
                            ? "text-purple-400 bg-purple-500/10"
                            : "text-white hover:text-purple-300 hover:bg-white/5"
                        }`}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-2xl">
                            {item === "Home" && "🏠"}
                            {item === "About" && "👋"}
                            {item === "Skills" && "⚡"}
                            {item === "Projects" && "🚀"}
                            {item === "Contact" && "📬"}
                          </span>
                          {item}
                        </span>
                      </motion.button>
                    </motion.li>
                  ))}
                </motion.ul>
                
                {/* Mobile CTA */}
                <motion.div
                  className="mt-6 pt-6 border-t border-purple-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    onClick={closeNav}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-xl relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      ✨ Let's Connect
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Mini Navbar for Mobile (when scrolled) */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-slate-950/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl px-4 py-2 shadow-2xl">
              <div className="flex items-center gap-4">
                {navItems.slice(0, 4).map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`p-2 rounded-xl transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "bg-purple-600 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={item}
                  >
                    <span className="text-lg">
                      {item === "Home" && "🏠"}
                      {item === "About" && "👋"}
                      {item === "Skills" && "⚡"}
                      {item === "Projects" && "🚀"}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;