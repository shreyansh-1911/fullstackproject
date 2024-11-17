import React, { useState, useContext } from 'react';
import { assets } from '../../assets/assets';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, description, price, image }) => {
    
    // const [itemCount, setItemCount] = useState(0);
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    return (
        <div className="card">
            <div className="image-container">
                <img src={url+"/images/"+image} alt={name} className="card-img-top" />
                {!cartItems[id] ? (
                    <img
                        className="add"
                        onClick={()=> addToCart(id)}
                        src={assets.add_icon_white}
                        alt="Add"
                    />
                ) : (
                    <div className="food-item-counter">
                        <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
                        <p className='mb-0'>{cartItems[id]}</p>
                        <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="Add" />
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
