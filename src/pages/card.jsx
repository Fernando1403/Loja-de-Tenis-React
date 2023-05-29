import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/02630351.jpg" />
      <Card.Body>
        <Card.Title>Dunk Low Retro SE</Card.Title>
        <Card.Text>
            Light Silver and Ocean Bliss
        </Card.Text>
        <Button variant="success" href='/produto1'>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;