
import React, { useEffect, ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const element = document.querySelector(anchor.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
            behavior: 'smooth'
          });
          
          // Update URL without reload
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    // Add event listener to document
    document.addEventListener('click', handleAnchorClick);
    
    // Observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all elements with animation-trigger class
    document.querySelectorAll('.animation-trigger').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.querySelectorAll('.animation-trigger').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
