import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.auth.user); // ✅ Get user state at the top level

    const handleLogin = () => {
        if (email === 'test@example.com' && password === 'password123') { // Replace with actual authentication logic
            const userData = { email };
            dispatch(login(userData)); // Dispatch login action
            setError(''); // Clear any previous errors
            navigate('/'); // ✅ Navigate only if login is successful
        } else {
            setError('Invalid email or password. Please try again.');
        }
    };

    const handleLogOut = () => {
        dispatch(logout());
        navigate('/');// ✅ Redirect to login page after logout
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error if login fails */}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
        </div>
    );
};

export default Login;
