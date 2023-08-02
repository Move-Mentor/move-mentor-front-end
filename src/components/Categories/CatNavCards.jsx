import React from 'react';
import { Link } from 'react-router-dom';
import "./CatNavCards.css";
import {categories} from './categories';

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
      {categories.map((category, index) => (
        <div key={index} className="col-md-3">
          <Card {...category} />
        </div>
      ))}
    </div>
  );
};

export default OptionsNav;
