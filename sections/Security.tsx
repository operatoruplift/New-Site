
import React, { useEffect, useState } from 'react';
import { ChevronRight } from '../components/Icons';

const Security: React.FC = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setTime(t => t + 0.02);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Reusable Tech Container Component for consistency
  const TechCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative p-2 rounded-2xl border border-dashed border-white/10 bg-white/[0.01] flex flex-col ${className}`}>
        {/* Corner Markers */}
        <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-white/30 rounded-tl-lg"></div>
        <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t border-r border-white/30 rounded-tr-lg"></div>
        <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b border-l border-white/30 rounded-bl-lg"></div>
        <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-white/30 rounded-br-lg"></div>
        
        {/* Inner Container */}
        <div className="flex-1 w-full bg-[#0c0c0c] rounded-xl border border-white/5 overflow-hidden flex flex-col relative group hover:border-white/10 transition-colors duration-500">
            {children}
        </div>
    </div>
  );

  return (
    <section id="security" className="w-full bg-background pb-24 px-6 md:px-12 flex justify-center flex-col items-center">
      
      {/* Futuristic Divider */}
      <div className="w-full max-w-[1600px] py-24 flex items-center justify-center">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-background flex items-center justify-center">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_8px_rgba(255,85,0,0.6)]"></div>
            </div>
        </div>
      </div>

      <div className="w-full max-w-[1600px] flex flex-col">
        
        {/* Header Section */}
        <div className="mb-20 max-w-4xl">
           <div className="flex items-center mb-6">
              <span className="w-2 h-2 rounded-full bg-primary mr-3 shadow-[0_0_8px_rgba(255,85,0,0.6)]"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">ENTERPRISE</span>
           </div>
           <h2 className="text-3xl md:text-5xl mb-6 text-white font-medium tracking-tight leading-[1.15]">
                Uplift delivers an enterprise-grade agentic infrastructure
           </h2>
           <h4 className="text-muted text-lg font-mono leading-relaxed">With isolated runtimes for maximum security, a unified interface that minimizes learning curve, and seamless integration of private AI agents for scalable automation.</h4>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1: Security (Isolated Sandboxes) */}
            <TechCard>
                <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
                    <div className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">SECURE AT EVERY LEVEL</div>
                    <h3 className="text-3xl text-white font-medium mb-4 tracking-tight leading-tight">Local-first security and full compliance</h3>
                    <p className="text-lg text-muted  leading-relaxed mb-8 max-w-lg">
                      Uplift runs agents in isolated sandboxes with encrypted local memory and token based access, ensuring your data never leaves your environment. Agents only receive approved context for a limited time, preventing oversharing and cloud leakage.
                    </p>
                    <a href="#" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors mt-auto">
                        Learn more about security <ChevronRight className="ml-1 w-3 h-3" />
                    </a>
                </div>

                {/* Visual: Concentric Rotating Shields/Vault */}
                <div className="h-64 w-full flex items-center justify-center relative bg-gradient-to-t from-black/50 to-transparent">
                    {/* Background Grid */}
                    <div className="absolute inset-0 opacity-10" 
                        style={{ 
                            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', 
                            backgroundSize: '20px 20px',
                            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                        }}>
                    </div>

                    <div className="relative w-64 h-64 flex items-center justify-center">
                        {/* Core */}
                        <div className="absolute w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center blur-sm animate-pulse"></div>
                        <div className="absolute w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,85,0,0.4)]">
                             <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                             </svg>
                        </div>

                        {/* Ring 1 - Rotating */}
                        <div 
                            className="absolute w-32 h-32 border border-primary/30 rounded-full"
                            style={{ transform: `rotate(${time * 20}deg)` }}
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                        </div>

                        {/* Ring 2 - Counter Rotating */}
                        <div 
                            className="absolute w-48 h-48 border border-white/10 rounded-full border-dashed"
                            style={{ transform: `rotate(${-time * 15}deg)` }}
                        >
                             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gray-600 rounded-full"></div>
                        </div>

                         {/* Ring 3 - Slow Rotating Shield Segments */}
                         <div 
                            className="absolute w-60 h-60 rounded-full"
                            style={{ transform: `rotate(${time * 5}deg)` }}
                        >
                             <div className="absolute inset-0 border-2 border-white/5 rounded-full"></div>
                             {/* Shield Segments */}
                             <svg className="absolute inset-0 w-full h-full text-white/5" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="60 30" />
                             </svg>
                        </div>
                    </div>
                </div>
            </TechCard>

            {/* Card 2: Stack (Vendor Agnostic) */}
            <TechCard>
                <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
                    <div className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">ACROSS YOUR DEVELOPMENT STACK</div>
                    <h3 className="text-3xl text-white font-medium mb-4 tracking-tight leading-tight">Independent of interfaces and external vendors</h3>
                    <p className="text-lg text-muted  leading-relaxed mb-8 max-w-lg">
                    Uplift integrates with any model provider, API or device. Deploy agents through one interface and evolve them without vendor lock-in, using shared memory, cross-device sync and modular extensions.
                    </p>
                    <a href="#" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-blue-400 transition-colors mt-auto">
                        Learn more about enterprise <ChevronRight className="ml-1 w-3 h-3" />
                    </a>
                </div>

                {/* Visual: Modular Connection Hub */}
                <div className="h-64 w-full flex items-center justify-center relative bg-gradient-to-t from-black/50 to-transparent">
                    
                    {/* Central Hub */}
                    <div className="relative z-20 flex flex-col items-center justify-center w-20 h-20 bg-blue-500/10 border border-blue-500/50 rounded-xl backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <div className="w-8 h-8 border-2 border-blue-500 rounded-md"></div>
                        <span className="text-[8px] font-mono text-blue-400 mt-2 tracking-widest">UPLIFT</span>
                    </div>

                    {/* Orbiting Satellites (Vendors/APIs) */}
                    {[0, 1, 2, 3, 4].map(i => {
                        const angle = (i * (360/5) + time * 10) * (Math.PI / 180);
                        const radius = 100;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;
                        
                        return (
                            <React.Fragment key={i}>
                                <svg className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none -translate-x-1/2 -translate-y-1/2 overflow-visible">
                                    <line 
                                        x1="0" y1="0" 
                                        x2={x} y2={y} 
                                        stroke="rgba(255,255,255,0.1)" 
                                        strokeWidth="1"
                                        strokeDasharray="4 4"
                                    />
                                    {/* Data Packet moving along line */}
                                    <circle r="2" fill="#60a5fa">
                                        <animateMotion 
                                            dur="3s" 
                                            repeatCount="indefinite"
                                            path={`M0,0 L${x},${y}`}
                                            begin={`${i * 0.5}s`}
                                        />
                                    </circle>
                                </svg>

                                <div 
                                    className="absolute w-12 h-12 bg-[#1a1a1a] border border-white/10 rounded-lg flex items-center justify-center shadow-lg transition-all duration-500"
                                    style={{ 
                                        transform: `translate(${x}px, ${y}px)`,
                                    }}
                                >
                                    {/* Icons representing different stack elements */}
                                    {i === 0 && <div className="w-4 h-4 rounded-full bg-green-500/50"></div>} {/* Model */}
                                    {i === 1 && <div className="w-4 h-4 border border-purple-500/50"></div>} {/* API */}
                                    {i === 2 && <div className="w-4 h-4 bg-orange-500/50 rotate-45"></div>} {/* Device */}
                                    {i === 3 && <div className="w-4 h-4 border-b-2 border-red-500/50 rounded-full"></div>} {/* DB */}
                                    {i === 4 && <div className="w-4 h-1 bg-white/50"></div>} {/* Interface */}
                                </div>
                            </React.Fragment>
                        );
                    })}

                    {/* Background Pulse Ring */}
                    <div className="absolute w-64 h-64 border border-blue-500/5 rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
                </div>
            </TechCard>

        </div>
      </div>
    </section>
  );
};

export default Security;
