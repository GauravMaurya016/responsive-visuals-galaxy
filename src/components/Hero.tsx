
import React, { useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import { cn } from '@/lib/utils';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none"> 
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-100 rounded-full opacity-40 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-100 rounded-full opacity-40 filter blur-3xl animate-float animate-delay-300"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div 
            className={cn(
              "mb-6 opacity-0 transition-all duration-1000",
              loaded && "opacity-100"
            )}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-black/5 text-sm font-medium mb-4">
              Creative Developer
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            <div className="overflow-hidden">
              <div className={cn(
                "transform transition-transform duration-1000 ease-out",
                loaded ? "translate-y-0" : "translate-y-full"
              )}>
                <AnimatedText 
                  text="Creating digital" 
                  as="span"
                  className="block"
                  delay={400}
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <div className={cn(
                "transform transition-transform duration-1000 ease-out",
                loaded ? "translate-y-0" : "translate-y-full"
              )}>
                <AnimatedText 
                  text="experiences that" 
                  as="span"
                  className="block"
                  delay={600}
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <div className={cn(
                "bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent transform transition-transform duration-1000 ease-out",
                loaded ? "translate-y-0" : "translate-y-full"
              )}>
                <AnimatedText 
                  text="matter." 
                  as="span"
                  className="block"
                  delay={800}
                />
              </div>
            </div>
          </h1>
          
          <p className={cn(
            "text-lg md:text-xl text-gray-600 max-w-2xl mb-8 opacity-0 transition-all duration-1000 delay-500",
            loaded && "opacity-100"
          )}>
            I design and build digital experiences with a focus on motion, interaction, and user experience that bring brands and products to life.
          </p>
          
          {/* Social Links */}
          <div className={cn(
            "flex items-center justify-center gap-4 mb-12 opacity-0 transition-all duration-1000 delay-700",
            loaded && "opacity-100"
          )}>
            <a 
              href="https://github.com/GauravMaurya016" 
              className="p-3 rounded-full border border-gray-200 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
              aria-label="Github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border border-gray-200 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="p-3 rounded-full border border-gray-200 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          {/* Scroll Down Indicator */}
          <a 
            href="#about" 
            className={cn(
              "absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 transition-all duration-1000 delay-1000",
              loaded && "opacity-100"
            )}
          >
            <span className="text-sm font-medium mb-2 text-gray-500">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
