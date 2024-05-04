import React, { ReactNode } from "react";

interface ButtonProps {
  link?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, link }) => {
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        className="bg-[#c47642] inline-block hover:bg-[#d68e5d] font-bold transition duration-500 mt-5 rounded-tr-[10px] rounded-bl-[10px] text-white py-3 px-8"
      >
        {children}
      </a>
    );
  } else {
    return (
      <button className="bg-[#c47642] inline-block hover:bg-[#d68e5d] font-bold mt-5 rounded-tr-[1rem] rounded-bl-[1rem] text-white py-3 px-8 duration-500 hover:duration-500">
        {children}
      </button>
    );
  }
};

export default Button;
