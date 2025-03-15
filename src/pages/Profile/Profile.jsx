import React, { useState } from "react";
import './Profile.scss';
import profileimg from "../../assets/images/ProfilePage/ProfileImage.jpeg";
import profileimgRight from "../../assets/images/ProfilePage/ProfilePageRight.jpeg";
import { FaUser, FaMapMarkerAlt, FaBox, FaHeart, FaSignOutAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addAddress, editAddress, deleteAddress, setDefaultAddress } from "../../redux/addressSlice";
import Address from "../../Components/Address/Address";



const Profile = () => {
    const [activeTab, setActiveTab] = useState("personal");

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
                    <Address />
                )}
            </div>

            {activeTab === "personal" && (
                <div className="profile-illustration">
                    <img src={profileimgRight} alt="Illustration" />
                </div>
            )}
        </div>
    );
};

export default Profile;
