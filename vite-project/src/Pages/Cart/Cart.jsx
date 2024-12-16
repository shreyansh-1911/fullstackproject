import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/Navbar/Navbar"

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <>
        <Navbar/>
        <div className="cart container py-4">
            <h2 className="text-center mb-4">Your Cart</h2>
            <div className="row">
                <div className="col-lg-8 mb-4">
                    <div className="cart-items">
                        <div className="row text-center fw-bold mb-3">
                            <div className="col-2">Image</div>
                            <div className="col-3">Title</div>
                            <div className="col-2">Price</div>
                            <div className="col-1">Quantity</div>
                            <div className="col-2">Total</div>
                            <div className="col-2">Remove</div>
                        </div>
                        <hr />
                        {food_list.map((item, index) => {
                            if (cartItems[item._id] > 0) {
                                return (
                                    <div key={index} className="row text-center align-items-center mb-3">
                                        <div className="col-2">
                                            <img
                                                src={url+"/images/"+item.image} // multer
                                                alt={item.name}
                                                className="img-fluid rounded"
                                                style={{ maxWidth: '60px', height: 'auto' }}
                                            />
                                        </div>
                                        <div className="col-3">{item.name}</div>
                                        <div className="col-2">${item.price}</div>
                                        <div className="col-1">{cartItems[item._id]}</div>
                                        <div className="col-2">${item.price * cartItems[item._id]}</div>
                                        <div className="col-2">
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => removeFromCart(item._id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="border p-3 rounded mb-4">
                        <h3 className="text-center">Cart Summary</h3>
                        <div className="d-flex justify-content-between my-2">
                            <p className="mb-0">Subtotal</p>
                            <p className="mb-0">${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between my-2">
                            <p className="mb-0">Delivery Fee</p>
                            <p className="mb-0">${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between my-2 fw-bold">
                            <p className="mb-0">Total</p>
                            <p className="mb-0">${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
                        </div>
                        <button
                            className="btn btn-primary w-100 mt-3"
                            onClick={() => navigate('/order')}
                            disabled={getTotalCartAmount() === 0}
                        >
                            Proceed to Checkout
                        </button>
                    </div>

                    <div className="border p-3 rounded">
                        <h5>Have a Promo Code?</h5>
                        <div className="input-group mt-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter promo code"
                                aria-label="Promo code"
                            />
                            <button className="btn btn-secondary">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Cart;
