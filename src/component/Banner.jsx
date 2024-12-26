import React from 'react';
import BannerImageDesktop from '../assets/image/banner-image-desktop.jpg';
import BannerImageTablet from '../assets/image/banner-image-desktop.jpg';


const Banner = () => {
  return (
   <>
   <div className='grid grid-cols-2'>
    <div className='bg-[#A01216] flex flex-col justify-center items-center'>
      <p className='text-5xl uppercase text-white font-bold text-center animate-bounce'>Start your
        <br />
      training today</p>
      <button className='px-8 py-3 border-white border-2 rounded-lg text-white hover:bg-[#D2001A] m-5'>Join now</button>
    </div>
    <div>
      <img src={BannerImageDesktop} alt="" />
    </div>
   </div>
   </>
  );
};

export default Banner;
