
import React, { useEffect, useRef } from 'react';

const AwardsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Awards and recognition items
  const awards = [
    {
      year: "2023",
      title: "Innovation Excellence Award",
      organization: "Tech Industry Association",
      description: "Recognition for breakthrough solutions in cloud technology"
    },
    {
      year: "2022",
      title: "Best IT Service Provider",
      organization: "Business Excellence Awards",
      description: "Awarded for exceptional IT outsourcing services and client satisfaction"
    },
    {
      year: "2021",
      title: "Digital Transformation Leader",
      organization: "Digital Enterprise Summit",
      description: "For successfully implementing transformative digital strategies"
    },
    {
      year: "2020",
      title: "Top 50 Tech Companies",
      organization: "Tech Innovators Magazine",
      description: "Named among the most innovative tech companies of the year"
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            entry.target.classList.remove('opacity-0', 'scale-95');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.award-item');
      items.forEach((item) => observer.observe(item));
    }
    
    return () => {
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll('.award-item');
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="text-center mb-16">
          <span className="text-sm rounded-full bg-purple-100 text-purple-700 px-4 py-1.5 font-medium">
            Excellence Recognized
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold">
            Our Awards & Recognition
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence and innovation has been recognized by industry leaders
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary to-primary/30 transform md:-translate-x-1/2"></div>
          
          {awards.map((award, index) => (
            <div 
              key={index} 
              className={`award-item flex flex-col md:flex-row mb-16 opacity-0 scale-95 transition-all duration-500 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-full md:w-1/2 mb-6 md:mb-0 md:px-10">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="text-xs font-semibold text-blue-600 tracking-wider mb-2">
                    {award.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{award.organization}</p>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 md:px-10 relative">
                <div className="relative md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 flex items-center justify-center md:justify-start">
                  <div className="w-8 h-8 rounded-full bg-primary shadow-lg flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
