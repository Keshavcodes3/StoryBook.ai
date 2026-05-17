import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutPlatform from './Components/AboutPlatform';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#0B0A11] font-sans selection:bg-[#FF6A00]/30 selection:text-white overflow-hidden relative">
            <Navbar />
            <main>
                <HeroSection />
                <div className="container mx-auto px-6">
                    <AboutPlatform />
                </div>
            </main>
        </div>
    );
};

export default Home;
