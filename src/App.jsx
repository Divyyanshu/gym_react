import { Routes , Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Coaches from "./pages/Coaches";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Facilities from "./pages/Facilities";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./component/Footer";

function App() {
  return (
      <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about_us" element={<AboutUs/>}/>
        <Route path="/coaches" element={<Coaches/>}/>
        <Route path="/facilities" element={<Facilities/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
      </>
  )
}
export default App