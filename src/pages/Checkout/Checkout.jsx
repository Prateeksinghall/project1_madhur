import React, { useState } from "react";
import "./Checkout.scss";
import Address from "../../Components/Address/Address";

const Checkout = () => {
    const [selectedShippingOption, setSelectedShippingOption] = useState("Standard");
    const [coupon, setCoupon] = useState("");
    const [isCouponApplied, setIsCouponApplied] = useState(false);

    const applyCoupon = () => {
        if (coupon.trim() !== "") {
            setIsCouponApplied(true);
        }
    };

    return (
        <div className="checkout-container">
            {/* Step Indicator */}
            <div className="checkout-steps">
                <span>Cart Products</span>
                <hr />
                <span className="active-step">Select Address</span>
                <hr />
                <span>Select Payment Method</span>
            </div>

            <div className="checkout-content">
                {/* Address Section */}
                <Address />

                {/* Order Summary */}
                <div className="order-summary">
                    {/* Coupon Section */}
                    <div className="coupon-section">
                        <input
                            type="text"
                            placeholder="NEW36%"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                        // disabled={isCouponApplied}
                        />
                        <button
                            className={`apply-btn button ${isCouponApplied ? "applied" : ""}`}
                            onClick={applyCoupon}
                        // disabled={isCouponApplied}
                        >
                            {isCouponApplied ? "Applied" : "Apply"}
                        </button>
                    </div>

                    <p className="view-coupons">
                        View all coupons <span className="here-link">HERE</span>
                    </p>

                    {/* Price Breakdown */}
                    <div className="price-summary">
                        <p><span>Item price:</span> ₹2599.00</p>
                        <p><span>Discount:</span> ₹600.00</p>
                        <p><span>Shipping charges:</span> ₹{selectedShippingOption === "Standard" ? "0.00" : "199.00"}</p>
                        <p><span>Coupon:</span> {isCouponApplied ? "Applied" : "Not applied"}</p>
                        <hr />
                        <h3>Subtotal: ₹{selectedShippingOption === "Standard" ? "599.00" : "798.00"}</h3>
                    </div>

                    {/* Shipping Options */}
                    <div className="shipping-options">
                        <h3>Shipping Options</h3>
                        <label>
                            <input
                                type="radio"
                                name="shipping-option"
                                value="Standard"
                                checked={selectedShippingOption === "Standard"}
                                onChange={() => setSelectedShippingOption("Standard")}
                            />
                            Standard - ₹0
                        </label>
                        <label className="expedited">
                            <input
                                type="radio"
                                name="shipping-option"
                                value="Expedited"
                                checked={selectedShippingOption === "Expedited"}
                                onChange={() => setSelectedShippingOption("Expedited")}
                            />
                            Expedited - ₹199
                            <p>Lorem ipsum dolor sit amet consectetur. Pretium donec a convallis sit phasellus amet.</p>
                        </label>
                    </div>

                    {/* CTA Button */}

                    <button className="proceed-btn button">Use this address</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
