import React from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar bg-white d-flex justify-content-between align-items-center px-4">
      <img className="logo" src={assets.logo} alt="Logo" style={{ height: '50px' }} />
      <img
        className="profile rounded-circle"
        src={assets.profile_image}
        alt="Profile"
        style={{ height: '40px', width: '40px', objectFit: 'cover' }}
      />
    </div>
  );
};

export default Navbar;
