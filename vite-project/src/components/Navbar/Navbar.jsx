import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = () => {
    const [menu,setMenu] = useState("home");
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand"><img src={assets.logo} alt="" /></a>
                    <ul className='d-flex gap-4 navbar-links'>
                        <li onClick={()=> setMenu("home")} className={menu==='home'?"active":""} >Home</li>
                        <li onClick={()=> setMenu("menu")} className={menu==='menu'?"active":""} >Menu</li>
                        <li onClick={()=> setMenu("mobile-app")} className={menu==='mobile-app'?"active":""} >Mobile App</li>
                        <li onClick={()=> setMenu("contact-us")} className={menu==='contact-us'?"active":""} >Contact Us</li>
                    </ul>
                    <div className='d-flex gap-3 align-items-center'>
                        <div><img src={assets.basket_icon} alt="Basket Icon" /></div>
                        <div><img src={assets.search_icon} alt="Search Icon" /></div>
                        <div>
                            <button type="button" className="signup-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Signup
                            </button>

                            {/* Modal */}
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End of Modal */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
