
import React, { useEffect, useState } from 'react';
import { 
  WhatsAppIcon, 
  MailIcon, 
  CalendarIcon, 
  TwitterIcon, 
  DiscordIcon, 
  LinkedInIcon,
  ArrowUpRightIcon
} from '../components/Icons';

interface ContactOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const contactOptions: ContactOption[] = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      description: 'Chat with us instantly',
      icon: <WhatsAppIcon className="w-6 h-6" />,
      url: 'https://wa.me/18049311722'
    },
    {
      id: 'email',
      title: 'Email',
      description: 'dhruv@operatoruplift.com',
      icon: <MailIcon className="w-6 h-6" />,
      url: 'mailto:dhruv@operatoruplift.com'
    },
    {
      id: 'meeting',
      title: 'Book a Meeting',
      description: 'Schedule a video call',
      icon: <CalendarIcon className="w-6 h-6" />,
      url: 'https://calendly.com/dhruv-helloaven/30min'
    },
    {
      id: 'twitter',
      title: 'X (Twitter)',
      description: 'Follow and DM us',
      icon: <TwitterIcon className="w-6 h-6" />,
      url: 'https://x.com/OperatorUplift'
    },
    {
      id: 'discord',
      title: 'Discord',
      description: 'Join our community',
      icon: <DiscordIcon className="w-6 h-6" />,
      url: 'https://discord.gg/duvYhkW5'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      description: 'Connect professionally',
      icon: <LinkedInIcon className="w-6 h-6" />,
      url: 'https://www.linkedin.com/company/operatoruplift'
    }
  ];

  // Reusable Tech Container
  const TechContact = ({ option, children }: { option: ContactOption; children: React.ReactNode }) => (
    <div className="relative p-2 rounded-2xl border border-dashed border-white/10 bg-white/[0.01] flex flex-col group h-full">
         <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-white/30 rounded-tl-lg transition-colors group-hover:border-primary/50"></div>
         <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t border-r border-white/30 rounded-tr-lg transition-colors group-hover:border-primary/50"></div>
         <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b border-l border-white/30 rounded-bl-lg transition-colors group-hover:border-primary/50"></div>
         <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-white/30 rounded-br-lg transition-colors group-hover:border-primary/50"></div>
         
         <a
              href={option.url}
              target="_blank"
              rel="noreferrer"
              className="flex-1 w-full bg-[#0c0c0c] rounded-xl border border-white/5 overflow-hidden flex items-start p-6 relative hover:bg-white/[0.02] transition-all duration-300"
            >
             {children}
        </a>
    </div>
  );

  return (
    <section className="w-full min-h-screen bg-background pt-32 pb-24 px-6 md:px-12 flex flex-col items-center selection:bg-primary/30 selection:text-white overflow-hidden">
      
      {/* Main Content - Fades in */}
      <div 
        className={`w-full max-w-[1200px] flex flex-col items-center transition-all duration-1000 delay-100 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-2xl">
          <div className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
            GET IN TOUCH
          </div>
          
          <h1 className="text-5xl md:text-7xl text-white font-medium tracking-tight mb-8">
            Let's Connect
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed">
            We know no one likes to fill forms, so just choose your way of communication and we'll come there, and if you're looking for job follow us on{' '}
            <a 
              href="https://wellfound.com/company/uplift-os" 
              target="_blank" 
              rel="noreferrer"
              className="text-primary hover:underline underline-offset-4 decoration-primary/50 transition-colors hover:text-white"
            >
              Wellfound
            </a>
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {contactOptions.map((option) => (
            <TechContact key={option.id} option={option}>
               {/* Icon */}
              <div className="mt-1 mr-5 text-gray-300 group-hover:text-primary transition-colors duration-300">
                {option.icon}
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-medium text-white group-hover:text-primary transition-colors duration-300">
                    {option.title}
                  </h3>
                  <ArrowUpRightIcon className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300" />
                </div>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors font-mono">
                  {option.description}
                </p>
              </div>
            </TechContact>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
