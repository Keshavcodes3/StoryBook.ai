import React from 'react';
import Navbar from '../../Home/Components/Navbar';
import { Users, MessageCircle, Heart } from 'lucide-react';

const Community = () => {
    return (
        <div className="min-h-screen bg-[#FAFAFE] text-[#110E2C] font-sans">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                <div className="w-20 h-20 bg-violet-100 rounded-3xl mx-auto flex items-center justify-center mb-8 rotate-3 shadow-inner">
                    <Users className="w-10 h-10 text-violet-600" />
                </div>
                <h1 className="text-5xl font-extrabold mb-6">Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">Community</span></h1>
                <p className="text-[#6E6B85] text-lg max-w-2xl mx-auto mb-12">Connect with over 10,000 writers, poets, and creators shaping the future of storytelling.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-3xl border border-purple-100/60 shadow-lg shadow-purple-500/5 text-left hover:-translate-y-1 transition-transform">
                        <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mb-6">
                            <MessageCircle className="w-8 h-8 text-violet-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Discord Server</h3>
                        <p className="text-[#6E6B85] mb-8 leading-relaxed">Join live writing sprints, share your drafts, and get instant feedback from peers in our active channels.</p>
                        <button className="text-violet-600 font-bold hover:underline">Join Discord &rarr;</button>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-purple-100/60 shadow-lg shadow-pink-500/5 text-left hover:-translate-y-1 transition-transform">
                        <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-6">
                            <Heart className="w-8 h-8 text-pink-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Featured Creators</h3>
                        <p className="text-[#6E6B85] mb-8 leading-relaxed">Read weekly interviews and showcases of the best stories generated and published on our platform.</p>
                        <button className="text-pink-600 font-bold hover:underline">Read Stories &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
