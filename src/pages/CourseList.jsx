import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/CourseList.css';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [formInfo, setFormInfo] = useState({
    id: '',
    name: '',
    description: '',
    instructor: '' // Add instructor to formInfo
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8081/api/yogacourses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const toggleSelect = (courseId) => {
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter(id => id !== courseId));
    } else {
      setSelectedCourses([...selectedCourses, courseId]);
    }
  };

  const handleGoButtonClick = () => {
    const selectedCourseDetails = selectedCourses.map(courseId => {
      const selectedCourse = courses.find(course => course.id === courseId);
      return {
        id: selectedCourse.id,
        name: selectedCourse.name,
        description: selectedCourse.description
      };
    });

    // Send the selected course details to the backend API
    axios.post('http://localhost:8081/api/addSelectedCourses', selectedCourseDetails)
      .then(response => {
        console.log('Selected courses added successfully:', response.data);
      })
      .catch(error => {
        console.error('Error adding selected courses:', error);
      });

    // Set success message
    setSuccessMessage('Successfully added!');
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to the backend API for update
    axios.put(`http://localhost:8081/api/yogacourses/${formInfo.id}`, formInfo)
      .then(response => {
        console.log('Course updated successfully:', response.data);
        // Clear form fields after successful submission
        setFormInfo({
          id: '',
          name: '',
          description: '',
          instructor: '' // Reset instructor field
        });
        // Set success message
        setSuccessMessage('Course updated successfully!');
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      })
      .catch(error => {
        console.error('Error updating course:', error);
        // Handle error if necessary
      });
  };

  return (
    <div className="course-list-container">
      <h2>Available Courses</h2>
      <table className='course-table'>
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Instructor</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id} className={selectedCourses.includes(course.id) ? 'selected' : ''}>
              <td><input type="checkbox" onChange={() => toggleSelect(course.id)} checked={selectedCourses.includes(course.id)} /></td>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.instructor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="go-button" onClick={handleGoButtonClick}>Go</button>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input type="number" id="id" name="id" value={formInfo.id} onChange={handleChange} />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formInfo.name} onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" value={formInfo.description} onChange={handleChange} />
        <label htmlFor="instructor">Instructor:</label>
        <input type="text" id="instructor" name="instructor" value={formInfo.instructor} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default CourseList;
