import { Metadata } from 'next';
import React from 'react'
import Footer from '../components/Footer/Footer';
import { Marcellus } from 'next/font/google';
import SectionTitle from '../components/SectionTitle/SectionTitle';

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
            {/* <Footer /> */}
        </>
    )
}

export default Contact