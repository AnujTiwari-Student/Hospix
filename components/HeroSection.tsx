import React from 'react';

function HeroSection() {
  return (
    <div className='w-screen xl:flex xl:justify-center xl:items-center'>
       <div className='flex xl:flex-row flex-col md:gap-x-20 gap-y-6 xl:gap-y-0 md:items-end px-4 md:px-8'>
            <h1 className='xl:text-6xl text-4xl font-extrabold xl:w-[500px]'>
              Comprehensive Health Services
              <span className='xl:text-6xl text-4xl text-purple-500'> for Bharat </span>
              in one app
            </h1> 
            <div className='flex-col flex gap-y-8'>
                <p className='xl:text-xl text-lg xl:w-[575px] text-gray-800'>
                  Bharat Health app connects you with trusted healthcare providers, access essential health services, and manage your health records 
                  <span className='text-black font-semibold'> - all in one place.</span> 
                  Anytime, anywhere.
                </p>
                <div className='flex gap-x-8'>
                    <button className='py-2 px-4 bg-black text-white rounded-sm text-sm cursor-pointer'>
                        Get Started
                    </button>
                    <button className='py-2 px-4 bg-white text-black rounded-sm border-gray-400 border text-sm cursor-pointer'>
                        Learn More
                    </button>
                </div>
            </div>
       </div>
    </div>
  );
}

export default HeroSection;
