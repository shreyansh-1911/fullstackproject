import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(i => i.id === item.id);
            if (existingItem) {
                return prevItems.map(i =>
                    i.id === item.id
                        ? { ...i, count: i.count + 1, totalPrice: (i.count + 1) * i.price }
                        : i
                );
            } else {
                return [...prevItems, { ...item, count: 1, totalPrice: item.price }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) =>
            prevItems.reduce((acc, item) => {
                if (item.id === id) {
                    if (item.count > 1) {
                        acc.push({ ...item, count: item.count - 1, totalPrice: (item.count - 1) * item.price });
                    }
                } else {
                    acc.push(item);
                }
                return acc;
            }, [])
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
