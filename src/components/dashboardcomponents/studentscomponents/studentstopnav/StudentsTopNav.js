import React from "react";
import "./studentstopnav.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

function StudentsTopNav() {
    return (
        <div className="outer-db-top">
            <div className="pages-row db-top-navbar">
                <div className="pages-col-10"></div>
                <div className="pages-col-2">
                    <div className="pages-row db-top-nav-holder">
                        <nav className="">
                            <NotificationsIcon />
                        </nav>
                        <nav className="">
                            <SettingsIcon />
                        </nav>
                        <img className="db-user-profile" alt="Icon" src="https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg?auto=compress&cs=tinysrgb&w=1600" />

                    </div>
                </div>
            </div>
        </div>

    )
}

export default StudentsTopNav;
