import React from 'react';
import Hero from './Hero';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="relative w-screen bg-hero bg-cover">
            <Hero />
            <Footer />
        </div>
    );
};

export default Home;
