import React from 'react';
import { Link } from 'react-router-dom';
import "../Categories/CatNavCards.css";
import aerials from '../../images/optionsClassMoves.png';
import climbs from '../../images/categoryClimbsAngelBasic.png';
import floor from '../../images/categoryFloorBodyRoll.png';
import inverts from '../../images/categoryInvertStraddle.png';
import sits from '../../images/categorySitsMartini.png';
import spins from '../../images/categorySpinsBackwardsSunwheel.png';
import splits from '../../images/felixSplits.png';

const cardsData = [
  {
    name: 'Monday: Intro',
    time: '6pm-7pm',
    image: aerials,
    route: '/Aerials',
    color: '#DEC4F3',
    altTag: "Aerial Invert",
  },
  {
    name: 'Tuesday: Mixed',
    time: '6:10pm-7:10pm',
    image: climbs,
    route: '/Climbs',
    color: '#DEC4F3',
    altTag: "Star Chaser",
  },
  {
    name: 'Tuesday: Choreo',
    time: '7:15pm-8:15pm',
    image: floor,
    route: '/Floor',
    color: '#DEC4F3',
    altTag: "Bianca",
  },
  {
    name: 'Wednesday: Mixed',
    time: '4:40pm-5:40pm',
    image: inverts,
    route: '/Floor',
    color: '#DEC4F3',
    altTag: "Bianca",
  },
  {
    name: 'Wednesday: Mixed',
    time: '6pm-7pm',
    image: sits,
    route: '/Floor',
    color: '#DEC4F3',
    altTag: "Bianca",
  },
  {
    name: 'Thursday: Mixed',
    time: '6:40pm-7:40pm',
    image: spins,
    route: '/Floor',
    color: '#DEC4F3',
    altTag: "Bianca",
  },
  {
    name: 'Friday: Mixed',
    time: '5pm-6pm',
    image: splits,
    route: '/Floor',
    color: '#DEC4F3',
    altTag: "Bianca",
  },
  {
    name: 'Saturday: Conditioning',
    time: '9:10am-9:55am',
    image: spins,
    route: '/Floor',
    color: '#DEC4F3',
    altTag: "Bianca",
  },
  {
    name: 'Saturday: Mixed',
    time: '10am-11am',
    image: splits,
    route: '/Floor',
    color: '#DEC4F3',
    altTag: "Bianca",
  }
];

const Card = ({ name, time, image, route, color, altTag }) => {
  return (
    <div className="card" style={{ marginBottom: '15px'}}>
      <Link to={route}>
        <img src={image} className="card-img-top" alt={altTag} style={{ maxHeight: '25rem' }} />
        <footer style={{ backgroundColor: color, textAlign: 'center' }}>
          <div>
            {name}
          </div>
          <div>
            {time}
          </div>
        </footer>
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
        <div className="col-md-4">
          <Card {...cardsData[6]} />
        </div>
        <div className="col-md-4">
          <Card {...cardsData[7]} />
        </div>
        <div className="col-md-4">
          <Card {...cardsData[8]} />
        </div>
      </div>
    </div>
  );
};

export default OptionsNav;
