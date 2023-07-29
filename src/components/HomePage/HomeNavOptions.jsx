import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../images/brassMonkeyExtend.png';
import Image2 from '../../images/aphroditeVariation.png';
import Image3 from '../../images/felixSplits.png';

const cardsData = [
  {
    name: 'New Student Register',
    image: Image1,
    route: '/card1',
    color: '#f3b89c',
    altTag: "Brass Monkey Extend",
  },
  {
    name: 'Student Login',
    image: Image2,
    route: '/login-student',
    color: '#bcd5cf',
    altTag: "Aphrodite Variation",
  },
  {
    name: 'Teacher Login',
    image: Image3,
    route: '/card3',
    color: '#dec4f3',
    altTag: "Splits - Felix",
  },
];

const Card = ({ name, image, route, color, altTag }) => {
  return (
    <div className="card" style={{ marginBottom: '15px', marginTop: '30px' }}>
      <img src={image} className="card-img-top" alt={altTag} style={{ maxHeight: '20rem' }} />
      <div style={{ backgroundColor: color, textAlign: 'center' }}>
        <Link to={route} className="btn">
          {name}
        </Link>
      </div>
    </div>
  );
};

const HomeNavOptions = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Card {...cardsData[0]} />
        </div>
        <div className="col-md-6">
          <Card {...cardsData[1]} />
        </div>
        <div className="col-md-6 offset-md-3">
          <Card {...cardsData[2]} />
        </div>
      </div>
    </div>
  );
};

export default HomeNavOptions;
