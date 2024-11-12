import React, { useContext } from 'react';
import { CartContext } from './cartContext';

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td>${item.totalPrice.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;
