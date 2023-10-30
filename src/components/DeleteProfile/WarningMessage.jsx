import React from "react";
import Card from "react-bootstrap/Card";

function WarningCard() {
  return (
    <Card
      className="form-top-space"
      style={{ textAlign: "center", border: "none" }}
    >
      <Card.Body>
        <Card.Title>Delete Profile</Card.Title>
        <Card.Text>
          If you wish to delete your account and all of it's data, please select
          the Delete button below.
        </Card.Text>
        <Card.Text>
          WARNING! Your account will be deleted, this action is irreversible.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WarningCard;
