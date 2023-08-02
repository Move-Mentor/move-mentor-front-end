import React from 'react';
import { Link } from 'react-router-dom';
import "../Categories/CatNavCards.css";
import aerials1 from '../../images/categoryAerialsGracie.png';
import aerials2 from '../../images/aphroditeVariation.png';
import '../../App.css';


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
  }
];

const Card = ({ name, image, route, altTag }) => {
  return (
    <div className="card" style={{ margin: '15px'}}>
      <Link to={route}>
        <img src={image} className="card-img-top" alt={altTag} style={{ maxHeight: '25rem' }} />
        <div className="card-btn-color">
          {name}
        </div>
      </Link>
    </div>
  );
};

const MondayList = () => {
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

export default MondayList;