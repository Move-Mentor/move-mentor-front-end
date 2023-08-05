import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../contexts/TokenContext";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./LoginForm.css";

const api = process.env.REACT_APP_DATABASE_URL;

const LoginForm = ({ loginAsRole }) => {
  const { storeCredentials } = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${api}/users/login/${loginAsRole}`, {
        email,
        password,
      });
      const { token } = response.data;

      // Update the token state and set the role
      storeCredentials(token, loginAsRole);

      // Navigate to options page
      navigate("/options");
    } catch (loginError) {
      // Set the error message from the server response in the error state
      setError(
        loginError.response?.data?.Error ||
          "There was an error with your login. Please try again."
      );
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
            <div
              className="error-message"
              style={{ color: "red", fontSize: "14px" }}
            >
              {error}
            </div>
          )}
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button
            type="submit"
            style={{
              backgroundColor: "#f3b89c",
              border: "none",
              color: "black",
            }}
          >
            Login
          </Button>
          <Button
            href="/"
            style={{
              backgroundColor: "#f1daae",
              border: "none",
              color: "black",
              marginLeft: "1rem",
            }}
          >
            Back to Home
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default LoginForm;
