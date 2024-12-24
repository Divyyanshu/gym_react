
import AboutUs from './AboutUs';
import Pricing from './Pricing';
import Facilities from './Facilities';
import Coaches from './Coaches';
import HeroSection from '../component/HeroSection.jsx';

const Home = () => {
  return (
    <>
      <div className='flex justify-center text-center'>
        <HeroSection/>
      </div>
      <AboutUs />
      <Coaches />
      <Facilities />
      <Pricing />
    </>
  );
};

export default Home;
