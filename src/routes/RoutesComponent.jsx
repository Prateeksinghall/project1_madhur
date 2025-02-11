import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Cart from '../pages/Cart/Cart';
import Checkout from '../pages/Checkout/Checkout';
import Orders from '../pages/Order/Order';

const PrivateRoute = ({ children }) => {
    const user = useSelector(state => state.auth.user);
    return user ? children : <Navigate to="/login" />;
};

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={< Home />} />
            < Route path="/login" element={< Login />} />
            < Route path="/cart" element={< Cart />} />
            {/* Protected Routes */}
            <Route path="/checkout" element={< PrivateRoute > <Checkout /></PrivateRoute >} />
            < Route path="/orders" element={< PrivateRoute > <Orders /></PrivateRoute >} />
        </Routes>
    );
};

export default RoutesComponent;
