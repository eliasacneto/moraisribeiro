import React from 'react'
import Logo from "@/public/images/lawlogo.svg";
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; import { fa0 } from '@fortawesome/free-solid-svg-icons/fa0';
import { faInstagram, faSquareWhatsapp, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (

        <div className='flex flex-col sm:flex-row w-full justify-around bg-slate-950 px-4 sm:px-16 py-12'>
            <Image src={Logo} alt='logo' className='w-4/5 mb-10 sm:w-64' />
            <div className='flex flex-col gap-8 sm:flex-row sm:justify-around sm:gap-12 pr-4 sm:pr-8'>
                <div>
                    <h3 className='text-[#CC926A] text-lg sm:text-xl mb-4 font-bold'>Acesso rápido</h3>
                    <ul className='list-none antialiased w-54 sm:w-54'>
                        <li className='text-zinc-300'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={''}>Voltar para o início</Link></li>
                        <li className='text-zinc-300'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={''}>Nossas áreas de atuação</Link></li>
                        <li className='text-zinc-300'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={'/team'}>Conheça nossos profissionais</Link></li>
                        <li className='text-zinc-300'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={'/contact'}>Fale conosco</Link></li>
                        <li className='text-zinc-300'><Link className='hover:text-[#cca185] transition duration-500 hover:duration-500' href={'/about-us'}>Sobre nós</Link></li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-[#CC926A] text-lg sm:text-xl mb-4 font-bold'>Nosso endereço</h3>
                    <span className='antialiased text-zinc-300 w-54 sm:w-64'>
                        <Link className='hover:text-[#cca185] transition duration-500 hover:duration-500 ' href='https://www.google.com/maps/place/R.+Ant%C3%B4nio+Aleixo+da+Silva,+1880+-+Jardim+Sat%C3%A9lite,+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP,+12231-650/@-23.2267371,-45.8812299,17z/data=!3m1!4b1!4m6!3m5!1s0x94cc4ae9c6bf8893:0x1ee224b1209f7bfa!8m2!3d-23.2267371!4d-45.878655!16s%2Fg%2F11f3vsvsqk?entry=ttu' target='_blank'>
                            Rua Antônio Aleixo da Silva, 1880 Jardim Satélite, São José dos Campos - SP, CEP 12231-650
                        </Link>
                    </span>
                </div>
                <div className='flex flex-col md:flex'>
                    <h3 className='text-[#CC926A] text-lg sm:text-xl mb-4 font-bold'>Entre em contato</h3>
                    <ul className='list-none antialiased'>
                        <li className='text-zinc-300'>
                            <Link className='flex hover:text-[#cca185] transition duration-500 hover:duration-500' href='https://api.whatsapp.com/send?phone=5512991604267&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.' target='_blank'>
                                <FontAwesomeIcon className='mr-2' icon={faWhatsapp} width={18} />
                                (12) 9 9160-4267
                            </Link>
                        </li>
                        {/* <li className='text-zinc-300'>
                            <Link className='flex mt-2 mb-2 hover:text-[#cca185] transition duration-500 hover:duration-500' href={''}>
                                <FontAwesomeIcon className='mr-2' icon={faInstagram} width={18} />
                                @moraisribeiroadvjur
                            </Link>
                        </li> */}
                        <li className='text-zinc-300'>
                            <Link className='flex mt-2 hover:text-[#cca185] transition duration-500 hover:duration-500' href='mailto:moraisribeiroadvjur@gmail.com'>
                                <FontAwesomeIcon className='mr-2' icon={faEnvelope} width={18} />
                                moraisribeiroadvjur@gmail.com
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer