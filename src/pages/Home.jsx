import React from "react";
import HomeMainImage from "../components/HomePage/HomeMainImage";
import HomeNavOptions from "../components/HomePage/HomeNavOptions";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../App.css";

function HomeLayout() {
  return (
    <div className="main-body-layout">
      <CardGroup className="login-page card-left-side-silhouette">
        <Card className="card-left-side-image-generic">
          <Card.Body>
            <HomeMainImage />
          </Card.Body>
        </Card>
        <Card style={{ border: "none" }}>
          <Card.Body>
            <HomeNavOptions />
          </Card.Body>
        </Card>
      </CardGroup>
      {/* Empty div with "auto" height to push the cards to the bottom */}
      <div style={{ height: "auto" }}></div>
    </div>
  );
}

export default HomeLayout;
