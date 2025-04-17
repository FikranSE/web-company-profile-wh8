import { useState, useEffect } from 'react';
import { company } from "../assets/images";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeWord, setActiveWord] = useState(0);
  const highlightWords = ["Keamanan", "Kepercayaan", "Teknologi", "Inovasi"];
  
  // Function to handle smooth scrolling for any section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Rotate highlight words
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % highlightWords.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-cover bg-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white"></div>
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Decorative Corner Shape with Parallax */}
      <div
        className="absolute -top-1/2 -right-1/4 w-[900px] h-[1200px] bg-sky-500 transform rotate-45 rounded-[100px] z-10 overflow-hidden transition-all duration-1000"
        style={{
          transform: `rotate(45deg) translateY(${scrollPosition * 0.1}px)`,
        }}
      >
        {/* Image inside the shape with hover effect */}
        <div className="w-full h-full overflow-hidden">
          <img
            src={company}
            alt="company"
            className="object-cover max-w-fit h-full transition-transform duration-1000"
            style={{
              transform: `rotate(-45deg) scale(${1 + scrollPosition * 0.0005})`,
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 px-4 sm:px-6 py-4 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-sky-600 rounded transition-all duration-300 ${
              scrollPosition > 50 ? 'rotate-45' : ''
            }`}></div>
            <div className={`font-bold text-lg sm:text-xl transition-colors duration-300 ${
              scrollPosition > 50 ? 'text-sky-600' : 'md:text-white lg:text-sky-600 max-md:text-white'
            }`}>PT MATA AIR PERMATA</div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {['about-us', 'products', 'product-gallery', 'careers', 'contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item}`} 
                onClick={(e) => scrollToSection(e, item)}
                className={`relative group px-2 py-1 ${
                  scrollPosition > 50 ? 'text-sky-800' : 'sm:text-white xl:text-sky-800 text-white'
                } text-xs sm:text-sm transition-colors duration-300`}
              >
                <span className="relative z-10">{item.toUpperCase().replace('-', ' ')}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Search and Mobile Menu Icons */}
          <div className="flex items-center space-x-4">
            <button className={`transition-colors duration-300 ${
              scrollPosition > 50 ? 'text-sky-800' : 'text-white'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button 
              className={`lg:hidden relative w-6 h-6 focus:outline-none transition-colors duration-300 ${
                scrollPosition > 50 ? 'text-sky-800' : 'text-white'
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {/* Improved Animated Hamburger to X Icon */}
              <div className="block w-6 absolute top-1/2 -translate-y-1/2">
                <span 
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                ></span>
                <span 
                  className={`block absolute h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0 w-0' : 'opacity-100 w-6'
                  }`}
                ></span>
                <span 
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - with enhanced animation */}
        <div 
          className={`lg:hidden fixed top-[64px] left-0 right-0 bg-white text-sky-800 shadow-lg z-50 transform transition-all duration-400 ease-in-out overflow-hidden ${
            isMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`flex flex-col px-6 py-4 transform transition-all duration-500 ease-out ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            {['about-us', 'products', 'press', 'careers', 'contact'].map((item, index) => (
              <>
                <a 
                  key={item}
                  href={`#${item}`} 
                  onClick={(e) => scrollToSection(e, item)}
                  className={`hover:text-sky-600 font-medium transform transition-all duration-300 hover:translate-x-2 ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${100 + (index * 50)}ms` : '0ms' }}
                >
                  {item.toUpperCase().replace('-', ' ')}
                </a>
                {index < 4 && <div className="my-4 w-full h-px bg-gray-100"></div>}
              </>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Content with Animated Elements */}
      <div className="relative z-30 flex items-center h-[calc(100vh-80px)] max-w-7xl mx-auto px-4 sm:px-6 max-sm:-mt-40">
        <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
          <div className="relative mb-3">
            <div className="inline-block bg-sky-100 text-sky-800 px-4 py-1 rounded-full text-sm font-medium animate-pulse">
              Solusi Sistem <span className="font-bold">{highlightWords[activeWord]}</span>
            </div>
          </div>
          <h1 className="font-bold leading-tight tracking-tight mb-4 sm:mb-6 text-white md:text-black">
            <div className="overflow-hidden">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl inline-block animate-slide-up">
                Solusi Sistem Keamanan dan
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl inline-block animate-slide-up animation-delay-300">
                Meteran Air Prabayar
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl inline-block animate-slide-up animation-delay-600">
                Terpercaya
              </span>
            </div>
          </h1>
          <p className="lg:text-gray-400 max-sm:text-white text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 font-light opacity-0 animate-fade-in animation-delay-1000">
            Temukan produk CCTV, meteran air prabayar, <br />
            dan lebih banyak lagi untuk kenyamanan Anda.
          </p>
          <div className="space-x-4 opacity-0 animate-fade-in animation-delay-1200">
            <button 
              onClick={(e) => scrollToSection(e, 'about-us')}
              className="bg-white shadow-xl px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center group transition-all hover:bg-gray-50 hover:scale-105"
            >
              <span className="text-sm sm:text-base mr-2 sm:mr-3 text-gray-700">Write to us</span>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-sky-600 text-white flex items-center justify-center group-hover:bg-sky-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>

          {/* Floating Card Elements */}
          <div className="hidden md:block">
            <div className="absolute right-32 bottom-24 bg-white p-3 rounded-lg shadow-lg w-32 animate-float">
              <div className="w-full h-1 bg-sky-500 mb-2"></div>
              <p className="text-xs font-medium">Security Solution</p>
            </div>
            <div className="absolute right-12 top-32 bg-white p-3 rounded-lg shadow-lg w-32 animate-float animation-delay-1000">
              <div className="w-full h-1 bg-sky-500 mb-2"></div>
              <p className="text-xs font-medium">Water Management</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-8 h-12 border-2 border-sky-600 rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-sky-600 rounded-full animate-scroll-down"></div>
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
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          80% {
            opacity: 0;
          }
          100% {
            transform: translateY(7px);
            opacity: 0;
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
        .animate-scroll-down {
          animation: scroll-down 1.5s infinite;
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
        .animation-delay-1200 {
          animation-delay: 1200ms;
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

export default Hero;