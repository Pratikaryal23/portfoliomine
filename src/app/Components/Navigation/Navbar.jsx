"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import image from "/public/mylogo.jpeg";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname(); // Get the current path
  const router = useRouter();

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-gray-100 backdrop-blur-lg bg-opacity-40 shadow-md">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src={image} alt="logo" width={400} height={400} className="w-16 h-16 cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-9 text-black">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase()}`}>
                <p
                  onClick={closeNav}
                  className={`${
                    pathname === `/${item.toLowerCase()}` ? "text-emerald-600 font-semibold" : ""
                  } hover:border-b-2 border-black cursor-pointer`}
                >
                  {item}
                </p>
              </Link>
            </li>
          ))}
          <button
            onClick={() => router.push("/login")}
            className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition"
          >
            Login
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleNav} aria-label="Toggle menu">
            {navOpen ? <AiOutlineClose className="text-black" size={24} /> : <AiOutlineMenu className="text-black" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Glass Effect */}
      {navOpen && (
        <div className="md:hidden bg-black bg-opacity-50 absolute top-20 left-0 w-full backdrop-blur-md shadow-lg p-5 rounded-md">
          <ul className="flex flex-col gap-4 text-white text-center">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`}>
                  <p
                    onClick={closeNav}
                    className={`${
                      pathname === `/${item.toLowerCase()}` ? "text-emerald-300 font-semibold" : ""
                    } hover:text-emerald-300 cursor-pointer`}
                  >
                    {item}
                  </p>
                </Link>
              </li>
            ))}
            <button
              onClick={() => {
                closeNav();
                router.push("/login");
              }}
              className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition"
            >
              Login
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
