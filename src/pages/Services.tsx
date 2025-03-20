
import React from 'react';
import Layout from '../components/Layout';
import { ArrowRight, UserPlus, Globe, Palette, Wrench, Bot, BarChart3, Share2, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';

const ServicePage = () => {
  const services = [
    {
      icon: <UserPlus size={24} />,
      title: "IT Outsourcing",
      description: "Leverage our expertise to handle your IT operations, allowing you to focus on your core business activities. We provide dedicated teams, project-based services, and managed IT solutions tailored to your specific needs.",
      benefits: ["Cost reduction", "Access to specialized expertise", "Scalable resources", "Focus on core business"],
      delay: 100
    },
    {
      icon: <Globe size={24} />,
      title: "Web Development",
      description: "From responsive websites to complex web applications and e-commerce platforms, we deliver custom web solutions that align with your business objectives and provide exceptional user experiences.",
      benefits: ["Responsive design", "SEO optimization", "Secure transactions", "Custom functionalities"],
      delay: 200
    },
    {
      icon: <Palette size={24} />,
      title: "Graphic Design",
      description: "Our creative team develops visually stunning designs that strengthen your brand identity and effectively communicate your message across all digital and print media.",
      benefits: ["Brand consistency", "User-centric design", "Creative concepts", "Multi-platform assets"],
      delay: 300
    },
    {
      icon: <Wrench size={24} />,
      title: "Hardware Repair",
      description: "Fast and reliable diagnosis and repair services for all your IT equipment. We minimize downtime and ensure your hardware operates at optimal performance levels.",
      benefits: ["Quick turnaround", "Certified technicians", "Quality replacement parts", "Preventive maintenance"],
      delay: 400
    },
    {
      icon: <Bot size={24} />,
      title: "AI Solutions",
      description: "Harness the power of artificial intelligence to automate processes, gain insights from your data, and create intelligent systems that learn and adapt to your business environment.",
      benefits: ["Process automation", "Predictive analytics", "Natural language processing", "Machine learning integration"],
      delay: 500
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Marketing",
      description: "Strategic digital marketing campaigns that drive traffic, generate leads, and increase conversion rates. We combine creativity with data-driven approaches to maximize your ROI.",
      benefits: ["Targeted campaigns", "Performance tracking", "Content strategy", "Conversion optimization"],
      delay: 600
    },
    {
      icon: <Share2 size={24} />,
      title: "Social Media Management",
      description: "Comprehensive social media strategies to build your brand presence, engage your audience, and drive business growth through effective content and community management.",
      benefits: ["Content calendar", "Community engagement", "Platform optimization", "Performance analytics"],
      delay: 700
    },
    {
      icon: <ClipboardList size={24} />,
      title: "Project Management",
      description: "Expert planning, execution, and oversight of your technology projects, ensuring they're delivered on time, within budget, and to the highest quality standards.",
      benefits: ["Clear communication", "Risk management", "Resource optimization", "Quality assurance"],
      delay: 800
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              Our Services
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              Comprehensive IT Solutions for Modern Businesses
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              From web development to AI integration, we offer a full spectrum of technology services to help your business thrive in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md animate-fade-in" 
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <div className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <h4 className="font-medium text-lg mb-3">Key Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              Our Process
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
              How We Deliver Excellence
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Our structured approach ensures that every project is completed efficiently and meets the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We begin by understanding your business objectives, challenges, and requirements in detail.",
                delay: 300
              },
              {
                number: "02",
                title: "Planning",
                description: "Our team creates a comprehensive strategy and project roadmap with clear deliverables and timelines.",
                delay: 400
              },
              {
                number: "03",
                title: "Execution",
                description: "We implement the solution using best practices and cutting-edge technologies, with regular progress updates.",
                delay: 500
              },
              {
                number: "04",
                title: "Support",
                description: "After launch, we provide ongoing maintenance and support to ensure optimal performance.",
                delay: 600
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in" 
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicePage;
