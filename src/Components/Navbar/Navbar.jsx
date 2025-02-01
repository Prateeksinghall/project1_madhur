import React from "react";
import NataLogo from "../../assets/images/NaataNavBar.png";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import "./Navbar.scss"; // Import SCSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Left Side: Logo + Menu */}
            <div className="leftNavBar">
                <img src={NataLogo} alt="Logo" className="logo" />
                <ul className="menu">
                    <li>OUR STORY</li>
                    <li>SAREES</li>
                    <li>BEST SELLER</li>
                    <li>SALE</li>
                </ul>
            </div>

            {/* Right Side: Icons */}
            <div className="rightNavBar">
                <IoIosSearch className="icon" />
                <IoCartOutline className="icon" />
                <IoPersonOutline className="icon" />
            </div>
        </nav>
    );
};

export default Navbar;
