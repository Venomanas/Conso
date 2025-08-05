import HeroContent from '@/components/landingPage/HeroContent';
import Navbar from '@/components/navbar/navbar'
import React from 'react'

const page = () => {
  return (
    <div className="items-center max-h-screen w-full justify-center ml-2 mt-2  ">
     
      <Navbar />
      <HeroContent />
    </div>
  );
}

export default page