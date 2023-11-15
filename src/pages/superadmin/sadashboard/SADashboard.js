import React from "react";
import "./sadashboard.css"
import { Outlet } from "react-router-dom";
import SALeftNavigation from "../../../components/dashboardcomponents/sacomponents/saleftnavigation/SALeftNavigation";

function SADashboard() {
    return (
        <div className='background-image-color'>
            <div className="background-gradient">
                <div className="home-container-fluid">
                    <div className="pages-row">
                        <div className="pages-col-2">
                            <SALeftNavigation />
                        </div>
                        <div className="pages-col-10">
                            <div className="pages-row">
                                <div className="pages-col-9 sa-section-holder">
                                    <div className="sa-section-content">
                                        <Outlet />
                                    </div>
                                </div>
                                <div className="pages-col-3">
                                    <div className="hn-holder">

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

export default SADashboard;
