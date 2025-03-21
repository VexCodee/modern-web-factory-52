import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Send, Check, ArrowRight, Clock, ArrowUpRight, Image, Smartphone, Globe, Calendar, Users, CheckCircle, Github, Twitter, Linkedin, Facebook, MessagesSquare, Building, ShieldCheck, Languages, Database } from 'lucide-react';
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
        {/* Header Section styled like other pages */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-white opacity-90"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mix-blend-multiply blur-3xl opacity-30"></div>
            <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 mix-blend-multiply blur-3xl opacity-20"></div>
            <div className="absolute inset-0">
              {Array.from({ length: 15 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-primary/10"
                  style={{
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float-around ${Math.random() * 15 + 10}s infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 border border-primary/30">
                  <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-primary font-medium tracking-wide text-sm">
                    {language === 'pl' ? 'Kontakt' : language === 'de' ? 'Kontakt' : 'Contact Us'}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-gray-900">
                  {language === 'pl' ? 'Porozmawiajmy' : language === 'de' ? 'Lass uns reden' : 'Let\'s Talk'}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {language === 'pl' ? 'o Twoim projekcie' : language === 'de' ? 'über Ihr Projekt' : 'About Your Project'}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-xl">
                  {language === 'pl' 
                    ? 'Jesteśmy tu, aby pomóc. Skontaktuj się z nami, aby omówić jak możemy wspierać Twój biznes.' 
                    : language === 'de' 
                      ? 'Wir sind hier, um zu helfen. Kontaktieren Sie uns, um zu besprechen, wie wir Ihr Unternehmen unterstützen können.'
                      : 'We\'re here to help. Get in touch with us to discuss how we can support your business.'}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">info@techprime.com</span>
                  </div>
                  <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">+48 22 123 45 67</span>
                  </div>
                  <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">Warsaw, Poland</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="relative transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800&h=500"
                    alt="Contact us" 
                    className="relative rounded-2xl shadow-2xl border border-gray-200"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-gray-700">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-gray-400 text-sm">Get in Touch</div>
                        <div className="text-white font-bold text-xl">We respond within 24h</div>
                      </div>
                      <div className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500">
            <span className="text-sm mb-1">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
              <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-[scrollDown_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-on-scroll opacity-0 translate-y-4">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  {language === 'pl' ? 'Wyślij do nas wiadomość' : 
                   language === 'de' ? 'Senden Sie uns eine Nachricht' : 
                   'Send us a message'}
                </h2>
                <p className="text-gray-600 mb-8">
                  {language === 'pl' ? 'Wypełnij formularz, a skontaktujemy się z Tobą najszybciej jak to możliwe.' : 
                   language === 'de' ? 'Füllen Sie das Formular aus und wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen.' : 
                   'Fill out the form and we\'ll get back to you as soon as possible.'}
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder={language === 'pl' ? 'Jan Kowalski' : 
                                    language === 'de' ? 'Max Mustermann' : 
                                    'John Doe'}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'pl' ? 'Usługa' : 
                       language === 'de' ? 'Dienstleistung' : 
                       'Service'}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="default" disabled>
                        {language === 'pl' ? 'Wybierz usługę' : 
                         language === 'de' ? 'Dienstleistung auswählen' : 
                         'Select a service'}
                      </option>
                      <option value="outsourcing">
                        {language === 'pl' ? 'IT Outsourcing' : 
                         language === 'de' ? 'IT-Outsourcing' : 
                         'IT Outsourcing'}
                      </option>
                      <option value="webdev">
                        {language === 'pl' ? 'Tworzenie stron WWW' : 
                         language === 'de' ? 'Webentwicklung' : 
                         'Web Development'}
                      </option>
                      <option value="design">
                        {language === 'pl' ? 'Projektowanie graficzne' : 
                         language === 'de' ? 'Grafikdesign' : 
                         'Graphic Design'}
                      </option>
                      <option value="ai">
                        {language === 'pl' ? 'Rozwiązania AI' : 
                         language === 'de' ? 'KI-Lösungen' : 
                         'AI Solutions'}
                      </option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
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
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder={language === 'pl' ? 'Szczegóły Twojego zapytania...' : 
                                  language === 'de' ? 'Details Ihrer Anfrage...' : 
                                  'Details of your inquiry...'}
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className={`w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
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
              </div>
              
              <div className="animate-on-scroll opacity-0 translate-y-4">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    {language === 'pl' ? 'Nasze biura' : 
                     language === 'de' ? 'Unsere Büros' : 
                     'Our Offices'}
                  </h3>
                  
                  <div className="space-y-6">
                    {locations.map((location, index) => (
                      <div key={index} className="flex border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-gray-900">{location.city}</h4>
                            {location.type === 'HQ' && (
                              <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                                HQ
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mt-1">{location.address}</p>
                          <div className="flex flex-col space-y-1 text-sm text-gray-600 mt-2">
                            <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors flex items-center gap-1">
                              <Phone size={12} /> {location.phone}
                            </a>
                            <a href={`mailto:${location.email}`} className="hover:text-primary transition-colors flex items-center gap-1">
                              <Mail size={12} /> {location.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {language === 'pl' ? 'Godziny pracy' : 
                       language === 'de' ? 'Öffnungszeiten' : 
                       'Working Hours'}
                    </h4>
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-2 text-primary" />
                      <span>
                        {language === 'pl' ? 'Poniedziałek - Piątek: 9:00 - 17:00' : 
                         language === 'de' ? 'Montag - Freitag: 9:00 - 17:00' : 
                         'Monday - Friday: 9:00 AM - 5:00 PM'}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">
                      {language === 'pl' ? 'Weekend: Zamknięte' : 
                       language === 'de' ? 'Wochenende: Geschlossen' : 
                       'Weekend: Closed'}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {language === 'pl' ? 'Śledź nas' : 
                       language === 'de' ? 'Folgen Sie uns' : 
                       'Follow Us'}
                    </h4>
                    <div className="flex gap-3">
                      <a href="#" className="h-8 w-8 rounded-full bg-gray-200 hover:bg-primary/20 flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                        <Twitter size={16} />
                      </a>
                      <a href="#" className="h-8 w-8 rounded-full bg-gray-200 hover:bg-primary/20 flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                        <Linkedin size={16} />
                      </a>
                      <a href="#" className="h-8 w-8 rounded-full bg-gray-200 hover:bg-primary/20 flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                        <Facebook size={16} />
                      </a>
                      <a href="#" className="h-8 w-8 rounded-full bg-gray-200 hover:bg-primary/20 flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                {language === 'pl' ? 'Znajdź nas' : 
                 language === 'de' ? 'Finden Sie uns' : 
                 'Find Us'}
              </h2>
              <p className="text-gray-600 mt-2">
                {language === 'pl' ? 'Nasze biura są zlokalizowane w kluczowych miastach Europy' : 
                 language === 'de' ? 'Unsere Büros befinden sich in wichtigen Städten Europas' : 
                 'Our offices are located in key European cities'}
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm animate-on-scroll opacity-0 translate-y-4">
              {/* Placeholder for map - in a real application, embed an actual map here */}
              <div className="h-[400px] bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto text-primary mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {language === 'pl' ? 'Mapa lokalizacji' : 
                     language === 'de' ? 'Standortkarte' : 
                     'Location Map'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'pl' ? 'Tutaj byłaby interaktywna mapa' : 
                     language === 'de' ? 'Hier wäre eine interaktive Karte' : 
                     'Here would be an interactive map'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                {language === 'pl' ? 'Najczęściej zadawane pytania' : 
                 language === 'de' ? 'Häufig gestellte Fragen' : 
                 'Frequently Asked Questions'}
              </h2>
              <p className="text-gray-600 mt-2">
                {language === 'pl' ? 'Odpowiedzi na najczęstsze pytania od naszych klientów' : 
                 language === 'de' ? 'Antworten auf die häufigsten Fragen unserer Kunden' : 
                 'Answers to the most common questions from our clients'}
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
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
                  }
                ].map((faq, index) => (
                  <div 
                    key={index} 
                    className="animate-on-scroll opacity-0 translate-y-4 bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="bg-primary rounded-xl p-8 md:p-12 text-white animate-on-scroll opacity-0 translate-y-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  {language === 'pl' ? 'Gotowy, aby rozpocząć współpracę?' : 
                   language === 'de' ? 'Bereit, die Zusammenarbeit zu beginnen?' : 
                   'Ready to get started?'}
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  {language === 'pl' ? 'Skontaktuj się z nami już dziś, aby omówić Twój projekt.' : 
                   language === 'de' ? 'Kontaktieren Sie uns noch heute, um Ihr Projekt zu besprechen.' : 
                   'Get in touch with us today to discuss your project.'}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/contact">
                    <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                      {language === 'pl' ? 'Skontaktuj się z nami' : 
                       language === 'de' ? 'Kontaktieren Sie uns' : 
                       'Contact us'}
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 w-full sm:w-auto">
                      {language === 'pl' ? 'Zobacz naszą ofertę' : 
                       language === 'de' ? 'Sehen Sie unser Angebot' : 
                       'View our services'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
