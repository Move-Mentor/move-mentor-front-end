import Card from 'react-bootstrap/Card';
import Image1 from '../../images/brassMonkeyExtend.png';
import Image2 from '../../images/aphroditeVariation.png';
import Image3 from '../../images/felixSplits.png';


function NavOptions() {
  const homePageCards = [
    {
      name: "New Student Register",
      // route: "/students/register",
      image: Image1
    },
    {
      name: "Student Login",
      // route: "/students/login",
      image: Image2
    },
    {
      name: "Teacher Login",
      // route: "/teachers/login",
      image: Image3
    },
  ];
  
  return (
    <Card>
       <p>Yoooooo I'm here</p>
      {homePageCards.map((card, index) => (
        // <Card key={index} name={card.name} route={card.route} image={card.image}/>
        <Card key={index} name={card.name} image={card.image}/>
      ))}
     
    </Card>
  );
}

export default NavOptions;


// import React, { useState } from "react";
// import { Card, Carousel } from "react-bootstrap";
// import image1 from '../../images/brassMonkeyExtend.png';
// import image2 from '../../images/aphroditeVariation.png';
// import image3 from '../../images/felixSplits.png';


// const images = [
//   { src: image1, name: "Allegra Curl" },
//   { src: image2, name: "Angel - Glorious"},
//   { src: image3, name: "Headstand"},
//   // Add more image objects as needed
// ];

// const NavOptions = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleCarouselSlide = (selectedIndex, e) => {
//     setActiveIndex(selectedIndex);
//   };

//   return (
//     <Card >
//       <Carousel
//         >
//         {images.map((image, index) => (
//           <Carousel.Item key={index}>
//             <img
//               className="d-block w-100"
//               src={image.src}
//               alt={`Slide ${index}`}
//             />
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </Card>
//   );
// };

// export default NavOptions;