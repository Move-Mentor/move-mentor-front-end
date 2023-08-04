import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./RegisterForm.css";
import { Link } from "react-router-dom";
import SelectClassToggle from "./SelectClassToggle";

const navRoutes = [
  {
    name: "Sign Up",
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

const RegisterForm = () => {
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
          <Form.Control type="password" placeholder="A secure password" />
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
