import React from "react";
import Carousel from "../component/Carousel";

const Facilities = () => {
  return (
    <>
      <div className="mx-6 md:mx-20 my-10 md:my-20">
        <div className="text-center">
          <p className="text-xl md:text-3xl font-light text-[#7F7F7F] pb-2">
            Facilities
          </p>
          <p className="text-2xl md:text-5xl uppercase font-semibold pb-14">
            every thing
            <br />
            is <span className="text-[#FF1E00] font-bold">
              Possible
            </span> with <span className="text-[#FF1E00] font-bold">us</span>
          </p>
        </div>
        <div className="px-4">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Facilities;
