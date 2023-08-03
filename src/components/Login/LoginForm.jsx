import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../../contexts/TokenContext';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./LoginForm.css";

const api = process.env.REACT_APP_DATABASE_URL;

const LoginForm = () => {
  const { setToken }  = useToken(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); 
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // If user is logged in, redirect to /options page
    if (loggedIn) {
      navigate("/OptionsMain");
    }
  }, [loggedIn, navigate]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${api}/users/login/${role}`, { email, password }); // Use the role in the API endpoint
      const { token } = response.data;

      // Save the token in local storage
      localStorage.setItem(`${role}Token`, token); // Use the role in the localStorage key
      setToken(token, role); // Update the token state and set the role

      // Set the logged in state of the user to true to trigger a redirect to the options page after successful login
      setLoggedIn(true);

    } catch (error) {
      console.error('Authentication failed:', error.response?.data?.Error || 'Unknown error');
    }
  };
  
  return (
    <Form className="form-top-space" onSubmit={handleFormSubmit}> 
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label data-testid="email" column sm={2}>
          Email:
        </Form.Label>
        <Col sm={10}>
          <Form.Control 
            type="email" 
            placeholder="Your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label data-testid="password" column sm={2}>
          Password:
        </Form.Label>
        <Col sm={10}>
          <Form.Control 
            type="password" 
            placeholder="Your Password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check
            type="radio"
            label="Student"
            name="role"
            value="student"
            checked={role === "student"}
            onChange={() => setRole("student")}
          />
          <Form.Check
            type="radio"
            label="Teacher"
            name="role"
            value="teacher"
            checked={role === "teacher"}
            onChange={() => setRole("teacher")}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Login</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default LoginForm;
