import "./header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Header() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const navLinks = [
        { text: 'HOME', path: '/' },
        { text: 'DASHBOARD', path: '/student/home' },
        // Add more links as needed
    ];

    return (
        <div className='header-holder'>
            <header>
                <div className='pages-row'>
                    <div className='pages-col-3'>
                        <div className='home-logo'>
                            <h1 className="logo-title-one">VW<span className="logo-title-two">P</span></h1>
                        </div>
                    </div>
                    <div className="pages-col-6"></div>
                    <div className="pages-col-3">
                        <div className="pages-row">
                            <div className="pages-col-12">
                                <div className={click ? 'menu-title active' : 'menu-title'}>
                                    <p className="">MENU</p>
                                    <div className={click ? 'hb-icon-holder active' : 'hb-icon-holder'} onClick={handleClick}>
                                        <div className="hb-icon-one"></div>
                                        <div className="hb-icon-two"></div>
                                    </div>
                                </div>
                            </div>
                            <div className={click ? 'pages-col-12 pages-navbar active' : 'pages-col-12 pages-navbar'}>
                                <div className="pages-row navbar-holder">
                                    {navLinks.map((link, index) => (
                                        <nav key={index} className="home-navbar-link pages-col-4">
                                            <Link to={link.path}>{link.text}</Link>
                                        </nav>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
