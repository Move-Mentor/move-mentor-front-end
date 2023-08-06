import React from "react";
import { Link } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import "../../App.css";

function ClassesNav() {
  return (
    <CardGroup>
      <Card style={{ border: "none" }}>
        <Link className="nav-link btn" to={"/Lessons"}>
          <div className="all-moves-and-classes-nav" variant="link">
            Classes
          </div>
        </Link>
      </Card>
      <Card style={{ border: "none" }}>
        <Link className="nav-link btn" to={"/CategoriesMain"}>
          <div className="all-moves-and-classes-nav" variant="link">
            All Moves
          </div>
        </Link>
      </Card>
    </CardGroup>
  );
}

export default ClassesNav;
