
import React from 'react';
import { FileText, Edit3, BookOpen } from 'lucide-react';

const RecentWorks = ({ works = [] }) => {
    return (
        <div className="bg-white border border-purple-100/70 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(147,51,234,0.04)] h-full">
            <h4 className="text-sm font-bold text-[#110E2C] mb-5 tracking-tight">
                Recent Works
            </h4>

            <div className="divide-y divide-purple-50/60">
                {works.map((work, idx) => {
                    const IsStory = work.type.toLowerCase() === 'story';
                    return (
                        <div key={idx} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0 group cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${IsStory ? 'bg-violet-50 text-violet-600' : 'bg-pink-50 text-pink-600'}`}>
                                    {IsStory ? <BookOpen className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                                </div>
                                <div>
                                    <h5 className="text-[14px] font-semibold text-[#110E2C] group-hover:text-violet-600 transition-colors">
                                        {work.title}
                                    </h5>
                                    <span className="text-[11px] text-[#8B88A5] font-medium tracking-wide">
                                        {work.type}
                                    </span>
                                </div>
                            </div>
                            <span className="text-xs text-[#8B88A5] font-medium font-mono">
                                {work.timeAgo}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RecentWorks;