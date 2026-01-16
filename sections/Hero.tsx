import React, { useEffect, useState } from 'react';
import HeroAnimation from '../components/HeroAnimation';
import DownloadWidget from '../components/DownloadWidget';
import TrustedBy from '../components/TrustedBy';
import { fetchHeroData } from '../services/dataService';
import { HeroData } from '../types';

const Hero: React.FC = () => {
  const [data, setData] = useState<HeroData | null>(null);

  useEffect(() => {
    fetchHeroData().then(setData);
  }, []);

  if (!data) return <div className="min-h-screen bg-background flex items-center justify-center text-muted">Loading...</div>;

  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden selection:bg-primary/30 selection:text-white flex flex-col">
      
      {/* Background Visualization Layer */}
      {/* Expanded container for the new wide animation */}
      <div className="absolute inset-0 z-0 lg:left-[10%] pointer-events-none opacity-60 mix-blend-screen">
        <HeroAnimation />
        {/* Gradients to blend edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent w-1/3"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent h-32 bottom-0"></div>
      </div>

      <div className="relative z-10 pt-32 pb-12 px-6 md:px-12 lg:pt-32 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 flex-grow">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Vision Tag */}
          <div className="flex items-center mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary mr-3 shadow-[0_0_8px_rgba(255,85,0,0.6)]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">{data.visionTag}</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-8 leading-[1.05] animate-slide-up">
            Millions of Agents. One Voice.

          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-muted font-mono mb-4 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {data.subhead}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 mb-4 max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {data.description}
          </p>

          {/* Download Widget */}
          <DownloadWidget data={data} />

          {/* Powered By (Marquee) */}
          <TrustedBy />

        </div>

        {/* Right Column Spacer - Animation lives behind here now */}
        <div className="hidden lg:block lg:col-span-5 pointer-events-none">
        </div>

      </div>
    </div>
  );
};

export default Hero;
