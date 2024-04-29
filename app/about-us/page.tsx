import { Metadata } from 'next';
import React from 'react'
import SectionTitle from '../components/SectionTitle/SectionTitle';
import CardIcon from '../components/CardIcon/CardIcon';
import targetIcon from '../../public/images/targetIcon.svg'
import eyeIcon from '../../public/images/eyeIcon.svg'
import trophyIcon from '../../public/images/trophyIcon.svg'
import Image from 'next/image';
import aboutUsPhoto from '../../public/images/aboutUsPhoto.svg'
import Button from '../components/Button/button';
import Footer from '../components/Footer/Footer';

export const metadata: Metadata = {
    title: "Sobre nós - Morais & Ribeiro",
    description: "Advocacia e Consultoria Jurídica",
};

const AboutUs = () => {
    return (
        <div>
            <SectionTitle title='Sobre nós' subtitle='Uma história de sucesso e confiança' />
            <div className="flex justify-center">
                <div className="mt-20 sm:my-24 mb-20 px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <CardIcon 
                        image={targetIcon} 
                        alt={"Ícone de alvo"}
                        title={"Missão"} 
                        text={"Nossa missão é baseada em três pilares: foco, conhecimento e inovação. Estamos dedicados a entregar soluções jurídicas e de negócios que superem as expectativas dos clientes e desafiem os paradigmas tradicionais da advocacia."}
                        border="border-[#b8967e42]"
                        rounded="rounded-tr-[30px] rounded-bl-[30px]"
                    />
                    <CardIcon 
                        image={eyeIcon} 
                        alt={"Ícone de alvo"}
                        title={"Visão"} 
                        text={"Uma Sociedade de Advogados comprometida com as transformações sociais e as dinâmicas jurídicas, adaptando-se continuamente às inovações tecnológicas."}
                        border="border-[#B8967E]"
                        rounded="rounded-tl-[30px] rounded-br-[30px]"
                    />
                    <CardIcon
                        image={trophyIcon} 
                        alt={"Ícone de alvo"}
                        title={"Valores"} 
                        text={"Transparência total, soluções eficazes, empatia e comprometimento. Somos comprometidos a seguir os princípios fundamentais do Direito, valorizando a confiança dos clientes e buscando construir relacionamentos duradouros baseados em transparência, ética e excelência jurídica."}
                        border="border-[#b8967e42]"
                        rounded="rounded-tr-[30px] rounded-bl-[30px]"
                    />
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 mb-16 sm:mb-32">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <Image 
                        src={aboutUsPhoto} 
                        alt={"Doutor João Pedro, Doutora Nikolly Morais e Doutor Gustavo Santos"}
                        className='md:ml-16'
                    />
                </div>
                <div className="md:w-1/2 md:pr-24 md:pl-4">
                    <p className="text-sm mb-4 text-[#C98264]">
                        EXPERIÊNCIA E QUALIFICAÇÃO
                    </p>
                    <h2 className="text-3xl text-black font-bold mb-5">
                        QUEM SOMOS?
                    </h2>
                    <div>
                        <p className="text-[17px] text-[#8B94A1] text-justify mb-8">
                            Morais & Ribeiro, onde a excelência e a experiência se encontram para defender seus direitos com precisão e dedicação. Fundado por três colegas de faculdade, nosso escritório floresceu a partir de uma amizade sólida formada nos corredores acadêmicos e consolidada por uma visão comum: fornecer serviços jurídicos de alta qualidade, personalizados para atender às necessidades específicas de cada cliente. 
                            <br /> 
                            <br />
                            Nosso compromisso é proporcionar uma assistência jurídica eficiente e adaptável, garantindo que cada estratégia seja moldada para oferecer os melhores resultados possíveis. Em nosso escritório, você encontrará uma equipe altamente qualificada, pronta para enfrentar desafios e conduzir seus casos com a máxima integridade e competência.
                        </p>
                        <Button>Fale conosco agora</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs;
