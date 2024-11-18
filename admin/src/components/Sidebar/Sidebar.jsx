import React from 'react';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="bg-light vh-100 d-flex flex-column align-items-center p-3 shadow-sm">
      <div className="sidebar-options w-100">
        <NavLink
          to="/add"
          className="d-flex align-items-center mb-3 text-decoration-none text-dark"
        >
          <img src={assets.add_icon} alt="Add Icon" className="icon-size" />
          <p className="mb-0 d-none d-md-inline ms-2">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className="d-flex align-items-center mb-3 text-decoration-none text-dark"
        >
          <img src={assets.order_icon} alt="List Icon" className="icon-size" />
          <p className="mb-0 d-none d-md-inline ms-2">List Items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
