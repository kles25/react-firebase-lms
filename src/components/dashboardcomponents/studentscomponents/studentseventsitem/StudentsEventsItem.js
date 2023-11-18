import React from "react";
import "./studentseventsitem.css"

const StudentsEventsItem = ({ session, title, mentor, time }) => (
    <div className="pages-row sched-events">
        <div className="pages-col-8">
            <div className="pages-row">
                <div className="pages-col-12">
                    <p className="session-events">{session}</p>
                    <h4 className="title-events">{title}</h4>
                    <p className="mentor-events">{mentor}</p>
                </div>
            </div>
        </div>
        <div className="pages-col-4">
            <div className="pages-row">
                <div className="pages-col-12">
                    <p className="time-events">{time}</p>
                </div>
            </div>
        </div>
    </div>
);

export default StudentsEventsItem;
