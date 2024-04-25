import { Metadata } from 'next';
import React from 'react'
import SectionTitle from '../components/SectionTitle/SectionTitle';

export const metadata: Metadata = {
    title: "Nosso time - Morais & Ribeiro",
    description: "Advocacia e Consultoria Jurídica",
};

const Team = () => {
    return (
        <SectionTitle title='Nossos Profissionais' subtitle='Acreditamos no poder da nossa equipe e sabemos que nada se constrói sozinho.' />
    )
}

export default Team