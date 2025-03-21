
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const skills: Skill[] = [
    {
      category: "Frontend",
      items: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "RestAPI s", level: 70 },
      ]
    },
    {
      category: "Design",
      items: [
        { name: "Figma", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "GSAP/Animation", level: 80 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
  ];
  
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
      id="skills" 
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-50 rounded-full opacity-60 filter blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-50 rounded-full opacity-60 filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={cn(
            "inline-block px-3 py-1 rounded-full bg-black/5 text-sm font-medium mb-4 opacity-0 transform translate-y-8 transition-all duration-700 ease-out",
            isVisible && "opacity-100 translate-y-0"
          )}>
            My Expertise
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-100",
            isVisible && "opacity-100 translate-y-0"
          )}>
            Skills & <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          
          <p className={cn(
            "text-lg text-gray-600 opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-200",
            isVisible && "opacity-100 translate-y-0"
          )}>
            I specialize in modern web technologies and continuously expand my skillset to deliver exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={skillGroup.category}
              className={cn(
                "bg-white rounded-xl p-6 border border-gray-100 shadow-sm opacity-0 transform translate-y-12 transition-all duration-700 ease-out",
                isVisible && "opacity-100 translate-y-0",
                {
                  'delay-300': groupIndex === 0,
                  'delay-400': groupIndex === 1,
                  'delay-500': groupIndex === 2,
                }
              )}
            >
              <h3 className="text-xl font-bold mb-6 text-center">{skillGroup.category}</h3>
              
              <div className="space-y-5">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full transition-all duration-1000 ease-out transform scale-x-0 origin-left",
                          isVisible && "scale-x-100",
                          {
                            'bg-blue-500': groupIndex === 0,
                            'bg-violet-500': groupIndex === 1,
                            'bg-emerald-500': groupIndex === 2,
                          }
                        )}
                        style={{ width: `${skill.level}%`, transitionDelay: `${300 + index * 100}ms` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "mt-16 p-8 bg-gray-50 rounded-xl border border-gray-100 opacity-0 transform translate-y-12 transition-all duration-700 ease-out delay-600",
          isVisible && "opacity-100 translate-y-0"
        )}>
          <h3 className="text-xl font-bold mb-6 text-center">Additional Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git/GitHub", "Responsive Design", "SEO", "Performance Optimization", 
              "Accessibility",  "User Testing",
              "Testing Library", "Storybook", "Webpack", "Vite"
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-white rounded-full text-sm border border-gray-200 hover:border-blue-400 hover:shadow-sm transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
