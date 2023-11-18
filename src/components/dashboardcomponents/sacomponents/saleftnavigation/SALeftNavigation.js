import "./saleftnavigation.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
    { path: '/adminx/user', label: 'User', icon: <AccountBoxIcon /> },
];


function SALeftNavigation() {
    const [activeLink, setActiveLink] = useState('/adminx'); // Set the default active link
    const handleNavClick = (link) => {
        setActiveLink(link);
    };
    return (
        <div className="sa-ln-outer">
            <div className="pages-row sa-left-navbar">
                <div className="pages-col-12">
                    <h1 className="sa-title-logo">LMS</h1>
                </div>
                <div className="pages-col-12">
                    {navLinks.map(({ path, label, icon }, index) => (
                        <nav
                            key={index}
                            className={`sa-nav-links ${activeLink === path ? "active" : ""}`}
                            onClick={() => handleNavClick(path)}
                        >
                            <Link to={path}>{icon}{label}</Link>
                        </nav>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SALeftNavigation;
