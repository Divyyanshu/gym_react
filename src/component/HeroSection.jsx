import React from 'react';
import HeroImage from '../assets/image/hero-section-image.png';
import NavButton from '../component/buttons/NavButton';
import LearnButton from '../component/buttons/LearnButton';

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-col py-20 md:flex-row gap-10 md:gap-20 items-center px-4 md:px-8 lg:px-16">
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
        </>
    );
};

export default HeroSection;


// import React from 'react'
// import HeroImage from '../assets/image/hero-section-image.png'
// import SlopImage from '../assets/image/slope.svg'
// import NavButton from '../component/buttons/NavButton';
// import LearnButton from '../component/buttons/LearnButton';

// const HeroSection = () => {
//     return (
//         <>
//             <div className='flex gap-20 items-center'>
//                 <div className='py-20'>
//                     <h1 className='text-5xl uppercase font-semibold italic text-left'>The <span className='text-[#0b9ad6]'> body </span>achieves,
//                         <br />
//                         what the <span className='text-[#0b9ad6]'> mind </span>
//                         believes.</h1>
//                     <p className='text-left text-lg font-normal text-nowrap pt-2 tracking-tighter leading-6'>Having a perfect body requires a lot of training. Nice-looking body and powerful organism are
//                         <br />
//                         interconnected - and we can help you with both.
//                     </p>
//                     <div className='flex pt-4'>
//                     <NavButton/>
//                     <LearnButton/>
//                     </div>
//                 </div>
//                 <div>
//                     <img src={HeroImage} alt="" className='h-[70vh]' />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default HeroSection