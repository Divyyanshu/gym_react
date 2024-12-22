import AboutImageDesktop from '../assets/image/about-us-image-desktop.png';
import AboutImageTablet from '../assets/image/about-us-image-tablet.png';

const AboutUs = () => {
    return (
        <div className="m-10 py-20 flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={AboutImageDesktop}
                    srcSet={`${AboutImageTablet} 768w, ${AboutImageDesktop} 1200w`}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 50vw"
                    alt="About Us"
                    className="w-full md:w-auto object-contain"
                />
            </div>

            {/* Text Section */}
            <div className="mt-10 md:mt-0 md:mx-28 text-center md:text-left">
                <p className="text-2xl md:text-3xl font-light text-[#7F7F7F]">About Us</p>
                <p className="text-3xl md:text-5xl uppercase font-semibold pb-5">
                    We <span className="text-[#FF1E00] font-bold">believe</span>
                    <br />
                    little things <span className="text-[#FF1E00] font-bold">matter</span>
                </p>
                <p className="text-lg md:text-xl font-normal pb-10">
                    Welcome to SR Fine, your number one source for your good health. We're dedicated to providing you
                    the very best of your fitness, with an emphasis on extremely trained coaches, up-to-the-mark
                    infrastructure, personal focus on each client.
                </p>
                <p className="text-lg md:text-xl font-normal">
                    Founded in 2001 by Ajay Soni, SR Fitness has come a long way from its beginnings in Bhilwara,
                    Rajasthan. When Ajay Soni first started out, his passion for fitness and health drove them to start
                    their own business.
                </p>

                {/* Stats Section */}
                <div className="flex flex-wrap justify-between items-center mt-10 md:mt-20">
                    <div className="w-1/3 text-center md:text-left mb-6 md:mb-0">
                        <p className="font-bold text-3xl">450+</p>
                        <p>Happy Clients</p>
                    </div>
                    <div className="w-1/3 text-center md:text-left mb-6 md:mb-0">
                        <p className="font-bold text-3xl">12+</p>
                        <p>Years Of Excellence</p>
                    </div>
                    <div className="w-1/3 text-center md:text-left mb-6 md:mb-0">
                        <p className="font-bold text-3xl">10+</p>
                        <p>Coaches</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

// import About_Image from '../assets/image/about-us-image-desktop.png'

// const AboutUs = () => {
//     return (
//         <>
//             <div className='m-10 py-20 flex'>
//                 <div className='w-1/2'>
//                     <img src={About_Image} alt="" />
//                 </div>
//                 <div className='mx-28'>
//                     <p className='text-3xl font-light text-[#7F7F7F]'>About Us</p>
//                     <p className='text-3xl md:text-5xl uppercase font-semibold pb-5'>We <span className='text-[#FF1E00] font-bold'>believe</span>
//                         <br />
//                         little things <span className='text-[#FF1E00] font-bold'>matter</span></p>
//                     <p className='text-wrap text-xl font-normal pb-10'>Welcome to SR Fine , your number one source for your good health. We're dedicated to providing you the very best of your fitness, with an emphasis on extremely trained coaches, up to the mark infrastructure, personal focus on each client.</p>
//                     <p className='text-wrap text-xl font-normal'>Founded in 2001 by Ajay Soni, SR Fitness has come a long way from its beginnings in Bhilwara, Rajasthan. When Ajay Soni first started out, his passion for fitness and health drove them to start their own business.</p>
//                     <div className='flex justify-between items-center m-10'>
//                         <div>
//                             <p className='font-bold text-3xl'>450+</p>
//                             <p>Happy Clients</p>
//                         </div>
//                         <div>
//                             <p className='font-bold text-3xl'>12+</p>
//                             <p>Years Of Excellence</p>
//                         </div>
//                         <div>
//                             <p className='font-bold text-3xl'>10+</p>
//                             <p>Coaches</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AboutUs;