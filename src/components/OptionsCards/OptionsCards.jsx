import React from 'react';
import { Link } from 'react-router-dom';
import "./OptionsCards.css";

import classImage from '../../images/optionsClassMoves.png';
import profileImage from '../../images/optionsSearch.png';
import categoriesImage from '../../images/optionsCategories.png';

const cardsData = [
  {
    name: 'Lessons',
    image: classImage,
    route: '/Lessons',
    color: '#bcd5cf',
    altTag: "Aerial Invert",
  },
  {
    name: 'Profile',
    image: profileImage,
    route: '/login-student',
    color: '#bcd5cf',
    altTag: "Star Chaser",
  },
  {
    name: 'All Moves',
    image: categoriesImage,
    route: '/CategoriesMain',
    altTag: "Bianca",
  },
];

const Card = ({ name, image, route, altTag, userRole  }) => {
  const headerClass = userRole === 'teacher' ? 'header-teacher' : 'header-student';
  return (
    <div className="card" style={{ marginBottom: '15px'}}>
      <Link to={route}>
        <img src={image} className="card-img-top" alt={altTag} style={{ maxHeight: '25rem' }} />
        <div className={headerClass} style={{textAlign: 'center' }}>
          {name}
        </div>
      </Link>
    </div>
  );
};

const OptionsNav = () => {
  return (
    <div className="grid">
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

export default OptionsNav;
