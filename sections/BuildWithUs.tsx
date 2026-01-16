
import React from 'react';
import { ChevronRight } from '../components/Icons';

const BuildWithUs: React.FC = () => {
  return (
    <section className="w-full bg-background pb-24 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-[1200px] bg-[#f2f2f2] rounded-3xl p-8 md:p-16 relative overflow-hidden group">
        
        {/* Header Content */}
        <div className="flex justify-between items-start mb-24 md:mb-48 relative z-10">
           <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">BUILD WITH US</span>
           </div>
           
           <div className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase hidden md:block">
              START BUILDING
           </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
            <div className="mb-6">
                <svg className="w-12 h-12 text-black mb-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            
            <h2 className="text-4xl md:text-6xl text-black font-medium tracking-tight mb-8 max-w-2xl leading-[1.1]">
                Ready to build the software of the future?
            </h2>

            <a 
              href="https://help.operatoruplift.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center bg-[#1a1a1a] text-white px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-primary transition-colors duration-300"
            >
                Start Building <ChevronRight className="ml-2 w-3 h-3" />
            </a>
        </div>

        {/* Hover Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default BuildWithUs;
