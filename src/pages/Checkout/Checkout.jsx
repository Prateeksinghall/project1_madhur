import React, { useState } from "react";
import "./Checkout.scss";
import Address from "../../Components/Address/Address";
import visaImage from "../../assets/images/visaFooter.png"
import rupayImage from "../../assets/images/rupayFooter.png"
import { useSelector } from "react-redux";

const Checkout = () => {
    const [selectedShippingOption, setSelectedShippingOption] = useState("Standard");
    const [coupon, setCoupon] = useState("");
    const [isCouponApplied, setIsCouponApplied] = useState(false);
    const [step, setStep] = useState(2);

    // Fetch addresses from Redux
    const addresses = useSelector((state) => state.address.addresses);

    // Check if there are any addresses
    const hasAddress = addresses.length > 0;

    // Check if at least one address is set as default
    const defaultAddressExists = addresses.some((address) => address.default);

    const applyCoupon = () => {
        if (coupon.trim() !== "") {
            setIsCouponApplied(true);
        }
    };
    const handleUseAddressClick = () => {
        if (!hasAddress) {
            alert("No address found. Please add an address before proceeding.");
        } else if (!defaultAddressExists) {
            alert("Please set a default address before proceeding.");
        } else {
            setStep(3);
        }
    };

    return (
        <div className="checkout-container">
            {/* Step Indicator */}
            <div className="checkout-steps">
                <span className={step === 1 ? "active-step" : ""} onClick={() => setStep(1)}>Cart Products</span>
                <hr />
                <span className={step === 2 ? "active-step" : ""} onClick={() => setStep(2)}>Select Address</span>
                <hr />
                <span className={step === 3 ? "active-step" : ""}>Select Payment Method</span>
            </div>

            <div className="checkout-content">
                {/* Address Section */}
                <div className="left-section">
                    {step === 2 ? <Address /> : (
                        <div className="payment-section">
                            <h2>Select A Payment Method</h2>

                            {/* Payment Methods */}
                            <div className="payment-options">
                                <label className="payment-option">
                                    <input type="radio" name="payment" />
                                    <div className="payment-content">
                                        <span>Credit & Debit cards</span>
                                        <p>Enter card details →</p>
                                        <div className="payment-logos">

                                            <img src={visaImage} alt="VISA" />
                                            <img src={rupayImage} alt="RuPay" />

                                            {/* <p className="payment-info">We accept all major credit and debit cards</p> */}
                                        </div>
                                    </div>
                                </label>

                                <label className="payment-option">
                                    <input type="radio" name="payment" />
                                    <div className="payment-content">
                                        <span>Direct bank transfer</span>
                                        <p>RTGS / NEFT / IMPS / SWIFT</p>
                                        {/* <div className="bank-details">
                                            <h4>Our Bank details</h4>
                                            <p>Ac holder: xyzxyz.xyz</p>
                                            <p>Account no: 12345678901234</p>
                                            <p>IFSC no: 12345678901234</p>
                                            <p>Bank branch: xyzxyz.xyz</p>
                                        </div> */}
                                    </div>
                                </label>

                                <label className="payment-option">
                                    <input type="radio" name="payment" />
                                    <div className="payment-content">
                                        <span>Net banking</span>
                                        <p>Subhranil Maity</p>
                                    </div>
                                </label>

                                <label className="payment-option upi-option">
                                    <input type="radio" name="payment" />
                                    <div className="payment-content">
                                        <span>UPI apps</span>
                                        <div className="upi-input">
                                            <input className="upi-id" type="text" placeholder="Please enter your UPI ID" />
                                            <button className="verify-btn">Verify</button>
                                        </div>
                                    </div>
                                </label>
                                <label className="payment-option">
                                    <input type="radio" name="payment" />
                                    <div className="payment-content">
                                        <span>Cash on delivery</span>
                                        <p>Cash, UPI, Cards accepted</p>
                                    </div>
                                </label>
                            </div>
                        </div>

                    )}
                </div>

                {/* Order Summary */}
                <div className="order-summary">
                    {/* Coupon Section */}
                    <div className="coupon-section">
                        <input
                            type="text"
                            placeholder="NEW36%"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                        />
                        <button
                            className={`apply-btn button ${isCouponApplied ? "applied" : ""}`}
                            onClick={applyCoupon}
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
                    <div className="checkout-button-container">
                        {step === 2 ? (
                            <button
                                className="checkout-btn"
                                onClick={handleUseAddressClick}
                            // disabled={!hasAddress || !defaultAddressExists}  // Disable if no address or no default address
                            >
                                Use this address
                            </button>
                        ) : (
                            <button className="checkout-btn">Place your order</button>
                        )}
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Checkout;
