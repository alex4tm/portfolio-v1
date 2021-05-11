import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import ContactUs from '../ContactUs';
import About from '../About';


function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Cards />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
