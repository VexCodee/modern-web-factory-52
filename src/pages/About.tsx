
import React from 'react';
import Layout from '../components/Layout';
import { Shield, Users, Target, Award } from 'lucide-react';
import CTASection from '../components/CTASection';

const About = () => {
  const values = [
    {
      icon: <Shield size={24} className="text-primary" />,
      title: "Integrity",
      description: "We operate with transparency and honesty in all our interactions, building trust with our clients and partners."
    },
    {
      icon: <Users size={24} className="text-primary" />,
      title: "Collaboration",
      description: "We believe in working closely with our clients, fostering a partnership that leads to mutual success."
    },
    {
      icon: <Target size={24} className="text-primary" />,
      title: "Excellence",
      description: "We are committed to delivering the highest quality solutions and exceeding client expectations in everything we do."
    },
    {
      icon: <Award size={24} className="text-primary" />,
      title: "Innovation",
      description: "We continuously explore emerging technologies and creative approaches to solve complex business challenges."
    }
  ];

  const team = [
    {
      name: "Alexander Mitchell",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      bio: "With over 15 years of experience in IT and business management, Alex founded TechPrime with a vision to help businesses leverage technology for sustainable growth."
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      bio: "Sarah leads our technical strategy and development teams, bringing extensive expertise in software architecture, AI, and cloud technologies."
    },
    {
      name: "David Lee",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      bio: "David oversees all design projects, ensuring that our solutions not only function flawlessly but also provide exceptional user experiences."
    },
    {
      name: "Rebecca Torres",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      bio: "Rebecca develops and implements our marketing strategies, helping clients build strong brand identities and effective marketing campaigns."
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
              About Us
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              Our Story & Mission
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Learn about our journey, values, and the passionate team behind TechPrime's success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
                Our Story
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
                Building Digital Excellence Since 2010
              </h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <p>
                  TechPrime was founded with a clear vision: to help businesses harness the full potential of technology in a rapidly evolving digital landscape. What began as a small web development agency has grown into a comprehensive IT solutions provider serving clients across multiple industries.
                </p>
                <p>
                  Our journey has been marked by constant innovation, learning, and adaptation to emerging technologies and market needs. Through each phase of our growth, we've maintained our commitment to delivering exceptional value and building lasting relationships with our clients.
                </p>
                <p>
                  Today, we're proud to lead businesses through their digital transformation journeys, combining technical expertise with strategic thinking to create solutions that drive real business outcomes.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" 
                  alt="TechPrime office" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-5 -top-5 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -left-5 -bottom-5 w-32 h-32 bg-accent/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              Our Values
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
              What Drives Us
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Our core values shape our culture and guide every decision we make as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover-lift animate-fade-in" 
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              Our Team
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
              Meet the Experts
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Our diverse team of professionals brings together expertise across technology, design, and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover-lift animate-fade-in" 
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Clients Served" },
              { number: "450+", label: "Projects Completed" },
              { number: "35+", label: "Expert Team Members" },
              { number: "10+", label: "Years of Experience" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
