import bgBanner from "../assets/images/bg-gym.jpg";
import GirlImage from "../assets/images/file.png";

const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-10 w-full h-full sm:h-[100vh]"
      >
        {/* Mobile View Girl Image */}
        <div className="sm:hidden flex justify-center mt-10">
          <img src={GirlImage} alt="Girl" className="w-40 h-auto" />
        </div>
          
        {/* Text Section */}
        <div className="mx-5 sm:mx-10 my-10 sm:my-20 content text-center sm:text-left">
          <p className="text-3xl sm:text-5xl mt-10 sm:mt-[100px] font-bold italic uppercase tracking-wide">
            The <span className="text-[#0B9AD6]">body</span> achieves,
          </p>
          <p className="text-3xl sm:text-5xl font-bold mt-2 italic uppercase tracking-wide">
            what the <span className="text-[#0B9AD6]">mind</span> believes.
          </p>
          <p className="text-lg sm:text-lg font-[500] mt-3">
            Having a perfect body requires a lot of training. Nice-looking body and powerful organism are
          </p>
          <p className="text-lg sm:text-lg font-[500]">
            interconnected - and we can help you with both.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center sm:justify-start">
            <button className="border px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-[#0B9AD6] text-white hover:bg-[#086ba5]">
              Join Now
            </button>
            <button className="hidden sm:block px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-white text-[#0B9AD6] border-4 border-[#0B9AD6] hover:border-[#086ba5] hover:text-[#086ba5]">
              Learn More
            </button>
          </div>
        </div>

        {/* Girl Image for Desktop View */}
        <div className="hidden sm:block">
          <img src={GirlImage} alt="Girl" className="w-full h-auto" />
        </div>
      </div>

      {/* Hidden Background for Mobile View */}
      <style>
        {`
          @media (max-width: 1024px) {
            div[style*="background-image"] {
              background-image: none !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Banner;
 