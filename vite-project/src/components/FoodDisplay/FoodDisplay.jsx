import React from 'react';
import { food_list } from '../../assets/assets';
import FoodItem from '../FoodItem/FoodItem' // Assuming FoodItem is another component you created for food display
import './FoodDisplay.css';


const FoodDisplay = ({ category }) => {
    // Filter food items based on the selected category
    const filteredFood = category === "All" ? food_list : food_list.filter(food => food.category === category);

    return (
        <div className="food-display-container ">
            {filteredFood.map((food) => (
                <div key={food._id} className="food-card">
                    <FoodItem
                        id={food._id}
                        name={food.name}
                        description={food.description}
                        price={food.price}
                        image={food.image}
                    />
                </div>
            ))}
        </div>
    );
};

export default FoodDisplay;
