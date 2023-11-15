import "./studentsnavigation.css"
import HouseIcon from '@mui/icons-material/House';
import SchoolIcon from '@mui/icons-material/School';
import CreateIcon from '@mui/icons-material/Create';
import QuizIcon from '@mui/icons-material/Quiz';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React, { useState } from "react";
import { Link } from "react-router-dom";


const navLinks = [
    { path: '/student/home', label: 'Home', icon: <HouseIcon /> },
    { path: '/student/course', label: 'Courses', icon: <SchoolIcon /> },
    { path: '/student/assignment', label: 'Assignments', icon: <CreateIcon /> },
    { path: '/student/quiz', label: 'Quizzes', icon: <QuizIcon /> },
    { path: '/student/test', label: 'Unit Test', icon: <HistoryEduIcon /> },
    { path: '/student/grades', label: 'Grades', icon: <CreditScoreIcon /> },
    { path: '/student/progress', label: 'Progress', icon: <DonutLargeIcon /> },
    { path: '/student/attendance', label: 'Attendance', icon: <CalendarMonthIcon /> },
    { path: '/student/profile', label: 'Profile', icon: <AccountCircleIcon /> }
];


function StudentsNavigation() {
    const [activeLink, setActiveLink] = useState('/student'); // Set the default active link
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

                            <Link to={path}>{icon}{label}</Link>
                        </nav>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StudentsNavigation;
