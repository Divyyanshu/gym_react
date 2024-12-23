import React from 'react';
import HeroImage from '../assets/image/hero-section-image.png';
import NavButton from '../component/buttons/NavButton';
import LearnButton from '../component/buttons/LearnButton';

const HeroSection = () => {
    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row py-20 gap-10 md:gap-20 items-center px-4 md:px-8 lg:px-16">
                {/* Text Content */}
                <div className="py-10 md:py-20 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl uppercase font-semibold italic">
                        The <span className="text-[#FF1E00] font-bold">body</span> achieves,
                        <br />
                        what the <span className="text-[#FF1E00] font-bold">mind</span> believes.
                    </h1>
                    <p className="text-base md:text-lg font-normal pt-2 tracking-tight leading-6">
                        Having a perfect body requires a lot of training. Nice-looking body and powerful organism are
                        <br className="hidden md:block" />
                        interconnected - and we can help you with both.
                    </p>
                    <div className="flex justify-center md:justify-start pt-4 space-x-4">
                        <NavButton />
                        <LearnButton />
                    </div>
                </div>
                {/* Image Content */}
                <div>
                    <img
                        src={HeroImage}
                        alt="Hero Section"
                        className="h-[50vh] md:h-[60vh] lg:h-[70vh] mx-auto md:mx-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
