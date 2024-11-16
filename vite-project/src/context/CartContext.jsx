import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext'; // Ensure this path is correct

// Create the CartContext to manage cart state
export const CartContext = createContext();

// CartProvider component to provide cart context to children components
const CartProvider = ({ children }) => {
    // Get userId from AuthContext (make sure AuthContext provides userId)
    const { userId } = useContext(AuthContext);
    
    const [cartItems, setCartItems] = useState([]);

    // Add item to cart
    const addToCart = async (item) => {
        try {
            await axios.post('/api/cart/add-to-cart', { ...item, userId, quantity: 1 });
            // Fetch updated cart items after adding the item
            fetchCartItems();
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    // Remove item from cart
    const removeFromCart = async (menuItemId) => {
        try {
            await axios.post('/api/cart/remove-from-cart', { userId, menuItemId });
            // Fetch updated cart items after removing the item
            fetchCartItems();
        } catch (error) {
            console.error('Error removing from cart:', error);
        }
    };

    // Fetch cart items from the backend (make sure this route exists in your API)
    const fetchCartItems = async () => {
        try {
            const response = await axios.get(`/api/cart/${userId}`);
            setCartItems(response.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Export CartProvider as default
export default CartProvider;
