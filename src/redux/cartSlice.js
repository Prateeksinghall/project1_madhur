import { createSlice } from '@reduxjs/toolkit';

// Load initial cart state from localStorage
const loadCartFromStorage = () => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [{ id: 1, first: "/src/assets/images/Products/product_1_1.png", second: "/src/assets/images/Products/product_1_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 5, count: 4 },
    { id: 2, first: "/src/assets/images/Products/product_2_1.png", second: "/src/assets/images/Products/product_2_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 4.5, count: 2 },
    { id: 3, first: "/src/assets/images/Products/product_3_1.png", second: "/src/assets/images/Products/product_3_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 4, count: 3 }];
};

const initialState = {
    cartItems: loadCartFromStorage() // Initialize with stored cart
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemExists = state.cartItems.find(item => item.id === action.payload.id);
            if (itemExists) {
                itemExists.count += 1; // Increase count if item already exists
            } else {
                state.cartItems.push({ ...action.payload, count: 1 });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Save to localStorage
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
                item.count += 1;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
                if (item.count > 1) {
                    item.count -= 1;
                } else {
                    state.cartItems = state.cartItems.filter(item => item.id !== action.payload); // Remove if count reaches 0
                }
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.removeItem('cartItems'); // Clear cart from storage
        }
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
