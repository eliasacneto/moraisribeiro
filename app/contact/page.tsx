import { Metadata } from 'next';
import React from 'react'
import Footer from '../components/Footer/Footer';
import { Marcellus } from 'next/font/google';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import ButtonBrown from '../components/ButtonBrown/ButtonBrown';

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
                    Área dos cards
                </div>

                <div className='bg-gray-50 p-10 mt-24' >
                    <h1 className='text-3xl'>Entre em contato</h1>
                    <p className=' mt-3 mb-9'><span className='text-rose-500'>*</span>Campos obrigatórios</p>

                    <form className='flex flex-col w-[640px] '>
                        <label>Nome completo<span className='text-rose-500'>*</span></label>
                        <input className='border-2 p-1  rounded' type='text' placeholder='Ex.: João da Silva' />

                        <div className='flex flex-row justify-between gap-4 mt-3'>
                            <div className='flex flex-col rounded w-full'>

                                <label> Email<span className='text-rose-500'>*</span></label>
                                <input className='border-2 p-1 rounded w-full' type='email' />
                            </div>
                            <div className=' flex flex-col rounded w-full'>

                                <label> WhatsApp<span className='text-rose-500'>*</span></label>
                                <input className='border-2 p-1 rounded font-sans' type='text' placeholder='(00) 0 0000-0000' />
                            </div>
                        </div>
                        <div className='flex flex-row justify-between gap-4 mt-3'>
                            <div className='flex flex-col rounded w-full'>

                                <label> Área de interesse<span className='text-rose-500'>*</span></label>
                                <select id="area" className="bg-white border  text-gray-900 rounded-lg  block w-full p-2.5 ">
                                    <option selected>Escolha uma área</option>
                                    <option value="Direito Civil Geral">Direito Civil Geral</option>
                                    <option value="Direito de Família">Direito de Família</option>
                                    <option value="Direito Tributário">Direito Tributário </option>
                                    <option value="Direito Empresarial">Direito Empresarial</option>
                                    <option value="Direito do Trabalho">Direito do Trabalho</option>
                                    <option value="Direito do Consumidor">Direito do Consumidor</option>
                                    <option value="Direito Criminal">Direito Criminal</option>
                                    <option value="Direito Previdenciário">Direito Previdenciário</option>
                                    <option value="Sou parte adversa em um processo">Sou parte adversa em um processo (Informe abaixo o número do processo) </option>
                                    <option value="Quero fazer proposta de acordo">Quero fazer proposta de acordo</option>
                                    <option value="Outro assunto não especificado anteriormente">Outro assunto não especificado anteriormente</option>

                                </select>
                            </div>
                            <div className=' flex flex-col rounded w-full'>

                                <label> Como nos conheceu?</label>
                                <select id="area" className="bg-white border  text-gray-900 rounded-lg  block w-full p-2.5">
                                    <option selected >Selecione uma opção</option>
                                    <option value="area01">Indicação de um amigo</option>
                                    <option value="area02">Google</option>
                                    <option value="area03">Instagram</option>
                                    <option value="area04">Linkedin</option>
                                </select>
                            </div>
                        </div>
                        <label className='mt-5'>Mensagem<span className='text-rose-500'>*</span></label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full  text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Escreva aqui..."></textarea>

                        <div className='flex justify-end mt-8'>

                            <ButtonBrown text='Enviar mensagem' />
                        </div>
                    </form >
                </div >
            </div >
        </>
    )
}

export default Contact