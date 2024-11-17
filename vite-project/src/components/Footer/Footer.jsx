import React from 'react';
import { assets } from '../../assets/assets';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5" id="footer">
      <div className="container">
        <div className="row gy-4">
          {/* Left Section */}
          <div className="col-md-4">
            <img src={assets.logo} alt="Logo" className="mb-3" style={{ maxWidth: '150px' }} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta aspernatur voluptatem,
              rerum aliquam voluptates autem quae ut sed tempora.
            </p>
            <div className="d-flex gap-3 mt-3">
              <img src={assets.facebook_icon} alt="Facebook" className="social-icon" style={{ width: '30px' }} />
              <img src={assets.twitter_icon} alt="Twitter" className="social-icon" style={{ width: '30px' }} />
              <img src={assets.linkedin_icon} alt="LinkedIn" className="social-icon" style={{ width: '30px' }} />
            </div>
          </div>

          {/* Center Section */}
          <div className="col-md-4">
            <h5 className="text-uppercase mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Our Team</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="col-md-4">
            <h5 className="text-uppercase mb-3">Get in Touch</h5>
            <ul className="list-unstyled">
              <li>+91-9024122811</li>
              <li>contact@tomato.com</li>
            </ul>
          </div>
        </div>
        <hr className="border-light" />
        <p className="text-center mb-0">Copyright © 2024 Tomato.com - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
