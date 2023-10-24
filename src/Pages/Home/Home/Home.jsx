import About from '../About/About';
import Banner from '../Banner/Banner';
import OpeningHour from '../OpeningHour/OpeningHour';
import Services from '../Services/Services';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <OpeningHour />
      <WhyUs />
    </div>
  );
};

export default Home;
