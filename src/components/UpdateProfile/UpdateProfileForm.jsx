import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./UpdateProfile.css";
import axios from "axios";
import SelectClassToggle from "./SelectClassToggle";
import { useToken } from "../../contexts/TokenContext";

const api = process.env.REACT_APP_DATABASE_URL;

const UpdateProfileForm = () => {
  const { token, role } = useToken();
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    lessons: [],
  });

  useEffect(() => {
    // Fetch the current student/teacher details from the backend
    const fetchDetails = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          `${api}/users/profile/${role}`, // Use the role in the API endpoint
          config
        );
        const { firstName, lastName, email, lessons } = response.data;
        setFormData({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: "", // Since it's an update, you may not want to show the current password here
          lessons: lessons,
        });
      } catch (error) {
        // Handle error when fetching details
        setError("Error fetching details.");
      }
    };

    fetchDetails();
  }, [token, role]);

  // Handle actions on form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.put(`${api}/users/profile/${role}`, formData, config); // Use the role in the API endpoint
      setSuccessMessage("Profile updated successfully!");
    } catch (error) {
      if (error.response?.data?.errors) {
        // If the server sends validation errors, extract and display them
        const errorMessages = error.response.data.errors
          .map((err) => err.msg)
          .join("\n");
        // Show the error message only if the user is a student
        if (role === "student") {
          setError(errorMessages);
        }
      } else {
        setError(
          "There was an error with updating your profile. Please try again."
        );
      }
    }
  };

  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle lesson selection
  const handleLessonSelect = (lessonId) => {
    setFormData((prevData) => ({ ...prevData, lessons: lessonId }));
  };

  return (
    <Form className="form-top-space" onSubmit={handleFormSubmit}>
      {/* FIRST NAME */}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalfirstName">
        <Form.Label data-testid="firstName" column sm={2}>
          First Name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Your first name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </Col>
      </Form.Group>
      {/* /FIRST NAME */}
      {/* LAST NAME */}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontallastName">
        <Form.Label data-testid="lastName" column sm={2}>
          Last Name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Your last name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </Col>
      </Form.Group>
      {/* /LAST NAME */}
      {/* EMAIL */}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label data-testid="email" column sm={2}>
          Email:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
          />
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
            name="password"
            placeholder="A secure password with 8 or more characters"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Col>
      </Form.Group>
      {/* /PASSWORD */}

      {/* LESSON */}
      {role === "student" && (
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalLesson">
          <Form.Label data-testid="password" column sm={1}>
            Class:
          </Form.Label>
          <Col sm={11}>
            <SelectClassToggle onLessonSelect={handleLessonSelect} />
          </Col>
        </Form.Group>
      )}
      {/* /LESSON */}

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          {/* Display the error message if there is an error and the user is a student */}
          {error && role === "student" && (
            <div
              className="error-message"
              style={{ color: "red", fontSize: "14px" }}
            >
              {error}
            </div>
          )}
          {/* Display the error message if there is an error and the user is a teacher */}
          {error && role === "teacher" && (
            <div
              className="error-message"
              style={{ color: "red", fontSize: "14px" }}
            >
              {error}
            </div>
          )}
          {/* Display the success message if available */}
          {successMessage && (
            <div
              className="success-message"
              style={{ color: "green", fontSize: "14px" }}
            >
              {successMessage}
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
            {role === "teacher"
              ? "Update my Teacher Profile"
              : "Update my Profile"}
          </Button>
          <Button
            href="/options"
            style={{
              backgroundColor: "#f1daae",
              border: "none",
              color: "black",
              marginLeft: "1rem",
            }}
          >
            Back Home
          </Button>
          <Button
            href="/users/profile/delete"
            style={{
              backgroundColor: "#BCD5CF",
              border: "none",
              color: "black",
              marginLeft: "1rem",
            }}
          >
            {role === "student" ? "More Settings" : ""}
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default UpdateProfileForm;
