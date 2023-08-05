import React from "react";
import "../../App.css";
import HomeMainImage from "../../components/HomePage/HomeMainImage";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import RegisterForm from "../../components/RegisterStudent/RegisterForm";

function HomeLayout() {
  return (
    <div className="login-page main-body-layout ">
      <CardGroup>
        <Card className="card-left-side-image-student">
          <Card.Body>
            <HomeMainImage />
          </Card.Body>
        </Card>
        <Card style={{ border: "none" }}>
          <Card.Body>
            <RegisterForm />
          </Card.Body>
        </Card>
      </CardGroup>
      {/* Empty div with "auto" height to push the cards to the bottom */}
      <div style={{ height: "auto" }}></div>
    </div>
  );
}

export default HomeLayout;
