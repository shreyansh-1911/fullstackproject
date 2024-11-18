import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { StoreContext } from '../../context/StoreContext';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from local storage
        localStorage.removeItem('auth'); // Remove auth flag
        window.location.href = '/login'; // Redirect to login page
    };
    return (
        <div className="m-auto" style={{width:"90%"}}>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link  to='/' className="navbar-brand"><img src={assets.logo} alt="" /></Link>
                    <ul className='d-flex gap-4 navbar-links'>
                        <Link to='/' onClick={() => setMenu("menu")} className={menu === 'menu' ? "activ" : ""} >Menu</Link>
                        <a href='#explore-menu' onClick={() => setMenu("home")} className={menu === 'home' ? "activ" : ""} >Home</a>
                        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === 'mobile-app' ? "activ" : ""} >Mobile App</a>
                        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === 'contact-us' ? "activ" : ""} >Contact Us</a>
                    </ul>
                    <div className='d-flex gap-3 align-items-center'>

                        <Link to="/cart"><img src={assets.basket_icon} alt="Basket Icon" /></Link>
                        <div className={getTotalCartAmount()===0?"":"dot"}></div>
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
