import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image1 from '../../images/aphroditeVariation.png';



function NavOptionLoginStudent() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image1} alt="image1" />
      <Button style={{backgroundColor: '#BCD5CF', border: 'none', color: 'black'}}>Student Login</Button>
    </Card>
  );
};

export default NavOptionLoginStudent;
