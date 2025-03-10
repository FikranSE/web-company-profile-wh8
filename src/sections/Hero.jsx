import { useState } from 'react';
import { company } from "../assets/images";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-cover bg-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-white opacity-50"></div>
      
      {/* Decorative Corner Shape */}
      <div
        className="absolute -top-1/2 -right-1/4 w-[900px] h-[1200px] bg-sky-500 transform rotate-45 rounded-[100px] z-10 overflow-hidden"
      >
        {/* Image inside the shape */}
        <div className="w-full h-full overflow-hidden">
          <img
            src={company}
            alt="company"
            className="object-cover max-w-fit h-full"
            style={{
              transform: 'rotate(-45deg)', // Ensure the image stays upright
              objectFit: 'cover', // Make sure the image fills the shape
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-30 px-4 sm:px-6 py-4 ">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-sky-600 rounded"></div>
            <div className="text-sky-600 font-bold text-lg sm:text-xl md:text-white lg:text-sky-600 max-md:text-white">PT MATA AIR PERMATA</div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 ">
            <a href="#about" className="sm:text-white xl:text-sky-800 text-white text-xs sm:text-sm hover:text-gray-200">ABOUT US</a>
            <a href="#products" className="sm:text-white xl:text-sky-800 text-white text-xs sm:text-sm hover:text-gray-200">PRODUCTS</a>
            <a href="#press" className="sm:text-white xl:text-sky-800 text-white text-xs sm:text-sm hover:text-gray-200">PRESS</a>
            <a href="#careers" className="sm:text-white xl:text-sky-800 text-white text-xs sm:text-sm hover:text-gray-200">CAREERS</a>
            <a href="#contact" className="sm:text-white xl:text-sky-800 text-white text-xs sm:text-sm hover:text-gray-200">CONTACT US</a>
          </div>

          {/* Search and Mobile Menu Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button 
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-sky-800 text-white py-4 shadow-lg">
            <div className="flex flex-col space-y-4 px-6">
              <a href="#about" className="hover:text-gray-200">ABOUT US</a>
              <a href="#products" className="hover:text-gray-200">PRODUCTS</a>
              <a href="#press" className="hover:text-gray-200">PRESS</a>
              <a href="#careers" className="hover:text-gray-200">CAREERS</a>
              <a href="#contact" className="hover:text-gray-200">CONTACT US</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-30 flex items-center h-[calc(100vh-80px)] max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
          <h1 className="font-bold leading-tight tracking-tight mb-4 sm:mb-6 text-white md:text-black">
            <span className="text-4xl sm:text-5xl  md:text-6xl lg:text-7xl xl:text-8xl">CREATE</span>
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">SOFTWARE</span>
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">SOLUTION</span>
          </h1>
          <p className="lg:text-gray-400 max-sm:text-white text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 font-light">
            At your price business<br />
            travel solution
          </p>
          <button className="bg-white shadow-xl px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center group transition-all hover:bg-gray-50">
            <span className="text-sm sm:text-base mr-2 sm:mr-3 text-gray-700">Write to us</span>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-sky-600 text-white flex items-center justify-center group-hover:bg-sky-600">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
