import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    
    <header>
      <h1>Moringa Motors</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cars">Cars</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
        </ul>
      </nav>
    </header>
  
  );
}

export default Header;