import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import {
    ArrowLeft,
    Bold,
    Italic,
    Underline,
    Link as LinkIcon,
    AlignLeft,
    AlignCenter,
    Image as ImageIcon,
    ChevronRight,
    ChevronLeft,
    Sparkles,
    Wand2,
    Scissors,
    Maximize2
} from 'lucide-react';

const Editor = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const editorType = searchParams.get('type') || 'story';
    const isPoetry = editorType.toLowerCase() === 'poetry' || location.pathname.includes('/poem');
    
    const [activeTab, setActiveTab] = useState('Suggestions');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="h-screen w-full flex flex-col bg-white overflow-hidden text-zinc-900 font-sans">
            {/* Top Utility Header */}
            <header className="h-16 shrink-0 flex items-center justify-between px-6 border-b border-violet-100/60 bg-white z-10">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-zinc-400 hover:text-violet-600 hover:bg-violet-50 rounded-full transition-all duration-200">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <h1 className="text-sm font-semibold tracking-wider text-violet-600/80 uppercase">
                        Writing Editor ({isPoetry ? 'Poetry' : 'Story'})
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 text-sm font-medium text-zinc-500 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-200">
                        Save
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-zinc-500 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-200">
                        Save
                    </button>
                    <button className="px-6 py-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 shadow-sm shadow-violet-600/20 rounded-lg transition-all duration-200">
                        Publish
                    </button>
                </div>
            </header>

            {/* Two-Column Split Canvas */}
            <div className="flex-1 flex overflow-hidden relative">
                {/* Left Column (Rich-Text Playground) */}
                <main className="flex-1 flex flex-col relative bg-white transition-all duration-300">
                    <div className="flex-1 overflow-y-auto custom-scrollbar relative">
                        <div className="max-w-3xl mx-auto w-full px-8 py-16 pb-32">
                            {/* Top Section */}
                            <div className="flex items-center gap-3 mb-10 group">
                                <button className="p-1.5 text-zinc-300 hover:text-violet-500 rounded-md transition-colors opacity-0 group-hover:opacity-100">
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <input
                                    type="text"
                                    defaultValue="Untitled Story"
                                    className="text-zinc-400 hover:text-zinc-600 focus:text-zinc-900 bg-transparent outline-none font-medium text-sm transition-all duration-200"
                                />
                            </div>

                            {/* Content Zone */}
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold text-zinc-900 outline-none placeholder-zinc-300" contentEditable suppressContentEditableWarning>
                                    Chapter 1: The Beginning
                                </h1>
                                <div className="text-lg leading-relaxed text-zinc-700 outline-none min-h-[300px]" contentEditable suppressContentEditableWarning>
                                    The wind whispered through the trees as Aarav walked down the lonely path. He didn't know that this journey would change his life forever.
                                    <br /><br />
                                    <span className="text-zinc-300 pointer-events-none select-none">
                                        The old clock tower stood in the distance...
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-t border-violet-100/50 flex items-center justify-between px-6 z-10">
                        <div className="flex items-center gap-1.5">
                            {[Bold, Italic, Underline, LinkIcon, AlignLeft, AlignCenter, ImageIcon].map((Icon, i) => (
                                <button key={i} className="p-2 text-zinc-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-200">
                                    <Icon className="w-4 h-4" />
                                </button>
                            ))}
                        </div>
                        <div className="text-xs font-medium text-zinc-400">
                            Words: <span className="text-zinc-600">120</span>
                        </div>
                    </div>
                </main>

                {/* Right Column (Sidebar AI Panel) */}
                <AnimatePresence initial={false}>
                    {isSidebarOpen && (
                        <motion.aside
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 340, opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="shrink-0 border-l border-violet-100/60 bg-violet-50/20 flex flex-col h-full overflow-hidden"
                        >
                            <div className="w-[340px] h-full flex flex-col">
                                {/* Header */}
                                <div className="h-16 flex items-center justify-between px-6 border-b border-violet-100/50 shrink-0 bg-white/50 backdrop-blur-sm">
                                    <h2 className="font-semibold text-zinc-800 flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-violet-500" />
                                        AI Assistant
                                    </h2>
                                    <button
                                        onClick={() => setIsSidebarOpen(false)}
                                        className="p-1.5 text-zinc-400 hover:text-violet-600 hover:bg-violet-100/80 rounded-md transition-all duration-200"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Tabs */}
                                <div className="p-4 shrink-0">
                                    <div className="flex p-1 bg-white/80 border border-violet-100/60 rounded-xl shadow-sm">
                                        {['Suggestions', 'Insights'].map(tab => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === tab
                                                    ? 'bg-white text-violet-600 shadow-sm ring-1 ring-violet-100/50'
                                                    : 'text-zinc-500 hover:text-zinc-700 hover:bg-violet-50/50'
                                                    }`}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Tab Content */}
                                <div className="flex-1 overflow-y-auto px-4 pb-6 custom-scrollbar">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {activeTab === 'Suggestions' ? (
                                                <div className="space-y-6">
                                                    {/* Continue Writing Card */}
                                                    <div className="bg-white border border-violet-100/60 rounded-2xl p-5 shadow-sm shadow-violet-100/20 transition-all duration-200 hover:shadow-md hover:border-violet-200">
                                                        <h3 className="text-sm font-semibold text-zinc-800 mb-2">Continue Writing</h3>
                                                        <p className="text-xs text-zinc-500 mb-5 leading-relaxed">
                                                            Continue the story from here based on the current context...
                                                        </p>
                                                        <button className="w-full py-2.5 bg-violet-50 hover:bg-violet-600 text-violet-600 hover:text-white text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 border border-violet-100 hover:border-violet-600">
                                                            <Sparkles className="w-4 h-4" />
                                                            Continue
                                                        </button>
                                                    </div>

                                                    {/* Quick Actions Stack */}
                                                    <div className="space-y-2">
                                                        <ActionItem icon={Wand2} label="Rewrite" />
                                                        <ActionItem icon={Sparkles} label="Make it dramatic" />
                                                        <ActionItem icon={Scissors} label="Shorten" />
                                                        <ActionItem icon={Maximize2} label="Expand" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="space-y-8 mt-2">
                                                    <h3 className="text-sm font-semibold text-zinc-800 flex items-center gap-2">
                                                        Fine-tune aesthetics ✨
                                                    </h3>

                                                    {/* Vibe & Mood */}
                                                    <div className="space-y-4">
                                                        <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Vibe & Mood</h4>
                                                        <div className="flex flex-wrap gap-2.5">
                                                            {['Romance', 'Sad', 'Motivational', 'Dark', 'Fantasy', 'Philosophical', 'Anime', 'Custom'].map(tag => (
                                                                <button key={tag} className="px-3.5 py-1.5 bg-white border border-violet-100/60 hover:border-violet-300 hover:bg-violet-50 text-zinc-600 hover:text-violet-700 text-xs font-medium rounded-full transition-all duration-200 shadow-sm">
                                                                    {tag}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Genre & Style */}
                                                    <div className="space-y-4">
                                                        <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Genre & Style</h4>
                                                        <div className="flex flex-wrap gap-2.5">
                                                            {['High Fantasy', 'Sci-Fi & Cyberpunk', 'Mystery & Thriller', 'Contemporary Romance', 'Dark Horror', 'Historical Fiction', 'Lyrical Poetry', 'Free Verse', 'Dystopian', 'Action & Adventure', 'Mythology'].map(tag => (
                                                                <button key={tag} className="px-3.5 py-1.5 bg-white border border-violet-100/60 hover:border-violet-300 hover:bg-violet-50 text-zinc-600 hover:text-violet-700 text-xs font-medium rounded-full transition-all duration-200 shadow-sm">
                                                                    {tag}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.aside>
                    )}
                </AnimatePresence>

                {/* Sidebar Toggle (when closed) */}
                {!isSidebarOpen && (
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white border border-r-0 border-violet-200 text-violet-500 rounded-l-xl shadow-md hover:pr-4 transition-all duration-200 group z-20"
                    >
                        <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                )}
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(139, 92, 246, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background-color: rgba(139, 92, 246, 0.4);
                }
                
                [contenteditable]:empty:before {
                    content: attr(placeholder);
                    color: #d4d4d8; /* zinc-300 */
                    pointer-events: none;
                    display: block; 
                }
            `}</style>
        </div>
    );
};

const ActionItem = ({ icon: Icon, label }) => (
    <button className="w-full flex items-center gap-3 px-4 py-3.5 bg-white border border-violet-100/50 hover:border-violet-300 text-zinc-600 hover:text-violet-600 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md group">
        <div className="p-1.5 bg-violet-50/50 group-hover:bg-violet-100 rounded-lg transition-colors">
            <Icon className="w-4 h-4 text-zinc-400 group-hover:text-violet-500 transition-colors" />
        </div>
        <span className="text-sm font-medium">{label}</span>
    </button>
);

export default Editor;