"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import arrowUp from "../../../public/images/arrowUp.svg";

const ScrollToTopButton = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const button = document.getElementById("scrollToTopButton");
    if (button) {
      button.addEventListener("click", scrollToTop);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", scrollToTop);
      }
    };
  }, []);

  return (
    <button
      id="scrollToTopButton"
      className="bg-[#d68e5d] hover:bg-[#c47642] w-12 h-12 rounded-full flex items-center justify-center ml-80 md:ml-64 mt-10 duration-500 hover:duration-500"
    >
      <Image src={arrowUp} alt="Seta para cima" />
    </button>
  );
};

export default ScrollToTopButton;
