import { Metadata } from 'next';
import React from 'react'
import Footer from '../components/Footer/Footer';
import { Marcellus } from 'next/font/google';
import SectionTitle from '../components/SectionTitle/SectionTitle';

import CardIcon from '../components/CardIcon/CardIcon';
import PinLocation from '../../public/images/location.svg'
import WhatsApp from '../../public/images/whatsapp.svg'
import ContactForm from '../components/ContactForm/ContactForm.client';

const font = Marcellus({
    weight: ['400'],
    subsets: ['latin']
})


export const metadata: Metadata = {
    title: "Entre em contato - Morais & Ribeiro",
    description: "Advocacia e Consultoria Jurídica",
};

const Contact = () => {

    return (
        <>
            <SectionTitle title='Entre em contato' subtitle='Preencha o formulário abaixo' />

            <div className='flex flex-row justify-evenly items-center  my-8'>
                <div className='flex w-2/5 gap-10'>
                    <CardIcon
                        title='Localização'
                        text='Rua Antônio Aleixo da Silva, 1880  Jardim Satélite, São José dos Campos - SP CEP 12231-650'
                        image={PinLocation} alt='Pin Location' border="border-[#b8967e42]"
                        rounded="rounded-tr-[3rem] rounded-bl-[3rem]"

                    />
                    <CardIcon
                        title='WhatsApp e E-mail'
                        text='(12) 9 9160-4267 moraisribeiroadvjur@gmail.com'
                        image={WhatsApp} alt='Pin Location' border="border-[#b8967e42]"
                        rounded="rounded-tr-[3rem] rounded-bl-[3rem]"
                    />

                </div>

                <div className='bg-gray-50 p-10  rounded-3xl' >
                    <h1 className='text-3xl'>Entre em contato</h1>
                    <p className=' mt-3 mb-9'><span className='text-rose-500'>*</span>Campos obrigatórios</p>
                    <ContactForm />
                </div >
            </div >
            <Footer />
        </>
    )
}

export default Contact