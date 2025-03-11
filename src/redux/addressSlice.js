import { createSlice } from '@reduxjs/toolkit';

const dummyAddresses = [
    {
        id: 1,
        name: "Subhranil Maity",
        phone: "9876543210",
        address: "R-33, Bhabanipur, Haldia",
        city: "Haldia",
        state: "West Bengal",
        pincode: "721657",
        type: "Home",
        default: false
    },
    {
        id: 2,
        name: "Amit Sharma",
        phone: "9123456789",
        address: "C-12, Sector 18, Noida",
        city: "Noida",
        state: "Uttar Pradesh",
        pincode: "201301",
        type: "Office",
        default: false
    },
    {
        id: 3,
        name: "Amit Sharma",
        phone: "9123456789",
        address: "C-12, Sector 18, Noida",
        city: "Noida",
        state: "Uttar Pradesh",
        pincode: "201301",
        type: "Office",
        default: true
    },
    {
        id: 4,
        name: "Amit Sharma",
        phone: "9123456789",
        address: "C-12, Sector 18, Noida",
        city: "Noida",
        state: "Uttar Pradesh",
        pincode: "201301",
        type: "Office",
        default: false
    },
    {
        id: 5,
        name: "Amit Sharma",
        phone: "9123456789",
        address: "C-12, Sector 18, Noida",
        city: "Noida",
        state: "Uttar Pradesh",
        pincode: "201301",
        type: "Office",
        default: false
    }
];

// Load from localStorage, else use dummy data
const initialState = {
    addresses: JSON.parse(localStorage.getItem('addresses')) || dummyAddresses
};

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        addAddress: (state, action) => {
            state.addresses.push(action.payload);
            localStorage.setItem('addresses', JSON.stringify(state.addresses));
        },
        editAddress: (state, action) => {
            const index = state.addresses.findIndex(addr => addr.id === action.payload.id);
            if (index !== -1) {
                state.addresses[index] = action.payload;
                localStorage.setItem('addresses', JSON.stringify(state.addresses));
            }
        },
        deleteAddress: (state, action) => {
            state.addresses = state.addresses.filter(addr => addr.id !== action.payload);
            localStorage.setItem('addresses', JSON.stringify(state.addresses));
        },
        setDefaultAddress: (state, action) => {
            state.addresses = state.addresses.map(addr => ({
                ...addr,
                default: addr.id === action.payload // Set only the selected one as default
            }));
            localStorage.setItem('addresses', JSON.stringify(state.addresses));
        }
    }
});

export const { addAddress, editAddress, deleteAddress, setDefaultAddress } = addressSlice.actions;
export default addressSlice.reducer;
