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
    route: '/card1',
    color: '#bcd5cf',
    altTag: "Aerial Invert",
  },
  {
    name: 'Climbs',
    image: climbs,
    route: '/login-student',
    color: '#bcd5cf',
    altTag: "Star Chaser",
  },
  {
    name: 'Floor',
    image: floor,
    route: '/CategoriesMain',
    color: '#bcd5cf',
    altTag: "Bianca",
  },
  {
    name: 'Inverts',
    image: inverts,
    route: '/CategoriesMain',
    color: '#bcd5cf',
    altTag: "Bianca",
  },
  {
    name: 'Sits',
    image: sits,
    route: '/CategoriesMain',
    color: '#bcd5cf',
    altTag: "Bianca",
  },
  {
    name: 'Spins',
    image: spins,
    route: '/CategoriesMain',
    color: '#bcd5cf',
    altTag: "Bianca",
  },
  {
    name: 'Splits',
    image: splits,
    route: '/CategoriesMain',
    color: '#bcd5cf',
    altTag: "Bianca",
  },
];

const Card = ({ name, image, route, color, altTag }) => {
  return (
    <div className="card" style={{ marginBottom: '15px'}}>
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
        <div className="col-md-4">
          <Card {...cardsData[3]} />
        </div>
        <div className="col-md-4">
          <Card {...cardsData[4]} />
        </div>
        <div className="col-md-4">
          <Card {...cardsData[5]} />
        </div>
      </div>
      <div className="row">

        <div className="col-md-12">
          <Card {...cardsData[6]} />
        </div>

      </div>
    </div>
  );
};

export default OptionsNav;
