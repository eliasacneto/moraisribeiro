import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle: string;
}

const SectionTitle = (props: SectionTitleProps) => {
    return (
        <div className='flex flex-col justify-center items-center bg-slate-900 h-80'>
            <h1 className='text-white text-4xl mb-4'>{props.title}</h1>
            <p className='text-[#CC926A] text-lg lg:w-[30rem] xl:w-[40rem] text-center'>{props.subtitle}</p>
        </div>
    );
}

export default SectionTitle;
