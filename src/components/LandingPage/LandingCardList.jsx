import React from 'react';
import Card from './Card';



const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const CardList = () => {
  return (
    <div className="container">
      <div className="row">
        {cardsData.map((card, index) => {
          const randomColorClass = `btn-custom-color-${getRandomInt(3) + 1}`;
          return (
            <div key={index} className="col-md-4">
              <Card {...card} buttonClass={randomColorClass} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
