import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="place-order container py-4">
      <div className="row">
        {/* Left Section: Delivery Information */}
        <div className="col-lg-6 mb-4">
          <h3 className="mb-3">Delivery Information</h3>
          <div className="mb-3">
            <div className="row">
              <div className="col-6">
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
              <div className="col-6">
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
            </div>
          </div>
          <input type="email" className="form-control mb-3" placeholder="Email Address" />
          <input type="text" className="form-control mb-3" placeholder="Street" />
          <div className="row mb-3">
            <div className="col-6">
              <input type="text" className="form-control" placeholder="City" />
            </div>
            <div className="col-6">
              <input type="text" className="form-control" placeholder="State" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <input type="text" className="form-control" placeholder="Zip Code" />
            </div>
            <div className="col-6">
              <input type="text" className="form-control" placeholder="Country" />
            </div>
          </div>
          <input type="text" className="form-control mb-3" placeholder="Phone" />
        </div>

        {/* Right Section: Cart Total */}
        <div className="col-lg-6">
          <div className="card p-3">
            <h4 className="text-center mb-4">Cart Total</h4>
            <div className="d-flex justify-content-between mb-3">
              <p className="mb-0">Subtotal</p>
              <p className="mb-0">${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-3">
              <p className="mb-0">Delivery Fee</p>
              <p className="mb-0">${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-3 fw-bold">
              <p className="mb-0">Total</p>
              <p className="mb-0">${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
            <button className="btn btn-primary w-100 mt-3">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
