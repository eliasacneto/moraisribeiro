import React from "react";
import Image from "next/image";

interface CardProps {
  image: string;
  alt: string;
  title: string;
  text: string;
  border?: string;
  rounded?: string;
}

const CardIcon = ({ image, alt, title, text, border, rounded }: CardProps) => {
  return (
    <div
      className={`flex flex-col items-center w-80 h-96 border overflow-hidden px-4 ${rounded} ${border}`}
    >
      <Image
        src={image}
        alt={alt}
        width={85}
        height={85}
        className={"mt-8"}
      />
      <p className="text-[#192432] text-center text-xl leading-normal mt-5">
        {title}
      </p>
      <p className="text-[#8B94A1] text-center text-base leading-normal mt-4">
        {text}
      </p>
    </div>
  );
};

export default CardIcon;
