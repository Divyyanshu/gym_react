import React from "react";
import Contact_us from "../assets/image/contact-us-image.jpg";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image div */}
        <div className="hidden md:block">
          <img src={Contact_us} alt="" className="h-screen w-full object-cover" />
        </div>
        {/* Form div */}
        <div className="p-5 md:p-10">
          <p className="text-3xl md:text-5xl text-[#FF1E00] font-semibold">
            Questions?
          </p>
          <p className="text-2xl md:text-4xl font-[500] pt-1">
            We Are Here To Help You.
          </p>
          <p className="text-md md:text-xl font-[300] pt-1 pb-10">
            Fill up the form and our team will get back to you within 24 hours.
          </p>
          <div>
            {/* Form data */}
            <form action="">
              <div className="flex flex-col gap-5">
                {/* Full Name */}
                <div className="w-full max-w-sm">
                  <div className="relative">
                    <input
                      type="text"
                      className="font-normal w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-base md:text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                {/* Phone Number */}
                <div className="w-full max-w-sm">
                  <div className="relative">
                    <input
                      type="text"
                      className="font-normal w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-base md:text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                {/* Queries */}
                <div className="w-full max-w-sm">
                  <div className="relative">
                    <textarea
                      className="font-normal w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-base md:text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow h-20"
                      placeholder="Write your queries here"
                    ></textarea>
                  </div>
                </div>
                {/* Submit Button */}
                <button className="text-base md:text-lg px-6 py-3 rounded-lg text-white bg-[#FF1E00] hover:bg-[#D2001A] transition-all duration-300 ease-in-out">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;


// import React from "react";
// import Contact_us from "../assets/image/contact-us-image.jpg";

// const Contact = () => {
//   return (
//     <>
//       <div className="grid grid-cols-2">
//         {/* image div */}
//         <div>
//           <img src={Contact_us} alt="" className="h-screen" />
//         </div>
//         {/* form div */}
//         <div className="p-10">
//           <p className="text-5xl text-[#FF1E00] font-semibold">Questions?</p>
//           <p className="text-4xl font-[500] pt-1">We Are Here To Help You.</p>
//           <p className="w-[32rem] text-xl font-[300] pt-1 pb-10">
//             Fill up the form and our team will get back to you within 24 hours.
//           </p>
//           <div>
//             {/* form data */}
//             <form action="">
//               <div className="flex flex-col gap-5">
//               <div class="w-full max-w-sm min-w-[200px]">
//                 <div class="relative">
//                   <input
//                     type="text"
//                     class="font-normal w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
//                     placeholder="Full Name"
//                   />
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     class="absolute w-5 h-5 top-2.5 right-2.5 text-slate-600"
//                   >
//                     <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
//                   </svg>
//                 </div>
//               </div>
//               <div class="w-full max-w-sm min-w-[200px]">
//                 <div class="relative">
//                   <input
//                     type="text"
//                     class="font-normal w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
//                     placeholder="Phone Number"
//                   />
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     class="absolute w-5 h-5 top-2.5 right-2.5 text-slate-600"
//                   >
//                     <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
//                   </svg>
//                 </div>
//               </div>
//               <div class="w-full max-w-sm min-w-[200px]">
//                 <div class="relative">
//                   <input
//                     type="textfield"
//                     class="font-normal h-20 w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
//                     placeholder="Write your queries here"
//                   />
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     class="absolute w-5 h-5 top-2.5 right-2.5 text-slate-600"
//                   >
//                     <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
//                   </svg>
//                 </div>
//               </div>
//               <button className="text-lg md:text-mdpx-6 py-3 md:px-7 md:py-3 rounded-lg text-white bg-[#FF1E00] hover:bg-[#D2001A] transition-all duration-300 ease-in-out">Send Message</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;


//               {/* <div className="flex flex-col gap-3">
//               <input type="text" className="px-8 w-96 py-2 border-2 border-gray-300 rounded-lg"/>
//               <input type="text" className="px-8 w-96 py-2 border-2 border-gray-300 rounded-lg" />
//               <input type="text" className="px-8 w-96 py-2 border-2 border-gray-300 rounded-lg"/>
//               </div> */}