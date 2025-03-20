import React, { useEffect, useRef } from 'react';
import { Zap, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
const InnovationShowcase = () => {
  const {
    t
  } = useLanguage();
  const showcaseRef = useRef<HTMLDivElement>(null);
  const features = [{
    title: "Wydajność",
    description: "Zoptymalizowane procesy",
    icon: <Zap className="h-8 w-8 text-indigo-600" />,
    delay: 100
  }, {
    title: "Innowacja",
    description: "Rozwiązania przyszłości",
    icon: <CheckCircle className="h-8 w-8 text-indigo-600" />,
    delay: 200
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, {
      threshold: 0.1
    });
    if (showcaseRef.current) {
      const elements = showcaseRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
    return () => {
      if (showcaseRef.current) {
        const elements = showcaseRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);
  return <section ref={showcaseRef} className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm rounded-full bg-indigo-100 text-indigo-700 px-4 py-1.5 font-medium animate-on-scroll opacity-0 dark:bg-indigo-900 dark:text-indigo-300">
            Innowacyjna Technologia
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-on-scroll opacity-0 dark:text-white" style={{
          animationDelay: '100ms'
        }}>
            Najnowsze Rozwiązania Technologiczne
          </h2>
          <p className="mt-4 text-lg text-gray-600 animate-on-scroll opacity-0 dark:text-gray-300" style={{
          animationDelay: '200ms'
        }}>
            Rozwiązania, które zmieniają sposób funkcjonowania biznesu
          </p>
        </div>

        <div className="relative mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-on-scroll opacity-0" style={{
              animationDelay: '300ms'
            }}>
                <img alt="Innovative Technology" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" />

                {/* Floating elements */}
                {features.map((feature, index) => <div key={index} className={`absolute bg-white rounded-xl p-4 shadow-lg animate-on-scroll opacity-0 flex items-center space-x-3 dark:bg-gray-800 dark:text-white`} style={{
                animationDelay: `${600 + index * 200}ms`,
                [index === 0 ? 'top' : 'bottom']: '15%',
                [index === 0 ? 'left' : 'right']: '5%'
              }}>
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 dark:bg-indigo-900">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="space-y-8">
                <div className="animate-on-scroll opacity-0" style={{
                animationDelay: '400ms'
              }}>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">Technologia, Która Wspiera Twój Biznes</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nasze innowacyjne rozwiązania są projektowane z myślą o przyspieszeniu wzrostu Twojej firmy i optymalizacji procesów biznesowych. Wykorzystując najnowsze technologie, pomagamy Ci osiągnąć przewagę konkurencyjną.
                  </p>
                </div>
                
                <ul className="space-y-4">
                  {["Zautomatyzowane procesy biznesowe", "Inteligentne rozwiązania oparte na AI", "Skalowalna infrastruktura w chmurze", "Zabezpieczenia na poziomie korporacyjnym"].map((item, index) => <li key={index} className="flex items-start animate-on-scroll opacity-0 dark:text-white" style={{
                  animationDelay: `${600 + index * 100}ms`
                }}>
                      <div className="mr-3 mt-1">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900 dark:text-green-300">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <span>{item}</span>
                    </li>)}
                </ul>

                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium inline-flex items-center transition-all animate-on-scroll opacity-0 dark:bg-indigo-700 dark:hover:bg-indigo-600" style={{
                animationDelay: '1000ms'
              }}>
                  Odkryj Nasze Rozwiązania
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default InnovationShowcase;