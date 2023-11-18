import { Outlet } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import StudentsRightPanelTop from "../../../components/dashboardcomponents/studentscomponents/studentsrighpaneltop/StudentsRightPanelTop";
import StudentsSchedule from "../../../components/dashboardcomponents/studentscomponents/studentsschedule/StudentsSchedule";
import { useState } from "react";
import TeachersNavigation from "../../../components/dashboardcomponents/teacherscomponents/teachersnavigation/TeachersNavigation";

function DashboardTeacher() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='background-image-color'>
            <div className="background-gradient">
                <div className="home-container-fluid">
                    <div className="pages-row">
                        <div className={click ? 'pages-col-2 sn-outer active' : 'pages-col-2 sn-outer'}>
                            <TeachersNavigation />
                        </div>
                        <div className={click ? 'pages-col-10 md-outer active' : 'pages-col-10 md-outer'}>
                            <div className="pages-row">
                                <div className="pages-col-12">
                                    <div className="outer-db-top">
                                        <div className="pages-row db-top-navbar">
                                            <div className="pages-col-10">
                                                <div className="hidden-navs">

                                                    <div className={click ? 'db-hb-icon-holder active' : 'db-hb-icon-holder'} onClick={handleClick}>
                                                        <div className="db-hb-icon-one"></div>
                                                        <div className="db-hb-icon-two"></div>
                                                        <div className="db-hb-icon-three"></div>
                                                    </div>
                                                    <img className="db-logo" alt="Icon" src="https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg?auto=compress&cs=tinysrgb&w=1600" />
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
                                </div>
                                <div className="pages-col-12">
                                    <div className="pages-row">
                                        <div className="pages-col-9 db-section-holder">
                                            <div className="db-section-content">
                                                <Outlet />
                                            </div>
                                        </div>
                                        <div className="pages-col-3 hn-outer">
                                            <div className="hn-holder">
                                                <StudentsRightPanelTop />
                                                <StudentsSchedule />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardTeacher;
