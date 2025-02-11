import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null, // Load user from local storage
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload)); // Save user
        },
        logout: (state) => {
            console.log("Here")
            state.user = null;
            localStorage.removeItem('user'); // Remove user
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
