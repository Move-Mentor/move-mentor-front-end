import React, { useEffect, useState } from 'react';
import { useToken } from '../../contexts/TokenContext';
import axios from 'axios';

const LessonList = () => {
  const { token, role } = useToken();
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        let endpoint = '';

        if (role === 'student') {
          endpoint = '/api/getStudentLessons'; // Replace this with your actual endpoint for fetching student lessons
        } else if (role === 'teacher') {
          endpoint = '/api/getTeacherLessons'; // Replace this with your actual endpoint for fetching teacher lessons
        } else {
          // Invalid role, handle it accordingly
          return;
        }

        const response = await axios.get(endpoint, config);
        setLessons(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLessons();
  }, [token, role]);
  
  return (
    <div>
      <h3>Lesson List:</h3>
      {lessons.length === 0 ? (
        <p>No lessons available.</p>
      ) : (
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson._id}>{lesson.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LessonList;