// CourseList.js
import React, { useState } from 'react';
import '../assets/css/CourseList.css';

const courses = [
  { id: 1, title: 'Introduction to Yoga', instructor: 'John Doe' },
  { id: 2, title: 'Yoga for Beginners', instructor: 'Jane Smith' },
  { id: 3, title: 'Advanced Yoga Techniques', instructor: 'Alex Johnson' },
];

const CourseList = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const toggleSelect = (courseId) => {
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter(id => id !== courseId));
    } else {
      setSelectedCourses([...selectedCourses, courseId]);
    }
  };

  const handleGoButtonClick = () => {
    // Use the selectedCourses array as needed (e.g., navigate to a new page)
    console.log('Selected Courses:', selectedCourses);
  };

  return (
    <div className="course-list-container">
      <h2>Available Courses</h2>
      <table className='course-table'>
        <thead>
          <tr>
            <th>Select</th>
            <th>Course Title</th>
            <th>Instructor</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id} className={selectedCourses.includes(course.id) ? 'selected' : ''}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedCourses.includes(course.id)}
                  onChange={() => toggleSelect(course.id)}
                />
              </td>
              <td>{course.title}</td>
              <td>{course.instructor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="go-button" onClick={handleGoButtonClick}>Go</button>
    </div>
  );
};

export default CourseList;
