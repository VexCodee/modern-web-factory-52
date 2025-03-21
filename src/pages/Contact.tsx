
import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Send, Check, ArrowRight, Clock, ArrowUpRight, LayoutGrid, Image, Smartphone, Globe, Calendar, Users, CheckCircle, Github, Twitter, Linkedin, Facebook, MessagesSquare, Building, ShieldCheck, Languages } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Contact = () => {
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'default'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");
  const [animatedElements, setAnimatedElements] = useState([]);
  const pageRef = useRef(null);
  
  useEffect(() => {
    if (pageRef.current) {
      const elementsToAnimate = pageRef.current.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      }, { threshold: 0.1 });
      
      elementsToAnimate.forEach((el) => {
        observer.observe(el);
      });
      
      return () => {
        elementsToAnimate.forEach((el) => {
          observer.unobserve(el);
        });
      };
    }
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success(t('contact.form.success'));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: 'default'
      });
      
      // Reset success state after a delay
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  // Office information
  const officeInfo = {
    city: language === 'pl' ? 'Warszawa' : language === 'de' ? 'Warschau' : 'Warsaw',
    address: 'ul. Biznesowa 123, 00-001',
    phone: '+48 22 123 45 67',
    email: 'info@techprime.com',
    hours: language === 'pl' ? 'Pon-Pt: 9:00-17:00' : language === 'de' ? 'Mo-Fr: 9:00-17:00' : 'Mon-Fri: 9:00-17:00',
  };

  // Countries where we operate
  const operatingCountries = [
    { 
      name: language === 'pl' ? 'Polska' : language === 'de' ? 'Deutschland' : 'Poland',
      code: 'PL',
      primary: true,
      flag: "🇵🇱"
    },
    { 
      name: language === 'pl' ? 'Niemcy' : language === 'de' ? 'Deutschland' : 'Germany',
      code: 'DE',
      flag: "🇩🇪"
    },
    { 
      name: language === 'pl' ? 'Wielka Brytania' : language === 'de' ? 'Großbritannien' : 'United Kingdom',
      code: 'GB',
      flag: "🇬🇧"
    },
    { 
      name: language === 'pl' ? 'Francja' : language === 'de' ? 'Frankreich' : 'France',
      code: 'FR',
      flag: "🇫🇷"
    },
    { 
      name: language === 'pl' ? 'Stany Zjednoczone' : language === 'de' ? 'Vereinigte Staaten' : 'United States',
      code: 'US',
      flag: "🇺🇸"
    },
    { 
      name: language === 'pl' ? 'Szwecja' : language === 'de' ? 'Schweden' : 'Sweden',
      code: 'SE',
      flag: "🇸🇪"
    }
  ];

  // Office locations
  const locations = [
    {
      city: 'Warsaw',
      address: 'ul. Biznesowa 123, 00-001',
      phone: '+48 22 123 45 67',
      email: 'warsaw@techprime.com',
      type: 'HQ',
      country: 'Poland',
      coordinates: {
        lat: 52.2297,
        lng: 21.0122
      }
    },
    {
      city: 'Berlin',
      address: 'Technologiestraße 15, 10115',
      phone: '+49 30 123 45 67',
      email: 'berlin@techprime.com',
      type: 'Branch',
      country: 'Germany',
      coordinates: {
        lat: 52.5200,
        lng: 13.4050
      }
    },
    {
      city: 'London',
      address: '123 Tech Park, EC1A 1BB',
      phone: '+44 20 1234 5678',
      email: 'london@techprime.com',
      type: 'Branch',
      country: 'United Kingdom',
      coordinates: {
        lat: 51.5074,
        lng: -0.1278
      }
    }
  ];

  // Team members
  const teamContacts = [
    {
      name: 'Alex Johnson',
      position: language === 'pl' ? 'Dyrektor ds. sprzedaży' : language === 'de' ? 'Vertriebsleiter' : 'Sales Director',
      email: 'alex@techprime.com',
      phone: '+48 22 123 45 67',
      avatar: '👤',
      department: 'Sales'
    },
    {
      name: 'Maria Rodriguez',
      position: language === 'pl' ? 'Dyrektor ds. technicznych' : language === 'de' ? 'Technischer Direktor' : 'Technical Director',
      email: 'maria@techprime.com',
      phone: '+48 22 123 45 68',
      avatar: '👤',
      department: 'Technology'
    },
    {
      name: 'Jan Kowalski',
      position: language === 'pl' ? 'Kierownik wsparcia klienta' : language === 'de' ? 'Kundensupport-Manager' : 'Customer Support Manager',
      email: 'jan@techprime.com',
      phone: '+48 22 123 45 69',
      avatar: '👤',
      department: 'Support'
    }
  ];

  return (
    <Layout>
      <div ref={pageRef} className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
            <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500 mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-500 mix-blend-overlay filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Subtle particles */}
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white/20"
                style={{
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  opacity: Math.random() * 0.5 + 0.2
                }}
              ></div>
            ))}
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-screen-xl mx-auto">
              {/* Animated subtitle */}
              <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500" style={{transitionDelay: '100ms'}}>
                <div className="inline-flex items-center rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-1.5 mb-6">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="text-white/90 font-medium tracking-wide text-sm">
                    {language === 'pl' ? 'Jesteśmy tutaj, aby pomóc' : 
                     language === 'de' ? 'Wir sind hier, um zu helfen' : 
                     'We\'re here to help'}
                  </span>
                </div>
              </div>
              
              {/* Main title */}
              <h1 className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight" style={{transitionDelay: '200ms'}}>
                {language === 'pl' ? 'Porozmawiajmy o ' : 
                 language === 'de' ? 'Sprechen wir über ' : 
                 'Let\'s talk about '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  {language === 'pl' ? 'Twojej wizji' : 
                   language === 'de' ? 'Ihre Vision' : 
                   'your vision'}
                </span>
              </h1>
              
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left column - content */}
                <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500" style={{transitionDelay: '300ms'}}>
                  <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
                    {language === 'pl' 
                      ? 'Jesteśmy zespołem pełnym pasji, gotowym do współpracy nad Twoim kolejnym projektem. Niezależnie od tego, czy masz pytania, potrzebujesz wsparcia, czy chcesz rozpocząć nową współpracę — jesteśmy tutaj dla Ciebie.' 
                      : language === 'de' 
                        ? 'Wir sind ein leidenschaftliches Team, das bereit ist, an Ihrem nächsten Projekt zusammenzuarbeiten. Egal, ob Sie Fragen haben, Unterstützung benötigen oder eine neue Zusammenarbeit beginnen möchten – wir sind für Sie da.'
                        : 'We\'re a passionate team ready to collaborate on your next project. Whether you have questions, need support, or want to start a new partnership — we\'re here for you.'}
                  </p>
                  
                  {/* Contact cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <Card className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 transition-all group overflow-hidden">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                          <Mail size={18} />
                        </div>
                        <div>
                          <p className="text-white/60 text-xs">Email</p>
                          <a href="mailto:info@techprime.com" className="text-white group-hover:text-blue-300 transition-colors font-medium text-sm">
                            info@techprime.com
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 transition-all group overflow-hidden">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="text-white/60 text-xs">Phone</p>
                          <a href="tel:+48221234567" className="text-white group-hover:text-indigo-300 transition-colors font-medium text-sm">
                            +48 22 123 45 67
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 transition-all group overflow-hidden">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                          <MapPin size={18} />
                        </div>
                        <div>
                          <p className="text-white/60 text-xs">Location</p>
                          <span className="text-white group-hover:text-violet-300 transition-colors font-medium text-sm">
                            Warsaw, Poland
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Social links */}
                  <div className="flex gap-4 mb-8">
                    <a href="#" className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110">
                      <Github size={18} />
                    </a>
                  </div>
                  
                  {/* Business hours */}
                  <div className="flex items-center gap-2 text-white/70 mb-12">
                    <Clock size={16} className="text-blue-400" />
                    <span>
                      {language === 'pl' 
                        ? 'Godziny pracy: Pon-Pt 9:00-17:00' 
                        : language === 'de' 
                          ? 'Öffnungszeiten: Mo-Fr 9:00-17:00' 
                          : 'Business hours: Mon-Fri 9:00-17:00'}
                    </span>
                  </div>
                </div>
                
                {/* Right column - tabbed card */}
                <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500" style={{transitionDelay: '400ms'}}>
                  <Card className="bg-white/10 border border-white/20 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
                    <CardHeader className="pb-2">
                      <Tabs defaultValue="contact" value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="w-full bg-white/10 p-1">
                          <TabsTrigger 
                            value="contact" 
                            className="data-[state=active]:bg-white/20 text-white data-[state=active]:text-white"
                          >
                            {language === 'pl' ? 'Formularz' : language === 'de' ? 'Formular' : 'Contact Form'}
                          </TabsTrigger>
                          <TabsTrigger 
                            value="locations" 
                            className="data-[state=active]:bg-white/20 text-white data-[state=active]:text-white"
                          >
                            {language === 'pl' ? 'Biura' : language === 'de' ? 'Büros' : 'Locations'}
                          </TabsTrigger>
                          <TabsTrigger 
                            value="team" 
                            className="data-[state=active]:bg-white/20 text-white data-[state=active]:text-white"
                          >
                            {language === 'pl' ? 'Zespół' : language === 'de' ? 'Team' : 'Team'}
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="contact" className="px-1 py-3">
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                                  {language === 'pl' ? 'Imię i nazwisko' : 
                                   language === 'de' ? 'Name' : 
                                   'Full name'}
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-white/50"
                                  placeholder={language === 'pl' ? 'Jan Kowalski' : 
                                              language === 'de' ? 'Max Mustermann' : 
                                              'John Doe'}
                                />
                              </div>
                              
                              <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                                  {language === 'pl' ? 'Adres email' : 
                                   language === 'de' ? 'E-Mail-Adresse' : 
                                   'Email address'}
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-white/50"
                                  placeholder="you@example.com"
                                />
                              </div>
                            </div>
                            
                            <div>
                              <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-1">
                                {language === 'pl' ? 'Usługa' : 
                                 language === 'de' ? 'Dienstleistung' : 
                                 'Service'}
                              </label>
                              <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              >
                                <option value="default" disabled className="bg-gray-900">
                                  {language === 'pl' ? 'Wybierz usługę' : 
                                   language === 'de' ? 'Dienstleistung auswählen' : 
                                   'Select a service'}
                                </option>
                                <option value="outsourcing" className="bg-gray-900">
                                  {language === 'pl' ? 'IT Outsourcing' : 
                                   language === 'de' ? 'IT-Outsourcing' : 
                                   'IT Outsourcing'}
                                </option>
                                <option value="webdev" className="bg-gray-900">
                                  {language === 'pl' ? 'Tworzenie stron WWW' : 
                                   language === 'de' ? 'Webentwicklung' : 
                                   'Web Development'}
                                </option>
                                <option value="design" className="bg-gray-900">
                                  {language === 'pl' ? 'Projektowanie graficzne' : 
                                   language === 'de' ? 'Grafikdesign' : 
                                   'Graphic Design'}
                                </option>
                                <option value="ai" className="bg-gray-900">
                                  {language === 'pl' ? 'Rozwiązania AI' : 
                                   language === 'de' ? 'KI-Lösungen' : 
                                   'AI Solutions'}
                                </option>
                              </select>
                            </div>
                            
                            <div>
                              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                                {language === 'pl' ? 'Wiadomość' : 
                                 language === 'de' ? 'Nachricht' : 
                                 'Message'}
                              </label>
                              <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-white/50"
                                placeholder={language === 'pl' ? 'Szczegóły Twojego zapytania...' : 
                                            language === 'de' ? 'Details Ihrer Anfrage...' : 
                                            'Details of your inquiry...'}
                              ></textarea>
                            </div>
                            
                            <div>
                              <Button
                                type="submit"
                                disabled={isSubmitting || isSubmitted}
                                className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
                                  isSubmitting ? 'opacity-80' : ''
                                } ${isSubmitted ? 'bg-green-500 hover:bg-green-500' : ''}`}
                              >
                                {isSubmitting ? (
                                  <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    {language === 'pl' ? 'Wysyłanie...' : 
                                     language === 'de' ? 'Wird gesendet...' : 
                                     'Sending...'}
                                  </span>
                                ) : isSubmitted ? (
                                  <span className="flex items-center">
                                    <Check size={18} className="mr-2" />
                                    {language === 'pl' ? 'Wysłano!' : 
                                     language === 'de' ? 'Gesendet!' : 
                                     'Sent!'}
                                  </span>
                                ) : (
                                  <span className="flex items-center">
                                    <Send size={18} className="mr-2" />
                                    {language === 'pl' ? 'Wyślij wiadomość' : 
                                     language === 'de' ? 'Nachricht senden' : 
                                     'Send message'}
                                  </span>
                                )}
                              </Button>
                            </div>
                          </form>
                        </TabsContent>
                        
                        <TabsContent value="locations" className="px-1 py-3">
                          <div className="space-y-4">
                            {locations.map((location, index) => (
                              <Card key={index} className="overflow-hidden bg-white/5 border-white/10 hover:bg-white/10 transition-all group">
                                <CardContent className="p-4">
                                  <div className="flex flex-col md:flex-row justify-between gap-4">
                                    <div>
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors">
                                          {location.city}
                                        </span>
                                        {location.type === 'HQ' && (
                                          <span className="text-xs px-2 py-0.5 bg-blue-500/30 text-blue-200 rounded-full">
                                            HQ
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-white/70 text-sm mb-2">{location.address}</p>
                                      <div className="flex flex-col space-y-1 text-sm text-white/70">
                                        <a href={`tel:${location.phone}`} className="hover:text-blue-300 transition-colors flex items-center gap-2">
                                          <Phone size={14} /> {location.phone}
                                        </a>
                                        <a href={`mailto:${location.email}`} className="hover:text-blue-300 transition-colors flex items-center gap-2">
                                          <Mail size={14} /> {location.email}
                                        </a>
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                      {/* We'd show a map here in a real application */}
                                      <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                                        <MapPin size={24} className="text-blue-300" />
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="team" className="px-1 py-3">
                          <div className="space-y-4">
                            {teamContacts.map((member, index) => (
                              <div key={index} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all group">
                                <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center text-lg">
                                  {member.avatar}
                                </div>
                                <div>
                                  <div className="text-white group-hover:text-blue-300 transition-colors font-medium">
                                    {member.name}
                                  </div>
                                  <div className="text-white/60 text-sm">
                                    {member.position}
                                  </div>
                                  <div className="flex items-center gap-2 mt-1 text-xs text-white/70">
                                    <a href={`mailto:${member.email}`} className="hover:text-blue-300 transition-colors">
                                      <Mail size={12} className="inline mr-1" /> {member.email}
                                    </a>
                                    <span className="text-white/30">•</span>
                                    <a href={`tel:${member.phone}`} className="hover:text-blue-300 transition-colors">
                                      <Phone size={12} className="inline mr-1" /> {member.phone}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer animate-bounce">
            <ArrowRight className="h-6 w-6 text-white transform rotate-90" />
            <span className="text-xs text-white/80 mt-1">Scroll</span>
          </div>
        </section>

        {/* Services we offer section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-4">
              <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium inline-block">
                {language === 'pl' ? 'Nasze usługi' : 
                 language === 'de' ? 'Unsere Dienstleistungen' : 
                 'Our Services'}
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
                {language === 'pl' ? 'Jak możemy pomóc?' : 
                 language === 'de' ? 'Wie können wir helfen?' : 
                 'How can we help?'}
              </h2>
              <p className="mt-3 text-xl text-gray-600 max-w-3xl mx-auto">
                {language === 'pl' ? 'Oferujemy szeroką gamę usług technologicznych dostosowanych do Twoich potrzeb.' : 
                 language === 'de' ? 'Wir bieten eine breite Palette von Technologiedienstleistungen, die auf Ihre Bedürfnisse zugeschnitten sind.' : 
                 'We offer a wide range of technology services tailored to your needs.'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe size={24} />,
                  title: language === 'pl' ? 'Rozwój oprogramowania' : 
                         language === 'de' ? 'Softwareentwicklung' : 
                         'Software Development',
                  description: language === 'pl' ? 'Tworzymy wysokiej jakości, skalowalne aplikacje internetowe i mobilne.' : 
                               language === 'de' ? 'Wir erstellen hochwertige, skalierbare Web- und mobile Anwendungen.' : 
                               'We build high-quality, scalable web and mobile applications.',
                  color: 'blue'
                },
                {
                  icon: <ShieldCheck size={24} />,
                  title: language === 'pl' ? 'Bezpieczeństwo IT' : 
                         language === 'de' ? 'IT-Sicherheit' : 
                         'IT Security',
                  description: language === 'pl' ? 'Zabezpieczamy Twoje systemy i dane przed współczesnymi zagrożeniami.' : 
                               language === 'de' ? 'Wir schützen Ihre Systeme und Daten vor modernen Bedrohungen.' : 
                               'We protect your systems and data from modern threats.',
                  color: 'indigo'
                },
                {
                  icon: <Database size={24} />,
                  title: language === 'pl' ? 'Rozwiązania chmurowe' : 
                         language === 'de' ? 'Cloud-Lösungen' : 
                         'Cloud Solutions',
                  description: language === 'pl' ? 'Migruj swoje systemy do chmury i skorzystaj z nowoczesnej infrastruktury.' : 
                               language === 'de' ? 'Migrieren Sie Ihre Systeme in die Cloud und profitieren Sie von moderner Infrastruktur.' : 
                               'Migrate your systems to the cloud and benefit from modern infrastructure.',
                  color: 'violet'
                },
                {
                  icon: <Languages size={24} />,
                  title: language === 'pl' ? 'Rozwiązania AI' : 
                         language === 'de' ? 'KI-Lösungen' : 
                         'AI Solutions',
                  description: language === 'pl' ? 'Wykorzystaj moc sztucznej inteligencji, aby zrewolucjonizować swój biznes.' : 
                               language === 'de' ? 'Nutzen Sie die Kraft der künstlichen Intelligenz, um Ihr Unternehmen zu revolutionieren.' : 
                               'Harness the power of artificial intelligence to revolutionize your business.',
                  color: 'pink'
                },
                {
                  icon: <Building size={24} />,
                  title: language === 'pl' ? 'Konsulting IT' : 
                         language === 'de' ? 'IT-Beratung' : 
                         'IT Consulting',
                  description: language === 'pl' ? 'Strategiczne doradztwo w zakresie wykorzystania technologii w Twojej firmie.' : 
                               language === 'de' ? 'Strategische Beratung zur Nutzung von Technologie in Ihrem Unternehmen.' : 
                               'Strategic advice on using technology in your business.',
                  color: 'emerald'
                },
                {
                  icon: <Users size={24} />,
                  title: language === 'pl' ? 'IT Outsourcing' : 
                         language === 'de' ? 'IT-Outsourcing' : 
                         'IT Outsourcing',
                  description: language === 'pl' ? 'Dostęp do wykwalifikowanych specjalistów IT na żądanie.' : 
                               language === 'de' ? 'Zugang zu qualifizierten IT-Spezialisten auf Abruf.' : 
                               'Access to skilled IT specialists on demand.',
                  color: 'amber'
                }
              ].map((service, index) => (
                <div key={index} className="animate-on-scroll opacity-0 translate-y-4" style={{transitionDelay: `${index * 100}ms`}}>
                  <Card className="h-full hover:shadow-md transition-all duration-300 group border-gray-100 overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-${service.color}-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className={`w-12 h-12 rounded-lg bg-${service.color}-100 text-${service.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-${service.color}-200 transition-all duration-300`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {service.description}
                      </p>
                      <Button variant="ghost" className="justify-start p-0 text-primary hover:text-primary/80 hover:bg-transparent group">
                        {language === 'pl' ? 'Dowiedz się więcej' : 
                         language === 'de' ? 'Mehr erfahren' : 
                         'Learn more'}
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-4">
              <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium inline-block">
                {language === 'pl' ? 'FAQ' : 
                 language === 'de' ? 'FAQ' : 
                 'FAQ'}
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
                {language === 'pl' ? 'Często zadawane pytania' : 
                 language === 'de' ? 'Häufig gestellte Fragen' : 
                 'Frequently asked questions'}
              </h2>
              <p className="mt-3 text-xl text-gray-600 max-w-3xl mx-auto">
                {language === 'pl' ? 'Odpowiedzi na najczęstsze pytania od naszych klientów.' : 
                 language === 'de' ? 'Antworten auf die häufigsten Fragen unserer Kunden.' : 
                 'Answers to the most common questions from our clients.'}
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {[
                  {
                    question: language === 'pl' ? 'Jak długo trwa realizacja projektu strony internetowej?' : 
                              language === 'de' ? 'Wie lange dauert die Umsetzung eines Webprojekts?' : 
                              'How long does a website project take to complete?',
                    answer: language === 'pl' ? 'Czas realizacji zależy od złożoności projektu. Typowy projekt trwa od 4 do 12 tygodni. Przygotowujemy szczegółowy harmonogram na początkowym etapie współpracy.' : 
                            language === 'de' ? 'Die Umsetzungszeit hängt von der Komplexität des Projekts ab. Ein typisches Projekt dauert 4 bis 12 Wochen. Wir bereiten zu Beginn der Zusammenarbeit einen detaillierten Zeitplan vor.' : 
                            'The timeline depends on the complexity of the project. A typical project takes 4 to 12 weeks. We prepare a detailed schedule at the initial stage of cooperation.'
                  },
                  {
                    question: language === 'pl' ? 'Jakie wsparcie zapewniacie po wdrożeniu?' : 
                              language === 'de' ? 'Welchen Support bieten Sie nach der Implementierung?' : 
                              'What support do you provide after implementation?',
                    answer: language === 'pl' ? 'Oferujemy różne pakiety wsparcia i utrzymania. Standardowo zapewniamy 30-dniowy okres gwarancyjny, w którym naprawiamy wszelkie błędy bez dodatkowych kosztów.' : 
                            language === 'de' ? 'Wir bieten verschiedene Support- und Wartungspakete an. Standardmäßig bieten wir eine 30-tägige Garantiezeit, in der wir alle Fehler ohne zusätzliche Kosten beheben.' : 
                            'We offer various support and maintenance packages. We provide a standard 30-day warranty period in which we fix any bugs at no additional cost.'
                  },
                  {
                    question: language === 'pl' ? 'Jak wygląda proces wyceny?' : 
                              language === 'de' ? 'Wie sieht der Angebotsprozess aus?' : 
                              'What does the pricing process look like?',
                    answer: language === 'pl' ? 'Proces wyceny rozpoczyna się od konsultacji, podczas której poznajemy Twoje potrzeby. Na tej podstawie przygotowujemy szczegółową ofertę uwzględniającą zakres prac, harmonogram i koszty.' : 
                            language === 'de' ? 'Der Angebotsprozess beginnt mit einer Beratung, bei der wir Ihre Bedürfnisse kennenlernen. Auf dieser Grundlage bereiten wir ein detailliertes Angebot vor, das den Arbeitsumfang, Zeitplan und die Kosten berücksichtigt.' : 
                            'The pricing process begins with a consultation where we learn about your needs. Based on this, we prepare a detailed offer that includes the scope of work, schedule, and costs.'
                  },
                  {
                    question: language === 'pl' ? 'Czy pracujecie z klientami z zagranicy?' : 
                              language === 'de' ? 'Arbeiten Sie mit Kunden aus dem Ausland?' : 
                              'Do you work with international clients?',
                    answer: language === 'pl' ? 'Tak, współpracujemy z klientami z całego świata. Posługujemy się biegle językiem angielskim, niemieckim i polskim. Możemy dostosować godziny spotkań do różnych stref czasowych.' : 
                            language === 'de' ? 'Ja, wir arbeiten mit Kunden aus der ganzen Welt zusammen. Wir sprechen fließend Englisch, Deutsch und Polnisch. Wir können Besprechungszeiten an verschiedene Zeitzonen anpassen.' : 
                            'Yes, we work with clients from around the world. We are fluent in English, German, and Polish. We can adapt meeting hours to different time zones.'
                  },
                  {
                    question: language === 'pl' ? 'Jakie technologie wykorzystujecie?' : 
                              language === 'de' ? 'Welche Technologien verwenden Sie?' : 
                              'What technologies do you use?',
                    answer: language === 'pl' ? 'Korzystamy z najnowszych technologii, takich jak React, Node.js, Next.js, Laravel, i wielu innych. Zawsze dobieramy technologie odpowiednio do potrzeb projektu.' : 
                            language === 'de' ? 'Wir verwenden die neuesten Technologien wie React, Node.js, Next.js, Laravel und viele andere. Wir wählen die Technologien immer entsprechend den Projektanforderungen aus.' : 
                            'We use the latest technologies such as React, Node.js, Next.js, Laravel, and many others. We always select technologies according to project requirements.'
                  },
                ].map((faq, index) => (
                  <div 
                    key={index} 
                    className="animate-on-scroll opacity-0 translate-y-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                    style={{transitionDelay: `${index * 100}ms`}}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 animate-on-scroll opacity-0 translate-y-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-900">
                      {language === 'pl' ? 'Nie znalazłeś odpowiedzi?' : 
                       language === 'de' ? 'Keine Antwort gefunden?' : 
                       'Didn\'t find your answer?'}
                    </h3>
                    <p className="text-blue-700">
                      {language === 'pl' ? 'Skontaktuj się z nami bezpośrednio, a nasz zespół pomoże Ci rozwiązać wszystkie wątpliwości.' : 
                       language === 'de' ? 'Kontaktieren Sie uns direkt und unser Team wird Ihnen helfen, alle Ihre Fragen zu beantworten.' : 
                       'Contact us directly and our team will help you resolve any questions you may have.'}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
                      <Mail size={16} className="mr-2" />
                      {language === 'pl' ? 'Napisz do nas' : 
                       language === 'de' ? 'Schreiben Sie uns' : 
                       'Email us'}
                    </Button>
                    <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-100 group">
                      <MessagesSquare size={16} className="mr-2" />
                      {language === 'pl' ? 'Live chat' : 
                       language === 'de' ? 'Live-Chat' : 
                       'Live chat'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll opacity-0 translate-y-4">
              <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium">
                {language === 'pl' ? 'Nasza obecność' : 
                 language === 'de' ? 'Unsere Präsenz' : 
                 'Our Presence'}
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">
                {language === 'pl' ? 'Działamy globalnie' : 
                 language === 'de' ? 'Wir arbeiten global' : 
                 'We operate globally'}
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                {language === 'pl' ? 'Chociaż mamy siedzibę w Warszawie, świadczymy usługi klientom w wielu krajach' : 
                 language === 'de' ? 'Obwohl wir unseren Sitz in Warschau haben, bieten wir Dienstleistungen für Kunden in vielen Ländern an' : 
                 'While headquartered in Warsaw, we provide services to clients across multiple countries'}
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {operatingCountries.map((country, index) => (
                <div 
                  key={index} 
                  className={`animate-on-scroll opacity-0 translate-y-4 flex flex-col items-center p-5 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                    country.primary ? 'bg-blue-50 border border-blue-100' : 'bg-gray-50 border border-gray-100'
                  }`}
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 text-2xl ${
                    country.primary ? 'bg-gradient-to-br from-blue-400 to-indigo-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {country.flag}
                  </div>
                  <h4 className="font-medium text-center">{country.name}</h4>
                  {country.primary && (
                    <span className="mt-2 text-xs px-2 py-1 bg-blue-200 text-blue-800 rounded-full">
                      {language === 'pl' ? 'Centrala' : 
                        language === 'de' ? 'Hauptsitz' : 
                        'Headquarters'}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
            <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500 mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-500 mix-blend-overlay filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0 translate-y-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                {language === 'pl' ? 'Gotowy, aby rozpocząć współpracę?' : 
                 language === 'de' ? 'Bereit für eine Zusammenarbeit?' : 
                 'Ready to start your project?'}
              </h2>
              <p className="text-xl text-white/80 mb-8">
                {language === 'pl' ? 'Skontaktuj się z nami już dziś, aby rozpocząć transformację cyfrową swojej firmy.' : 
                 language === 'de' ? 'Kontaktieren Sie uns noch heute, um die digitale Transformation Ihres Unternehmens zu beginnen.' : 
                 'Get in touch with us today to start the digital transformation of your business.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-indigo-700 hover:bg-white/90 text-lg px-8 py-6 h-auto">
                  {language === 'pl' ? 'Skontaktuj się z nami' : 
                   language === 'de' ? 'Kontaktieren Sie uns' : 
                   'Contact us'}
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                  {language === 'pl' ? 'Dowiedz się więcej' : 
                   language === 'de' ? 'Mehr erfahren' : 
                   'Learn more'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
