import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { 
  MapPin, Phone, Mail, Clock, 
  ChevronRight, Send, 
  Facebook, Twitter, Linkedin, Instagram, 
  ArrowRight, Check 
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    const errors = {
      name: !formData.name,
      email: !formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: !formData.message,
    };
    
    setFormErrors(errors);
    
    if (Object.values(errors).some(error => error)) {
      toast({
        title: "Form Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }
    
    // Submit form
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset submission status after delay
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: language === 'pl' ? 'Adres' : language === 'de' ? 'Adresse' : 'Address',
      content: language === 'pl' ? 'ul. Warszawska 123, 00-001 Warszawa, Polska' : 
               language === 'de' ? 'Warschauerstr. 123, 00-001 Warschau, Polen' : 
               '123 Business Avenue, Suite 400, New York, NY 10001, USA'
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: 'Email',
      content: 'contact@techprime.com',
      link: 'mailto:contact@techprime.com'
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: language === 'pl' ? 'Telefon' : language === 'de' ? 'Telefon' : 'Phone',
      content: '+48 123 456 789',
      link: 'tel:+48123456789'
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: language === 'pl' ? 'Godziny pracy' : language === 'de' ? 'Geschäftszeiten' : 'Business Hours',
      content: language === 'pl' ? 'Pon-Pt: 9:00 - 17:00' : 
               language === 'de' ? 'Mo-Fr: 9:00 - 17:00' : 
               'Mon-Fri: 9:00 AM - 5:00 PM'
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white py-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white opacity-95"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-100/30 mix-blend-multiply blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-indigo-100/30 mix-blend-multiply blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5">
                <span className="text-primary font-medium tracking-wide text-sm">
                  {language === 'pl' ? 'Kontakt' : language === 'de' ? 'Kontakt' : 'Contact Us'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight text-gray-900">
                {language === 'pl' ? 'Porozmawiajmy' : language === 'de' ? 'Lassen Sie uns' : 'Let\'s Talk'}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {language === 'pl' ? 'O Twoim Projekcie' : language === 'de' ? 'Über Ihr Projekt sprechen' : 'About Your Project'}
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-6 max-w-xl">
                {language === 'pl' 
                  ? "Jesteśmy tutaj, aby przekształcić Twoje pomysły w rzeczywistość. Skontaktuj się z nami, aby rozpocząć swoją cyfrową podróż." 
                  : language === 'de' 
                    ? "Wir sind hier, um Ihre Ideen in die Realität umzusetzen. Kontaktieren Sie uns, um Ihre digitale Reise zu beginnen."
                    : "We're here to transform your ideas into reality. Get in touch with us to start your digital journey."}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className="text-gray-900 hover:text-primary transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-900">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 lg:p-8">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {language === 'pl' ? 'Wyślij nam wiadomość' : 
                language === 'de' ? 'Senden Sie uns eine Nachricht' : 
                'Send us a message'}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === 'pl' ? 'Wypełnij formularz, a odezwiemy się najszybciej jak to możliwe' : 
                language === 'de' ? 'Füllen Sie das Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden' : 
                'Fill out the form and we\'ll get back to you as soon as possible'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'pl' ? 'Imię i nazwisko' : language === 'de' ? 'Name' : 'Full Name'} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={formErrors.name ? "border-red-300" : ""}
                      placeholder={language === 'pl' ? 'Jan Kowalski' : language === 'de' ? 'Max Mustermann' : 'John Doe'}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-red-500">
                        {language === 'pl' ? 'Imię jest wymagane' : 
                        language === 'de' ? 'Name ist erforderlich' : 
                        'Name is required'}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={formErrors.email ? "border-red-300" : ""}
                      placeholder="you@example.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {language === 'pl' ? 'Poprawny email jest wymagany' : 
                        language === 'de' ? 'Gültige E-Mail ist erforderlich' : 
                        'Valid email is required'}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'pl' ? 'Temat' : language === 'de' ? 'Betreff' : 'Subject'}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={language === 'pl' ? 'Temat twojej wiadomości' : 
                                language === 'de' ? 'Betreff Ihrer Nachricht' : 
                                'Subject of your message'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'pl' ? 'Wiadomość' : language === 'de' ? 'Nachricht' : 'Message'} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`min-h-32 ${formErrors.message ? "border-red-300" : ""}`}
                    placeholder={language === 'pl' ? 'Jak możemy Ci pomóc?' : 
                                language === 'de' ? 'Wie können wir Ihnen helfen?' : 
                                'How can we help you?'}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {language === 'pl' ? 'Wiadomość jest wymagana' : 
                      language === 'de' ? 'Nachricht ist erforderlich' : 
                      'Message is required'}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading || isSubmitted}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {language === 'pl' ? 'Wysyłanie...' : language === 'de' ? 'Senden...' : 'Sending...'}
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      {language === 'pl' ? 'Wysłano!' : language === 'de' ? 'Gesendet!' : 'Sent!'}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      {language === 'pl' ? 'Wyślij wiadomość' : language === 'de' ? 'Nachricht senden' : 'Send Message'}
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500">
          <span className="text-sm mb-1">{language === 'pl' ? 'Przewiń w dół' : language === 'de' ? 'Nach unten scrollen' : 'Scroll down'}</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-[scrollDown_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gray-100 rounded-xl overflow-hidden h-[400px] relative">
            <iframe 
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.8988651432394!2d21.012228776953113!3d52.232060065850974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc5dd80e1929fcef7!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1682339452978!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-indigo-600 rounded-2xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white rounded-full opacity-20"></div>
                <div className="absolute right-20 bottom-10 w-20 h-20 bg-white rounded-full opacity-20"></div>
                <div className="absolute left-20 bottom-20 w-32 h-32 bg-white rounded-full opacity-20"></div>
                <div className="absolute left-10 top-20 w-16 h-16 bg-white rounded-full opacity-20"></div>
              </div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {language === 'pl' ? 'Gotowy, aby rozpocząć współpracę?' : 
                    language === 'de' ? 'Bereit, die Zusammenarbeit zu beginnen?' : 
                    'Ready to start your project?'}
                  </h2>
                  <p className="text-indigo-100 max-w-lg">
                    {language === 'pl' ? 'Skontaktuj się z nami już dziś lub sprawdź nasze usługi, aby dowiedzieć się, jak możemy pomóc Twojemu biznesowi.' : 
                    language === 'de' ? 'Kontaktieren Sie uns noch heute oder sehen Sie sich unsere Dienstleistungen an, um zu erfahren, wie wir Ihrem Unternehmen helfen können.' : 
                    'Get in touch with us today or explore our services to see how we can help your business grow and succeed.'}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/services">
                    <Button variant="outline" size="lg" className="bg-white hover:bg-gray-100 text-primary border-none min-w-[160px]">
                      {language === 'pl' ? 'Nasze usługi' : language === 'de' ? 'Unsere Dienstleistungen' : 'Our Services'}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" className="bg-indigo-700 hover:bg-indigo-800 text-white min-w-[160px]">
                      {language === 'pl' ? 'Skontaktuj się' : language === 'de' ? 'Kontaktieren Sie uns' : 'Contact Us'}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - can be added if needed */}
    </Layout>
  );
};

export default Contact;
