import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./LoginForm.css";
import { Link } from "react-router-dom";

const navRoutes = [
  {
    name: "Sign in",
    route: "/OptionsMain",
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

const LoginForm = () => {
  return (
    <Form className="form-top-space">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label data-testid="email" column sm={2}>
          Email:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Your Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label data-testid="password" column sm={2}>
          Password:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Your Password" />
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

export default LoginForm;
