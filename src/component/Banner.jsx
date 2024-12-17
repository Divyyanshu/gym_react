import bgBanner from "../assets/images/Background.jpg";

const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgBanner})`,
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundPosition: "center", // Centers the image
        }}
        className="banner-container flex flex-col sm:flex-row items-center justify-between px-5 sm:px-10"
      >
        {/* Text Section */}
        <div className="mx-5 sm:mx-10 my-10 sm:my-20 content text-center sm:text-left">
          <p className="text-3xl sm:text-5xl mt-20 sm:mt-[200px] font-bold italic uppercase tracking-wide">
            The <span className="text-[#0B9AD6]">body</span> achieves,
          </p>
          <p className="text-3xl sm:text-5xl font-bold mt-2 italic uppercase tracking-wide">
            what the <span className="text-[#0B9AD6]">mind</span> believes.
          </p>
          <p className="text-lg sm:text-xl font-[500] mt-3">
            Having a perfect body requires a lot of training. Nice-looking body and powerful organism are
          </p>
          <p className="text-lg sm:text-xl font-[500]">
            interconnected - and we can help you with both.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center sm:justify-start">
            <button className="border px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-white text-[#0B9AD6] border-[#0B9AD6] hover:bg-[#0B9AD6] hover:text-white">
              Join Now
            </button>
            {/* "Learn More" button hidden on mobile */}
            <button className="hidden sm:block px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-white text-[#0B9AD6] border-4 border-[#0B9AD6] hover:border-[#086ba5] hover:text-[#086ba5]">
              Learn More
            </button>
          </div>
        </div>

        {/* Placeholder Section */}
        <div className="mt-10 px-10 hidden sm:block">
          {/* Add additional content or images here if needed */}
        </div>
      </div>

      <style jsx>{`
        .banner-container {
          height: 100vh; // Full viewport height
          width: 100vw; // Full viewport width
        }

        @media (max-width: 640px) {
          .banner-container {
            background-image: none; // Remove background image on mobile
            height: auto; // Adjust height for mobile
            padding: 20px; // Add padding for better spacing
          }
          .content p {
            font-size: 1.2rem; // Adjust text size for smaller screens
          }
        }
      `}</style>
    </>
  );
};

export default Banner;
