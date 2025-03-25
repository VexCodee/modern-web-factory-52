
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const { t } = useLanguage();
  
  const testimonials: TestimonialProps[] = [
    {
      quote: "VexVision's web design services helped us increase online sales by 40%. The service was professional, responsive, and delivered more than expected.",
      name: "Sarah Johnson",
      position: t("CEO"),
      company: "Retail Solutions Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "The AI solution implemented by VexVision revolutionized our customer service operations. We've seen amazing improvements in response time and customer satisfaction.",
      name: "Michael Chen",
      position: t("CTO"),
      company: "GlobalTech Enterprises",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "Their social media management strategies completely transformed our brand presence. We observed a 200% increase in engagement and a significant uptick in leads.",
      name: "Emily Rodriguez",
      position: t("Dyrektor Marketingu"),
      company: "Innovate Media",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    // Auto-slide
    timeoutRef.current = window.setTimeout(() => {
      nextSlide();
    }, 8000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
            {t('testimonials.title')}
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
            {t('testimonials.subtitle')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {t('testimonials.description')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-6">
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center">
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed italic">"{testimonial.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all z-10 md:-translate-x-6"
            onClick={prevSlide}
            disabled={isAnimating}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all z-10 md:translate-x-6"
            onClick={nextSlide}
            disabled={isAnimating}
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === current ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrent(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
