"use client";

import React, { useState } from "react";
import Logo from "@/public/images/mr-logo-removebg.png";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50  bg-slate-950 ">
      <div className="w-full bg-slate-950  shadow shadow-zinc-400 ">
        <div className="w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between">
          <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-slate-950 es:h-[10vh]">
            <div className="p-1 md:p-3 md:h-20">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={165}
                  height={50}
                  quality={100}
                  sizes="100vh"
                  className=" w-full h-full md:pl-6"
                />
              </Link>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer es:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FFF"
              onClick={toggleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } w-full es:flex es:items-center es:w-auto`}
              id="menu"
            >
              <ul className="text-base bg-slate-950 w-full text-white es:flex md:justify-between md:pt-2">
                <li className="text-zinc-300 mt-2 md:px-4 py-2 block md:mt-0">
                  <Link
                    href="/"
                    className="hover:text-[#cca185] font-bold  transition duration-500 hover:duration-500"
                    onClick={closeMenu}
                  >
                    Início
                  </Link>
                </li>
                <li className="text-zinc-300 mt-2 md:px-4 py-2 block md:mt-0">
                  <Link
                    href="/areas"
                    onClick={(e) => {
                      closeMenu();
                    }}
                    className="hover:text-[#cca185] font-bold  transition duration-500 hover:duration-500"
                  >
                    Áreas de atuação
                  </Link>
                </li>
                <li className="text-zinc-300 mt-2 md:px-4 py-2 block md:mt-0">
                  <Link
                    href="/team"
                    className="hover:text-[#cca185] font-bold  transition duration-500 hover:duration-500"
                    onClick={closeMenu}
                  >
                    Profissionais
                  </Link>
                </li>
                <li className="text-zinc-300 mt-2 md:px-4 py-2 block md:mt-0">
                  <Link
                    href="/about-us"
                    className="hover:text-[#cca185] font-bold transition duration-500 hover:duration-500"
                    onClick={closeMenu}
                  >
                    Sobre nós
                  </Link>
                </li>
                <li className="text-zinc-300 mt-5 mb-3 md:px-4 py-2 block md:mt-0">
                  <Link
                    href="/contact"
                    className="bg-[#c47642] font-bold text-white py-3 px-10 rounded-tl-[1rem] rounded-br-[1rem] hover:bg-[#d68e5d] text-bold transition duration-500 hover:duration-500"
                    onClick={closeMenu}
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
