import { useState, useRef, useEffect } from 'react';
import { 
  meteran, meteran2, meteran3, meteran4,
  fingerprint, fingerprint2,
  sensor,
  cctv, cctv2, cctv3,
  alarm, alarm2
} from "../assets/images";

const ProductGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeImage, setActiveImage] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  // Gallery categories
  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'water', name: 'Meteran Air' },
    { id: 'cctv', name: 'CCTV' },
    { id: 'access', name: 'Akses Keamanan' },
    { id: 'alarm', name: 'Sistem Alarm' }
  ];
  
  // Gallery images with categories
  const galleryImages = [
    // Meteran Air
    { 
      src: meteran, 
      alt: "Meteran Air Prabayar", 
      title: "Meteran Air Prabayar Standard",
      description: "Sistem meteran air prabayar untuk pengelolaan penggunaan air yang lebih efisien.",
      category: 'water'
    },
    { 
      src: meteran2, 
      alt: "Meteran Air Prabayar Premium", 
      title: "Meteran Air Prabayar Premium",
      description: "Varian premium dengan fitur tambahan untuk monitoring penggunaan air real-time.",
      category: 'water'
    },
    { 
      src: meteran3, 
      alt: "Meteran Air Digital", 
      title: "Meteran Air Digital",
      description: "Meteran air digital dengan teknologi IoT untuk pemantauan jarak jauh.",
      category: 'water'
    },
    { 
      src: meteran4, 
      alt: "Sistem Meteran Industri", 
      title: "Sistem Meteran Industri",
      description: "Solusi meteran air untuk kebutuhan industri dengan kapasitas besar.",
      category: 'water'
    },
    
    // CCTV
    { 
      src: cctv, 
      alt: "CCTV Indoor", 
      title: "CCTV Indoor HD",
      description: "Kamera pengawas indoor dengan resolusi tinggi untuk keamanan dalam ruangan.",
      category: 'cctv'
    },
    { 
      src: cctv2, 
      alt: "CCTV Outdoor", 
      title: "CCTV Outdoor Weatherproof",
      description: "Kamera keamanan outdoor tahan cuaca dengan night vision dan wide-angle lens.",
      category: 'cctv'
    },
    { 
      src: cctv3, 
      alt: "CCTV System", 
      title: "Sistem CCTV Terintegrasi",
      description: "Sistem CCTV lengkap dengan DVR dan akses mobile untuk pantauan 24/7.",
      category: 'cctv'
    },
    
    // Access Systems
    { 
      src: fingerprint, 
      alt: "Fingerprint Access", 
      title: "Sistem Akses Fingerprint",
      description: "Kontrol akses dengan pemindai sidik jari untuk keamanan tingkat tinggi.",
      category: 'access'
    },
    { 
      src: fingerprint2, 
      alt: "Biometric System", 
      title: "Sistem Biometrik Multi-faktor",
      description: "Sistem keamanan dengan kombinasi fingerprint, face recognition, dan password.",
      category: 'access'
    },
    { 
      src: sensor, 
      alt: "Access Sensor", 
      title: "Sensor Akses Pintu",
      description: "Sensor pintu dengan notifikasi dan integrasi sistem keamanan rumah.",
      category: 'access'
    },
    
    // Alarm Systems
    { 
      src: alarm, 
      alt: "Alarm System", 
      title: "Sistem Alarm Keamanan",
      description: "Sistem alarm dengan sensor gerak dan notifikasi langsung ke perangkat mobile.",
      category: 'alarm'
    },
    { 
      src: alarm2, 
      alt: "Advanced Alarm", 
      title: "Sistem Alarm Canggih",
      description: "Alarm keamanan premium dengan integrasi sistem rumah pintar dan respons cepat.",
      category: 'alarm'
    }
  ];
  
  // Filtered images based on active category
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Check if section is in view for animations
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

  // Reset active image when category changes
  useEffect(() => {
    setActiveImage(0);
  }, [activeCategory]);

  // Current image from filtered list
  const currentImage = filteredImages[activeImage];

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-16 px-4 md:px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-sky-50 to-white -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-container mx-auto relative">
        {/* Section Title with Animation */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-2xl md:text-4xl font-bold text-sky-800 mb-2">Product Gallery</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan koleksi lengkap produk keamanan dan meteran air prabayar dari PT Mata Air Permata
          </p>
        </div>
        
        {/* Category Filter Tabs */}
        <div className={`flex justify-center mb-8 overflow-x-auto pb-2 transform transition-all duration-1000 delay-300 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex space-x-2 p-1 bg-gray-100 rounded-full">
            {categories.map(category => (
              <button 
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id 
                    ? 'bg-sky-600 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Left side with product details */}
          <div className={`flex-1 flex flex-col justify-start lg:pl-8 transform transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {/* Dynamic content based on selected image */}
            <div className="relative min-h-[150px]">
              {currentImage && (
                <div className="animate-fade-in">
                  <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 text-sky-800 leading-tight">
                    {currentImage.title}
                  </h2>
                  <p className="text-gray-600 mb-6 sm:text-lg">
                    {currentImage.description}
                  </p>
                </div>
              )}
            </div>
            
            {/* Product Feature List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Kualitas premium dengan jaminan garansi</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Teknologi terbaru dan teruji</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Dukungan teknis 24/7</p>
              </div>
            </div>
            
          </div>

          {/* Right side with image gallery */}
          <div className={`flex-1 grid grid-cols-12 gap-4 transform transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Header */}
            <div className="col-span-6 md:col-span-5 bg-sky-600 p-8 rounded-lg flex flex-col justify-center shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-white text-2xl font-bold mb-4">GALLERY</h3>
              <div className="w-12 h-1 bg-white mb-4"></div>
              <p className="text-white/80 text-sm">
                {filteredImages.length} produk {activeCategory !== 'all' ? categories.find(c => c.id === activeCategory)?.name : ''} unggulan
              </p>
            </div>
            
            {/* Main featured image */}
            <div className="col-span-6 md:col-span-7 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] relative h-40 sm:h-48 md:h-64">
              {currentImage && (
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-full object-cover transition-all duration-700 animate-fade-in"
                />
              )}
              
              {/* Image navigation buttons */}
              <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => setActiveImage((activeImage - 1 + filteredImages.length) % filteredImages.length)}
                  className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transform hover:scale-110 transition-all"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => setActiveImage((activeImage + 1) % filteredImages.length)}
                  className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transform hover:scale-110 transition-all"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Image indicator dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
                {filteredImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeImage === index ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Thumbnail images grid */}
            <div className="col-span-12 grid grid-cols-4 gap-2 sm:gap-4">
              {filteredImages.slice(0, 8).map((image, index) => (
                <div 
                  key={index}
                  className={`overflow-hidden rounded-lg shadow cursor-pointer transition-all duration-300 ${
                    activeImage === index 
                      ? 'ring-2 ring-sky-500 transform scale-[1.05]' 
                      : 'opacity-80 hover:opacity-100'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-16 sm:h-20 md:h-24 object-cover"
                  />
                </div>
              ))}
            </div>
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
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
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

export default ProductGallery;