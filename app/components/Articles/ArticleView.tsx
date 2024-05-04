import Image from "next/image";
import React from "react";
import Button from "../Button/button";
import Link from "next/link";

interface ArticleProps {
  image: string;
  category: string;
  author: string;
  description: string;
  link: string;
}

const ArticleView = ({
  category,
  image,
  author,
  description,
  link,
}: ArticleProps) => {
  return (
    <div className="md:p-[3rem]">
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        <div className="md:w-1/1">
          <Link href={link} target="_blank">
            <Image
              className="hover:scale-105 hover:shadow-sm transition-all duration-500 md:h-[250px]"
              src={image}
              alt={category}
            />
          </Link>
        </div>
        <div className="md:w-[80%] md:pl-8">
          <div className="space-y-2 text-justify md:text-left">
            <Link href={link} target="_blank">
              <h1 className="text-2xl font-bold md:text-[30px] text-left text-[#21243D] hover:text-[#c47642] transition duration-500 hover:duration-500">
                {category}
              </h1>
            </Link>
            <p className="text-[18px] text-[#e07a4e]">{author}</p>
            <p className="text-[15px] text-[#21243D]">{description}</p>
            <Button link={link}>Continue lendo</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
