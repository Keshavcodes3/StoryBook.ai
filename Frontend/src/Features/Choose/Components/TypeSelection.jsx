import React, { useState } from 'react';
import { BookOpen, Rocket, Search } from 'lucide-react';
import ModeCard from './ModeCard';
import PopularModes from './PopularModes';
import {
  Sparkles, Shield, Eye, Flame, Ghost, Music,
  Heart, Compass, Trees, Moon, Milestone
} from 'lucide-react';
import { useChoose } from '../Hooks/useChoose';
const POPULAR_MODES = [
  'Romance', 'Sad', 'Motivational', 'Dark', 'Fantasy',
  'Philosophical', 'Anime', 'Custom'
];

const POPULAR_GENRES = [
  "High Fantasy",
  "Sci-Fi & Cyberpunk",
  "Mystery & Thriller",
  "Contemporary Romance",
  "Dark Horror",
  "Historical Fiction",
  "Lyrical Poetry",
  "Free Verse",
  "Dystopian",
  "Action & Adventure",
  "Mythology",
  "Magical Realism"
];

const TypeSelection = () => {
  const [selectedType, setSelectedType] = useState('story');
  const [selectedMode, setSelectedMode] = useState('');
  const [selectedGenres, setselectedGenres] = useState('')

  const Data = {
    format: selectedType,
    genre: selectedGenres,
    mood: selectedMode
  }
  const { choose } = useChoose()
  const submitHandler = (type) => {
    setSelectedType(type)
    choose(Data)
  }
  return (
    <div className="w-full max-w-[1400px] mx-auto mb-10 flex flex-col lg:flex-row gap-8 lg:gap-12">

      {/* Left Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="mb-10">
          <h1 className="text-3xl md:text-[2.5rem] font-extrabold text-[#110E2C] mb-3 tracking-tight leading-tight">
            What do you want to create?
          </h1>
          <p className="text-[#6E6B85] text-base md:text-lg font-medium">
            Choose your writing mode
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          <ModeCard
            title="Story"
            description="Create engaging stories with AI assistance"
            icon={BookOpen}
            colorClass="bg-gradient-to-br from-[#8E70FA] to-[#6A4BE0]"
            active={selectedType === 'story'}
            onClick={() => submitHandler('story')}
          />
          <ModeCard
            title="Poem"
            description="Express emotions in beautiful poetry"
            icon={Rocket}
            colorClass="bg-gradient-to-br from-[#D96B85] to-[#C3526E]"
            active={selectedType === 'poem'}
            onClick={() => submitHandler('poem')}
          />
        </div>
      </div>

      {/* Right Sidebar - Aesthetic Options Panel */}
      <div className="w-full lg:w-[360px] xl:w-[400px] ">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-purple-100/60 shadow-xl shadow-purple-500/5 sticky top-28">
          <h3 className="text-xl font-extrabold text-[#110E2C] mb-8 tracking-tight flex items-center gap-2">
            Fine-tune your story <span className="text-xl">✨</span>
          </h3>

          {/* Vibe & Mode Section */}
          <div className="mb-10">
            <label className="block text-sm font-bold text-[#4A4765] mb-4 uppercase tracking-wider">
              Vibe & Mode
            </label>
            <div className="relative mb-5">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-[#8B88A5]" />
              </div>
              <input
                type="text"
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                placeholder="Type a custom mode..."
                className="w-full bg-[#FAFAFE] border border-purple-100/60 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-[#110E2C] placeholder:text-[#8B88A5] focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all shadow-sm"
              />
            </div>
            <PopularModes
              modes={POPULAR_MODES}
              activeMode={selectedMode}
              onSelect={setSelectedMode}
            />
          </div>

          {/* Genre Section */}
          <div>
            <label className="block text-sm font-bold text-[#4A4765] mb-4 uppercase tracking-wider">
              Genre
            </label>
            <div className="relative mb-5">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-[#8B88A5]" />
              </div>
              <input
                type="text"
                value={selectedGenres}
                onChange={(e) => setselectedGenres(e.target.value)}
                placeholder="Type a custom genre..."
                className="w-full bg-[#FAFAFE] border border-purple-100/60 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-[#110E2C] placeholder:text-[#8B88A5] focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all shadow-sm"
              />
            </div>
            <PopularModes
              modes={POPULAR_GENRES}
              activeMode={selectedGenres}
              onSelect={setselectedGenres}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default TypeSelection;