import React from 'react';
import { PenTool } from 'lucide-react';

const DailyPrompt = ({ promptText, onStartWriting }) => {
    return (
        <div className="bg-white border border-purple-100/70 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(147,51,234,0.04)] flex flex-col h-full justify-between">
            <div>
                <h4 className="text-sm font-bold text-[#110E2C] mb-4 tracking-tight flex items-center gap-2">
                    Daily Prompt
                </h4>
                <p className="text-[#4A4765] text-[15px] leading-relaxed font-normal">
                    "{promptText}"
                </p>
            </div>

            <div className="mt-8">
                <button
                    onClick={onStartWriting}
                    className="bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-xs px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/10 active:scale-[0.98] flex items-center gap-2"
                >
                    <PenTool className="w-3.5 h-3.5" />
                    Start Writing
                </button>
            </div>
        </div>
    );
};

export default DailyPrompt;