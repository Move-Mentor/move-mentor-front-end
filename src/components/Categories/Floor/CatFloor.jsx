import React from 'react';
import { Link } from 'react-router-dom';
import "../CatNavCards.css";
import floor1 from '../../../images/categoryFloorBackArch.png';
import floor2 from '../../../images/categoryFloorBodyRoll.png';
import floor3 from '../../../images/categoryFloorBackBend.png';
import floor4 from '../../../images/categoryFloorBackBend.png';



const cardsData = [
  {
    name: 'Back Arch',
    image: floor1,
    route: '/SingleMovePage',
    altTag: "Back Arch",
  },
  {
    name: 'Body Roll',
    image: floor2,
    route: '/SingleMovePage',
    altTag: "Body Roll",
  },
  {
    name: 'Back Bend',
    image: floor3,
    route: '/SingleMovePage',
    altTag: "Back Bend",
  },
  {
    name: 'Back Bend',
    image: floor4,
    route: '/SingleMovePage',
    altTag: "Back Bend",
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

const FloorList = () => {
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

export default FloorList;