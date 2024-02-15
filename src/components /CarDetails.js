import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    
    fetch(`https://json-server-vercel-psi-five.vercel.app/suvCars/${id}`)
      .then(response => response.json())
      .then(data => setCar(data))
      .catch(error => console.error('Error fetching car details:', error));
  }, [id]);

  if (!car) {
    
    return <div>Loading...</div>;
  }

  
  return (
    <div className='car-details'>

      <div className='info-image'>
      <img src={car.details.image} alt={`${car.brand} ${car.model}`} />
      </div>
     
      
      
      <div className='more-info'>
      <h1>{car.brand} {car.model} Details</h1>
      <p>Year: {car.year}</p>
      <p>Location: {car.details.location}</p>
      <p>Availability: {car.details.availability}</p>
      <p>Drive: {car.details.drive}</p>
      <p>Mileage: {car.details.mileage}</p>
      <p>Engine Size: {car.details.engineSize}</p>
      <p>Horsepower: {car.details.horsePower}</p>
      <p>Torque: {car.details.torque}</p>
      <p>Aspiration: {car.details.aspiration}</p>
      <p>Acceleration: {car.details.acceleration}</p>
      </div>
      
    </div>
  );
}

export default CarDetail;