import "./adminnavigation.css"
import HouseIcon from '@mui/icons-material/House';
import SchoolIcon from '@mui/icons-material/School';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import QuizIcon from '@mui/icons-material/Quiz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React, { useState } from "react";
import { Link } from "react-router-dom";


const navLinks = [
    { path: '/admin/home', label: 'Home', icon: <HouseIcon /> },
    { path: '/admin/course', label: 'Courses', icon: <SchoolIcon /> },
    { path: '/admin/users', label: 'Users', icon: <AccountBoxIcon /> },
    { path: '/admin/classes', label: 'Classes', icon: <QuizIcon /> },
    { path: '/admin/attendance', label: 'Attendance', icon: <CalendarMonthIcon /> },
    { path: '/admin/profile', label: 'Profile', icon: <AccountCircleIcon /> }
];


function AdminNavigation() {
    const [activeLink, setActiveLink] = useState('/admin'); // Set the default active link
    const handleNavClick = (link) => {
        setActiveLink(link);
    };
    return (
        <div className="db-ln-outer">
            <div className="pages-row db-left-navbar">
                <div className="pages-col-12">
                    <h1 className="db-title-logo">LMS</h1>
                </div>
                <div className="pages-col-12">
                    {navLinks.map(({ path, label, icon }, index) => (
                        <nav
                            key={index}
                            className={`db-nav-links ${activeLink === path ? "active" : ""}`}
                            onClick={() => handleNavClick(path)}
                        >

                            <Link to={path}>{icon}<p>{label}</p></Link>
                        </nav>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminNavigation;
