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

const FloorList = () => {
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
          <Card {...cardsData[2]} />
        </div> 
      </div>
      <div className="row">
        <div className="col-md-12">
          <Card {...cardsData[3]} />
        </div>
      </div>
    </div>
  );
};

export default FloorList;