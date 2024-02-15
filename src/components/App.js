import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './CarList';
import LandingPage from './LandingPage';
import Header from './Header';
import CarDetail from './CarDetail'; 
import AboutUs from './AboutUs';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/cars" element={<CarList />} />
          <Route path="/car/:id/details" element={<CarDetail />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;