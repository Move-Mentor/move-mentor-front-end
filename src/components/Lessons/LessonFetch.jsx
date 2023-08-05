import React, { useEffect, useState } from 'react';
import { useToken } from '../../contexts/TokenContext';
import axios from 'axios';
import { useLessonContext } from '../../contexts/LessonContext';
// import LessonCard from './LessonCard';

const api = process.env.REACT_APP_DATABASE_URL;

const LessonFetch = () => {
  const { token, role } = useToken();
  const { lessons, setLessons } = useLessonContext();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        // Create a configuration object with the authorization header containing the JWT
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // Initialise empty endpoint
        let endpoint = '';

        // Set endpoint based on student or teacher role
        if (role === 'student') {
          endpoint = `${api}/users/profile/student`; 
        } else if (role === 'teacher') {
          endpoint = `${api}/users/profile/teacher`;
        } else {
          setErrorMessage('Invalid role. Please log in as a student or teacher.');
          return;
        }

        const response = await axios.get(endpoint, config);
        // Ensure that lessons are available and the response contains a lessons array
        if (response.data.lessons && Array.isArray(response.data.lessons)) {
          console.log(setLessons)
          console.info(setLessons)
          setLessons(response.data.lessons);
        } else {
          // Invalid response, handle it accordingly
          setErrorMessage('Error fetching lessons. Please try again later.');
        }
      } catch (error) {
        console.error(error);
        setErrorMessage('Error fetching lessons. Please try again later.');
      }
    };

    // Initiate fetching of lessons based on user's JWT and role
    fetchLessons();
  }, [role, token, setLessons]);
  
  return (
    <div>
      <h3>Lesson List:</h3>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        lessons.length === 0 ? (
          <p>No lessons available.</p>
        ) : (
          <ul>
            {lessons.map((lesson) => (
              <li key={lesson._id}>{lesson.lessonName}</li>
            ))}
          </ul>
        )
      )}
    </div>  
  );
};

export default LessonFetch;