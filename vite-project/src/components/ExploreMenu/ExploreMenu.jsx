import React from 'react';
import { menu_list } from '../../assets/assets';
import './ExploreMenu.css';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className="explore-menu-container" id='explore-menu'>
            <h2 className="text-start">Explore Our Menu</h2>
            
            <div className="menu-items d-flex overflow-auto">
                {menu_list.map((item, index) => (
                    <div 
                        onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                        key={index} 
                        className="menu-item d-flex flex-column align-items-center text-center mx-3"
                    >
                        <img 
                            className={`${category === item.menu_name ? "active" : ""} menu-image`} 
                            src={item.menu_image} 
                            alt={item.menu_name}
                        />
                        <p className="menu-name mt-2">{item.menu_name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreMenu;
