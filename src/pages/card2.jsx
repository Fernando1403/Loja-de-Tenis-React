import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card2() {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/014957NX.jpg" />
      <Card.Body>
        <Card.Title>Nike Superfly 8 Elite</Card.Title>
        <Card.Text>
        A Nike Mercurial Dream Speed Superfly 8 Elite incorpora a maior força autoproclamada de Cristiano Ronaldo
        </Card.Text>
        <Button variant="success" href='/produto2'>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Card2;