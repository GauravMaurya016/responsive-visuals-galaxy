
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      description: "A full-featured e-commerce platform with seamless checkout flow and product management.",
      tags: ["React", "Node.js", "Stripe", "Tailwind"],
      image: "bg-gradient-to-br from-blue-400 to-indigo-600",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Real-time analytics dashboard for monitoring business metrics and performance.",
      tags: ["Next.js", "TypeScript", "D3.js", "Firebase"],
      image: "bg-gradient-to-br from-emerald-400 to-teal-600",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Content Management System",
      description: "Customizable CMS built for content creators with powerful editing features.",
      tags: ["Vue.js", "Express", "MongoDB", "TailwindCSS"],
      image: "bg-gradient-to-br from-amber-400 to-orange-600",
      github: "#",
      demo: "#"
    }
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
      id="projects" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decor */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={cn(
            "inline-block px-3 py-1 rounded-full bg-black/5 text-sm font-medium mb-4 opacity-0 transform translate-y-8 transition-all duration-700 ease-out",
            isVisible && "opacity-100 translate-y-0"
          )}>
            My Projects
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-100",
            isVisible && "opacity-100 translate-y-0"
          )}>
            Selected <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Works</span>
          </h2>
          
          <p className={cn(
            "text-lg text-gray-600 opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-200",
            isVisible && "opacity-100 translate-y-0"
          )}>
            A curated selection of my recent projects and creative experiments, showcasing my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 opacity-0 transform translate-y-12 transition-all duration-700 ease-out",
                isVisible && "opacity-100 translate-y-0",
                {
                  'delay-300': index === 0,
                  'delay-400': index === 1,
                  'delay-500': index === 2,
                }
              )}
            >
              {/* Project Image */}
              <div className={cn(
                "aspect-video w-full", 
                project.image
              )}>
                <div className="flex items-center justify-center h-full text-white">
                  <span className="opacity-0">Image Placeholder</span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                      aria-label="GitHub Repository"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                      aria-label="Live Demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className={cn(
              "inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-sm font-medium transition-all hover:bg-black hover:text-white hover:border-black opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-600",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            View All Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
