import React from 'react'
import Image from 'next/image'

interface CardProps {
    image: string,
    alt: string,
    title: string,
    text: string,
}

const AboutUsCard = ({image, alt, title, text}: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-[22rem] h-[23.125rem] border overflow-hidden px-2 rounded-tl-[30px] rounded-br-[30px] border-[#B8967E]">
        <Image 
        src={image} 
        alt={alt}
        width={100}        
        height={100}
        />
        <p className="text-[#192432] text-center text-lg mt-5">{title}</p>
        <p className="text-[#8B94A1] text-center mt-2.5 text-regular text-base">{text}</p>
    </div>
  )
}

export default AboutUsCard
