import React from 'react';
import StatCard from '../Components/StatCard';
import DailyPrompt from '../Components/DailyPrompt';
import RecentWorks from '../Components/RecentWorks';
import { useSelector } from 'react-redux';

const DashboardHome = () => {
    const { user } = useSelector((state) => state.auth)
    const userProfile = { name: user?.name || "Keshav" };
    
    const statsData = [
        { title: "Writing Streak", value: user?.Streak || "12", subtitle: "days", iconEmoji: "🔥", trend: null },
        { title: "Words Written", value: "24,580", subtitle: "this week", iconEmoji: null, trend: { value: "+12%", isPositive: true } },
        { title: "Stories", value: user?.totalStoriesWritten || 0, subtitle: "Total stories", iconEmoji: null, trend: null },
        { title: "Poems", value: user?.totalPoems || 0, subtitle: "Total poems", iconEmoji: null, trend: null }
    ];

    const currentPrompt = "Write about a memory that still makes you smile.";

    const recentWorksData = [
        { title: "The Last Letter", type: "Story", timeAgo: "2h ago" },
        { title: "Midnight Thoughts", type: "Poem", timeAgo: "5h ago" },
        { title: "A World I Imagine", type: "Story", timeAgo: "1d ago" }
    ];

    const handlePromptWriteAction = () => {
        console.log("Redirecting workspace handler to process prompt context...");
    };

    return (
        <div className="p-6 md:p-10 max-w-[1400px] w-full mx-auto space-y-10">
            {/* Welcome User Core Frame Banner */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-[#110E2C] mb-1">
                    Good evening, {userProfile.name} 👋
                </h1>
                <p className="text-sm text-[#6E6B85] font-medium tracking-wide">
                    Let's write something beautiful today.
                </p>
            </div>

            {/* Core Analytics Matrix Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, index) => (
                    <StatCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        subtitle={stat.subtitle}
                        trend={stat.trend}
                        iconEmoji={stat.iconEmoji}
                    />
                ))}
            </div>

            {/* Action Tasks Split Grid Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                <DailyPrompt
                    promptText={currentPrompt}
                    onStartWriting={handlePromptWriteAction}
                />
                <RecentWorks
                    works={recentWorksData}
                />
            </div>
        </div>
    );
};

export default DashboardHome;