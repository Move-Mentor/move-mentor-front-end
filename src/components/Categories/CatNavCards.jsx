import React from 'react';
import { Link } from 'react-router-dom';
import classImage from '../../images/optionsClassMoves.png';
import profileImage from '../../images/optionsSearch.png';
import categoriesImage from '../../images/optionsCategories.png';

const cardsData = [
  {
    name: 'Class',
    image: classImage,
    route: '/card1',
    color: '#f3b89c',
    altTag: "Brass Monkey Extend",
  },
  {
    name: 'Profile',
    image: profileImage,
    route: '/login-student',
    color: '#bcd5cf',
    altTag: "Aphrodite Variation",
  },
  {
    name: 'All Moves',
    image: categoriesImage,
    route: '/CategoriesMain',
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

export default HomeNavOptions;
