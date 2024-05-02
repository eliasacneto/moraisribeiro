'use client';

import React, { FormEvent } from 'react';
import Swal from 'sweetalert2';

const ContactForm = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form aqui');
        Swal.fire({
            title: "Sua mensagem foi enviada!",
            icon: "success",
            width: 600,
            padding: "3em",
            color: "#FFF",
            background: "#0F172A",
            showConfirmButton: false,
            timer: 4000,
            showClass: {
                popup: `
  animate__animated
  animate__fadeInUp
  animate__faster
`
            },
            hideClass: {
                popup: `
  animate__animated
  animate__fadeOutDown
  animate__faster
`
            }
        });
    }
    return (
        <form className='flex flex-col w-[640px]' onSubmit={handleSubmit}>
            <label>Nome completo<span className='text-rose-500'>*</span></label>
            <input name='nome' className='border p-2.5 rounded-lg' type='text' placeholder='Ex.: João da Silva' />

            <div className='flex flex-row justify-between gap-4 mt-3'>
                <div className='flex flex-col rounded w-full'>
                    <label>Email<span className='text-rose-500'>*</span></label>
                    <input name='email' className='border p-2.5 rounded-lg w-full' type='email' placeholder='email@email.com' />
                </div>
                <div className='flex flex-col rounded w-full'>
                    <label>WhatsApp<span className='text-rose-500'>*</span></label>
                    <input name='whatsapp' className='border p-2.5 rounded-lg' type='text' placeholder='(00) 0 0000-0000' />
                </div>
            </div>

            <div className='flex flex-row justify-between gap-4 mt-3'>
                <div className='flex flex-col rounded w-full'>
                    <label>Área de interesse<span className='text-rose-500'>*</span></label>
                    <select name="area" className="bg-white border text-gray-900 rounded-lg block w-full p-2.5">
                        <option value="" selected>Escolha uma área</option>
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
                <div className='flex flex-col rounded w-full'>
                    <label>Como nos conheceu?</label>
                    <select name="conhecimento" className="bg-white border text-gray-900 rounded-lg block w-full p-2.5">
                        <option value="" selected>Selecione uma opção</option>
                        <option value="area01">Indicação de um amigo</option>
                        <option value="area02">Google</option>
                        <option value="area03">Instagram</option>
                        <option value="area04">Linkedin</option>
                    </select>
                </div>
            </div>

            <label className='mt-5'>Mensagem<span className='text-rose-500'>*</span></label>
            <textarea name='mensagem' className="block p-2.5 w-full text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Escreva aqui..." rows={6}></textarea>

            <div className='flex justify-end mt-8'>
                <button className="bg-[#d68e5d] text-white font-bold py-3 px-10 rounded-tl-[15px] rounded-br-[15px] px-10 py-3 hover:bg-[#c47642] text-bold transition duration-500 hover:duration-500" type='submit'>
                    Enviar mensagem
                </button>
            </div>
        </form >
    );
};

export default ContactForm;
