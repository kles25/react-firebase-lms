import React from "react";
import "./studentsschedule.css";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StudentsEventsItem from "../studentseventsitem/StudentsEventsItem";

function StudentsSchedule() {
    const eventsData = [
        { session: "Tutorial", title: "Numbers", mentor: "Mrs. F", time: "7:00AM" },
        { session: "Tutorial", title: "Subtraction", mentor: "Mrs. E", time: "8:00AM" },
        { session: "Tutorial", title: "Addition", mentor: "Mrs. D", time: "9:00AM" },
        { session: "Tutorial", title: "Chart", mentor: "Mrs. C", time: "10:30AM" },
        { session: "Tutorial", title: "Counting Numbers", mentor: "Mrs. A", time: "12:00AM" },
        { session: "Tutorial", title: "Counting", mentor: "Mrs. B", time: "11:00AM" },

    ];

    return (
        <div className="pages-row ue-section-content">
            <div className="pages-col-12">
                <div className="ue-header-holder">
                    <h3 className="ue-title">Schedule Today</h3>
                    <CalendarTodayIcon />
                </div>

            </div>
            <div className="pages-col-12">
                <div className="events-holder">
                    {eventsData.map((event, index) => (
                        <StudentsEventsItem key={index} {...event} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default StudentsSchedule;
