import React, { useState } from "react";
import './Profile.scss';
import profileimg from "../../assets/images/ProfilePage/ProfileImage.jpeg";
import profileimgRight from "../../assets/images/ProfilePage/ProfilePageRight.jpeg";
import { FaUser, FaMapMarkerAlt, FaBox, FaHeart, FaSignOutAlt, FaEnvelope, FaPhone } from "react-icons/fa";
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

const Profile = () => {
    const [activeTab, setActiveTab] = useState("personal");
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [selectedRadio, setSelectedRadio] = useState(null);

    const addresses = useSelector((state) => state.address.addresses);
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({ name: "", company: "", address: "", city: "", state: "", pincode: "", phone: "" });

    // Handle Add Address Modal
    const handleAddAddress = () => {
        setIsEditing(false);
        setFormState({ name: "", company: "", address: "", city: "", state: "", pincode: "", phone: "" });
        setShowModal(true);
    };

    // Handle Edit Address Modal
    const handleEditAddress = (address) => {
        setIsEditing(true);
        setFormState({ ...address });
        setSelectedAddress(address);
        setShowModal(true);
    };

    // Handle Save Address
    const saveAddress = () => {
        if (isEditing) {
            dispatch(editAddress({ ...formState, id: selectedAddress.id }));
        } else {
            dispatch(addAddress({ ...formState, id: Date.now() }));
        }
        setShowModal(false);
    };

    // Handle Delete Address
    const handleDeleteAddress = (id) => {
        dispatch(deleteAddress(id));
    };

    // Close Modal
    const closeModal = () => setShowModal(false);

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };
    return (
        <div className="profile-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <ul>
                    <li className={activeTab === "personal" ? "active" : ""} onClick={() => setActiveTab("personal")}>
                        <FaUser /> Personal details
                    </li>
                    <li className={activeTab === "address" ? "active" : ""} onClick={() => setActiveTab("address")}>
                        <FaMapMarkerAlt /> Address details
                    </li>
                    <li><FaBox /> Order history</li>
                    <li><FaHeart /> Your wishlist</li>
                </ul>
                <button className="signout" onClick={() => { console.log("triggred") }}><FaSignOutAlt /> Sign out</button>
            </aside>

            {/* Content Section */}
            <div className="content-section">
                {activeTab === "personal" ? (
                    <div className="profile-content">
                        <div className="profile-header">
                            <img src={profileimg} alt="Profile" className="profile-image" />
                            <h2>Personal details</h2>
                        </div>

                        <form className="profile-form">
                            <div className="input-group">
                                <label><FaEnvelope /> <input type="text" placeholder="Enter your first name" /></label>
                                <label><FaEnvelope /> <input type="text" placeholder="Enter your last name" /></label>
                            </div>

                            <label className="full-width"><FaEnvelope />
                                <input type="email" value="subhranilmaity06@gmail.com" disabled />
                            </label>

                            <label className="full-width"><FaPhone />
                                <input type="tel" value="9876543210" disabled />
                            </label>

                            <button type="button" className="edit-btn">Edit</button>
                        </form>
                    </div>
                ) : (
                    <div className="address-content">
                        <h2>Select address</h2>
                        <button className="add-address-btn" onClick={handleAddAddress}>+ Add new address</button>
                        <div className="address-section">
                            {addresses.map((address) => (
                                <div className="address-item" key={address.id}>
                                    <input
                                        type="radio"
                                        name="selectedAddress"
                                        checked={address.default}
                                        onChange={() => dispatch(setDefaultAddress(address.id))}
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
                )}
            </div>

            {activeTab === "personal" && (
                <div className="profile-illustration">
                    <img src={profileimgRight} alt="Illustration" />
                </div>
            )}
            {/* Add/Edit Address Modal */}
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
        </div>
    );
};

export default Profile;
