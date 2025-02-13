import React, { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const navigate = useNavigate();

    const handleSignin = () => {
        navigate('/login')
    }
    const handleSendOtp = () => {
        console.log('Send OTP clicked');
    };

    return (
        <div className="Register">
            <div className="leftSection">
                <h2>Create account</h2>
                <div className="formGroup">
                    <label>First Name</label>
                    <input
                        type="text"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="formGroup">
                    <label>Last Name</label>
                    <input
                        type="text"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="formGroup">
                    <label>Your Email or Phone</label>
                    <input
                        type="text"
                        placeholder="Enter email or phone"
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                    />
                </div>
                <button className="sendOtpButton" onClick={handleSendOtp}>
                    Send Otp
                </button>
                <div className="divider">Or</div>
                <button className="googleButton">
                    <span></span> Sign up using Google
                </button>
            </div>

            <div className="rightSection">
                <h2>Sign In</h2>
                <p>Already have an account?</p>
                <p>
                    Sign in to your account to access your account. It allows you to be able to
                    order from our shop. To start shopping click register.
                </p>
                <button className="signInButton" onClick={handleSignin}>Sign In</button>
            </div>
        </div>
    );
};

export default Register;
