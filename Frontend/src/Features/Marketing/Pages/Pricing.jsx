import React from 'react';
import Navbar from '../../Home/Components/Navbar';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <div className="min-h-screen bg-[#FAFAFE] text-[#110E2C] font-sans">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-extrabold mb-6">Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">Pricing</span></h1>
                    <p className="text-[#6E6B85] text-lg max-w-2xl mx-auto">Start for free, upgrade when you need more power.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Free */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col hover:border-violet-300 transition-colors">
                        <h3 className="text-xl font-bold mb-2">Hobby</h3>
                        <p className="text-4xl font-extrabold mb-6">$0<span className="text-base font-medium text-gray-400">/mo</span></p>
                        <ul className="space-y-4 mb-8 flex-1">
                            {['10 AI generations/day', 'Basic story tools', 'Community access'].map(f => (
                                <li key={f} className="flex items-center gap-3 text-[#6E6B85]"><Check className="w-5 h-5 text-green-500"/> {f}</li>
                            ))}
                        </ul>
                        <button className="w-full py-3 rounded-xl border-2 border-gray-200 font-bold hover:border-gray-300 transition-colors">Get Started</button>
                    </div>

                    {/* Pro */}
                    <div className="bg-[#110E2C] text-white p-8 rounded-3xl border-2 border-violet-500 shadow-2xl shadow-violet-500/20 flex flex-col relative transform md:-translate-y-4">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">MOST POPULAR</div>
                        <h3 className="text-xl font-bold mb-2 text-violet-300">Creator Pro</h3>
                        <p className="text-4xl font-extrabold mb-6">$12<span className="text-base font-medium text-gray-400 text-white/50">/mo</span></p>
                        <ul className="space-y-4 mb-8 flex-1">
                            {['Unlimited generations', 'Advanced tone matching', 'Export to PDF/EPUB', 'Priority support'].map(f => (
                                <li key={f} className="flex items-center gap-3 text-gray-300"><Check className="w-5 h-5 text-violet-400"/> {f}</li>
                            ))}
                        </ul>
                        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 font-bold hover:shadow-lg hover:shadow-violet-500/30 transition-all">Upgrade to Pro</button>
                    </div>

                    {/* Team */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col hover:border-violet-300 transition-colors">
                        <h3 className="text-xl font-bold mb-2">Studio</h3>
                        <p className="text-4xl font-extrabold mb-6">$39<span className="text-base font-medium text-gray-400">/mo</span></p>
                        <ul className="space-y-4 mb-8 flex-1">
                            {['Everything in Pro', 'Collaborative editing', 'Custom AI models', 'API Access'].map(f => (
                                <li key={f} className="flex items-center gap-3 text-[#6E6B85]"><Check className="w-5 h-5 text-green-500"/> {f}</li>
                            ))}
                        </ul>
                        <button className="w-full py-3 rounded-xl border-2 border-gray-200 font-bold hover:border-gray-300 transition-colors">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
