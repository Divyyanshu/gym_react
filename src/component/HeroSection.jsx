import React from 'react'
import HeroImage from '../assets/image/hero-section-image.png'
import SlopImage from '../assets/image/slope.svg'
import NavButton from '../component/buttons/NavButton';
import LearnButton from '../component/buttons/LearnButton';

const HeroSection = () => {
    return (
        <div className='relative w-full bg-white'>
            {/* Main Content */}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8 px-6 lg:px-20 py-10 max-w-[1280px] mx-auto'>
                {/* Text Section */}
                <div className='w-full lg:w-[50%]'>
                    <h1 className='text-4xl lg:text-5xl uppercase font-bold italic leading-snug text-left'>
                        The <span className='text-[#0b9ad6]'>body</span> achieves,
                        <br />
                        what the <span className='text-[#0b9ad6]'>mind</span> believes.
                    </h1>
                    <p className='text-left text-base lg:text-lg font-normal pt-4 tracking-tight leading-relaxed'>
                        Having a perfect body requires a lot of training. A nice-looking body and a powerful organism are
                        interconnected—and we can help you with both.
                    </p>
                    <div className='flex gap-4 pt-6'>
                        <NavButton />
                        <LearnButton />
                    </div>
                </div>

                {/* Hero Image Section */}
                <div className='w-full lg:w-[50%] flex justify-center relative'>
                    <img
                        src={HeroImage}
                        alt="Hero"
                        className='h-[50vh] lg:h-[70vh] object-contain z-10'
                    />
                </div>
            </div>

            {/* Slope Image */}
            <div className='relative w-full'>
                <img
                    src={SlopImage}
                    alt="Slope"
                    className='w-full object-cover'
                />
            </div>
        </div>
    )
}

export default HeroSection;
