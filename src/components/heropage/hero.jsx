import React from 'react';
import Heroslider from './heroslider';


const Hero = () => {
 return (
    <div
      className="min-h-[550px] sm:min-h[650px] relative bg-gray-100 dark:bg-gray-950 dark:text-white flex justify-center items-center overflow-hidden"
    >
      {/* background-section */}
      <div
        className="w-[600px] h-[600px] bg-primary/40 rounded-3xl absolute -top-1/2 right-0 rotate-45 -z[8]"
      />
      {/* hero-section */}
      <div className="container flex pb-8">
         <Heroslider/>
      </div>
    </div>
  );
};

export default Hero;