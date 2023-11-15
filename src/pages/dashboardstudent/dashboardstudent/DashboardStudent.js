import { Outlet } from "react-router-dom";
import "./dashboardstudent.css"
import StudentsNavigation from "../../../components/dashboardcomponents/studentscomponents/studentsnavigation/StudentsNavigation";
import StudentsTopNav from "../../../components/dashboardcomponents/studentscomponents/studentstopnav/StudentsTopNav";

function DashboardStudent() {
    return (
        <div className='background-image-color'>
            <div className="background-gradient">
                <div className="home-container-fluid">
                    <div className="pages-row">
                        <div className="pages-col-2">
                            <StudentsNavigation />
                        </div>
                        <div className="pages-col-10">
                            <div className="pages-row">
                                <div className="pages-col-12">
                                    <StudentsTopNav />
                                </div>
                                <div className="pages-col-12">
                                    <div className="pages-row">
                                        <div className="pages-col-9 db-section-holder">
                                            <div className="db-section-content">
                                                <Outlet />
                                            </div>
                                        </div>
                                        <div className="pages-col-3">
                                            <div className="hn-holder">
                                                history
                                                upcoming events
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

export default DashboardStudent;
