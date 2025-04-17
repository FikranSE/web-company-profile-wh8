import { useState, useEffect, useRef } from "react";
import { company } from "../assets/images";

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [activeTab, setActiveTab] = useState('history');
  const sectionRef = useRef(null);
  
  const tabs = [
    { id: 'history', label: 'Sejarah', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'vision', label: 'Visi & Misi', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { id: 'team', label: 'Tim Kami', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  ];
  
  const tabContent = {
    history: "Kami adalah penyedia sistem keamanan dan solusi meteran air prabayar terkemuka dengan pengalaman bertahun-tahun. Sejak berdiri pada 26 Mei 2003, kami telah berkomitmen untuk menyediakan solusi berkualitas tinggi yang dirancang untuk melindungi bisnis, individu, dan juga mengelola penggunaan air secara efisien di seluruh Indonesia.",
    vision: "Visi: Menjadi pemimpin dalam penyediaan solusi keamanan dan manajemen air yang inovatif dan terpercaya di Indonesia.\n\nMisi: Memberikan produk dan layanan berkualitas tinggi yang memenuhi kebutuhan pelanggan kami, mendorong inovasi berkelanjutan dalam teknologi keamanan dan pengelolaan air, serta membangun hubungan jangka panjang dengan pelanggan melalui layanan yang luar biasa.",
    team: "Tim ahli kami terdiri dari profesional berpengalaman yang berdedikasi untuk memberikan layanan terbaik, baik dalam instalasi sistem keamanan maupun meteran air prabayar. Kami bekerja sama dengan pelanggan kami dari awal hingga akhir, mulai dari konsultasi awal hingga instalasi dan dukungan teknis berkelanjutan."
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  // Check if section is in view for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
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
  
  // Stats counters with animation
  const stats = [
    { label: 'Tahun Pengalaman', value: 21, suffix: '+' },
    { label: 'Produk', value: 50, suffix: '+' },
    { label: 'Pelanggan', value: 500, suffix: '+' },
  ];

  return (
    <>
      <section
        id='about-us'
        ref={sectionRef}
        className='py-16 w-full max-container p-4 overflow-hidden relative'
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 to-white/30 -z-10"></div>
        <div className="absolute top-40 -left-24 w-64 h-64 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-40 -right-24 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Section Header with Animation */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Penyedia solusi sistem keamanan dan meteran air prabayar terpercaya di Indonesia sejak 2003
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-8 items-center'>
          {/* Left side with grid of images - Enhanced with animations */}
          <div className={`flex-1 grid grid-cols-12 gap-4 transform transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className='col-span-12 md:col-span-5 bg-sky-600 p-8 rounded-lg flex flex-col justify-center items-start shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl'>
              <h3 className='text-white text-2xl font-bold mb-4'>ABOUT US</h3>
              <div className="w-12 h-1 bg-white mb-4"></div>
              <p className="text-white/80 text-sm">Berdiri sejak 2003, kami selalu berinovasi dalam teknologi keamanan dan meteran air.</p>
            </div>
            
            <div className='col-span-6 md:col-span-7 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]'>
              <img
                src={company}
                alt="Company building"
                className='w-full h-full object-cover transition-transform duration-700 hover:scale-110'
              />
            </div>
            
            <div className='col-span-6 md:col-span-7 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]'>
              <img
                src={company}
                alt="Company team"
                className='w-full h-full object-cover transition-transform duration-700 hover:scale-110'
              />
            </div>
            
            <div className='col-span-12 md:col-span-5 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]'>
              <img
                src={company}
                alt="City skyline"
                className='w-full h-full object-cover transition-transform duration-700 hover:scale-110'
              />
            </div>
          </div>

          {/* Right side with text content - Enhanced with tab navigation */}
          <div className={`flex-1 flex flex-col justify-start lg:pl-8 transform transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <h2 className='font-bold text-3xl lg:text-4xl mb-6 text-sky-800'>
              <span className="relative">
                Tentang Kami
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-sky-600"></span>
              </span>
            </h2>
            
            {/* Tabs Navigation */}
            <div className="flex mb-6 border-b border-gray-200 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 flex items-center whitespace-nowrap transition-all ${
                    activeTab === tab.id 
                      ? 'text-sky-600 border-b-2 border-sky-600 font-medium' 
                      : 'text-gray-500 hover:text-sky-800'
                  }`}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tab.icon} />
                  </svg>
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab Content with Animation */}
            <div className="min-h-[200px] relative">
              {Object.entries(tabContent).map(([id, content]) => (
                <div
                  key={id}
                  className={`absolute top-0 left-0 w-full transition-all duration-300 ${
                    activeTab === id 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform translate-x-4 pointer-events-none'
                  }`}
                >
                  <p className='text-gray-600 mb-6 whitespace-pre-line'>
                    {content}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center transform transition-all duration-700"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-3xl font-bold text-sky-600 mb-1 counter">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="transform transition-all duration-700 delay-700">
              <button 
                onClick={openModal}
                className="bg-white shadow-xl px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center group transition-all hover:bg-sky-600 hover:text-white"
              >
                <span className="text-sm sm:text-base mr-2 sm:mr-3 group-hover:text-white transition-colors">Baca selengkapnya</span>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-sky-600 text-white flex items-center justify-center group-hover:bg-white group-hover:text-sky-600 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Modal with Animations */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            {/* Modal backdrop with fade effect */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-70 transition-opacity animate-fade-in"
              onClick={closeModal}
            ></div>
            
            {/* Modal content with slide-up animation */}
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl mx-auto z-50 max-h-[90vh] overflow-y-auto animate-slide-up">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-sky-800">Tentang Kami</h3>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none transition-colors p-2 rounded-full hover:bg-gray-100"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="text-gray-600 space-y-4">
                  <p>
                    PT Mata Air Permata adalah penyedia sistem keamanan dan solusi meteran air prabayar terkemuka dengan pengalaman bertahun-tahun. Sejak berdiri pada 26 Mei 2003, kami telah berkomitmen untuk menyediakan solusi berkualitas tinggi yang dirancang untuk melindungi bisnis, individu, dan juga mengelola penggunaan air secara efisien di seluruh Indonesia. Kami memahami bahwa setiap pelanggan memiliki kebutuhan yang unik, dan itulah sebabnya kami menawarkan berbagai produk dan layanan yang dapat disesuaikan untuk memenuhi berbagai situasi dan skenario.
                  </p>
                  <p>
                    Sebagai perusahaan yang berfokus pada inovasi, WH8 Store tidak hanya menyediakan produk-produk keamanan dari merek ternama tetapi juga memimpin dalam penyediaan meteran air prabayar berkualitas. Kami menawarkan layanan terintegrasi yang meliputi pengadaan barang, jasa, perawatan, dan rekayasa teknologi, memastikan pelanggan kami mendapatkan perlindungan terbaik serta pengelolaan air yang lebih akurat dan efisien. Teknologi terbaru yang kami gunakan memungkinkan pelanggan untuk mengontrol penggunaan air mereka dengan lebih baik, sambil memastikan keamanan properti mereka.
                  </p>
                  <p>
                    Tim ahli kami terdiri dari profesional berpengalaman yang berdedikasi untuk memberikan layanan terbaik, baik dalam instalasi sistem keamanan maupun meteran air prabayar. Kami bekerja sama dengan pelanggan kami dari awal hingga akhir, mulai dari konsultasi awal hingga instalasi dan dukungan teknis berkelanjutan. Dengan pendekatan yang berpusat pada pelanggan, kami mampu menghadirkan solusi yang efektif, efisien, dan sesuai dengan kebutuhan spesifik setiap pelanggan, baik dalam hal keamanan maupun pengelolaan air.
                  </p>
                  <p>
                    WH8 bangga dengan reputasinya dalam memberikan solusi keamanan dan meteran air prabayar yang andal dan inovatif. Kami terus berusaha untuk menjadi mitra terpercaya bagi berbagai sektor, mulai dari rumah tangga hingga perusahaan besar. Komitmen kami terhadap keunggulan dan kemampuan kami untuk menyesuaikan solusi bagi setiap pelanggan membuat kami menjadi pilihan utama bagi mereka yang mencari keamanan serta manajemen air yang berkualitas.
                  </p>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors transform hover:scale-105"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
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
        
        @keyframes slide-up {
          0% {
            transform: translateY(50px);
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
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default AboutUs;