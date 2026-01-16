
import React from 'react';
import { Logo } from './Icons';

interface FooterProps {
  onNavigate: (page: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, action: () => void) => {
    e.preventDefault();
    action();
  };

  const scrollToSection = (id: string) => {
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="w-full bg-background pb-12 px-6 md:px-12 flex flex-col items-center">
      
      {/* Futuristic Divider */}
      <div className="w-full max-w-[1600px] py-12 flex items-center justify-center opacity-30">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Tech Container Wrapper */}
      <div className="relative w-full max-w-[1600px] p-2 rounded-[32px] border border-dashed border-white/10 bg-white/[0.01]">
         
         {/* Corner Markers */}
        <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t border-l border-white/20 rounded-tl-2xl"></div>
        <div className="absolute -top-[1px] -right-[1px] w-6 h-6 border-t border-r border-white/20 rounded-tr-2xl"></div>
        <div className="absolute -bottom-[1px] -left-[1px] w-6 h-6 border-b border-l border-white/20 rounded-bl-2xl"></div>
        <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-b border-r border-white/20 rounded-br-2xl"></div>

        {/* Footer Content */}
        <div className="w-full bg-[#0c0c0c] rounded-[24px] border border-white/5 p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col min-h-[400px]">
          
          {/* Top Label */}
          <div className="flex items-center mb-12">
            <span className="w-3 h-3 rounded-full bg-primary mr-4 shadow-[0_0_8px_rgba(255,85,0,0.6)]"></span>
            <span className="text-base font-bold tracking-[0.2em] text-gray-400 uppercase">FOOTER</span>
          </div>

          {/* Content Grid */}
          <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
            
            {/* Brand/Logo Column */}
            <div className="lg:col-span-6 flex flex-col justify-end">
              <div className="mt-auto">
                <Logo className="w-16 h-16 md:w-20 md:h-20 text-white cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>

            {/* Links Column */}
            <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              
              {/* Resources */}
              <div className="flex flex-col space-y-4">
                <h4 className="text-white font-medium text-lg mb-2">Resources</h4>
                <a 
                  href="https://help.operatoruplift.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-500 hover:text-white transition-colors text-base"
                >
                  Docs
                </a>
                <a 
                  href="#" 
                  onClick={(e) => handleLinkClick(e, () => onNavigate('contact'))} 
                  className="text-gray-500 hover:text-white transition-colors text-base"
                >
                  Contact Sales
                </a>
              </div>

              {/* Company */}
              <div className="flex flex-col space-y-4">
                <h4 className="text-white font-medium text-lg mb-2">Company</h4>
                <a 
                  href="https://wellfound.com/company/uplift-os" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-500 hover:text-white transition-colors text-base"
                >
                  Careers
                </a>
                <a 
                  href="#security" 
                  onClick={(e) => handleLinkClick(e, () => scrollToSection('security'))} 
                  className="text-gray-500 hover:text-white transition-colors text-base"
                >
                  Enterprise
                </a>
              </div>

              {/* Legal */}
              <div className="flex flex-col space-y-4">
                <h4 className="text-white font-medium text-lg mb-2">Legal</h4>
                <a 
                  href="#" 
                  onClick={(e) => handleLinkClick(e, () => onNavigate('privacy'))}
                  className="text-gray-500 hover:text-white transition-colors text-base"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  onClick={(e) => handleLinkClick(e, () => onNavigate('terms'))}
                  className="text-gray-500 hover:text-white transition-colors text-base"
                >
                  Terms of Service
                </a>
              </div>

              {/* Socials & Copyright Row */}
              <div className="col-span-2 md:col-span-3 mt-12 flex flex-col md:flex-row md:items-end justify-end gap-8 border-t border-white/5 pt-8">
                <div className="flex flex-col md:items-end space-y-4">
                   <div className="flex items-center space-x-8">
                      <a href="https://x.com/OperatorUplift" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group">
                         <span className="text-base font-bold">X (Twitter)</span>
                      </a>
                      <a href="https://www.linkedin.com/company/operatoruplift" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group">
                         <span className="text-base font-bold">LinkedIn</span>
                      </a>
                      <a href="https://github.com/uplift-labs" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group">
                         <span className="text-base font-bold">GitHub</span>
                      </a>
                   </div>
                   <p className="text-gray-600 text-base font-mono">
                      @Factory 2025. All rights reserved.
                   </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
