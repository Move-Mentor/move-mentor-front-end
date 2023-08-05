import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useToken } from "./TokenContext";

const api = process.env.REACT_APP_DATABASE_URL;

const LessonContext = createContext();

export const useLessonContext = () => {
  return useContext(LessonContext);
};

export const LessonProvider = ({ children }) => {
  const [lessons, setLessons] = useState([]);
  const { token, role } = useToken();

  useEffect(() => {
    // Re-fetch lessons when role is changed
    if (!token || !role) {
      // user not yet authenticated, do not yet load lessons
      return;
    }
    fetchLessons(token, role).then((lessons) => {
      setLessons(lessons);
    });
    console.info("useEffect");
  }, [role, token]);

  /**
   * Adds a lesson to a move if exists, otherwise removes
   */
  async function toggleMoveInLesson(lessonId, moveId) {
    const lesson = lessons.find((l) => l._id === lessonId);
    if (!lesson) {
      throw Error("Cannot find lesson");
    }
    if (lesson.moves.find((id) => id === moveId)) {
      // already in list, remove from lesson
      lesson.moves = lesson.moves.filter((id) => id !== moveId);
    } else {
      // not already in list, add to lesson
      lesson.moves.push(moveId);
    }
    await updateLesson(token, lesson);
    setLessons([...lessons]);
  }

  
  return (
    <LessonContext.Provider value={{ lessons, toggleMoveInLesson }}>
      {children}
    </LessonContext.Provider>
  );
};

async function fetchLessons(token, role) {
  try {
    // Create a configuration object with the authorization header containing the JWT
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(`${api}/users/profile/${role}`, config);
    return response.data.lessons;
  } catch (error) {
    console.error(error);
  }
}

async function updateLesson(token, lesson) {
  try {
    // Create a configuration object with the authorization header containing the JWT
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.put(
      `${api}/lessons/${lesson._id}`,
      lesson,
      config
    );
    return response.data.lessons;
  } catch (error) {
    console.error(error);
  }
}
