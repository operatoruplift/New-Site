
import React, { useEffect, useRef, useState } from 'react';
import { TerminalIcon, GlobeIcon, ChevronRight, MessageIcon, KanbanIcon, CheckIcon } from '../components/Icons';

interface Feature {
  id: string;
  navTitle: string; // Short title for the left list
  cardTitle: string; // Headline for the description card
  description: string;
  icon: React.ReactNode;
}

interface ProductProps {
  onNavigate: (page: any) => void;
}

const features: Feature[] = [
  {
    id: 'isolated',
    navTitle: 'ISOLATED ENV',
    cardTitle: '1. Isolated Environment',
    description: 'A secure and high-speed sandbox where every agent runs independently. Your data stays local, execution is fast, and each agent operates inside a protected space built for safety and performance.',
    icon: <KanbanIcon className="w-5 h-5" />
  },
  {
    id: 'store',
    navTitle: 'AGENT STORE',
    cardTitle: '2. Agent Store',
    description: 'A curated store where you can access, install, and deploy agents with one click. Developers get a space for monetizing their agents, and users get effortless setup and clear permissions.',
    icon: <GlobeIcon className="w-5 h-5" />
  },
  {
    id: 'runtime',
    navTitle: 'SESSION RUNTIME',
    cardTitle: '3. Session-Based Runtime',
    description: 'Agents receive a temporary, secure workspace for each task they perform. This plug-and-play mechanism ensures fast execution, strict isolation, and no long-term access to your system once the session ends.',
    icon: <TerminalIcon className="w-5 h-5" />
  },
  {
    id: 'tokens',
    navTitle: 'SESSION TOKENS',
    cardTitle: '4. Session-Based Tokens',
    description: 'Short-lived, context-aware tokens define exactly what an agent can see or do. They unlock the Agentic Vault, ensuring that permissions are precise, revocable, and always under your control.',
    icon: <MessageIcon className="w-5 h-5" />
  },
  {
    id: 'permissions',
    navTitle: 'PERMISSIONS',
    cardTitle: '5. Permission Actions',
    description: 'Every outward action—file access, device control, network calls—is governed by explicit permissions. No silent behavior, no surprises. You define what agents can do, and UPLIFT enforces those boundaries automatically.',
    icon: <CheckIcon className="w-5 h-5" />
  }
];

const Product: React.FC<ProductProps> = ({ onNavigate }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animStep, setAnimStep] = useState(0);

  // Height of one scroll "step" per feature
  const getStepHeight = () => window.innerHeight * 0.8;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollY = window.scrollY;
      const offsetTop = sectionRef.current.offsetTop;
      const stepHeight = getStepHeight();

      const scrollDistance = scrollY - offsetTop;

      if (scrollDistance < -window.innerHeight * 0.2) return;

      const index = Math.min(
        features.length - 1,
        Math.max(0, Math.floor((scrollDistance + stepHeight * 0.3) / stepHeight))
      );

      if (index !== activeIndex) {
        setActiveIndex(index);
        setAnimStep(0); // Reset animation when feature changes
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  // Animation Loop for the visualizer
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimStep((prev) => (prev + 1) % 4); // Cycle through 4 steps (0, 1, 2, 3)
    }, 2000); // 2 seconds per frame

    return () => clearInterval(interval);
  }, [activeIndex]);

  const scrollToFeature = (index: number) => {
    if (!sectionRef.current) return;
    const offsetTop = sectionRef.current.offsetTop;
    const stepHeight = getStepHeight();
    const targetY = offsetTop + (index * stepHeight);

    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  };

  return (
    <div
      id="product"
      ref={sectionRef}
      className="relative bg-slanted-lines w-full min-h-[500vh]"
      style={{ backgroundColor: '#0c0c0c' }}
    >

      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 h-full py-12 md:py-16 relative">

          {/* Left Side: Content & Navigation */}
          <div className="lg:col-span-5 flex flex-col h-full relative z-10">

            {/* Top: Headline */}
            <div className="mt-8 md:mt-16">
              <div className="flex items-center mb-4">
                <span className="w-2 h-2 rounded-full bg-primary mr-3 shadow-[0_0_8px_rgba(255,85,0,0.8)]"></span>
                <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">PRODUCT</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6 leading-tight font-medium">
                Self-Contained AI Enviornment
              </h2>
              <p className="text-muted text-lg font-mono leading-relaxed max-w-md">
                A new compute layer with
                containerized agents,
                user controlled data and
                a marketplace for agents
              </p>
            </div>

            {/* Bottom: Progress Navigation List */}
            <div className="mt-auto mb-12 lg:mb-24 relative pl-4">
              {/* Track Line Background */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-white/10 z-0 rounded-full"></div>

              {/* Active Track Line Fill */}
              <div
                className="absolute left-[7px] top-2 w-[2px] bg-primary z-0 rounded-full transition-all duration-500 ease-out"
                style={{ height: `${(activeIndex / (features.length - 1)) * 100}%` }}
              ></div>

              <div className="flex flex-col space-y-4">
                {features.map((feature, index) => {
                  const isActive = index === activeIndex;
                  const isPast = index <= activeIndex;

                  return (
                    <button
                      key={feature.id}
                      onClick={() => scrollToFeature(index)}
                      className={`group flex items-center text-left relative z-10 transition-all duration-300 ${isActive ? 'translate-x-2' : ''}`}
                    >
                      {/* Node/Dot */}
                      <div className={`relative flex items-center justify-center w-4 h-4 mr-4 transition-all duration-300`}>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive
                            ? 'bg-primary shadow-[0_0_10px_rgba(255,85,0,0.8)] scale-125'
                            : isPast
                              ? 'bg-primary'
                              : 'bg-gray-700 group-hover:bg-gray-500'
                          }`}></div>
                      </div>

                      {/* Text */}
                      <div className="flex items-baseline space-x-2">
                        <span className={`font-mono text-[10px] transition-colors ${isActive ? 'text-primary' : 'text-gray-600'}`}>
                          0{index + 1}
                        </span>
                        <span className={`text-xs font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                          {feature.navTitle}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Split View (Text Box + Animation Box) */}
          <div className="hidden lg:grid lg:col-span-7 grid-cols-12 gap-6 h-full relative pt-24 pb-6">

             {/* Box 1: Text Description (Larger Text, Bottom Aligned, Compact Width) */}
             <div className="col-span-5 self-end w-full h-fit rounded-2xl border border-dashed border-white/20 p-2 relative flex flex-col bg-background/50 backdrop-blur-sm">
                {/* Decoration Corner Markers */}
                <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-white/40 rounded-tl-lg"></div>
                <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t border-r border-white/40 rounded-tr-lg"></div>
                <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b border-l border-white/40 rounded-bl-lg"></div>
                <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-white/40 rounded-br-lg"></div>

                <div className="w-full bg-[#080808] rounded-xl border border-white/5 p-8 flex flex-col justify-end shadow-2xl animate-fade-in">
                   <div key={activeIndex} className="animate-slide-up">
                      <div className="mb-6 opacity-70 text-primary">
                          {features[activeIndex].icon}
                      </div>
                      <h3 className="text-3xl text-white font-medium mb-4 tracking-tight leading-tight">
                        {features[activeIndex].cardTitle}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        {features[activeIndex].description}
                      </p>
                      <button 
                        onClick={() => onNavigate('product')}
                        className="bg-white text-black px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase transition-all hover:bg-gray-200 flex items-center w-fit group"
                      >
                        <span>Explore</span>
                        <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                </div>
             </div>

             {/* Box 2: Animation Visual (Larger, Full Height) */}
             <div className="col-span-7 w-full h-full rounded-2xl border border-dashed border-white/20 p-2 relative flex flex-col bg-background/50 backdrop-blur-sm">
                 {/* Decoration Corner Markers */}
                <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-white/40 rounded-tl-lg"></div>
                <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t border-r border-white/40 rounded-tr-lg"></div>
                <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b border-l border-white/40 rounded-bl-lg"></div>
                <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-white/40 rounded-br-lg"></div>

                <div className="w-full h-full bg-[#080808] rounded-xl border border-white/5 relative overflow-hidden shadow-2xl flex flex-col">
                  
                  {/* Status Bar / Header */}
                  <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 z-20 bg-[#080808]/80 backdrop-blur-md">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-white/10"></div>
                      <div className="w-3 h-3 rounded-full bg-white/10"></div>
                    </div>
                    <div className="text-xs font-mono text-primary/70 tracking-widest uppercase border-l border-white/10 pl-4">
                        {features[activeIndex].id}.mod
                    </div>
                  </div>

                  {/* Visual Content */}
                  <div className="flex-1 relative flex items-center justify-center p-8">
                    {/* Dotted Grid Background */}
                    <div className="absolute inset-0 opacity-10"
                      style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                    </div>

                    {/* Animated Content based on activeIndex */}
                    <div key={activeIndex} className="w-full h-full flex items-center justify-center">
                      
                      {/* 1. Isolated Environment */}
                      {activeIndex === 0 && (
                        <div className="relative w-full max-w-[320px] h-64 flex flex-col items-center justify-center">
                           <div className="absolute inset-0 border border-white/5 rounded-xl flex items-center justify-center">
                              <span className="absolute top-4 left-4 text-xs font-mono text-gray-600">HOST_SYSTEM</span>
                           </div>
                           <div 
                              className={`relative w-48 h-48 border-2 bg-black transition-all duration-700 rounded-xl flex items-center justify-center overflow-hidden
                              ${animStep >= 1 ? 'border-primary shadow-[0_0_30px_rgba(255,85,0,0.15)] opacity-100 scale-100' : 'border-gray-800 opacity-0 scale-90'}`}
                           >
                              <span className="absolute top-2 right-2 text-[10px] font-mono text-primary">SECURE_BOX</span>
                              {animStep === 3 && (
                                <div className="grid grid-cols-3 gap-2 w-full px-4 opacity-50">
                                   {[...Array(9)].map((_, i) => (
                                      <div key={i} className="h-1 bg-primary rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                                   ))}
                                </div>
                              )}
                           </div>
                        </div>
                      )}

                      {/* 2. Agent Store */}
                      {activeIndex === 1 && (
                        <div className="w-full max-w-[340px] flex flex-col items-center">
                           <div className="grid grid-cols-2 gap-4 w-full mb-4">
                              {[0, 1, 2, 3].map((i) => (
                                <div key={i} className={`h-24 border rounded-xl bg-white/5 flex flex-col items-center justify-center relative transition-all duration-500
                                  ${animStep >= 1 && i === 1 ? 'border-primary bg-primary/10 scale-105 shadow-lg' : 'border-white/10 opacity-50'}`}>
                                    <div className="w-8 h-8 rounded bg-white/10 mb-2"></div>
                                    <div className="w-12 h-1.5 bg-white/10 rounded"></div>
                                    {animStep >= 2 && i === 1 && (
                                      <div className="absolute bottom-2 left-3 right-3 h-1 bg-gray-700 rounded overflow-hidden">
                                        <div className={`h-full bg-primary transition-all duration-1000 ${animStep === 3 ? 'w-full' : 'w-2/3'}`}></div>
                                      </div>
                                    )}
                                </div>
                              ))}
                           </div>
                        </div>
                      )}

                      {/* 3. Session-Based Runtime */}
                      {activeIndex === 2 && (
                        <div className="w-full max-w-[320px] border border-white/10 bg-[#050505] rounded-xl overflow-hidden flex flex-col h-56 shadow-2xl relative">
                           <div className="bg-white/5 px-4 py-2 flex items-center space-x-2 border-b border-white/5">
                              <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                              <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                              <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                              <div className="ml-auto text-[10px] font-mono text-gray-500">TERM_SESSION_ID_492</div>
                           </div>
                           <div className="p-4 font-mono text-xs space-y-2 text-gray-300 relative z-10 leading-relaxed">
                              {animStep >= 1 && <div className="text-green-400 opacity-80">&gt; Initializing environment...</div>}
                              {animStep >= 2 && (
                                <>
                                  <div className="text-white opacity-60">&gt; Allocating resources...</div>
                                  <div className="text-white">&gt; Executing task.v2</div>
                                </>
                              )}
                              {animStep === 3 && (
                                <>
                                  <div className="text-blue-400 mt-2">&gt; Task Complete.</div>
                                  <div className="text-red-400 animate-pulse">&gt; TERMINATING SESSION...</div>
                                  <div className="text-gray-600">&gt; Cleanup done.</div>
                                </>
                              )}
                           </div>
                        </div>
                      )}

                      {/* 4. Session-Based Tokens */}
                      {activeIndex === 3 && (
                        <div className="w-full flex flex-col items-center space-y-6">
                           <div className="flex items-center space-x-6">
                               <div className={`w-16 h-16 border-2 rounded-xl flex items-center justify-center transition-all duration-500 bg-black z-10 ${animStep >= 1 ? 'border-primary shadow-[0_0_15px_rgba(255,85,0,0.3)]' : 'border-white/10'}`}>
                                 <span className="text-[10px] font-mono font-bold">TOKEN</span>
                               </div>
                               <div className="w-24 h-0.5 bg-white/10 relative">
                                  <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full transition-all duration-1000 ease-in-out shadow-[0_0_10px_rgba(255,85,0,0.8)]
                                    ${animStep === 0 ? 'opacity-0 left-0' : animStep === 1 ? 'opacity-100 left-0' : animStep === 2 ? 'opacity-100 left-full' : 'opacity-0 left-full'}`}></div>
                               </div>
                               <div className={`w-16 h-20 border-2 rounded-t-full rounded-b-lg flex items-center justify-center transition-all duration-500 bg-black z-10 ${animStep >= 2 ? 'border-primary' : 'border-gray-700'}`}>
                                  <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${animStep >= 2 ? 'bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.5)]' : 'bg-red-500'}`}></div>
                               </div>
                           </div>
                        </div>
                      )}

                      {/* 5. Permission-Based Actions */}
                      {activeIndex === 4 && (
                        <div className="w-full max-w-[280px] bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative p-6">
                              <div className="flex items-center space-x-4 mb-6">
                                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                                    <GlobeIcon className="w-5 h-5 text-gray-300" />
                                 </div>
                                 <div>
                                    <div className="text-xs font-bold text-white mb-0.5">External Network Request</div>
                                    <div className="text-[10px] text-gray-500 font-mono">192.168.1.1:8080</div>
                                 </div>
                              </div>
                              <div className="flex items-center justify-between bg-black/50 p-3 rounded-lg border border-white/5">
                                 <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Permission</span>
                                 <div className={`w-10 h-5 rounded-full relative transition-colors duration-500 cursor-default ${animStep >= 2 ? 'bg-green-500' : 'bg-gray-700'}`}>
                                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-500 shadow-sm ${animStep >= 2 ? 'left-5.5' : 'left-0.5'}`}></div>
                                 </div>
                              </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

             </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
