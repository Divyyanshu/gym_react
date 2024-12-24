import React from "react";
import { useNavigate } from "react-router-dom";

const LearnButton = () => {
  let navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate('/about_us');
        }}
        className="text-sm md:text-md m-2 px-6 py-3 md:px-7 md:py-3 rounded-lg bg-white border-2 border-[#FF1E00] text-[#FF1E00] hover:bg-red-100 transition-all duration-300 ease-in-out"
      >
        Learn more
      </button>
    </>
  );
};

export default LearnButton;
