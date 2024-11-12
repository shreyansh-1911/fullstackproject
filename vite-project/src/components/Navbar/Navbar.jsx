import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from local storage
        localStorage.removeItem('auth'); // Remove auth flag
        window.location.href = '/login'; // Redirect to login page
    };
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand"><img src={assets.logo} alt="" /></a>
                    <ul className='d-flex gap-4 navbar-links'>
                        <li onClick={() => setMenu("home")} className={menu === 'home' ? "activ" : ""} >Home</li>
                        <li onClick={() => setMenu("menu")} className={menu === 'menu' ? "activ" : ""} >Menu</li>
                        <li onClick={() => setMenu("mobile-app")} className={menu === 'mobile-app' ? "activ" : ""} >Mobile App</li>
                        <li onClick={() => setMenu("contact-us")} className={menu === 'contact-us' ? "activ" : ""} >Contact Us</li>
                    </ul>
                    <div className='d-flex gap-3 align-items-center'>

                        <Link to="/cart"><img src={assets.basket_icon} alt="Basket Icon" /></Link>
                        <div><img src={assets.search_icon} alt="Search Icon" /></div>
                        <div>
                            <button className="btn btn-primary" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
