import { useState } from "react";
import "./studentstopnav.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

function StudentsTopNav() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className="outer-db-top">
            <div className="pages-row db-top-navbar">
                <div className="pages-col-10">
                    <div className={click ? 'hb-icon-holder active' : 'hb-icon-holder'} onClick={handleClick}>
                        <div className="hb-icon-one"></div>
                        <div className="hb-icon-two"></div>
                    </div>
                </div>
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
