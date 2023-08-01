import React from 'react';
import { Link } from 'react-router-dom';
import "./CatNavCards.css";
import aerials from '../../images/optionsClassMoves.png';
import climbs from '../../images/categoryClimbsAngelBasic.png';
import floor from '../../images/categoryFloorBodyRoll.png';
import inverts from '../../images/categoryInvertStraddle.png';
import sits from '../../images/categorySitsMartini.png';
import spins from '../../images/categorySpinsBackwardsSunwheel.png';
import splits from '../../images/felixSplits.png';

const cardsData = [
  {
    name: 'Aerials',
    image: aerials,
    route: '/Aerials',
    color: '#bcd5cf',
    altTag: "Aerial Invert",
  },
  {
    name: 'Climbs',
    image: climbs,
    route: '/Climbs',
    color: '#bcd5cf',
    altTag: "Star Chaser",
  },
  {
    name: 'Floor',
    image: floor,
    route: '/Floor',
    color: '#bcd5cf',
    altTag: "Bianca",
  },
  {
    name: 'Inverts',
    image: inverts,
    route: '/Floor',
    color: '#bcd5cf',
    altTag: "Bianca",
  },
  {
    name: 'Sits',
    image: sits,
    route: '/Floor',
    color: '#bcd5cf',
    altTag: "Bianca",
  },
  {
    name: 'Spins',
    image: spins,
    route: '/Floor',
    color: '#bcd5cf',
    altTag: "Bianca",
  },
  {
    name: 'Splits',
    image: splits,
    route: '/Floor',
    color: '#bcd5cf',
    altTag: "Bianca",
  },
];

const Card = ({ name, image, route, color, altTag }) => {
  return (
    <div className="card" style={{ margin: '15px'}}>
      <Link to={route}>
        <img src={image} className="card-img-top" alt={altTag} style={{ maxHeight: '25rem' }} />
        <div style={{ backgroundColor: color, textAlign: 'center' }}>
          {name}
        </div>
      </Link>
    </div>
  );
};

const OptionsNav = () => {
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

export default OptionsNav;
