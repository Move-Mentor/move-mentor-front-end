//This is where the three cards will be rendered
import Image1 from '../../images/brassMonkeyExtend.png';
import Image2 from '../../images/aphroditeVariation.png';
import Image3 from '../../images/felixSplits.png';




const cardsData = [
  {
    name: 'New Student Register',
    image: Image1,
    route: '/card1',
    color: '#f3b89c',
  },
  {
    name: 'Student Login',
    image: Image2,
    route: '/card2',
    color: '#bcd5cf',
  },
  {
    name: 'Teacher Login',
    image: Image3,
    route: '/card3',
    color: '#dec4f3',
  },
];

const Card = ({ name, image, route, color }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div style={{ backgroundColor: color, textAlign: 'center' }}>
        <a href={route} className="btn">
          {name}
        </a>
      </div>
    </div>
  );
};


const HomeNavOptions = () => {
  return (
    <div className="container">
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-6">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeNavOptions;