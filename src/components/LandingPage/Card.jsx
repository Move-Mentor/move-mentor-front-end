import React from 'react';

const LandingCard = ({ name, image, route, buttonClass }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <a href={route} className={`btn ${buttonClass}`}>
          {name}
        </a>
      </div>
    </div>
  );
};

export default LandingCard;
