import React, { useEffect } from "react";
import Swiper from "swiper";
import 'swiper/css';
import Meditation from '../assets/image/carousel-Image-1.jpg';
import Cardio from '../assets/image/carousel-Image-2.jpg';
import PersonalTraining from '../assets/image/carousel-Image-3.jpg';
import Weightlifting from '../assets/image/carousel-Image-4.jpg';
import Aesthetic from '../assets/image/carousel-Image-5.jpg';
import Treadmill from '../assets/image/carousel-Image-6.jpg';
import MuscleTraining from '../assets/image/carousel-Image-7.jpg';

const images = [
  { src: Meditation, alt: "Meditation", name: "Meditation" },
  { src: Cardio, alt: "Cardio", name: "Cardio" },
  { src: PersonalTraining, alt: "Personal Training", name: "Personal Training" },
  { src: Weightlifting, alt: "Weightlifting", name: "Weight Lifting" },
  { src: Aesthetic, alt: "Aesthetic", name: "Aesthetic" },
  { src: Treadmill, alt: "Treadmill", name: "Treadmill" },
  { src: MuscleTraining, alt: "MuscleTraining", name: "Muscles Training" },
];

const Carousel = () => {
  useEffect(() => {
    const swiper = new Swiper(".centered-slide-carousel", {
      centeredSlides: true,
      paginationClickable: true,
      loop: true,
      spaceBetween: 30,
      slideToClickedSlide: true,
      pagination: {
        el: ".centered-slide-carousel .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1920: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1028: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        990: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });

    return () => {
      swiper.destroy(); // Clean up swiper instance on component unmount
    };
  }, []);

  return (
    <div className="w-full relative">
      <div className="swiper centered-slide-carousel swiper-container relative w-full max-w-[1200px]">
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div className="swiper-slide" key={index}>
              <div className="relative rounded-2xl h-96 w-full flex justify-center items-center transform transition duration-300 hover:scale-110 text-center">
                <img src={image.src} alt={image.alt} className="h-96 w-full object-contain p-2" />
                <div className="absolute top-0 left-0 w-full h-full bg-red-200 bg-opacity-20 flex justify-center items-center text-white font-semibold text-xl">
                  <span>{image.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Carousel;
