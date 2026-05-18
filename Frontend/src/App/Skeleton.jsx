import React from 'react';

// 1. Shared Silhouette Asset (The Core Magical Token)
const PegtopPathGroup = () => (
    <g>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor" />
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-1)" />
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#shine)" mask="url(#mask)" />
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-2)" />
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-3)" />
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-4)" />
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient-5)" />
    </g>
);

// Secondary Magic Objects
const MiniSparkle = ({ className }) => (
    <svg viewBox="0 0 24 24" className={`absolute fill-current ${className}`}>
        <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
    </svg>
);

const Loader = () => {
    // Letters parsed out individually to handle the custom staggered bounce wave
    const textLetters = "Weaving thoughts...".split("");

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-[450px]">

            {/* --- ICON CONTAINER --- */}
            <div className="relative w-[160px] h-[160px] filter drop-shadow-[0_0_25px_rgba(249,115,22,0.45)] text-orange-500 mb-8">

                {/* Shared SVG Definitions Vector Container */}
                <svg className="absolute w-0 h-0 pointer-events-none">
                    <defs>
                        <filter id="shine"><feGaussianBlur stdDeviation={3} /></filter>
                        <mask id="mask">
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="white" />
                        </mask>
                        <radialGradient id="gradient-1" cx={50} cy={66} fx={50} fy={66} r={30} gradientTransform="translate(0 35) scale(1 0.5)" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="black" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="black" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="black" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="gradient-2" cx={55} cy={20} fx={55} fy={20} r={30} gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="white" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="white" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="gradient-3" cx={85} cy={50} fx={85} fy={50} href="#gradient-2" />
                        <radialGradient id="gradient-4" cx={50} cy={58} fx={50} fy={58} r={60} gradientTransform="translate(0 47) scale(1 0.2)" href="#gradient-3" />
                        <linearGradient id="gradient-5" x1={50} y1={90} x2={50} y2={10} gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="black" stopOpacity="0.2" />
                            <stop offset="40%" stopColor="black" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Dynamic Vector Layers */}
                <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-[flowe-one_1.4s_linear_infinite]">
                    <PegtopPathGroup />
                </svg>
                <svg viewBox="0 0 100 100" className="absolute w-full h-full opacity-0 animate-[flowe-two_1.4s_linear_infinite] [animation-delay:0.25s]">
                    <PegtopPathGroup />
                </svg>
                <svg viewBox="0 0 100 100" className="absolute w-full h-full opacity-0 animate-[flowe-three_1.4s_linear_infinite] [animation-delay:0.5s]">
                    <PegtopPathGroup />
                </svg>
                <svg viewBox="0 0 100 100" className="absolute w-full h-full opacity-0 scale-75 animate-[flowe-one_1.4s_linear_infinite] [animation-delay:0.75s] text-amber-400">
                    <PegtopPathGroup />
                </svg>
                <svg viewBox="0 0 100 100" className="absolute w-full h-full opacity-0 scale-90 animate-[flowe-two_1.4s_linear_infinite] [animation-delay:1s] text-orange-400">
                    <PegtopPathGroup />
                </svg>

                {/* Ambient Sparkle Particles */}
                <MiniSparkle className="w-5 h-5 top-0 left-4 text-amber-300 animate-ping [animation-duration:2s]" />
                <MiniSparkle className="w-4 h-4 bottom-10 -left-6 text-orange-300 opacity-60 animate-bounce [animation-delay:0.4s]" />
                <MiniSparkle className="w-3 h-3 top-12 -right-8 text-yellow-200 animate-pulse [animation-duration:1.2s]" />
                <MiniSparkle className="w-6 h-6 -bottom-4 right-8 text-amber-500 opacity-40 animate-pulse [animation-duration:2.5s]" />
            </div>

            {/* --- HIGH-END LOADING TEXT TYPOGRAPHY --- */}
            <div className="relative">
                {/* Outer ambient glow box tracking your text length */}
                <div className="absolute inset-0 bg-orange-400/10 blur-xl rounded-full scale-125 animate-pulse [animation-duration:3s]" />

                <div className="relative flex justify-center items-center gap-[1px]">
                    {textLetters.map((letter, index) => (
                        <span
                            key={index}
                            style={{ animationDelay: `${index * 0.05}s` }}
                            className={`text-sm font-medium tracking-wide text-orange-600/90 select-none animate-[text-wave_1.5s_ease-in-out_infinite] ${letter === " " ? "mx-1" : ""
                                }`}
                        >
                            {letter}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Loader;