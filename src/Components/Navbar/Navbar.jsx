import { React, useState, useEffect } from "react";
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
    return (
        <nav className={`navbar`} >

            <div className="leftNavBar">
                <img src={NataLogo} alt="Logo" className="logo" />
                <ul className="menu" >
                    {Menu.map((item) => (
                        <li key={item.id} className={item.subMenu ? "has-nested-submenu" : ""}>
                            <a href={item.link}>
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
                                                            <li key={nestedItem.id}>
                                                                <a href={nestedItem.link}>{nestedItem.name}</a>
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
                <IoCartOutline className="icon" />
                <IoPersonOutline className="icon" />
            </div>
        </nav >
    );
};


const NavBarSmall = () => {
    return (
        <nav className="smallNavBar">
            <div className="smallNavBarContainer">
                <img src={NataLogo} alt="" className="smallLogo" />
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
                <ul className="smallList" >
                    {Menu.map((item) => (
                        <li key={item.id} className={`smallMenuLi ${item.subMenu ? "dropdown__item" : ""}`}>
                            <a href={item.link}>
                                {item.name}
                            </a>
                            {/* {item.subMenu && <PiGreaterThan className="submenu-arrow" />} */}
                            {item.subMenu && (
                                <ul className="dropdown__menu" >
                                    {
                                        item.subMenu.map((subItem) => (
                                            <li key={subItem.id} className={`${subItem.nested_subMenu ? "dropdown__subitem" : ""}`}>
                                                <a href={subItem.link} className="dropdown__link">
                                                    <span className="submenu-text">{subItem.name}</span>
                                                    {/* {subItem.nested_subMenu && <LiaGreaterThanSolid className="submenu-arrow" />} */}
                                                </a>
                                                {subItem.nested_subMenu && (
                                                    <ul className="dropdown__submenu">
                                                        {subItem.nested_subMenu.map((nestedItem) => (
                                                            <li key={nestedItem.id} >
                                                                <a href={nestedItem.link} className="dropdown__sublink">{nestedItem.name}</a>
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

                <div className="smallRightNavBar">
                    <IoIosSearch className="icon" />
                    <IoCartOutline className="icon" />
                    <IoPersonOutline className="icon" />
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
