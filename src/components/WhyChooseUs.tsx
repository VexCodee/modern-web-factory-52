
import React from 'react';
import { Shield, Zap, Users, BarChart } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield size={24} className="text-primary" />,
      title: "Trusted Expertise",
      description: "With over 10 years of experience, we've built a reputation for reliable service and technical excellence."
    },
    {
      icon: <Zap size={24} className="text-primary" />,
      title: "Innovative Approach",
      description: "We stay at the forefront of technology trends to deliver cutting-edge solutions that drive real results."
    },
    {
      icon: <Users size={24} className="text-primary" />,
      title: "Dedicated Team",
      description: "Our skilled professionals are committed to understanding your unique needs and exceeding your expectations."
    },
    {
      icon: <BarChart size={24} className="text-primary" />,
      title: "Measurable Results",
      description: "We focus on delivering solutions that provide tangible business value and return on investment."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white -z-10"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full mix-blend-multiply blur-3xl -z-10 opacity-75"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-50 to-blue-50 rounded-full mix-blend-multiply blur-3xl -z-10 opacity-75"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              Why Choose Us
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              Your Strategic Partner in Technology Excellence
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              At TechPrime, we don't just provide IT services – we build lasting partnerships with our clients, understanding their business goals and delivering solutions that drive growth and efficiency.
            </p>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex animate-fade-in" 
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Team collaboration" 
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-slide-in-bottom" style={{ animationDelay: '600ms' }}>
                <div className="grid grid-cols-3 divide-x divide-gray-200">
                  <div className="px-4 text-center">
                    <div className="text-3xl font-bold text-primary">200+</div>
                    <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
                  </div>
                  <div className="px-4 text-center">
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
                  </div>
                  <div className="px-4 text-center">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-5 -top-5 w-24 h-24 bg-primary/10 rounded-full z-10 animate-float"></div>
            <div className="absolute -left-5 -bottom-5 w-20 h-20 bg-accent/10 rounded-full z-10 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
