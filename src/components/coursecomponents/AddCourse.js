import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


const AddCourse = () => {
    const [courses, setCourses] = useState([
        {
            courseName: '',
            units: [
                {
                    unitTitle: '',
                    topics: ['']
                }
            ]
        }
    ]);

    const handleCourseChange = (e, courseIndex) => {
        const updatedCourses = [...courses];
        updatedCourses[courseIndex].courseName = e.target.value;
        setCourses(updatedCourses);
    };

    const handleUnitChange = (e, courseIndex, unitIndex) => {
        const updatedCourses = [...courses];
        updatedCourses[courseIndex].units[unitIndex].unitTitle = e.target.value;
        setCourses(updatedCourses);
    };

    const handleTopicChange = (e, courseIndex, unitIndex, topicIndex) => {
        const updatedCourses = [...courses];
        updatedCourses[courseIndex].units[unitIndex].topics[topicIndex] = e.target.value;
        setCourses(updatedCourses);
    };

    const addUnit = (courseIndex) => {
        const updatedCourses = [...courses];
        updatedCourses[courseIndex].units.push({
            unitTitle: '',
            topics: ['']
        });
        setCourses(updatedCourses);
    };

    const addTopic = (courseIndex, unitIndex) => {
        const updatedCourses = [...courses];
        updatedCourses[courseIndex].units[unitIndex].topics.push('');
        setCourses(updatedCourses);
    };

    const submitCourse = async () => {
        try {
            await addDoc(collection(db, "courses"), {
                courses,
                timestamp: serverTimestamp()
            });
        } catch (err) {
            console.error(err);
        }

    };

    const displayCourses = courses.map((course, courseIndex) => (
        <div key={courseIndex}>

            <input
                className='course-name'
                type="text"
                value={course.courseName}
                onChange={(e) => handleCourseChange(e, courseIndex)}
                placeholder={`Enter Course Name ${courseIndex + 1}`}
            />
            {course.units.map((unit, unitIndex) => (
                <div className='unit-holder' key={unitIndex}>
                    <input
                        type="text"
                        value={unit.unitTitle}
                        onChange={(e) => handleUnitChange(e, courseIndex, unitIndex)}
                        placeholder={`Enter Unit Title ${unitIndex + 1}`}
                    />
                    <br />
                    {unit.topics.map((topic, topicIndex) => (


                        <input
                            key={topicIndex}
                            type="text"
                            value={topic}
                            onChange={(e) => handleTopicChange(e, courseIndex, unitIndex, topicIndex)}
                            placeholder={`Enter Topic ${topicIndex + 1}`}
                        />

                    ))}
                    <button onClick={() => addTopic(courseIndex, unitIndex)}>Add Topic</button>

                </div>
            ))}
            <button onClick={() => addUnit(courseIndex)}>Add Unit</button>
        </div>
    ));

    return (
        <div className='add-course-container'>
            <div className='add-course-holder'>
                <h3 className='db-title'>Add Course</h3>
                <div className='add-course-form'>
                    {displayCourses}
                </div>
                <div className='ac-bttn-hldr'>
                    <button onClick={submitCourse}>Add</button>
                </div>

            </div>
        </div>
    );
};

export default AddCourse;