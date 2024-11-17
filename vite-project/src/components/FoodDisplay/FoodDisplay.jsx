import React, { useContext } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';

const FoodDisplay = ({ category }) => {
    // Access the food list from the context
    const { food_list } = useContext(StoreContext);

    return (
        <div className="food-display-container">
            {food_list.map((item, index) => {
                // Filter based on category
                if (category === "All" || item.category === category) {
                    return ( // Ensure to return JSX here
                        <div key={index} className="food-card">
                            <FoodItem
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        </div>
                    );
                }
                return null; // Explicitly return null if the condition is not met
            })}
        </div>
    );
};

export default FoodDisplay;
