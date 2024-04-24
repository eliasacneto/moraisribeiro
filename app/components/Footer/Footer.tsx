import React from 'react'
import Logo from "@/public/images/lawlogo.svg";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='flex flex-row w-full justify-around bg-black px-16 py-12'>
            <Image src={Logo} alt='logo' className='w-56 ' />

            <div className='flex flex-row justify-around gap-24 pr-8'>
                <div className=''>
                    <h3 className='text-[#CC926A] text-xl mb-4'>Acesso rápido</h3>
                    <ul className='list-none antialiased'>
                        <li className='text-zinc-300'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={''}>Voltar para o início</Link></li>
                        <li className='text-zinc-300'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={''}>Áreas de atuação</Link></li>
                        <li className='text-zinc-300'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={'/team'}>Profissionais</Link></li>
                        <li className='text-zinc-300'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={'/about-us'}>Sobre nós</Link></li>
                        <li className='text-zinc-300'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={'/contact'}>Contato</Link></li>
                        <li className='text-zinc-300'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={''}>Políticas de Privacidade</Link></li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-[#CC926A] text-xl mb-4 '>Nosso endereço</h3>
                    <span className='text-zinc-300 w-64 antialiased'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={''}>Rua Antônio Aleixo da Silva, 1880  Jardim Satélite, São José dos Campos - SP, CEP 12231-650</Link></span>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-[#CC926A] text-xl mb-4'>Entre em contato</h3>
                    <ul className='list-none antialiased'>
                        <li className='text-zinc-300'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={''}>(12) 9 9160-4267</Link></li>
                        <li className='text-zinc-300'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={''}>@moraisribeiroadvjur</Link></li>
                        <li className='text-zinc-300'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={''}>moraisribeiroadvjur@gmail.com</Link></li>
                    </ul>
                </div>

            </div>




        </div>
    )
}

export default Footer