import { Metadata } from 'next';
import React from 'react'
import SectionTitle from '../components/SectionTitle/SectionTitle';

export const metadata: Metadata = {
    title: "Sobre nós - Morais & Ribeiro",
    description: "Advocacia e Consultoria Jurídica",
};

const AboutUs = () => {
    return (
        <SectionTitle title='Sobre nós' subtitle='Uma história de sucesso e confiança' />
    )
}

export default AboutUs