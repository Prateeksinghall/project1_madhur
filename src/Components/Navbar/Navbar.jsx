import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NataLogo from "../../assets/images/NaataNavBar.png";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import "./Navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { PiGreaterThan } from "react-icons/pi";

const Menu = [
    {
        id: 1,
        name: "OUR STORY",
        link: "/"
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
                nested_subMenu: [
                    { id: 1, name: "Mul Cotton", link: "/#" },
                    { id: 2, name: "Pure Cotton", link: "/#" },
                    { id: 3, name: "Cotton Zari", link: "/#" },
                    { id: 4, name: "Cotton Zamdani", link: "/#" }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "BEST SELLERS",
        link: "/products/1"
    },
    {
        id: 4,
        name: "SALE",
        link: "/products/2"
    }
];


const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className={`navbar`} >

            <div className="leftNavBar">
                <img src={NataLogo} alt="Logo" className="logo" onClick={() => navigate("/")} />
                <ul className="menu" >
                    {Menu.map((item) => (
                        <li key={item.id} className={item.subMenu ? "has-nested-submenu" : ""}>
                            <a onClick={() => navigate(item.link)}>
                                {item.name}
                            </a>
                            {item.subMenu && (
                                <ul className="submenu" >
                                    {
                                        item.subMenu.map((subItem) => (
                                            <li key={subItem.id} >
                                                <a href={subItem.link}>
                                                    <span className="submenu-text">{subItem.name}</span>
                                                    {subItem.nested_subMenu && <PiGreaterThan className="submenu-arrow" />}

                                                </a>
                                                {subItem.nested_subMenu && (
                                                    <ul className="nested-submenu">
                                                        {subItem.nested_subMenu.map((nestedItem) => (
                                                            <li key={nestedItem.id} onClick={() => navigate(`/categories/${nestedItem.id}`)}>
                                                                <a >{nestedItem.name}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))
                                    }
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Side: Icons */}
            <div className="rightNavBar">
                <IoIosSearch className="icon" />
                <IoCartOutline className="icon" onClick={() => navigate("/cart")} />  {/* Navigate to Cart */}
                <IoPersonOutline className="icon" onClick={() => navigate("/login")} />
            </div>
        </nav >
    );
};


const NavBarSmall = () => {
    const navigate = useNavigate();

    // Function to handle navigation and close the small menu
    const handleNavigation = (link, hasSubMenu) => {
        if (!hasSubMenu) {
            navigate(link); // Only navigate if there's no submenu
            const nav = document.getElementById("smallMenu");
            const toggle = document.getElementById("smallToggle");
            nav.classList.remove('show-menu'); // Hide the menu
            toggle.classList.remove('show-toggle'); // Reset the toggle button
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    };

    // Toggle submenu
    const toggleSubMenu = (event) => {
        event.stopPropagation(); // Prevent the parent click event
        const submenu = event.currentTarget.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('show-submenu'); // Toggle the submenu visibility
        }
    };

    return (
        <nav className="smallNavBar">
            <div className="smallNavBarContainer">
                <img src={NataLogo} alt="" className="smallLogo" onClick={() => handleNavigation("/")} />
                <div className="smallToggle" id="smallToggle" onClick={() => {
                    const nav = document.getElementById("smallMenu");
                    const toggle = document.getElementById("smallToggle");
                    nav.classList.toggle('show-menu');
                    toggle.classList.toggle('show-toggle');
                    if (nav.classList.contains('show-menu')) {
                        document.body.style.overflow = 'hidden';
                    } else {
                        document.body.style.overflow = 'auto';
                    }
                }}>
                    <RxHamburgerMenu className="smallNavOpen" />
                    <RxCross2 className="smallNavClose" />
                </div>
            </div>

            <div className="smallMenu" id="smallMenu">
                <ul className="smallList">
                    {Menu.map((item) => (
                        <li key={item.id} className={`smallMenuLi ${item.subMenu ? "dropdown__item" : ""}`}>
                            <a onClick={(e) => item.subMenu ? toggleSubMenu(e) : handleNavigation(item.link, false)}>
                                {item.name}
                            </a>
                            {item.subMenu && (
                                <ul className="dropdown__menu">
                                    {item.subMenu.map((subItem) => (
                                        <li key={subItem.id} className={`${subItem.nested_subMenu ? "dropdown__subitem" : ""}`}>
                                            <a onClick={(e) => subItem.nested_subMenu ? toggleSubMenu(e) : handleNavigation(subItem.link, false)} className="dropdown__link">
                                                <span className="submenu-text">{subItem.name}</span>
                                            </a>
                                            {subItem.nested_subMenu && (
                                                <ul className="dropdown__submenu">
                                                    {subItem.nested_subMenu.map((nestedItem) => (
                                                        <li key={nestedItem.id}>
                                                            <a onClick={() => handleNavigation(`/categories/${nestedItem.id}`, false)} className="dropdown__sublink">
                                                                {nestedItem.name}
                                                            </a>
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

                <div className="smallRightNavBar">
                    <IoIosSearch className="icon" />
                    <IoCartOutline className="icon" onClick={() => handleNavigation("/cart", false)} />  {/* Navigate to Cart */}
                    <IoPersonOutline className="icon" onClick={() => handleNavigation("/login", false)} />
                </div>
            </div>
        </nav>
    );
};


const ResponsiveNavbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1118);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1118);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile ? <NavBarSmall /> : <Navbar />;
};

export default ResponsiveNavbar;
