import React, { useState } from "react";
import NataLogo from "../../assets/images/NaataNavBar.png";
import { IoCartOutline, IoPersonOutline, IoMenu, IoClose } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import "./Navbar.scss";
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
            { id: 21, name: "Shop by Collection", link: "/#" },
            {
                id: 22,
                name: "Shop by Fabric",
                link: "#",
                nested_subMenu: [
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
            { id: 21, name: "Shop by Collection", link: "/#" },
            {
                id: 22,
                name: "Shop by Fabric",
                link: "#",
                nested_subMenu: [
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
            { id: 21, name: "Shop by Collection", link: "/#" },
            {
                id: 22,
                name: "Shop by Fabric",
                link: "#",
                nested_subMenu: [
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [openNestedSubMenu, setOpenNestedSubMenu] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubMenu = (id) => {
        setOpenSubMenu(openSubMenu === id ? null : id);
    };

    const toggleNestedSubMenu = (id) => {
        setOpenNestedSubMenu(openNestedSubMenu === id ? null : id);
    };

    return (
        <nav className="navbar">
            {/* Hamburger Menu */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                {isMenuOpen ? <IoClose className="hamburger-icon" /> : <IoMenu className="hamburger-icon" />}
            </div>

            {/* Nata Logo - Always Centered */}
            <div className="logo-container">
                <img src={NataLogo} alt="Logo" className="logo" />
            </div>

            {/* Right Navbar */}
            <div className="rightNavBar">
                <IoIosSearch className="icon" />
                <IoCartOutline className="icon" />
                <IoPersonOutline className="icon" />
            </div>

            {/* Sidebar Menu */}
            <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
                <ul className="mobile-menu">
                    {Menu.map((item) => (
                        <li key={item.id}>
                            <a href={item.link} onClick={(e) => item.subMenu && e.preventDefault()}>
                                {item.name}
                            </a>
                            {item.subMenu && (
                                <>
                                    <button onClick={() => toggleSubMenu(item.id)} className="submenu-toggle">
                                        {openSubMenu === item.id ? "▲" : "▼"}
                                    </button>
                                    <ul className={`submenu ${openSubMenu === item.id ? "open" : ""}`}>
                                        {item.subMenu.map((subItem) => (
                                            <li key={subItem.id}>
                                                <a href={subItem.link} onClick={(e) => subItem.nested_subMenu && e.preventDefault()}>
                                                    {subItem.name}
                                                </a>
                                                {subItem.nested_subMenu && (
                                                    <>
                                                        <button onClick={() => toggleNestedSubMenu(subItem.id)} className="nested-submenu-toggle">
                                                            {openNestedSubMenu === subItem.id ? "▲" : "▼"}
                                                        </button>
                                                        <ul className={`nested-submenu ${openNestedSubMenu === subItem.id ? "open" : ""}`}>
                                                            {subItem.nested_subMenu.map((nestedItem) => (
                                                                <li key={nestedItem.id}>
                                                                    <a href={nestedItem.link}>{nestedItem.name}</a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar_;
