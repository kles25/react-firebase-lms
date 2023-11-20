import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Link } from 'react-router-dom';

const CourseList = () => {
    const [coursesList, setCoursesList] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const coursesSnapshot = await getDocs(collection(db, 'courses'));
                const coursesData = coursesSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()

                }));
                setCoursesList(coursesData);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="course-list-container">
            <h3>HIII</h3>
            <Link to="/admin/addcourse">go back</Link>
            <ul>
                {coursesList.map((course) => (
                    <li key={course.id}>
                        <h4>{course.courseName}</h4>
                        <ul>
                            {course.units && course.units.map((unit, index) => (
                                <li key={index}>
                                    <h5>{unit.unitTitle}</h5>
                                    <p>{unit.unitDetails}</p>
                                    <ul>
                                        {unit.topics && unit.topics.map((topic, tIndex) => (
                                            <li key={tIndex}>{topic}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;