import React from "react";
import { Link } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import "../../App.css";

function SingleMoveNav() {
  return (
    <CardGroup>
      <Card style={{ border: "none" }}>
        <Link to={"/categories"}>
          <div className="all-moves-and-classes-nav" variant="link">
            All Moves
          </div>
        </Link>
      </Card>
      <Card style={{ border: "none" }}>
        <Link to={"/Lessons"}>
          <div className="all-moves-and-classes-nav" variant="link">
            Classes
          </div>
        </Link>
      </Card>
    </CardGroup>
  );
}

export default SingleMoveNav;
