import React from "react";
import "../../App.css";
import HomeMainImage from "../../components/HomePage/HomeMainImage";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import LoginForm from "../../components/Login/LoginForm";

const Login = ({ loginAsRole }) => {
  const imageClass =
    loginAsRole === "teacher"
      ? "card-left-side-image-teacher"
      : "card-left-side-image-student";

  return (
    <div className="login-page main-body-layout ">
      <CardGroup>
        <Card data-testid="log" className={imageClass}>
          <Card.Body>
            <HomeMainImage />
          </Card.Body>
        </Card>
        <Card style={{ border: "none" }}>
          <Card.Body>
            <LoginForm loginAsRole={loginAsRole} />
          </Card.Body>
        </Card>
      </CardGroup>
      {/* Empty div with "auto" height to push the cards to the bottom */}
      <div style={{ height: "auto" }}></div>
    </div>
  );
};

export default Login;
