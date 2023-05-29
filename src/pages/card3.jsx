import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card3() {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/385378/01/sv01/fnd/BRA/w/2000/h/2000/fmt/png" />
      <Card.Body>
        <Card.Title>Tênis Suede Classic XXI</Card.Title>
        <Card.Text>
        O modelo mais icônico da PUMA surgiu em 1968 e teve um impacto revolucionário na cultura sneaker. Desde então, já foi usado por ícones de todas as gerações.
        </Card.Text>
        <Button variant="success" href='/produto3'>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Card3;