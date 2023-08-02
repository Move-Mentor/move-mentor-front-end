import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import "./SingleMoveNav.css";

function SingleMoveNav() {
  return (
    <CardGroup>
      <Card style={{ border: "none" }}>
        <Link to={"/categories"}>
          <Button className="all-moves-and-classes-btn" variant="link">
            All Moves
          </Button>
        </Link>
      </Card>
      <Card style={{ border: "none" }}>
        <Link to={"/Classes"}>
          <Button className="all-moves-and-classes-btn" variant="link">
            Classes
          </Button>
        </Link>
      </Card>
    </CardGroup>
  );
}

export default SingleMoveNav;
