import { Metadata } from 'next';
import React from 'react'
import SectionTitle from '../components/SectionTitle/SectionTitle';
import AboutUsCard from '../components/AboutUsCard/AboutUsCard';
import targetIcon from '../../public/images/targetIcon.svg'
import eyeIcon from '../../public/images/eyeIcon.svg'
import trophyIcon from '../../public/images/trophyIcon.svg'

export const metadata: Metadata = {
    title: "Sobre nós - Morais & Ribeiro",
    description: "Advocacia e Consultoria Jurídica",
};

const AboutUs = () => {
    return (
        <div>
            <SectionTitle title='Sobre nós' subtitle='Uma história de sucesso e confiança' />
            <div className="flex justify-center">
                <div className="pt-2 pb-2 px-4 md:px-0 md:pb-4 md:pt-4 md:grid md:grid-cols-3 md:gap-4">
                    <AboutUsCard 
                        image={targetIcon} 
                        alt={"Ícone de alvo"}
                        title={"Missão"} 
                        text={"Nossa missão é baseada em três pilares: foco, conhecimento e inovação. Estamos dedicados a entregar soluções jurídicas e de negócios que superem as expectativas dos clientes e desafiem os paradigmas tradicionais da advocacia."}
                    />
                    <AboutUsCard 
                        image={eyeIcon} 
                        alt={"Ícone de alvo"}
                        title={"Visão"} 
                        text={"Uma Sociedade de Advogados comprometida com as transformações sociais e as dinâmicas jurídicas, adaptando-se continuamente às inovações tecnológicas."}
                    />
                    <AboutUsCard 
                        image={trophyIcon} 
                        alt={"Ícone de alvo"}
                        title={"Valores"} 
                        text={"Transparência total, soluções eficazes, empatia e comprometimento. Somos comprometidos a seguir os princípios fundamentais do Direito, valorizando a confiança dos clientes e buscando construir relacionamentos duradouros baseados em transparência, ética e excelência jurídica."}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
