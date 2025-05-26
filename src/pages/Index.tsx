
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero';
import WhatIsBPO from '../components/WhatIsBPO';
import Services from '../components/Services';
import WorkProcess from '../components/WorkProcess';
import AboutUs from '../components/AboutUs';
import Plans from '../components/Plans';
import EgestorERP from '../components/EgestorERP';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FloatingButton from '../components/FloatingButton';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <WhatIsBPO />
        <Services />
        <WorkProcess />
        <AboutUs />
        <Plans />
        <EgestorERP />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
