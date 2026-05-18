import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WorkListItem from '../Components/WorkListItem';

const TABS = ['All', 'Stories', 'Poems', 'Favorites', 'Collections'];

const MOCK_WORKS = [
    {
        id: 1,
        title: "The Last Letter",
        type: "Story",
        metrics: "1200 words",
        timeAgo: "2 hours ago",
        gradientClass: "from-[#2A2B5F] to-[#110E2C]",
        category: "Stories"
    },
    {
        id: 2,
        title: "Midnight Thoughts",
        type: "Poem",
        metrics: "18 lines",
        timeAgo: "5 hours ago",
        gradientClass: "from-[#D8B4E2] to-[#A87CB8]",
        category: "Poems"
    },
    {
        id: 3,
        title: "A World I Imagine",
        type: "Story",
        metrics: "980 words",
        timeAgo: "1 day ago",
        gradientClass: "from-[#110E2C] to-[#2A2B5F]",
        category: "Stories"
    },
    {
        id: 4,
        title: "Lost in Dreams",
        type: "Poem",
        metrics: "12 lines",
        timeAgo: "2 days ago",
        gradientClass: "from-[#B8A7E0] to-[#8E70FA]",
        category: "Poems"
    }
];

const Library = () => {
    const [activeTab, setActiveTab] = useState('All');

    const filteredWorks = MOCK_WORKS.filter(work => {
        if (activeTab === 'All') return true;
        if (activeTab === 'Stories' && work.category === 'Stories') return true;
        if (activeTab === 'Poems' && work.category === 'Poems') return true;
        return false;
    });

    return (
        <div className="w-full max-w-[1200px] mx-auto p-6 md:p-10 min-h-full">
            {/* Header Stack */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-8">
                    <h1 className="text-lg font-bold tracking-widest text-violet-600 uppercase">
                        LIBRARY / MY WORKS
                    </h1>
                </div>

                {/* Controls Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-purple-100/40 pb-4">

                    {/* Tab Selection Controller */}
                    <div className="flex items-center gap-2 bg-transparent p-1 overflow-x-auto no-scrollbar">
                        {TABS.map((tab) => {
                            const isActive = activeTab === tab;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative px-4 py-2 text-sm font-bold transition-colors duration-300 rounded-full whitespace-nowrap ${isActive ? 'text-violet-700' : 'text-[#6E6B85] hover:text-[#110E2C]'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeLibraryTab"
                                            transition={{ type: "spring", stiffness: 220, damping: 26 }}
                                            className="absolute inset-0 bg-violet-50 rounded-full z-0 border border-violet-100/60 shadow-sm"
                                        />
                                    )}
                                    <span className="relative z-10">{tab}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Utility */}
                    <div className="relative w-full md:w-72">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="w-4 h-4 text-[#8B88A5]" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search works..."
                            className="w-full pl-10 pr-4 py-2 bg-white border border-purple-100/60 rounded-xl text-sm font-medium text-[#110E2C] placeholder:text-[#8B88A5] focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all shadow-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Works Registry List */}
            <div className="bg-white rounded-3xl border border-purple-100/60 shadow-sm flex flex-col">
                <AnimatePresence mode="popLayout">
                    {filteredWorks.map((work) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="last:border-b-0 border-b border-purple-100/30"
                        >
                            <WorkListItem
                                title={work.title}
                                type={work.type}
                                metrics={work.metrics}
                                timeAgo={work.timeAgo}
                                gradientClass={work.gradientClass}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>

                {filteredWorks.length === 0 && (
                    <div className="p-10 text-center text-[#8B88A5] font-medium">
                        No works found for this filter.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Library;
