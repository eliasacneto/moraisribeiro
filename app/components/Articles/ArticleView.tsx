import Image from 'next/image';
import React from 'react'
import Button from '../Button/button';

interface Props {
  image: string;
  category: string;
  author: string;
  description: string;
}

export const JoaoArticle = ({ category, image, author, description }: Props) => {
  return (
    <div className='p-[3rem]'>
      <div className='flex flex-col md:flex-row items-center md:space-x-4'>
        <div className='md:w-1/1'>
          <Image src={image} alt={category} />
        </div>
        <div className='md:w-[80%] md:pl-8'>
          <div className='space-y-2 text-center md:text-left'>
            <h1 className='text-[30px] text-[#21243D]'>{category}</h1>
            <p className='text-[18px] text-[#e07a4e]'>{author}</p>
            <p className='text-[15px] text-[#21243D]'>{description}</p>
            <Button link='https://www.linkedin.com/pulse/pj-ou-clt-avaliando-vantagens-e-desvantagens-jo%25C3%25A3o-pedro-x2aef'>Continue Lendo</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const NikArticle = ({ category, image, author, description }: Props) => {
  return (
    <div className='p-[3rem]'>
      <div className='flex flex-col md:flex-row items-center md:space-x-4'>
        <div className='md:w-1/1'>
          <Image src={image} alt={category} />
        </div>
        <div className='md:w-[80%] md:pl-8'>
          <div className='space-y-2 text-center md:text-left'>
            <h1 className='text-[30px] text-[#21243D]'>{category}</h1>
            <p className='text-[18px] text-[#e07a4e]'>{author}</p>
            <p className='text-[15px] text-[#21243D]'>{description}</p>
            <Button link='https://www.linkedin.com/pulse/exposi%25C3%25A7%25C3%25A3o-de-dados-na-dark-web-e-suas-consequ%25C3%25AAncias-jur%25C3%25ADdicas-silva-fclof'>Continue Lendo</Button>
          </div>
        </div>
      </div>
    </div>
  )
}


