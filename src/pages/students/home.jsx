import React from 'react';
import "./box.css";
import Card from 'react-bootstrap/Card';
import classImage from './homePageImages/home-class.png';
import profileImage from './homePageImages/home-pro.png';
import categoriesImage from './homePageImages/home-cat.png';


function StudentHomePage() {
  const cardInfo = [
    {
      image: classImage,
      text: "Classes"
    },
    {
      image: profileImage,
      text: "Profile"
    },
    {
      image: categoriesImage,
      text: "Categories"
    },
  ];

  const renderCard = (card, index) => {
    return(
      <Card style={{ width: '18rem' }} key={index} className="box">
      <Card.Img variant="top" src={card.image}/>
      <Card.Body>
        <Card.Text>{card.text}</Card.Text>
      </Card.Body>
    </Card>
    )
  }
  return (
    <div className="grid">
      {cardInfo.map(renderCard)}
    </div>
  );
}

export default StudentHomePage;