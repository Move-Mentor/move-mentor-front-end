import React from 'react';
import { Link } from 'react-router-dom';
import "../CatNavCards.css";
import climbs1 from '../../../images/categoryClimbsAngelBasic.png';
import climbs2 from '../../../images/categoryClimbsAngelSad.png';


const cardsData = [
  {
    name: 'Angel - Basic',
    image: climbs1,
    route: '/SingleMovePage',
    altTag: "Angel - Basic",
  },
  {
    name: 'Angel - Sad',
    image: climbs2,
    route: '/SingleMovePage',
    altTag: "Angel - Sad",
  },
];

const Card = ({ name, image, route, altTag }) => {
  return (
    <div className="card" style={{ margin: '15px'}}>
      <Link to={route}>
        <img src={image} className="card-img-top" alt={altTag} style={{ maxHeight: '25rem' }} />
        <div style={{ textAlign: 'center' }}>
          {name}
        </div>
      </Link>
    </div>
  );
};

const ClimbsList = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {cardsData.map((cardData, index) => (
        <div key={index} className="col-md-3">
          <Card {...cardData} />
        </div>
      ))}
    </div>
  );
};

export default ClimbsList;