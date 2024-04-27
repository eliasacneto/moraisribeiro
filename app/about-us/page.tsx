import { Metadata } from 'next';
import React from 'react'
import SectionTitle from '../components/SectionTitle/SectionTitle';
import AboutUsCard from '../components/AboutUsCard/AboutUsCard';
import targetIcon from '../../public/images/targetIcon.svg'
import eyeIcon from '../../public/images/eyeIcon.svg'
import trophyIcon from '../../public/images/trophyIcon.svg'
import Image from 'next/image';
import aboutUsPhoto from '../../public/images/aboutUsPhoto.svg'

export const metadata: Metadata = {
    title: "Sobre nós - Morais & Ribeiro",
    description: "Advocacia e Consultoria Jurídica",
};

const AboutUs = () => {
    return (
        <div>
            <SectionTitle title='Sobre nós' subtitle='Uma história de sucesso e confiança' />
            <div className="flex justify-center">
                <div className="mt-24 mb-32 px-10 grid grid-cols-3 gap-24">
                    <AboutUsCard 
                        image={targetIcon} 
                        alt={"Ícone de alvo"}
                        title={"Missão"} 
                        text={"Nossa missão é baseada em três pilares: foco, conhecimento e inovação. Estamos dedicados a entregar soluções jurídicas e de negócios que superem as expectativas dos clientes e desafiem os paradigmas tradicionais da advocacia."}
                        border="border-[#40B8967E]"
                        rounded="rounded-tr-[30px] rounded-bl-[30px]"
                    />
                    <AboutUsCard 
                        image={eyeIcon} 
                        alt={"Ícone de alvo"}
                        title={"Visão"} 
                        text={"Uma Sociedade de Advogados comprometida com as transformações sociais e as dinâmicas jurídicas, adaptando-se continuamente às inovações tecnológicas."}
                        border="border-[#B8967E]"
                        rounded="rounded-tl-[30px] rounded-br-[30px]"
                    />
                    <AboutUsCard 
                        image={trophyIcon} 
                        alt={"Ícone de alvo"}
                        title={"Valores"} 
                        text={"Transparência total, soluções eficazes, empatia e comprometimento. Somos comprometidos a seguir os princípios fundamentais do Direito, valorizando a confiança dos clientes e buscando construir relacionamentos duradouros baseados em transparência, ética e excelência jurídica."}
                        border="border-[#40B8967E]"
                        rounded="rounded-tr-[30px] rounded-bl-[30px]"
                    />
                </div>
            </div>
            <div className={"flex"}>
                <div>
                    <Image 
                    src={aboutUsPhoto} 
                    alt={"Doutor João Pedro, Doutora Nikolly Morais e Doutor Gustavo Santos"}
                    className={"w-auto h-auto ml-14 mb-36 mr-10"}  />
                </div>
                <div>
                    <p>texto</p>
                    <h3>quem somos</h3>
                    <p>texto texto texto</p>
                    <button>Fale conosco agora</button>
                </div>
            </div>
            
        </div>
    )
}

export default AboutUs
