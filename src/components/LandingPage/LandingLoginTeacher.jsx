import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image1 from '../../images/felixSplits.png';



function NavOptionLoginTeacher() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image1} alt="image1" />
      <Button style={{backgroundColor: '#DEC4F3', border: 'none', color: 'black'}}>Teacher Login</Button>
    </Card>
  );
};

export default NavOptionLoginTeacher;
