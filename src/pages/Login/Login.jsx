import React, { useState } from 'react';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { BiHide, BiShow } from 'react-icons/bi';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user);

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form submission

        if (email === 'test@example.com' && password === 'password123') {
            const userData = { email };
            dispatch(login(userData));
            setError('');
            navigate('/');
        } else {
            setError('Invalid email or password. Please try again.');
        }
    };

    const handleCreateAccount = () => {
        navigate('/register');
    };

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="Login">
            <div className="leftLogin">
                <div className="welcome">Welcome Back</div>
                <form onSubmit={handleLogin}>
                    <div className="email">
                        <div className="label">Your Email or Phone</div>
                        <input
                            type="email"
                            placeholder="Enter your Email or Phone"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Bind input to state
                        />
                    </div>
                    <div className="password">
                        <div className="label">Your Password</div>
                        <div className="password-input-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your Password"
                                id="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div
                                className="password-toggle-icon"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <BiHide /> : <BiShow />}
                            </div>
                        </div>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <span className="forgotPassword">Forgot Password?</span>
                    <button type="submit" className="loginButton">
                        Log In
                    </button>
                    <span>or</span>
                    <div className="loginGoogle">Log In With Google</div>
                </form>
            </div>

            <div className="rightLogin">
                <div className="welcome">New Here?</div>
                <label htmlFor="createAccount">Create Your Account</label>
                <p>
                    Sign up for a free account at our store. Registration is quick and
                    easy. It allows you to order from our shop. To start shopping, Create
                    Account.
                </p>
                <button className="createAccountButton" onClick={handleCreateAccount}>
                    Create Account
                </button>
            </div>
        </div>
    );
};

export default Login;
