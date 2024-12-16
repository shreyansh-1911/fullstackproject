import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Verify from './Pages/Verify/Verify';
import MyOrders from './Pages/MyOrders/MyOrders';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

const App = () => {
  return (
    <>
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  {/* Register route */}
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
    </div>
    </>
    
  );
};

export default App;