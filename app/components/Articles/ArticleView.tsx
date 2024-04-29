import Image from 'next/image';
import React from 'react'
import Button from '../Button/button';

interface Props {
  image: string;
  category: string;
  author: string;
  description: string;
}

const ArticleView = ({ category, image, author, description }: Props) => {
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
            <Button>Continue Lendo</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleView
