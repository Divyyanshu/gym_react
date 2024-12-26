import React from "react";
import Client1 from '../assets/image/client-1.png'
import Client2 from '../assets/image/client-2.png'
import Client3 from '../assets/image/client-3.png'
import Commas from '../assets/image/comma.png'

const ClientCard = () => {
  return (
    <div>
      <div className="m-5 flex justify-between items-center animate-pulse">
        <div className="border-none w-80 h-[30rem] flex flex-col px-10 items-center rounded-3xl shadow-xl">
          <img src={Client1} alt="" className="w-32 pt-5" />
          <p className="text-2xl pt-2">Joseph Smith</p>
          <img src={Commas} alt="" className="p-8 animate-pulse" />
          <p className="p-3 text-xl">Amazing !</p>
          <p className="font-normal text-lg text-center leading-tight w-72">
            Very accommodating, exremly helpful and friendly staff. gym is clean
            and good quality equipments.
          </p>
        </div>
        <div className="border-none w-80 h-[30rem] flex flex-col px-10 items-center rounded-3xl shadow-xl">
          <img src={Client2} alt="" className="w-32 pt-5" />
          <p className="text-2xl pt-2">Jenifer Lein</p>
          <img src={Commas} alt="" className="p-8 animate-pulse" />
          <p className="p-3 text-xl">Value For Money!</p>
          <p className="font-normal text-lg text-center leading-tight w-72">
            I joined while on holiday and from day 1 was made to feel welcome
          </p>
        </div>
        <div className="border-none w-80 h-[30rem] flex flex-col px-10 items-center rounded-3xl shadow-xl">
          <img src={Client3} alt="" className="w-32 pt-5" />
          <p className="text-2xl pt-2">Stan Smith</p>
          <img src={Commas} alt="" className="p-8 animate-pulse" />
          <p className="p-3 text-xl">Satisfied!</p>
          <p className="font-normal text-lg text-center leading-tight w-72">
            Very clean and a wide range of high spec equipments. Good classes,
            nice cafe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
