import React from 'react';
import { Link } from 'react-router-dom';
import "../CatNavCards.css";
import splits1 from '../../../images/categorySplitsBrassSplit.png';
import splits2 from '../../../images/felixSplits.png';


const cardsData = [
  {
    name: 'Brass Split',
    image: splits1,
    route: '/SingleMovePage',
    altTag: "Brass Split",
  },
  {
    name: 'Felix Splits',
    image: splits2,
    route: '/SingleMovePage',
    altTag: 'Felix Splits',
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

const SplitsList = () => {
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

export default SplitsList;