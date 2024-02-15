import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    
    fetch('https://json-server-vercel-psi-five.vercel.app/suvCars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='main-carlist'>
      <h1>Available SUV Cars</h1>
      <div>
        <ul className='carlist'>
          {cars.map(car => (
            <li key={car.id}>
              <img src={car.details.image} alt={car.brand} />
              <div>
                <h3>{car.brand} {car.model}</h3>
                <p>Year: {car.year}</p>
                <p>{car.details.description}</p>
                
               
                <Link to={`/car/${car.id}/details`}>
                  <button>More Info</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CarList;
