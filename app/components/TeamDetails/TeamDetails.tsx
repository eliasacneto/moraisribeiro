import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

interface TeamDetailsProps {
  image: string;
  name: string;
  role: string;
  mainDescription: string;
  toLink: string;
  social: string[];
  linkedinLink: string;
  instagramLink: string;
  whatsappLink: string;
  emailLink: string;
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
  role,
  mainDescription,
  toLink,
  social,
  linkedinLink,
  instagramLink,
  whatsappLink,
  emailLink,
}) => {
  return (
    <div className="md:p-[3rem]">
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        <div className="md:w-1/1">
          <Image
            src={image}
            alt={name}
            className="hover:scale-105 hover:shadow-sm transition-all duration-500 "
          />
        </div>
        <div className="md:w-[80%] md:pl-8">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="mt-5 text-[30px] text-[#21243D]">{name}</h1>
            <h3 className="text-xl">{role}</h3>
            <p className="text-[17px] text-justify text-[#8B94A1]">
              {mainDescription}
            </p>
            <p className="text-[18px] text-black">{toLink}</p>
            <div className="flex justify-center pb-10 md:justify-start items-center text-[#CC926A] gap-[0.6rem] ">
              {social.includes("linkedin") && (
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon icon={faLinkedin} />
                </a>
              )}
              {social.includes("instagram") && (
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon icon={faInstagram} />
                </a>
              )}
              {social.includes("whatsapp") && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon icon={faWhatsapp} />
                </a>
              )}
              {social.includes("email") && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon icon={faEnvelope} />
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
