import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../UpdateProfile/UpdateProfile.css";

function OptionsButtons() {
  return (
    <Form.Group as={Row}>
      <Col sm={{ span: 10, offset: 3 }}>
        <Button
          href="/users/profile/student"
          style={{
            backgroundColor: "#f1daae",
            border: "none",
            color: "black",
            marginLeft: "1rem",
          }}
        >
          No! Take me back
        </Button>
        <Button
          href="/users/profile/delete"
          style={{
            backgroundColor: "#D11D05",
            border: "none",
            color: "black",
            marginLeft: "1rem",
          }}
        >
          Yes, delete my account
        </Button>
      </Col>
    </Form.Group>
  );
}

export default OptionsButtons;
