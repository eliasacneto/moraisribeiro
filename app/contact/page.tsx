import { Metadata } from 'next';
import React from 'react'
import Footer from '../components/Footer/Footer';

export const metadata: Metadata = {
    title: "Entre em contato - Morais & Ribeiro",
    description: "Advocacia e Consultoria Jurídica",
};

const Contact = () => {
    return (
        <>
            <div className='bg-slate-900 text-white'>
                <h1>Entre em contato</h1>
                <p>Preencha o formulário abaixo</p>

            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Contact