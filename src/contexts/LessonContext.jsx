import { createContext, useContext, useState } from 'react';

const LessonContext = createContext();

export const useLessonContext = () => {
  return useContext(LessonContext);
};

export const LessonProvider = ({ children }) => {
  const [lessons, setLessons] = useState([]);

  return (
    <LessonContext.Provider value={{ lessons, setLessons }}>
      {children}
    </LessonContext.Provider>
  );
};