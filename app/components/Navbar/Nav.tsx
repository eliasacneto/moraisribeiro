"use client";

import React, { useState } from "react";
import Logo from "@/public/images/mr-logo.jpg";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(target) as HTMLElement | null; // Cast como HTMLElement

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50  bg-slate-950 ">
      <div className="w-full bg-slate-950  border-b border-[#B8967E] ">
        <div className="w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between">
          <nav className="flex flex-wrap items-center justify-between w-full py-4  md:py-0 px-4 text-lg text-gray-700 bg-slate-950 md:h-[10vh]">
            <div>
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  className="w-[100%] h-[100%] md:pl-8"
                />
              </Link>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer md:hidden block"
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
              } w-full  md:flex md:items-center md:w-auto`}
              id="menu"
            >
              <ul className="pt-4 text-base bg-slate-950 w-full text-white md:flex md:justify-between md:pt-2">
                <li className="text-zinc-300  md:p-4 py-2 block">
                  <Link
                    href="/"
                    className="hover:text-[#cca185] transition duration-500 hover:duration-500"
                  >
                    Início
                  </Link>
                </li>
                <li className="text-zinc-300 md:p-4 py-2 block">
                  <Link
                    href="#areas"
                    onClick={(e) => handleSmoothScroll(e, "#areas")}
                    className="hover:text-[#cca185] transition duration-500 hover:duration-500"
                  >
                    Áreas de atuação
                  </Link>
                </li>
                <li className="text-zinc-300 md:p-4 py-2 block">
                  <Link
                    href="/team"
                    className="hover:text-[#cca185] transition duration-500 hover:duration-500"
                  >
                    Profissionais
                  </Link>
                </li>
                <li className="text-zinc-300 md:p-4 py-2 block">
                  <Link
                    href="/about-us"
                    className="hover:text-[#cca185] transition duration-500 hover:duration-500"
                  >
                    Sobre nós
                  </Link>
                </li>
                <li className="text-zinc-300 md:p-4 py-2 block">
                  <Link
                    href="/contact"
                    className="bg-[#d68e5d] text-white py-3 px-10 rounded-tl-[15px] rounded-br-[15px] hover:bg-[#c47642] text-bold transition duration-500 hover:duration-500"
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
