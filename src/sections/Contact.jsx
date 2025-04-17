import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const contactData = {
  support: {
    phone: "+123 456 78 90",
    email: "support@mail.com"
  },
  sales: {
    phone: "+123 456 78 90",
    email: "support@mail.com"
  },
  mapEmbedCode: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.176933476559!2d-122.08424948468109!3d37.42199927982598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba0fb6602f65%3A0x72b35f8d81b8a0b6!2sGoogleplex!5e0!3m2!1sen!2sus!4v1631832726424!5m2!1sen!2sus"
};

const ContactInfo = ({ title, phone, email }) => (
  <div className="mb-6 transform transition duration-500 hover:translate-x-2">
    <h3 className="text-sky-800 font-semibold mb-4">{title}</h3>
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
          <Phone className="w-4 h-4 text-sky-600" />
        </div>
        <span className="text-gray-600 text-sm">{phone}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
          <Mail className="w-4 h-4 text-sky-600" />
        </div>
        <span className="text-gray-600 text-sm">{email}</span>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="contact" className="w-full min-h-screen relative overflow-hidden bg-cover bg-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white"></div>
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Decorative Corner Shape with Parallax */}
      <div
        className="absolute -bottom-1/2 -left-1/4 w-[900px] h-[1200px] bg-sky-500 transform -rotate-45 rounded-[100px] z-10 overflow-hidden transition-all duration-1000"
        style={{
          transform: `rotate(-45deg) translateY(${scrollPosition * -0.1}px)`,
        }}
      >
      </div>

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Section Header with Animation */}
        <div className="text-center mb-12">
          <div className="relative mb-3 inline-block">
            <div className="inline-block bg-sky-100 text-sky-800 px-4 py-1 rounded-full text-sm font-medium animate-pulse">
              Mari <span className="font-bold">Terhubung</span> Dengan Kami
            </div>
          </div>
          <div className="overflow-hidden">
            <h2 className="text-4xl sm:text-5xl font-bold text-sky-800 inline-block animate-slide-up">
              Contact
            </h2>
          </div>
          <div className="overflow-hidden mt-2">
            <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base animate-slide-up animation-delay-300">
              Temukan solusi untuk kebutuhan sistem keamanan dan meteran air prabayar Anda
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Contact Information Side */}
          <div 
            className={`w-full lg:w-1/3 flex flex-col opacity-0 ${isFormVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '300ms' }}
          >
            {/* Contact Details Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex-1 transform transition duration-300 hover:shadow-2xl">
              {/* Header */}
              <div className="border-b border-gray-100 pb-6 mb-6">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-sky-800">Hubungi Kami</h3>
                <p className="text-gray-500 text-sm mt-2">Kami siap membantu Anda dengan solusi terbaik</p>
              </div>

              {/* Support Section */}
              <ContactInfo 
                title="Support"
                phone={contactData.support.phone}
                email={contactData.support.email}
              />

              {/* Sales Section */}
              <ContactInfo 
                title="Sales"
                phone={contactData.sales.phone}
                email={contactData.sales.email}
              />

              {/* Contact Button */}
              <button className="mt-6 w-full bg-sky-600 text-white py-3 px-6 rounded-full hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 group flex items-center justify-center">
                <span className="mr-2">Kirim Pesan</span>
                <div className="w-8 h-8 rounded-full bg-white text-sky-600 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <Send className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          {/* Contact Form Section */}
          <div 
            className={`w-full lg:w-2/3 opacity-0 ${isFormVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '600ms' }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl transform transition duration-300 hover:shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                      placeholder="Masukkan email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Subjek</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    placeholder="Masukkan subjek"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Pesan</label>
                  <textarea 
                    className="w-full p-3 border border-gray-200 rounded-lg h-32 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    placeholder="Tulis pesan anda"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-sky-600 text-white py-3 px-8 rounded-full hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 group flex items-center"
                >
                  <span>Kirim Pesan</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div 
          className={`mt-8 opacity-0 ${isFormVisible ? 'animate-fade-in' : ''}`}
          style={{ animationDelay: '900ms' }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[300px] sm:h-[400px] transform transition duration-300 hover:shadow-2xl">
            <iframe
              src={contactData.mapEmbedCode}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              title="Location Map"
            ></iframe>
          </div>
        </div>

        {/* Floating Card Elements */}
        <div className="hidden md:block">
          <div className="absolute right-32 top-24 bg-white p-3 rounded-lg shadow-lg w-32 animate-float">
            <div className="w-full h-1 bg-sky-500 mb-2"></div>
            <p className="text-xs font-medium">Hubungi Kami</p>
          </div>
          <div className="absolute left-12 bottom-32 bg-white p-3 rounded-lg shadow-lg w-32 animate-float animation-delay-1000">
            <div className="w-full h-1 bg-sky-500 mb-2"></div>
            <p className="text-xs font-medium">Lokasi Kami</p>
          </div>
        </div>
      </div>

      {/* Add necessary CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes slide-up {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-blob {
          animation: blob 7s infinite alternate;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Contact;