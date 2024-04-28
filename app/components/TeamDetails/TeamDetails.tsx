import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  mainDescription: string;
  toLink: string;
  social: string[];
}

const TeamDetails = ({
  image,
  name,
  mainDescription,
  toLink,
  social,
}: Props) => {
  return (
    <div className="p-[3rem]">
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        <div className="md:w-1/2">
          <Image src={image} alt={name} />
        </div>
        <div className="md:w-1/2 md:pl-4">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-[30px] text-[#21243D]">{name}</h1>
            <p className="text-[15px] text-[#8B94A1]">{mainDescription}</p>
            <p className="text-[15px] text-black">{social}</p>
            <p className="text-[15px] text-black">{toLink}</p>
            <div className="flex justify-center md:justify-start items-center text-[#CC926A] gap-[0.6rem]">
              {social.includes("linkedin") && (
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faLinkedin}
                    width={25}
                  />
                </div>
              )}
              {social.includes("instagram") && (
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faInstagram}
                    width={25}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
