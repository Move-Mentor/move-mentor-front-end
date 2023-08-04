import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./RegisterForm.css";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import SelectClassToggle from "./SelectClassToggle";
import { useToken } from "../../contexts/TokenContext"

const navRoutes = [
  {
    name: "Sign Up",
    route: "/options",
    color: "#f3b89c",
  },
  {
    name: "Back to Options",
    route: "/",
    color: "#f1daae",
  },
];

const Nav = ({ name, route, color }) => {
  const buttonStyle = {
    backgroundColor: color,
    border: "none",
    marginRight: "20px ",
  };

  return (
    <Button style={buttonStyle}>
      <Link to={route}>{name}</Link>
    </Button>
  );
};

const api = process.env.REACT_APP_DATABASE_URL;

const RegisterForm = () => {
  const { setToken } = useToken(); 
  const [registered, setRegistered] = useState(false);
  const [role, setRole] = useState(''); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    firstName: "", 
    lastName: "",
    email: "",
    password: "",
    selectedLessonId: "",
  });

  useEffect(() => {
    // If student is successfully registered, redirect to /options page
    if (registered) {
      navigate("/options");
    }
  }, [registered, navigate]);

  // Handle actions on form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${api}/users/signup/${role}`, formData)
      const { token } = response.data;

      // Save the token in local storage
      localStorage.setItem(`${role}Token`, token); // Use the role in the localstorage key 
      setToken(token, role); // Update the token state and set the role

      // Set the registered state of the student to trigger a redirect to the options page after successful registration
      setRegistered(true);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
      
  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle lesson selection
  const handleLessonSelect = (lessonId) => {
    setFormData((prevData) => ({ ...prevData, selectedLessonId: lessonId }));
  };


  return (
    <Form className="form-top-space">
      {/* FIRST NAME */}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label data-testid="firstName" column sm={2}>
          First Name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="firstName" placeholder="Your first name" />
        </Col>
      </Form.Group>
      {/* /FIRST NAME */}
      {/* LAST NAME */}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label data-testid="lastName" column sm={2}>
          Last Name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="LastName" placeholder="Your last name" />
        </Col>
      </Form.Group>
      {/* /LAST NAME */}
      {/* EMAIL */}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label data-testid="email" column sm={2}>
          Email:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Your email" />
        </Col>
      </Form.Group>
      {/* /EMAIL */}
      {/* PASSWORD */}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label data-testid="password" column sm={2}>
          Password:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="password"
            placeholder="A secure password with 8 or more characters"
          />
        </Col>
      </Form.Group>
      {/* /PASSWORD */}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label data-testid="password" column sm={1}>
          Class:
        </Form.Label>
        <Col sm={11}>
          <SelectClassToggle />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Nav {...navRoutes[0]} />
          <Nav {...navRoutes[1]} />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default RegisterForm;
