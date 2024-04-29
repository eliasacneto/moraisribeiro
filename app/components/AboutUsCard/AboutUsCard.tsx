import React from 'react'
import Image from 'next/image'

interface CardProps {
    image: string,
    alt: string,
    title: string,
    text: string,
    border?: string,
    rounded?: string 
}

const AboutUsCard = ({image, alt, title, text, border, rounded}: CardProps) => {
  return (
    <div className={`flex flex-col items-center w-[21.875rem] h-[23.75rem] border overflow-hidden px-4 ${rounded} ${border}`}>
        <Image 
        src={image} 
        alt={alt}
        width={100}        
        height={100}
        className={"mt-8"}
        />
        <p className="text-[#192432] text-center text-xl leading-normal mt-5">{title}</p>
        <p className="text-[#8B94A1] text-center text-base leading-normal mt-4">{text}</p>
    </div>
  )
}

export default AboutUsCard