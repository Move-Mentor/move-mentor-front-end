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
import '../../App.css';


const cardsData = [
  {
    name: 'Monday: Intro',
    time: '6pm-7pm',
    image: aerials,
    route: '/Monday',
    altTag: "Aerial Invert",
  },
  {
    name: 'Tuesday: Mixed',
    time: '6:10pm-7:10pm',
    image: climbs,
    route: '/TuesdayMix',
    altTag: "Star Chaser",
  },
  {
    name: 'Tuesday: Choreo',
    time: '7:15pm-8:15pm',
    image: floor,
    route: '/TuesdayChoreo ',
    altTag: "Bianca",
  },
  {
    name: 'Wednesday: Mixed',
    time: '4:40pm-5:40pm',
    image: inverts,
    route: '/WednesdayMixed1',
    altTag: "Bianca",
  },
  {
    name: 'Wednesday: Mixed',
    time: '6pm-7pm',
    image: sits,
    route: '/WednesdayMixed2',
    altTag: "Bianca",
  },
  {
    name: 'Thursday: Mixed',
    time: '6:40pm-7:40pm',
    image: spins,
    route: '/ThursdayMixed',
    altTag: "Bianca",
  },
  {
    name: 'Friday: Mixed',
    time: '5pm-6pm',
    image: splits,
    route: '/FridayMixed',
    altTag: "Bianca",
  },
  {
    name: 'Saturday: Conditioning',
    time: '9:10am-9:55am',
    image: spins,
    route: '/SaturdayCond',
    altTag: "Bianca",
  },
  {
    name: 'Saturday: Mixed',
    time: '10am-11am',
    image: splits,
    route: '/SaturdayMixed',
    altTag: "Bianca",
  }
];

const Card = ({ name, time, image, route, altTag }) => {
  return (
    <div className="card" style={{ margin: '15px'}}>
      <Link to={route}>
        <img src={image} className="card-img-top" alt={altTag} style={{ maxHeight: '25rem' }} />
        <footer className="lesson-card-btn-color">
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
