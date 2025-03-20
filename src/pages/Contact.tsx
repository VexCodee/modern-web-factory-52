
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
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
      toast.success('Dziękujemy za Twoją wiadomość! Skontaktujemy się wkrótce.');
      
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              Kontakt
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              Rozpocznijmy Rozmowę
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Masz projekt w głowie lub pytania dotyczące naszych usług? Skontaktuj się z nami, a nasz zespół wkrótce się z Tobą skontaktuje.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">Skontaktuj się z nami</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Nasze Biuro</h3>
                    <p className="text-gray-600">ul. Biznesowa 123, Dzielnica Technologiczna</p>
                    <p className="text-gray-600">Warszawa, 00-001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Napisz do nas</h3>
                    <p className="text-gray-600 mb-1">info@techprime.com</p>
                    <p className="text-gray-600">wsparcie@techprime.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Zadzwoń do nas</h3>
                    <p className="text-gray-600 mb-1">+48 555 123 456</p>
                    <p className="text-gray-600">Pon-Pt, 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden h-72 shadow-sm">
                {/* Placeholder for a map - would implement Google Maps or similar in a real project */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Mapa Lokalizacji</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Wyślij Nam Wiadomość</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Imię i Nazwisko
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="Twoje imię i nazwisko"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Adres Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="twoj.email@przyklad.pl"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Numer Telefonu (Opcjonalnie)
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
                      Interesująca Cię Usługa
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    >
                      <option value="default" disabled>Wybierz usługę</option>
                      <option value="outsourcing">Outsourcing IT</option>
                      <option value="webdev">Tworzenie Stron WWW</option>
                      <option value="design">Projektowanie Graficzne</option>
                      <option value="repair">Naprawa Sprzętu</option>
                      <option value="ai">Rozwiązania AI</option>
                      <option value="marketing">Marketing</option>
                      <option value="social">Zarządzanie Mediami Społecznościowymi</option>
                      <option value="project">Zarządzanie Projektami</option>
                      <option value="other">Inne</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Temat
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="W czym możemy pomóc?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="Opisz swój projekt lub pytania..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all ${
                      isSubmitting ? 'opacity-80' : 'hover:bg-primary/90 hover:shadow-md'
                    } ${isSubmitted ? 'bg-green-600' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Wysyłanie...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center">
                        <Check size={18} className="mr-2" />
                        Wiadomość Wysłana
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={18} className="mr-2" />
                        Wyślij Wiadomość
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              FAQ
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
              Często Zadawane Pytania
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług i procesów.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Jak długo zwykle trwa realizacja projektu tworzenia strony internetowej?",
                  answer: "Czas realizacji projektów różni się w zależności od złożoności i zakresu. Prosta strona internetowa może zająć 4-6 tygodni, podczas gdy bardziej złożone platformy mogą trwać 3-6 miesięcy. Podczas naszej początkowej konsultacji przedstawimy szczegółowy harmonogram dostosowany do wymagań Twojego projektu."
                },
                {
                  question: "Czy oferujecie bieżącą konserwację i wsparcie po zakończeniu projektu?",
                  answer: "Tak, oferujemy różne pakiety utrzymania, aby zapewnić, że Twoje produkty cyfrowe pozostaną bezpieczne, aktualne i optymalne. Nasze usługi wsparcia obejmują regularne aktualizacje, monitorowanie bezpieczeństwa, zmiany treści i pomoc techniczną."
                },
                {
                  question: "Jak wygląda wycena projektów?",
                  answer: "Przedstawiamy indywidualne oferty na podstawie konkretnych wymagań. Czynniki wpływające na cenę obejmują złożoność projektu, harmonogram, potrzebne funkcje i poziom wymaganej personalizacji. Oferujemy zarówno kontrakty o stałej cenie, jak i rozliczenia według czasu i materiałów."
                },
                {
                  question: "W jakich branżach się specjalizujecie?",
                  answer: "Współpracowaliśmy z klientami z różnych sektorów, w tym opieki zdrowotnej, finansów, handlu detalicznego, edukacji, produkcji i hotelarstwa. Nasz zespół szybko dostosowuje się, aby zrozumieć specyficzne dla danej branży wyzwania i wymagania."
                },
                {
                  question: "Czy możecie zintegrować sztuczną inteligencję z naszymi istniejącymi systemami?",
                  answer: "Tak, specjalizujemy się w integracji rozwiązań AI z istniejącymi systemami biznesowymi. Nasze podejście koncentruje się na identyfikacji najbardziej wartościowych zastosowań AI dla Twoich konkretnych potrzeb i wdrażaniu ich w sposób, który uzupełnia Twoje obecne procesy."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm animate-fade-in" 
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
