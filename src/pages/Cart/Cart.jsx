import React from 'react'
import "./Cart.scss"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartSlice';
const Cart = () => {

    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach(element => {
            total += element.quantity * element.price
        });
        return total.toFixed(2);
    }
    return (
        <div className="cart">
            <h1>Product In Your Cart</h1>
            {products?.map((item) =>
                <div className="item" key={item.id}>
                    <img src={`${import.meta.env.VITE_API_UPLOAD_URL}` + item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">{item.quantity} X ${item.price}</div>
                    </div>
                    {/* <DeleteOutlineIcon className='delete' onClick={() => dispatch(removeItem(item.id))} /> */}
                    delete
                </div>
            )}
            <div className="total">
                <span>Sub Total</span>
                <span>${totalPrice()}</span>
            </div>
            <button>Proceed To Checkout</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    )
}

export default Cart