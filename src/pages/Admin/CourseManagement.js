import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Styles.css';
import Navbar from '../../components/Navbar';
import '../../styles/Lectures.css';
import '../../styles/Styles.css';

const Courses = () => {
    const navigate = useNavigate();

    // Mock Data for enrolled and available courses
    const enrolledCourses = [
        { id: 1, title: 'React Basics', description: 'Learn the basics of React.' },
        { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JS concepts.' },
    ];

    const availableCourses = [
        { id: 3, title: 'Node.js Fundamentals', description: 'Introduction to Node.js.', status: 'Register', buttonLabel: 'Registration', buttonColor: 'blue' },
        { id: 4, title: 'Database Management', description: 'Learn SQL and NoSQL.', status: 'Register', buttonLabel: 'Registration', buttonColor: 'blue' },
        { id: 5, title: 'UI/UX Design', description: 'Design engaging interfaces.', status: 'Register', buttonLabel: 'Registration', buttonColor: 'blue' },
        { id: 6, title: 'C++', status: 'Completed', buttonLabel: 'Finish coures', buttonColor: 'gray' },
        { id: 7, title: 'Modern web applications', status: 'Completed', buttonLabel: 'Finish coures', buttonColor: 'gray' },
        { id: 8, title: 'Information security', status: 'Completed', buttonLabel: 'Finish coures', buttonColor: 'gray' },
        { id: 9, title: 'cisco', status: 'Pending', buttonLabel: 'waiting', buttonColor: 'red' },
        { id: 10, title: 'project management', status: 'Register', buttonLabel: 'Registration', buttonColor: 'blue' },
    ];

    const handleBack = () => navigate('/dashboard'); // Navigate back to dashboard

    return (
        <>
            <Navbar />
            <div className="ViewPage" >
                <h2>Current courses</h2>
                <div className="courses-grid">
                    {enrolledCourses.map((course) => (
                        <div className="dashboard-card" key={course.id}>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <button className="course-button gray">Participant in the course</button>
                        </div>
                    ))}
                </div>

                <h2>Available Courses</h2>
                <div className="courses-grid">
                    {availableCourses.map((course) => (
                        <div className="dashboard-card" key={course.id}>
                            <h3>{course.title}</h3>
                            <p>
                                {course.status === 'Completed'
                                    ? 'It has been studied'
                                    : course.status === 'Pending'
                                    ? 'waiting'
                                    : 'Start the course'}
                            </p>
                            <button className={`course-button ${course.buttonColor}`}>
                                {course.buttonLabel || 'Registration'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Courses;
