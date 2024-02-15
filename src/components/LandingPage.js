import React from 'react';
import HeroSection from "./HeroSection";
import Footer from './Footer';
import TestimonialsSection from './TestimonialSection';

function LandingPage() {
  return (
    <div className='landingpage'>
      
      <HeroSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
