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
  const { setToken } = useToken();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // If user is logged in, redirect to /options page
    if (loggedIn) {
      navigate('/options');
    }
  }, [loggedIn, navigate]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the login request as a teacher
      const response = await axios.post(`${api}/users/login/teacher`, {
        email,
        password,
      });
      const { token } = response.data;

      // Save the token in local storage with a constant key for teacher
      localStorage.setItem('userToken', token);

      // Update the token state and set the role as teacher
      setToken(token, 'teacher');

      // Set the logged in state of the user to true to trigger a redirect to the options page after successful login
      setLoggedIn(true);

      // Clear any previous errors if login is successful
      setError('');

    } catch (teacherError) {
      // If login as teacher fails, try as a student
      try {
        const response = await axios.post(`${api}/users/login/student`, {
          email,
          password,
        });
        const { token } = response.data;

        // Save the token in local storage with a constant key for student
        localStorage.setItem('userToken', token);

        // Update the token state and set the role as student
        setToken(token, 'student');

        // Set the logged in state of the user to true to trigger a redirect to the options page after successful login
        setLoggedIn(true);

        // Clear any previous errors if login is successful
        setError('');

      } catch (studentError) {
        // Set the error message from the server response in the error state
        setError(studentError.response?.data?.Error || 'Unknown error');
      }
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
          {/* Display the error message if there is an error */}
          {error && (
            <div className="error-message" style={{color:"red", fontSize:"14px"}}>{error}</div>
          )}
        </Col>
      </Form.Group>
    
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit" style={{backgroundColor:"#f3b89c", border:"none", color:"black"}}>Login</Button>
          <Button href="/" style={{backgroundColor:"#f1daae", border:"none", color:"black", marginLeft:"1rem"}}>Back to Home</Button>
        </Col>
      </Form.Group>

    </Form>
  );
}

export default LoginForm;
