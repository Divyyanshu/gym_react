// import fitnesslogo from "../assets/fitness_logo.jpg"
// import React from 'react';

// const Navbar = () => {
//     return (
//         <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
//                     <img
//                         src="https://flowbite.com/docs/images/logo.svg"
//                         className="h-8"
//                         alt="Flowbite Logo"
//                     />
//                     <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//                         Flowbite
//                     </span>
//                 </a>
//                 <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//                     <button
//                         type="button"
//                         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                         Get started
//                     </button>
//                     <button
//                         data-collapse-toggle="navbar-sticky"
//                         type="button"
//                         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//                         aria-controls="navbar-sticky"
//                         aria-expanded="false"
//                     >
//                         <span className="sr-only">Open main menu</span>
//                         <svg
//                             className="w-5 h-5"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 17 14"
//                         >
//                             <path
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M1 1h15M1 7h15M1 13h15"
//                             />
//                         </svg>
//                     </button>
//                 </div>
//                 <div
//                     className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//                     id="navbar-sticky"
//                 >
//                     <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                         <li>
//                             <a
//                                 href="#"
//                                 className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                                 aria-current="page"
//                             >
//                                 Home
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="#"
//                                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                             >
//                                 About
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="#"
//                                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                             >
//                                 Services
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="#"
//                                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                             >
//                                 Contact
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-slate-50 h-auto sm:h-24 flex flex-col sm:flex-row items-center px-5 py-3 sm:py-5 justify-between drop-shadow-lg">
      {/* Logo */}
      <div className="logo text-lg text-[#0B9AD6] font-semibold w-full sm:w-auto px-5 sm:px-10 text-left">
        <span className="pr-2 text-black font-bold text-xl">DR</span>FITNESS💪
      </div>

      {/* Hamburger Menu for Mobile */}
      <div
        className="block sm:hidden text-2xl cursor-pointer ml-auto"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </div>

      {/* Links Section */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row gap-5 sm:gap-[4rem] items-center mt-5 sm:mt-0 w-full sm:w-auto`}
      >
        <div className="flex flex-col sm:flex-row gap-5 font-semibold w-full sm:w-auto text-center sm:text-left">
          <a href="#" className="hover:text-[#0B9AD6]">Home</a>
          <a href="#" className="hover:text-[#0B9AD6]">About us</a>
          <a href="#" className="hover:text-[#0B9AD6]">Coaches</a>
          <a href="#" className="hover:text-[#0B9AD6]">Facility</a>
          <a href="#" className="hover:text-[#0B9AD6]">Pricing</a>
        </div>
        <div className="mt-3 sm:mt-0">
          <button className="border px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-[#0B9AD6] text-white hover:bg-[#086ba5]">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
