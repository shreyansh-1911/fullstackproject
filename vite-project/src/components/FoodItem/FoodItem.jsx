import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './FoodItem.css'
const FoodItem = ({ id, name, description, price, image }) => {
    const [itemCount, setItemCount] = useState(0);

    return (
        <div className="card">
            <div className="image-container">
                <img src={image} alt={name} className="card-img-top" />
                
                {/* Add button */}
                {!itemCount ? (
                    <img 
                        className="add" 
                        onClick={() => setItemCount(prev => prev + 1)} 
                        src={assets.add_icon_white} 
                        alt="Add" 
                    />
                ) : (
                    <div className="food-item-counter">
                        <img 
                            onClick={() => setItemCount(prev => prev - 1)} 
                            src={assets.remove_icon_red} 
                            alt="Remove" 
                        />
                        <p className='mb-0'>{itemCount}</p>
                        <img 
                            onClick={() => setItemCount(prev => prev + 1)} 
                            src={assets.add_icon_green} 
                            alt="Add" 
                        />
                    </div>
                )}
            </div>

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-price mb-0">${price}</p>
                    <img className="stars" src={assets.rating_starts} alt="Rating" />
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
