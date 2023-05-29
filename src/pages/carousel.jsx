import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/769767224911069236/1110190317375868928/poster-pegasus-40-desk.jpg" height={500}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Os melhores preços do mercado</h3>
          <p>Qualidade e Segurança na entrega!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/poster-pegasus-40-desk.jpg" height={500}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>JUST DO IT</h3>
          <p>Apenas faça.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/769767224911069236/1110190688043274340/poster-pegasus-40-desk1.jpg" height={500}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Juntos nos movemos</h3>
          <p>
            Encontre o presente perfeito para todos os estilos e ocasiões.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;