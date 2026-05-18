import React from 'react';
import Navbar from '../../Home/Components/Navbar';

const Blog = () => {
    const posts = [
        {
            tag: "Product Update",
            title: "Introducing v2.0 Generation Pipeline",
            desc: "Faster generation, deeper context understanding, and brand new aesthetic tools to help you craft your best story yet.",
            date: "Oct 24, 2026",
            color: "violet"
        },
        {
            tag: "Writing Tips",
            title: "How to craft a compelling villain",
            desc: "Stop making one-dimensional bad guys. Use these specific AI prompts to brainstorm complex motives and backstories.",
            date: "Oct 18, 2026",
            color: "fuchsia"
        },
        {
            tag: "Community",
            title: "Writer Spotlight: Sarah Jenkins",
            desc: "How a high school English teacher used StoryBook.ai to publish her first sci-fi novella in just 3 months.",
            date: "Oct 12, 2026",
            color: "blue"
        }
    ];

    return (
        <div className="min-h-screen bg-[#FAFAFE] text-[#110E2C] font-sans">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-6">Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">News</span></h1>
                    <p className="text-[#6E6B85] text-lg max-w-2xl mx-auto">Product updates, writing tips, and community spotlights.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <div key={idx} className="bg-white rounded-[30px] border border-purple-100/60 overflow-hidden shadow-lg shadow-purple-500/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col">
                            {/* Abstract Image Placeholder using Gradients */}
                            <div className={`h-48 bg-gradient-to-br from-${post.color}-100 to-${post.color}-200 flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute w-32 h-32 rounded-full bg-white/40 blur-xl top-[-20px] right-[-20px]"></div>
                                <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-md shadow-sm border border-white flex items-center justify-center">
                                    <span className="text-2xl opacity-80 text-white">✨</span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className={`text-xs font-bold uppercase tracking-wider text-${post.color}-600 mb-4 block`}>{post.tag}</span>
                                <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                                <p className="text-[#6E6B85] text-sm mb-8 leading-relaxed flex-1">{post.desc}</p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                                    <span className="text-xs font-bold text-[#8B88A5]">{post.date}</span>
                                    <span className="text-xs font-bold text-violet-600 hover:underline">Read Article &rarr;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
