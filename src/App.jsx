import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Coaches from "./pages/Coaches";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Facilities from "./pages/Facilities";
import ErrorPage from "./pages/ErrorPage";
// import Footer from "./component/Footer";
import {PacmanLoader} from 'react-spinners'

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to manage loader visibility

  useEffect(() => {
    // Simulate loading delay (e.g., data fetching or asset loading)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      {isLoading ? (
       <div className="h-screen flex justify-center items-center"><PacmanLoader color="#FF1E00"/></div>// Show preloader while loading
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
}

export default App;





// import { Routes , Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import Home from "./pages/Home";
// import Coaches from "./pages/Coaches";
// import AboutUs from "./pages/AboutUs";
// import Pricing from "./pages/Pricing";
// import Facilities from "./pages/Facilities";
// import ErrorPage from "./pages/ErrorPage";
// import Footer from "./component/Footer";

// function App() {
//   return (
//       <>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about_us" element={<AboutUs/>}/>
//         <Route path="/coaches" element={<Coaches/>}/>
//         <Route path="/facilities" element={<Facilities/>}/>
//         <Route path="/pricing" element={<Pricing/>}/>
//         <Route path="*" element={<ErrorPage/>}/>
//       </Routes>
//       <Footer/>
//       </>
//   )
// }
// export default App