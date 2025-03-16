import React, { useState } from 'react'
import './Address.scss'
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addAddress, editAddress, deleteAddress, setDefaultAddress } from "../../redux/addressSlice";

const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const Address = () => {
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [formState, setFormState] = useState({ name: "", company: "", address: "", city: "", state: "", pincode: "", phone: "" });

    const addresses = useSelector((state) => state.address.addresses);
    const dispatch = useDispatch();

    const handleAddAddress = () => {
        setIsEditing(false);
        setFormState({ name: "", company: "", address: "", city: "", state: "", pincode: "", phone: "" });
        setShowModal(true);
    };

    const handleEditAddress = (address) => {
        setIsEditing(true);
        setFormState({ ...address });
        setSelectedAddress(address);
        setShowModal(true);
    };

    const handleSelectAddress = (id) => {
        setSelectedAddressId(id);
        dispatch(setDefaultAddress(id));
    };

    const saveAddress = (e) => {
        e.preventDefault();
        if (isEditing) {
            dispatch(editAddress({ ...formState, id: selectedAddress.id }));
        } else {
            dispatch(addAddress({ ...formState, id: Date.now() }));
        }
        setShowModal(false);
    };

    const handleDeleteAddress = (id) => {
        dispatch(deleteAddress(id));
    };

    const closeModal = () => setShowModal(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            <div className="address-content">
                <h2>Select address</h2>
                <button className="add-address-btn" onClick={handleAddAddress}>+ Add new address</button>
                <div className="address-section">
                    {addresses.map((address) => (
                        <div className={`address-item ${address.default ? 'default' : ''}`} key={address.id}>
                            <input
                                type="radio"
                                name="selectedAddress"
                                checked={address.default}
                                onChange={() => handleSelectAddress(address.id)}
                            />
                            <div className="address-details">
                                <strong>{address.name}</strong>
                                <p>{address.address}, {address.city}, {address.state}, {address.pincode}, India</p>
                                <p>Ph no: {address.phone}</p>
                            </div>
                            <button className="edit-btn" onClick={() => handleEditAddress(address)}><MdEdit /></button>
                            <button className="delete-btn" onClick={() => handleDeleteAddress(address.id)}><MdDeleteOutline /></button>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{isEditing ? "Edit address" : "Add address"}</h2>
                        <form>
                            <label>
                                <input type="text" name="name" placeholder="Full Name" value={formState.name} onChange={handleInputChange} />
                            </label>
                            <label>
                                <input type="text" name="company" placeholder="Company" value={formState.company} onChange={handleInputChange} />
                            </label>
                            <label>
                                <input type="text" name="address" placeholder="Address" value={formState.address} onChange={handleInputChange} />
                            </label>
                            <label>
                                <input type="text" name="city" placeholder="City" value={formState.city} onChange={handleInputChange} />
                            </label>
                            <label>
                                <select name="state" value={formState.state} onChange={handleInputChange}>
                                    <option value="">Select State</option>
                                    {indianStates.map((state, index) => (
                                        <option key={index} value={state}>{state}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                <input type="text" name="pincode" placeholder="Pincode" value={formState.pincode} onChange={handleInputChange} />
                            </label>
                            <label>
                                <input type="text" name="phone" placeholder="Phone Number" value={formState.phone} onChange={handleInputChange} />
                            </label>
                            <button type="button" onClick={saveAddress}>Save</button>
                            <button type="button" onClick={closeModal}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Address;
