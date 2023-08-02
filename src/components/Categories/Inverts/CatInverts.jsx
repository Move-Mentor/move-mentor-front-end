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

const InvertsList = () => {
  return (
    <div className="category-grid">
      <div className="row">
        <div className="col-md-6">
          <Card {...cardsData[0]} />
        </div>
        <div className="col-md-6">
          <Card {...cardsData[1]} />
        </div>
        
      </div>
      
    </div>
  );
};

export default InvertsList;