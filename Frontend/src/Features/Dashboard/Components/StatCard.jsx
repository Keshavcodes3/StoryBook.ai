import React from 'react';

const StatCard = ({ title, value, subtitle, trend, iconEmoji }) => {
    return (
        <div className="bg-white border border-purple-100/70 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(147,51,234,0.04)] flex flex-col justify-between min-h-[140px]">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[13px] font-semibold text-[#8B88A5] uppercase tracking-wider">{title}</span>
                    {iconEmoji && <span className="text-xl select-none">{iconEmoji}</span>}
                </div>
                <h3 className="text-3xl font-bold text-[#110E2C] tracking-tight">{value}</h3>
            </div>

            <div className="mt-4 flex items-center gap-2">
                {trend && (
                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${trend.isPositive ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'}`}>
                        {trend.value}
                    </span>
                )}
                <span className="text-xs text-[#8B88A5] font-medium">{subtitle}</span>
            </div>
        </div>
    );
};

export default StatCard;