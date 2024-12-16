import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const PlaceOrder = () => {
  const { getTotalCartAmount,token, food_list,cartItems,url } = useContext(StoreContext);

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async(event)=>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    // console.log(orderItems);
    let orderData = {
      address: data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url)
    }
    else{
      alert('Error')
    }
  }

  const navigate = useNavigate();

  // useEffect(()=>{
  //   if(!token){
  //     navigate('/cart')
  //   }
  //   else if(getTotalCartAmount() ===0){
  //     navigate('/cart')
  //   }
  // },[token])

  // useEffect(()=>{
  //   console.log(data);
  // },[data])

  return (
    <form onSubmit={placeOrder} className="place-order container py-4">
      <div className="row">
        {/* Left Section: Delivery Information */}
        <div className="col-lg-6 mb-4">
          <h3 className="mb-3">Delivery Information</h3>
          <div className="mb-3">
            <div className="row">
              <div className="col-6">
                <input required name='firstName'  onChange={onChangeHandler} value={data.firstName} type="text" className="form-control" placeholder="First Name" />
              </div>
              <div className="col-6">
                <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" className="form-control" placeholder="Last Name" />
              </div>
            </div>
          </div>
          <input required name='email' onChange={onChangeHandler} value={data.email} type="email" className="form-control mb-3" placeholder="Email Address" />
          <input required name='street' onChange={onChangeHandler} value={data.street} type="text" className="form-control mb-3" placeholder="Street" />
          <div className="row mb-3">
            <div className="col-6">
              <input required name='city' onChange={onChangeHandler} value={data.city} type="text" className="form-control" placeholder="City" />
            </div>
            <div className="col-6">
              <input required name='state' onChange={onChangeHandler} value={data.state} type="text" className="form-control" placeholder="State" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" className="form-control" placeholder="Zip Code" />
            </div>
            <div className="col-6">
              <input required name='country' onChange={onChangeHandler} value={data.country} type="text" className="form-control" placeholder="Country" />
            </div>
          </div>
          <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" className="form-control mb-3" placeholder="Phone" />
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
            <button type='submit' className="btn btn-primary w-100 mt-3">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
