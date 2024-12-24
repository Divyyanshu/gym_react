import React from 'react';
import Coach1 from '../assets/image/coach-1.jpg';
import Coach2 from '../assets/image/coach-2.jpg';
import Coach3 from '../assets/image/coach-3.jpg';

const Coaches = () => {
  return (
    <div className="mx-5 md:mx-20 mt-20 mb-5">
      <p className="text-xl md:text-3xl font-light text-[#7F7F7F] pb-2">Our Coaches</p>
      <p className="text-2xl md:text-5xl uppercase font-semibold pb-5">
        Meet with our
        <br />
        extremely talented <span className="text-[#FF1E00] font-bold">Trainers</span>
      </p>
      {/* Coaches Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-5">
        {/* Coach 1 */}
        <div className="transform transition duration-300 hover:scale-110 text-center">
          <img src={Coach1} alt="Coach 1" className="rounded-xl shadow-lg w-full md:w-80" />
          <p className="text-xl md:text-2xl pt-5">John Negler</p>
          <p className="text-lg font-normal">(Nutritionist)</p>
        </div>
        {/* Coach 2 */}
        <div className="transform transition duration-300 hover:scale-110 text-center">
          <img src={Coach2} alt="Coach 2" className="rounded-xl shadow-lg w-full md:w-80" />
          <p className="text-xl md:text-2xl pt-5">Karolin</p>
          <p className="text-lg font-normal">(Cardio Expert)</p>
        </div>
        {/* Coach 3 */}
        <div className="transform transition duration-300 hover:scale-110 text-center">
          <img src={Coach3} alt="Coach 3" className="rounded-xl shadow-lg w-full md:w-80" />
          <p className="text-xl md:text-2xl pt-5">Joseph Christ</p>
          <p className="text-lg font-normal">(Trainer)</p>
        </div>
      </div>
    </div>
  );
};

export default Coaches;
