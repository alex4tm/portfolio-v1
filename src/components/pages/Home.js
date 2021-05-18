import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Projects from '../Projects';
import Footer from '../Footer';
import ContactUs from '../ContactUs';
import About from '../About';


function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
