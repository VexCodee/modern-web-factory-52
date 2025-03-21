import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Send, Check, ArrowRight, Clock, ArrowUpRight, LayoutGrid, Image, Smartphone, Globe } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
      name: language === 'pl' ? 'Polska' : language === 'de' ? 'Polen' : 'Poland',
      code: 'PL',
      primary: true
    },
    { 
      name: language === 'pl' ? 'Niemcy' : language === 'de' ? 'Deutschland' : 'Germany',
      code: 'DE'
    },
    { 
      name: language === 'pl' ? 'Wielka Brytania' : language === 'de' ? 'Großbritannien' : 'United Kingdom',
      code: 'GB'
    },
    { 
      name: language === 'pl' ? 'Francja' : language === 'de' ? 'Frankreich' : 'France',
      code: 'FR'
    },
    { 
      name: language === 'pl' ? 'Stany Zjednoczone' : language === 'de' ? 'Vereinigte Staaten' : 'United States',
      code: 'US'
    },
    { 
      name: language === 'pl' ? 'Szwecja' : language === 'de' ? 'Schweden' : 'Sweden',
      code: 'SE'
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Redesigned to match Portfolio style */}
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
                  {language === 'pl' ? 'Skontaktuj się z nami' : language === 'de' ? 'Kontaktieren Sie uns' : 'Get in touch'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-gray-900">
                {language === 'pl' ? 'Jesteśmy' : language === 'de' ? 'Wir sind' : 'We\'re'}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {language === 'pl' ? 'tutaj dla Ciebie' : language === 'de' ? 'für Sie da' : 'here to help'}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                {language === 'pl' 
                  ? 'Masz pytania lub potrzebujesz pomocy? Nasz zespół ekspertów jest gotowy, aby Ci pomóc osiągnąć Twoje cele.' 
                  : language === 'de' 
                    ? 'Haben Sie Fragen oder benötigen Sie Hilfe? Unser Expertenteam steht bereit, um Ihnen bei der Erreichung Ihrer Ziele zu helfen.'
                    : 'Have questions or need assistance? Our team of experts is ready to help you achieve your technology goals.'}
              </p>
              
              {/* Quick contact links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <a 
                  href="mailto:info@techprime.com" 
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:bg-gray-100 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email us</div>
                    <div className="font-medium text-gray-900">info@techprime.com</div>
                  </div>
                </a>
                
                <a 
                  href="tel:+48221234567" 
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:bg-gray-100 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Call us</div>
                    <div className="font-medium text-gray-900">+48 22 123 45 67</div>
                  </div>
                </a>
              </div>
              
              {/* Business hours */}
              <div className="flex items-center gap-3 text-gray-600">
                <Clock size={18} className="text-primary" />
                <span>
                  {language === 'pl' 
                    ? 'Godziny otwarcia: Pon-Pt 9:00-17:00' 
                    : language === 'de' 
                      ? 'Öffnungszeiten: Mo-Fr 9:00-17:00' 
                      : 'Business hours: Mon-Fri 9:00-17:00'}
                </span>
              </div>
            </div>
            
            {/* Right column: Contact Card */}
            <div className="relative">
              <Card className="relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 relative">
                  <div className="w-16 h-1.5 bg-primary mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {language === 'pl' ? 'Skontaktuj się' : language === 'de' ? 'Kontaktieren Sie uns' : 'Get in touch'}
                  </h3>
                  <p className="text-gray-500 text-sm mb-8">
                    {language === 'pl' ? 'Odpowiemy na wszystkie Twoje pytania' : 
                     language === 'de' ? 'Wir beantworten alle Ihre Fragen' : 
                     'We\'ll answer all your questions'}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {language === 'pl' ? 'Centrala Warszawa' : 
                           language === 'de' ? 'Hauptsitz Warschau' : 
                           'HQ Warsaw'}
                        </div>
                        <div className="text-sm text-gray-500">ul. Biznesowa 123, 00-001</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">+48 22 123 45 67</div>
                        <div className="text-sm text-gray-500">
                          {language === 'pl' ? 'Wsparcie techniczne' : 
                           language === 'de' ? 'Technischer Support' : 
                           'Technical support'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">info@techprime.com</div>
                        <div className="text-sm text-gray-500">
                          {language === 'pl' ? 'Zapytania ogólne' : 
                           language === 'de' ? 'Allgemeine Anfragen' : 
                           'General inquiries'}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium flex items-center justify-center gap-2"
                  >
                    {language === 'pl' ? 'Wyślij wiadomość' : 
                     language === 'de' ? 'Nachricht senden' : 
                     'Send message'}
                    <ArrowRight size={16} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500">
          <span className="text-sm mb-1">
            {language === 'pl' ? 'Przewiń w dół' : 
             language === 'de' ? 'Nach unten scrollen' : 
             'Scroll down'}
          </span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Redesigned */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {language === 'pl' ? 'Napisz do nas' : 
                 language === 'de' ? 'Schreiben Sie uns' : 
                 'Send us a message'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder={language === 'pl' ? 'Jan Kowalski' : 
                                  language === 'de' ? 'Max Mustermann' : 
                                  'John Doe'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'pl' ? 'Numer telefonu' : 
                       language === 'de' ? 'Telefonnummer' : 
                       'Phone number'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'pl' ? 'Usługa' : 
                       language === 'de' ? 'Dienstleistung' : 
                       'Service'}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
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
                      <option value="repair">
                        {language === 'pl' ? 'Naprawa sprzętu' : 
                         language === 'de' ? 'Hardware-Reparatur' : 
                         'Hardware Repair'}
                      </option>
                      <option value="ai">
                        {language === 'pl' ? 'Rozwiązania AI' : 
                         language === 'de' ? 'KI-Lösungen' : 
                         'AI Solutions'}
                      </option>
                      <option value="other">
                        {language === 'pl' ? 'Inne' : 
                         language === 'de' ? 'Andere' : 
                         'Other'}
                      </option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'pl' ? 'Temat' : 
                     language === 'de' ? 'Betreff' : 
                     'Subject'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder={language === 'pl' ? 'W czym możemy pomóc?' : 
                                language === 'de' ? 'Wie können wir helfen?' : 
                                'How can we help?'}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
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
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder={language === 'pl' ? 'Szczegóły Twojego zapytania...' : 
                                language === 'de' ? 'Details Ihrer Anfrage...' : 
                                'Details of your inquiry...'}
                  ></textarea>
                </div>
                
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all ${
                      isSubmitting ? 'opacity-80' : 'hover:bg-primary/90 hover:shadow-md'
                    } ${isSubmitted ? 'bg-green-600' : ''}`}
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
            
            {/* Right Column: FAQ */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {language === 'pl' ? 'Często zadawane pytania' : 
                 language === 'de' ? 'Häufig gestellte Fragen' : 
                 'Frequently asked questions'}
              </h2>
              
              <div className="space-y-4">
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
                ].map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 rounded-xl p-5 hover:shadow-sm transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="text-lg font-semibold mb-2 text-blue-700">
                  {language === 'pl' ? 'Nie znalazłeś odpowiedzi?' : 
                   language === 'de' ? 'Keine Antwort gefunden?' : 
                   'Didn\'t find your answer?'}
                </h3>
                <p className="text-blue-600 mb-4">
                  {language === 'pl' ? 'Skontaktuj się z nami bezpośrednio, a nasz zespół pomoże Ci rozwiązać wszystkie wątpliwości.' : 
                   language === 'de' ? 'Kontaktieren Sie uns direkt und unser Team wird Ihnen helfen, alle Ihre Fragen zu beantworten.' : 
                   'Contact us directly and our team will help you resolve any questions you may have.'}
                </p>
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-100">
                  {language === 'pl' ? 'Zadaj pytanie' : 
                   language === 'de' ? 'Frage stellen' : 
                   'Ask a question'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section - Simplified */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium">
              {language === 'pl' ? 'Nasza obecność' : 
               language === 'de' ? 'Unsere Präsenz' : 
               'Our Presence'}
            </span>
            <h2 className="mt-4 text-3xl font-bold">
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
                className={`flex flex-col items-center p-5 rounded-xl transition-all duration-300 hover:shadow-md ${
                  country.primary ? 'bg-blue-50 border border-blue-100' : 'bg-gray-50 border border-gray-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                  country.primary ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}>
                  {country.code}
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
    </Layout>
  );
};

export default Contact;

