import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Your Cart</h2>
            <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;
