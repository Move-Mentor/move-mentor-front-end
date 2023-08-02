import React from 'react';
import { Link } from 'react-router-dom';
import "../CatNavCards.css";
import spins1 from '../../../images/categorySpinsBackwardsSunwheel.png';
import spins2 from '../../../images/categorySpinsBoomerangeSplitGrip.png';
import spins3 from '../../../images/categorySpinsSandra.png';


const cardsData = [
  {
    name: 'Backwards Sunwheel',
    image: spins1,
    route: '/SingleMovePage',
    altTag: "BackBackwards Sunwheel",
  },
  {
    name: 'Boomerang - Split Grip',
    image: spins2,
    route: '/SingleMovePage',
    altTag: "Boomerang - Split Grip",
  },
  {
    name: 'Sandra',
    image: spins3,
    route: '/SingleMovePage',
    altTag: 'Sandra',
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

const SpinsList = () => {
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
    </div>
  );
};

export default SpinsList;