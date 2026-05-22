import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import FeaturesBanner from './Components/FeaturesBanner';
import StatsSection from './Components/StatsSection';
import RecentWorks from './Components/RecentWorks';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#FAFAFE] font-sans text-[#110E2C] overflow-hidden relative flex flex-col justify-between">
            {/* Background Decorative Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-400/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-fuchsia-400/10 blur-[120px] rounded-full pointer-events-none" />

            <div>
                <Navbar />
                <HeroSection />
            </div>

            {/* Stats Section */}
            <StatsSection />

            {/* Recent Works Section */}
            <RecentWorks limit={10} />
            
            <FeaturesBanner />
        </div>
    );
};

export default Home;
