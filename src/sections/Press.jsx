

import { company } from "../assets/images";

const Press = () => {
  return (
    <section
      id=''
      className='flex flex-col max-lg:flex-col-reverse lg:flex-row gap-8 w-full max-container p-4'
    >
      {/* Left side with grid of images */}
      <div className='flex-1 flex flex-col justify-start lg:pl-8 max-lg:-mt-60 max-md:-mt-40'>
        <h2 className='font-bold text-3xl lg:text-3xl mb-3'>
          Infiniti software solutions plans global expansion
        </h2>
        <p className='text-gray-600 mb-6'>
          Our endeavor has been to create world class travel and aviation technology solutions. We believe in building strong partnerships with our customers to ensure that we are able to deliver a robust and cost efficient solution to them.
        </p>
        <div>
        <button className="bg-white shadow-xl px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center group transition-all hover:bg-gray-50">
            <span className="text-sm sm:text-base mr-2 sm:mr-3 text-gray-700">Read more</span>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-sky-600 text-white flex items-center justify-center group-hover:bg-sky-600">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Right side with text content */}
    
      <div className='flex-1 grid grid-cols-2 gap-4'>
        <div className='bg-sky-600 p-8 rounded-lg flex items-center justify-center'>
          <h3 className='text-white text-2xl font-bold'>PRESS</h3>
        </div>
        <div className='overflow-hidden rounded-lg'>
          <img
            src={company}
            alt="Night city view"
            className='w-full h-full object-cover'
          />
        </div>
        <div className='col-span-2 overflow-hidden'>
          <img
             src={company}
            alt="City skyline"
            className='w-full h-1/2 rounded-lg object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default Press;