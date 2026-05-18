import React from 'react';
import Navbar from '../../Home/Components/Navbar';
import { PenTool, Box, ScrollText } from 'lucide-react';

const Tools = () => {
    return (
        <div className="min-h-screen bg-[#FAFAFE] text-[#110E2C] font-sans">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-extrabold mb-6">Writing <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">Tools</span></h1>
                    <p className="text-[#6E6B85] text-lg max-w-2xl mx-auto">Specific instruments tailored for every stage of your creative process.</p>
                </div>
                
                <div className="flex flex-col gap-10">
                    <div className="bg-white p-10 rounded-[40px] border border-purple-100/60 shadow-lg flex flex-col md:flex-row items-center gap-10 hover:shadow-xl transition-shadow">
                        <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-violet-100 to-purple-50 rounded-[30px] flex items-center justify-center">
                            <PenTool className="w-24 h-24 text-violet-400" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-4">Poem Generator</h2>
                            <p className="text-[#6E6B85] text-lg mb-6 leading-relaxed">Craft beautiful, structured poetry instantly. Define the meter, rhyming scheme, and emotional undertone.</p>
                            <button className="bg-violet-100 text-violet-700 px-6 py-2.5 rounded-full font-bold hover:bg-violet-200 transition-colors">Try Generator</button>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[40px] border border-purple-100/60 shadow-lg flex flex-col md:flex-row-reverse items-center gap-10 hover:shadow-xl transition-shadow">
                        <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-fuchsia-100 to-pink-50 rounded-[30px] flex items-center justify-center">
                            <ScrollText className="w-24 h-24 text-fuchsia-400" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-4">Essay Structurer</h2>
                            <p className="text-[#6E6B85] text-lg mb-6 leading-relaxed">Turn chaotic thoughts into a logical flow. Build thesis statements, topic sentences, and seamless transitions effortlessly.</p>
                            <button className="bg-fuchsia-100 text-fuchsia-700 px-6 py-2.5 rounded-full font-bold hover:bg-fuchsia-200 transition-colors">Build Structure</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;
