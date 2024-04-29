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

                <div className='bg-gray-50' >
                    <h1 className='text-3xl'>Entre em contato</h1>
                    <p><span className='text-rose-500'>*</span>Campos obrigatórios</p>
                    <form className='flex flex-col w-[640px]'>
                        <label>Nome completo<span className='text-rose-500'>*</span></label>
                        <input className='border-2 p-1  rounded' type='text' placeholder='Ex.: João da Silva' />

                        <div className='flex flex-row justify-between gap-1'>
                            <div className='flex flex-col rounded w-full'>

                                <label> Email<span className='text-rose-500'>*</span></label>
                                <input className='border-2 p-1 border-rose-500 rounded w-full' type='email' />
                            </div>
                            <div className=' flex flex-col rounded w-full'>

                                <label> WhatsApp<span className='text-rose-500'>*</span></label>
                                <input className='border-2 p-1 border-rose-500 rounded' type='text' />
                            </div>
                        </div>
                        <div className='flex flex-row justify-between gap-1'>
                            <div className='flex flex-col rounded w-full'>

                                <label> Área de interesse<span className='text-rose-500'>*</span></label>
                                <select id="area" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700">
                                    <option selected>Escolha uma área</option>
                                    <option value="area01">Área 01</option>
                                    <option value="area02">Área 02</option>
                                    <option value="area03">Área 03</option>
                                    <option value="area04">Área 04</option>
                                </select>
                            </div>
                            <div className=' flex flex-col rounded w-full'>

                                <label> Como nos conheceu?<span className='text-rose-500'>*</span></label>
                                <select id="area" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700">
                                    <option selected>Selecione uma opção</option>
                                    <option value="area01">Área 01</option>
                                    <option value="area02">Área 02</option>
                                    <option value="area03">Área 03</option>
                                    <option value="area04">Área 04</option>
                                </select>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact