import React from "react";

const JoinNowButton = () => {
  return (
    <>
      <button
        onClick={() => {
          window.open("/contact_us", "_blank", "noopener,noreferrer");
        }}
        className="text-sm md:text-md m-2 px-6 py-3 md:px-7 md:py-3 rounded-lg text-white bg-[#FF1E00] hover:bg-[#D2001A] transition-all duration-300 ease-in-out"
      >
        Join Now
      </button>
    </>
  );
};

export default JoinNowButton;
