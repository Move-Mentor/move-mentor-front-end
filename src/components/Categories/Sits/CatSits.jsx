import React from 'react';
import { Link } from 'react-router-dom';
import "../CatNavCards.css";
import sits1 from '../../../images/categorySitsAlana.png';
import sits2 from '../../../images/categorySitsBasic.png';
import sits3 from '../../../images/categorySitsBasicBendBack.png';


const cardsData = [
  {
    name: 'Alana',
    image: sits1,
    route: '/SingleMovePage',
    altTag: "Back Arch",
  },
  {
    name: 'Basic Sit',
    image: sits2,
    route: '/SingleMovePage',
    altTag: "Basic Sit",
  },
  {
    name: 'Bend Back',
    image: sits3,
    route: '/SingleMovePage',
    altTag: 'Bend Back',
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

const SitsList = () => {
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

export default SitsList;