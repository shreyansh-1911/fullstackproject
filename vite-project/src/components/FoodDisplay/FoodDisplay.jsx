import React, { useContext } from 'react';
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';


const FoodDisplay = ({ category }) => {
    // Filter food items based on the selected category
    const { food_list } = useContext(StoreContext)

    return (
        <div className="food-display-container ">
            {food_list.map((item, index) => {
                if (category === "All" || item.category === category) {
                    <div key={index} className="food-card">
                        <FoodItem
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    </div>
                }

            })}
        </div>
    );
};

export default FoodDisplay;
