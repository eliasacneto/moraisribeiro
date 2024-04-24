import React from "react";
import Logo from "@/public/images/lawlogo.svg";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="w-full h-[10vh] bg-slate-950  border-b border-[#B8967E] ">
                <div className="w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between">
                    <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px]">
                        <Link href="/">
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={250}
                                height={250}
                                className="w-[100%] h-[100%] p-4"
                            />
                        </Link>
                    </div>
                    <ul className="flex space-x-16 text-white text-[17px] ml-96 ">
                        <li>
                            <Link href="/" className="hover:text-gray-300">
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link href="/areas" className="hover:text-gray-300">
                                Áreas de atuação
                            </Link>
                        </li>
                        <li>
                            <Link href="/team" className="hover:text-gray-300">
                                Profisisonais
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" className="hover:text-gray-300">
                                Sobre nós
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="bg-[#CC926A] text-white py-3 px-10 rounded-tl-[15px] rounded-br-[15px] px-10 py-3 hover:bg-gray-700"
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
