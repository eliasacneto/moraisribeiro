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
        className="bg-[#C98264] inline-block hover:bg-[#c47642] font-bold transition duration-500 mt-5 rounded-tr-[10px] rounded-bl-[10px] text-white py-3 px-8"
      >
        {children}
      </a>
    );
  } else {
    return (
      <button className="bg-[#C98264] inline-block hover:bg-[#c47642] font-bold mt-5 rounded-tr-[10px] rounded-bl-[10px] text-white py-3 px-8 duration-500 hover:duration-500">
        {children}
      </button>
    );
  }
};

export default Button;
