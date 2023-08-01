import React from 'react';
import { Link } from 'react-router-dom';
import "../CatNavCards.css";
import invert1 from '../../../images/categoryInvertBrassMonkeyOpen.png';
import invert2 from '../../../images/categoryInvertStraddle.png';



const cardsData = [
  {
    name: 'Brass Monkey - Open',
    image: invert1,
    route: '/SingleMovePage',
    altTag: "Back Arch",
  },
  {
    name: 'Straddle',
    image: invert2,
    route: '/SingleMovePage',
    altTag: "Straddle",
  }
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

const InvertList = () => {
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

export default InvertList;