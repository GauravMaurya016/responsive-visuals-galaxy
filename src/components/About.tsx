
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image with animated border */}
          <div className={cn(
            "relative rounded-lg overflow-hidden opacity-0 transform translate-x-10 transition-all duration-1000 ease-out",
            isVisible && "opacity-100 translate-x-0"
          )}>
            <div className="absolute inset-0 border-[3px] border-black rounded-lg transform -rotate-3 transition-transform duration-700 ease-in-out group-hover:rotate-0"></div>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-sm">Your Image Here</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <div className={cn(
              "overflow-hidden mb-6 opacity-0 transform translate-y-10 transition-all duration-700 ease-out delay-100",
              isVisible && "opacity-100 translate-y-0"
            )}>
              <div className="inline-block px-3 py-1 rounded-full bg-black/5 text-sm font-medium">
                About Me
              </div>
            </div>
            
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-6 opacity-0 transform translate-y-10 transition-all duration-700 ease-out delay-200",
              isVisible && "opacity-100 translate-y-0"
            )}>
              Passionate about creating <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">meaningful experiences</span>
            </h2>
            
            <div className={cn(
              "space-y-4 text-gray-600 opacity-0 transform translate-y-10 transition-all duration-700 ease-out delay-300",
              isVisible && "opacity-100 translate-y-0"
            )}>
              <p>
                I'm a creative developer and designer with a passion for building beautiful, functional, and accessible digital experiences. With a focus on clean code and thoughtful design, I strive to create work that is both visually appealing and technically robust.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving, allowing me to bridge the gap between design and development. I believe in creating work that not only looks great but also delivers real value to users.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, experimenting with creative coding, or seeking inspiration in art, nature, and the world around me.
              </p>
            </div>
            
            <div className={cn(
              "mt-8 opacity-0 transform translate-y-10 transition-all duration-700 ease-out delay-400",
              isVisible && "opacity-100 translate-y-0"
            )}>
              <a 
                href="#projects" 
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-sm font-medium transition-all hover:bg-gray-800 hover:shadow-lg"
              >
                View My Work
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
