import React, { useState } from "react";
import NataLogo from "../../assets/images/NaataNavBar.png";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import "./Navbar.scss"; // Import SCSS for styling
import { LiaGreaterThanSolid } from "react-icons/lia";

const Menu = [
    {
        id: 1,
        name: "OUR STORY",
        link: "/#"
    },
    {
        id: 2,
        name: "SAREES",
        link: "#",
        subMenu: [
            {
                id: 21,
                name: "Shop by Collection",
                link: "/#"
            },
            {
                id: 22,
                name: "Shop by Fabric",
                link: "#",
                subMenu: [
                    { id: 231, name: "Pure Cotton", link: "/#" },
                    { id: 232, name: "Woolen", link: "/#" },
                    { id: 233, name: "Silk", link: "/#" },
                    { id: 234, name: "Nylon", link: "/#" }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "BEST SELLERS",
        link: "/#",
        subMenu: [
            {
                id: 21,
                name: "Shop by Collection",
                link: "/#"
            },
            {
                id: 22,
                name: "Shop by Fabric",
                link: "#",
                subMenu: [
                    { id: 231, name: "Pure Cotton", link: "/#" },
                    { id: 232, name: "Woolen", link: "/#" },
                    { id: 233, name: "Silk", link: "/#" },
                    { id: 234, name: "Nylon", link: "/#" }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "SALE",
        link: "/#",
        subMenu: [
            {
                id: 21,
                name: "Shop by Collection",
                link: "/#"
            },
            {
                id: 22,
                name: "Shop by Fabric",
                link: "#",
                subMenu: [
                    { id: 231, name: "Pure Cotton", link: "/#" },
                    { id: 232, name: "Woolen", link: "/#" },
                    { id: 233, name: "Silk", link: "/#" },
                    { id: 234, name: "Nylon", link: "/#" }
                ]
            }
        ]
    }
];

const Navbar = () => {
    const [openMenus, setOpenMenus] = useState({});
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSubmenu = (id, e) => {
        e.stopPropagation();

        setOpenMenus((prev) => {
            const newState = { ...prev };

            // Close all menus first
            Object.keys(newState).forEach((key) => {
                newState[key] = false;
            });

            // Toggle the selected menu
            newState[id] = !newState[id];

            // Check if any menu is open
            const anyMenuOpen = Object.values(newState).some((isOpen) => isOpen);
            setIsMenuOpen(anyMenuOpen);

            return newState;
        });
    };


    const closeAllMenus = () => {
        setOpenMenus({});
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`} onClick={closeAllMenus}>
            {/* Left Side: Logo + Menu */}
            <div className="leftNavBar">
                <img src={NataLogo} alt="Logo" className="logo" />
                <ul className="menu" onClick={(e) => e.stopPropagation()}>
                    {Menu.map((item) => (
                        <li key={item.id} className={item.subMenu ? "has-nested-submenu" : ""}>
                            <a
                                href={item.link}
                                onClick={(e) => {
                                    if (item.subMenu) {
                                        e.preventDefault();
                                        toggleSubmenu(item.id, e);
                                    }
                                }}
                            >
                                {item.name}
                            </a>
                            {item.subMenu && (
                                <ul className={`submenu ${openMenus[item.id] ? "active" : ""}`}>
                                    {item.subMenu.map((subItem) => (
                                        <li key={subItem.id} className={subItem.subMenu ? "has-nested-submenu" : ""}>
                                            <a
                                                href={subItem.link}
                                                onClick={(e) => {
                                                    if (subItem.subMenu) {
                                                        e.preventDefault();
                                                        toggleSubmenu(subItem.id, e);
                                                    }
                                                }}
                                            >
                                                <span className="submenu-text">{subItem.name}</span>
                                                {subItem.subMenu && <LiaGreaterThanSolid className="submenu-arrow" />}

                                            </a>
                                            {subItem.subMenu && (
                                                <ul className={`nested-submenu ${openMenus[subItem.id] ? "active" : ""}`}>
                                                    {subItem.subMenu.map((nestedItem) => (
                                                        <li key={nestedItem.id}>
                                                            <a href={nestedItem.link}>{nestedItem.name}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
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
