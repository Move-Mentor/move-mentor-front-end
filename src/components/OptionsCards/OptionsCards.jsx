import React from 'react';
import "./OptionsCards.css";
import Card from 'react-bootstrap/Card';
import classImage from '../../images/optionsClassMoves.png';
import profileImage from '../../images/optionsSearch.png';
import categoriesImage from '../../images/optionsCategories.png';


function SelectAnOption() {
  const cardInfo = [
    {
      image: classImage,
      text: "Class"
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

export default SelectAnOption;
