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
  }, [role, token]);

  return (
    <LessonContext.Provider value={{ lessons }}>
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
