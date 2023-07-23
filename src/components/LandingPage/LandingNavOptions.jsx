import Card from 'react-bootstrap/Card';
import Image1 from '../../images/brassMonkeyExtend.png';
import Image2 from '../../images/aphroditeVariation.png';
import Image3 from '../../images/felixSplits.png';


function NavOptions() {
  const homePageCards = [
    {
      name: "New Student Register",
      route: "/students/register",
      image: Image1
    },
    {
      name: "Student Login",
      route: "/students/login",
      image: Image2
    },
    {
      name: "Teacher Login",
      route: "/teachers/login",
      image: Image3
    },
  ];
  
  return (
    <Card>
       <p>Yoooooo I'm here</p>
      {homePageCards.map((card, index) => (
        <Card key={index} name={card.name} route={card.route} image={card.image}/>
      ))}
     
    </Card>
  );
}

export default NavOptions;