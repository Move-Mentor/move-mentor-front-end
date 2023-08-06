import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import "./UpdateProfile.css";

const api = process.env.REACT_APP_DATABASE_URL;

const SelectClassToggle = ({ onLessonSelect }) => {
  const [selectedValue, setSelectedValue] = useState("Select your Class");
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios
      .get(`${api}/lessons/all`)
      .then((response) => response.data)
      .then((lessonsData) => {
        setLessons(lessonsData);
      })
      .catch((error) => {
        console.error("Error fetching lessons data:", error);
      });
  }, []);

  const handleSelect = (eventKey, event) => {
    const lessonId = eventKey;
    setSelectedValue(event.target.textContent);
    onLessonSelect(lessonId);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle className="register-dropdown" id="dropdown-basic">
        {selectedValue}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {lessons.map((lesson) => (
          <Dropdown.Item key={lesson._id} eventKey={lesson._id}>
            {lesson.lessonName} {lesson.lessonDay} {lesson.lessonTime}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SelectClassToggle;
