import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../redux/cartSlice'; // Import actions
import './Cart.scss';
import { RxCross2 } from "react-icons/rx";

const Cart = ({ setCartOpen }) => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    return (
        <div className="cart">
            <div className="catHeader">
                <h1>CART</h1>
                <RxCross2 className="cartClose" onClick={() => setCartOpen(false)} />
            </div>
            <hr />
            <div className="cartProductContainer">
                {cartItems.length === 0 ? (
                    <div className="emptyCartMessage">Cart is Empty</div>
                ) : (
                    cartItems.map((item) => (
                        <div className="cartProduct" key={item.id}>
                            <img src={item.first} alt={item.pname} />
                            <div className="cartProdutDetails">
                                <span>{item.pname}</span>
                                <span>{item.price}</span>
                                <div className="cartProductCounter">
                                    <div className="cartButton" onClick={() => dispatch(decreaseQuantity(item.id))}>-</div>
                                    <div className="cartButton">{item.count}</div>
                                    <div className="cartButton" onClick={() => dispatch(increaseQuantity(item.id))}>+</div>
                                    <div className="removeItem" onClick={() => dispatch(removeFromCart(item.id))}>REMOVE</div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <hr />
            <div className="cartBottom">
                <span>Add order note</span>
                <span>Taxes and shipping calculated at checkout</span>
                <button className="checkoutButton">Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
