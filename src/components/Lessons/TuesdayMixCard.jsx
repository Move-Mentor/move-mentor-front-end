import React from 'react';
import { Link } from 'react-router-dom';
import "../Categories/CatNavCards.css";
import aerials1 from '../../images/categoryAerialsGracie.png';
import aerials2 from '../../images/aphroditeVariation.png';


const cardsData = [
  {
    name: 'Aerial Invert',
    image: aerials1,
    route: '/SingleMovePage',
    altTag: "Aerial Invert",
  },
  {
    name: 'Gracie',
    image: aerials2,
    route: '/SingleMovePage',
    altTag: "Aerial Invert",
  },
];

const Card = ({ name, image, route, altTag }) => {
  return (
    <div className="card" style={{ marginBottom: '15px'}}>
      <Link to={route}>
        <img src={image} className="card-img-top" alt={altTag} style={{ maxHeight: '25rem' }} />
        <div style={{ textAlign: 'center' }}>
          {name}
        </div>
      </Link>
    </div>
  );
};

const TuesdayMixList = () => {
  return (
    <div className="category-grid">
      <div className="row">
        <div className="col-md-4">
          <Card {...cardsData[0]} />
        </div>
        <div className="col-md-4">
          <Card {...cardsData[1]} />
        </div>
        <div className="col-md-4">
          <Card {...cardsData[0]} />
        </div>
      </div>
      
     
    </div>
  );
};

export default TuesdayMixList;