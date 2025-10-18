import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Stats />
      <HowItWorks />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

export default App;