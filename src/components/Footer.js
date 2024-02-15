import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@moringamottors.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cars">Cars</a></li>
            <li><a href="/AboutUs">AboutUs</a></li>
          </ul>
        </div>
        </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Moringa Mottors. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
