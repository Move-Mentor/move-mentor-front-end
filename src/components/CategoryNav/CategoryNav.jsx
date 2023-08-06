import React from "react";
import { Link } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import "../../App.css";

function CategoryNav() {
  return (
    <CardGroup>
      <Card style={{ border: "none" }}>
        <Link className="nav-link btn" to={"/moves/categories"}>
          <p className="all-moves-and-classes-nav" variant="link">
            All Moves
          </p>
        </Link>
      </Card>
      <Card style={{ border: "none" }}>
        <Link className="nav-link btn" to={"/moves/categories"}>
          <p className="all-moves-and-classes-nav" variant="link">
            Lessons
          </p>
        </Link>
      </Card>
    </CardGroup>
  );
}

export default CategoryNav;
