import { useState, useRef, useEffect } from 'react';
import { alarm, cctv, fingerprint, meteran } from "../assets/images";

// ProductData.js
const productData = [
  {
    type: "header",
    title: "PRO\nDUCTS",
  },
  {
    id: 1,
    logo: meteran,
    logoAlt: "Meteran Air Prabayar",
    title: "Meteran Air Prabayar",
    description: "Meteran air prabayar adalah solusi penting yang membantu PDAM mengatasi tantangan dalam pengelolaan pembayaran tagihan bulanan. Meningkatkan akurasi tinggi dalam penghitungan pemakaian air, memberikan kejelasan dan transparansi kepada pelanggan.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  },
  {
    id: 2,
    logo: cctv,
    logoAlt: "CCTV",
    title: "CCTV",
    description: "CCTV (Closed Circuit Television) adalah solusi keamanan yang tak ternilai dalam dunia pemantauan dan perlindungan properti. Dengan CCTV, Anda mendapatkan pengawasan 24/7 yang memungkinkan Anda menjaga keamanan rumah atau bisnis Anda sepanjang waktu, bahkan saat Anda tidak ada di tempat.",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
  },
  {
    id: 3,
    logo: fingerprint,
    logoAlt: "Fingerprint",
    title: "Fingerprint",
    description: "Teknologi sidik jari, atau fingerprint, adalah inovasi terkini yang telah merevolusi cara kita mengakses informasi dan melindungi keamanan pribadi. Sebagai metode pengenalan biometrik, fingerprint memanfaatkan karakteristik unik dari sidik jari manusia untuk memberikan keakuratan tinggi dan kecepatan dalam proses identifikasi.",
    icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
  },
  {
    id: 4,
    logo: alarm,
    logoAlt: "Alarm System",
    title: "Alarm System",
    description: "Sistem alarm adalah fondasi utama dari keamanan modern, melindungi rumah, bisnis, dan aset berharga Anda dari berbagai ancaman potensial. Dengan teknologi terkini, sistem alarm menawarkan perlindungan yang komprehensif.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
  },
];

// Products Component
const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const productItems = productData.filter(item => item.type !== "header");
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  
  // Detect when section is in view for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Auto-scroll products every 5 seconds
  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        const nextIndex = (activeIndex + 1) % productItems.length;
        scrollToProduct(nextIndex);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [activeIndex, isDragging, productItems.length]);
  
  // Function to handle scroll to product
  const scrollToProduct = (index) => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  // Function to handle mouse down
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // Function to handle mouse up/leave
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Function to handle mouse move
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Function to handle touch start
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // Function to handle touch move
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Update active index on scroll
  const handleScroll = () => {
    if (sliderRef.current) {
      const index = Math.round(sliderRef.current.scrollLeft / sliderRef.current.offsetWidth);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => {
        slider.removeEventListener('scroll', handleScroll);
      };
    }
  }, [activeIndex]);

  // Scroll to next product
  const scrollNext = () => {
    const nextIndex = Math.min(activeIndex + 1, productItems.length - 1);
    scrollToProduct(nextIndex);
  };

  // Scroll to previous product
  const scrollPrev = () => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    scrollToProduct(prevIndex);
  };

  // Find the header item
  const headerItem = productData.find(item => item.type === "header");

  return (
    <section 
      id="products" 
      ref={sectionRef}
      className="relative py-16 px-4 md:px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-sky-50 -z-10"></div>
      <div className="absolute top-full -right-64 w-96 h-96 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="max-container mx-auto relative">
        {/* Section Title with Animation */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-2xl md:text-4xl font-bold text-sky-800 mb-2">Our Products</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan solusi keamanan dan meteran air prabayar berkualitas tinggi untuk kebutuhan Anda
          </p>
        </div>
        
        {/* Product Categories */}
        <div className={`flex justify-center mb-8 overflow-x-auto pb-2 transform transition-all duration-1000 delay-300 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex space-x-2 p-1 bg-gray-100 rounded-full">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all' 
                  ? 'bg-sky-600 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              Semua
            </button>
            <button 
              onClick={() => setSelectedCategory('water')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'water' 
                  ? 'bg-sky-600 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              Meteran Air
            </button>
            <button 
              onClick={() => setSelectedCategory('security')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'security' 
                  ? 'bg-sky-600 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              Keamanan
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Header Card with Animation */}
          {headerItem && (
            <div className={`lg:w-1/4 h-auto bg-sky-600 p-6 rounded-lg shadow-lg transform transition-all duration-1000 ${
              isInView ? 'translate-x-0 opacity-100 hover:shadow-xl hover:-translate-y-1' : '-translate-x-20 opacity-0'
            }`}>
              <div className="h-52 flex flex-col justify-between">
                {/* Title */}
                <div>
                  <h2 className="text-white font-bold text-2xl md:text-3xl whitespace-pre-line">
                    {headerItem.title}
                  </h2>
                  
                  {/* Line decor */}
                  <div className="w-16 h-1 bg-white mt-4"></div>
                </div>
                
                {/* Product Icon Grid */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {productItems.map((item) => (
                    <div 
                      key={item.id}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-110"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Featured Item */}
              <div className="mt-16 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-white/80 text-sm font-medium mb-2">Featured Product</div>
                <div className="text-white font-medium">Smart Security Systems</div>
              </div>
            </div>
          )}

          {/* Products Slider Container with Animation */}
          <div className={`lg:w-3/4 relative group transform transition-all duration-1000 delay-500 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            {/* Slide Progress Bar */}
            <div className="w-full h-1 bg-gray-200 rounded-full mb-4 overflow-hidden">
              <div 
                className="h-full bg-sky-600 transition-all duration-500 ease-out"
                style={{ 
                  width: `${(activeIndex / (productItems.length - 1)) * 100}%`,
                }}
              ></div>
            </div>
          
            {/* Navigation Buttons with enhanced styling */}
            <button 
              onClick={scrollPrev}
              className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-sky-50 rounded-full p-3 shadow-lg transition-all duration-300 transform ${
                activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110'
              } hidden md:flex items-center justify-center w-12 h-12`}
              disabled={activeIndex === 0}
            >
              <svg className="w-6 h-6 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={scrollNext}
              className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-sky-50 rounded-full p-3 shadow-lg transition-all duration-300 transform ${
                activeIndex === productItems.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110'
              } hidden md:flex items-center justify-center w-12 h-12`}
              disabled={activeIndex === productItems.length - 1}
            >
              <svg className="w-6 h-6 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slider */}
            <div 
              ref={sliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide touch-pan-x pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleMouseUpOrLeave}
              onTouchMove={handleTouchMove}
            >
              {productItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="min-w-full sm:min-w-[calc(50%-16px)] md:min-w-[calc(33.333%-20px)] lg:min-w-[calc(50%-16px)] xl:min-w-[calc(33.333%-20px)] p-3 snap-start"
                >
                  <div 
                    className={`h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ${
                      index === activeIndex 
                        ? 'ring-2 ring-sky-500 transform scale-[1.02]' 
                        : 'hover:-translate-y-2'
                    }`}
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-xl group/image">
                      <img
                        src={item.logo}
                        alt={item.logoAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                      />
                      {/* Overlay with icon */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                            </svg>
                          </div>
                          <span className="text-white font-medium text-sm">{item.logoAlt}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-lg text-sky-800">{item.title}</h3>
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                          </svg>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <button className="bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full flex items-center group transition-all hover:bg-sky-600 hover:border-sky-600 hover:text-white">
                          <span className="text-sm mr-2 group-hover:text-white transition-colors">Selengkapnya</span>
                          <div className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center group-hover:bg-white group-hover:text-sky-600 transform group-hover:rotate-45 transition-all duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                        </button>
                        
                        {/* Product Badge */}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800">
                          New
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots indicator with enhanced styling */}
            <div className="flex justify-center mt-6 space-x-3">
              {productItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToProduct(index)}
                  className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                    index === activeIndex 
                      ? 'bg-sky-600 w-8 h-3' 
                      : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Product Features Section */}
        <div className={`mt-16 grid md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-700 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center p-6 rounded-lg hover:bg-white/50 transition-colors">
            <div className="w-12 h-12 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-sky-800 mb-2">Keamanan Terpercaya</h3>
            <p className="text-gray-600 text-sm">Sistem keamanan terpercaya untuk menjaga rumah dan bisnis Anda 24/7</p>
          </div>
          
          <div className="text-center p-6 rounded-lg hover:bg-white/50 transition-colors">
            <div className="w-12 h-12 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-sky-800 mb-2">Teknologi Terkini</h3>
            <p className="text-gray-600 text-sm">Dilengkapi dengan teknologi modern untuk memberikan pengalaman terbaik</p>
          </div>
          
          <div className="text-center p-6 rounded-lg hover:bg-white/50 transition-colors">
            <div className="w-12 h-12 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-sky-800 mb-2">Solusi Terintegrasi</h3>
            <p className="text-gray-600 text-sm">Solusi lengkap untuk keamanan dan manajemen air sesuai kebutuhan Anda</p>
          </div>
        </div>
      </div>
      
      {/* Style for animations */}
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
        
        .animate-blob {
          animation: blob 7s infinite alternate;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Products;