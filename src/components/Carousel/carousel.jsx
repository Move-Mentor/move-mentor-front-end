import React, { useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import image1 from '../../images/allegraCurl.png';
import image2 from '../../images/angelGlorious.png';
import image3 from '../../images/headstand.png';
import './carousel.css';

const images = [
  { src: image1, name: "Allegra Curl", category: "Inverts", alternate: "" },
  { src: image2, name: "Angel - Glorious", category: "Climbs", alternate: "" },
  { src: image3, name: "Headstand", category: "Floor", alternate: "" },
  // Add more image objects as needed
];

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCarouselSlide = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Card>
      <Carousel
        interval={null}
        activeIndex={activeIndex}
        onSelect={handleCarouselSlide}
        indicators={false}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
        >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={`Slide ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Footer>
        <div>Name: {images[activeIndex].name}</div>
        <div>Category: {images[activeIndex].category}</div>
        <div>Alt: {images[activeIndex].alternate}</div>
      </Card.Footer>
    </Card>
  );
};

export default CarouselComponent;