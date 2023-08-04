import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./RegisterForm.css";

const SelectClassToggle = () => {
  const [selectedValue, setSelectedValue] = useState("Select your Class");

  const handleSelect = (eventKey, event) => {
    setSelectedValue(event.target.textContent);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle className="register-dropdown" id="dropdown-basic">
        {selectedValue}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">Monday</Dropdown.Item>
        <Dropdown.Item eventKey="2">Tuesday</Dropdown.Item>
        <Dropdown.Item eventKey="3">Wednesday Mixed: 6pm-7pm</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SelectClassToggle;
