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
            {/* <div>
                <h3>Localização</h3>
                <p>Rua Antônio Aleixo da Silva, 1880  Jardim Satélite, São José dos Campos - SP
                    CEP 12231-650</p>
            </div> */}
            <div className='flex flex-row justify-around'>

                <div className='w-2/5'>
                    jdsfnk
                </div>

                <div >
                    <form className='flex flex-col w-[640px]'>
                        <label>Nome completo<span className='text-rose-500'>*</span></label>
                        <input className='border-2 border-rose-500 rounded' type='text' placeholder='Ex.: João da Silva' />
                        <label> Email<span className='text-rose-500'>*</span></label>
                        <input type='email' />

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact