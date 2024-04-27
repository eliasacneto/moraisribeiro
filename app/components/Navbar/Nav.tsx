import React from "react";
import Logo from "@/public/images/lawlogo.svg";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="w-full h-[10vh] bg-slate-950  border-b border-[#B8967E] ">
                <div className="w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between">
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={250}
                            height={100}
                            className="w-[100%] h-[100%]"
                        />
                    </Link>
                    <ul className="flex space-x-16 text-white text-[17px] ml-96 ">
                        <li className='text-zinc-300'>
                            <Link href="/" className="hover:text-[#cca185] transition duration-500 hover:duration-500">
                                Início
                            </Link>
                        </li>
                        <li className='text-zinc-300'>
                            <Link href="/areas" className="hover:text-[#cca185] transition duration-500 hover:duration-500">
                                Áreas de atuação
                            </Link>
                        </li>
                        <li className='text-zinc-300'>
                            <Link href="/team" className="hover:text-[#cca185] transition duration-500 hover:duration-500">
                                Profisisonais
                            </Link>
                        </li>
                        <li className='text-zinc-300'>
                            <Link href="/about-us" className="hover:text-[#cca185] transition duration-500 hover:duration-500">
                                Sobre nós
                            </Link>
                        </li>
                        <li className='text-zinc-300'>
                            <Link
                                href="/contact"
                                className="bg-[#d68e5d] text-white py-3 px-10 rounded-tl-[15px] rounded-br-[15px] px-10 py-3 hover:bg-[#c47642] text-bold transition duration-500 hover:duration-500"
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;