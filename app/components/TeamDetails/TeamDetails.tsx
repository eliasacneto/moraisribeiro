import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

interface TeamDetailsProps {
  image: string;
  name: string;
  mainDescription: string;
  toLink: string;
  social: string[];
  linkedinLink: string;
  instagramLink: string;
}

interface SocialIconProps {
  icon: IconDefinition;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  return (
    <div className="flex items-center">
      <FontAwesomeIcon
        className="mr-2 cursor-pointer hover:text-[#9f7152] duration-500"
        icon={icon}
        width={25}
      />
    </div>
  );
};

const TeamDetails: React.FC<TeamDetailsProps> = ({
  image,
  name,
  mainDescription,
  toLink,
  social,
  linkedinLink,
  instagramLink,
}) => {
  return (
    <div className="p-[3rem]">
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        <div className="md:w-1/1">
          <Image src={image} alt={name} />
        </div>
        <div className="md:w-[80%] md:pl-8">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-[30px] text-[#21243D]">{name}</h1>
            <p className="text-[15px] text-justify text-[#8B94A1]">
              {mainDescription}
            </p>
            <p className="text-[15px] text-black">{toLink}</p>
            <div className="flex justify-center md:justify-start items-center text-[#CC926A] gap-[0.6rem]">
              {social.includes("linkedin") && (
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                  <SocialIcon icon={faLinkedin} />
                </a>
              )}
              {social.includes("instagram") && (
                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                  <SocialIcon icon={faInstagram} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
