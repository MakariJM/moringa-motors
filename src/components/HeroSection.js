import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [cars, setCars] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://json-server-vercel-psi-five.vercel.app/featuredCars');
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % cars.length);
    }, 5000); // Autoplay interval (adjust as needed)

    return () => clearInterval(interval);
  }, [cars]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % cars.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + cars.length) % cars.length);
  };

  if (cars.length === 0) {
    return <p>Loading...</p>;
  }

  const currentCar = cars[currentSlide];

  return (
    <div className="hero-section">
      <img src={currentCar.image} alt={currentCar.model} className="car-image" />
      <div className="controls">
        <button onClick={handlePrevSlide}>&lt; Prev</button>
        <button onClick={handleNextSlide}>Next &gt;</button>
      </div>
      <div className="car-info">
        <h2>{currentCar.model}</h2>
        <p>{currentCar.description}</p>
        <p>Starting Price: {currentCar.startingPrice}</p>
      </div>
      
    </div>
  );
};

export default HeroSection;
