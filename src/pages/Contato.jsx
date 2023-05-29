import ColorSchemesExample from "./ColorSchemesExample"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Footer from "./Footer";

import Carousel from './carousel'

function Contato(){
    return(
        <div>
            <ColorSchemesExample/><br/>
            <Carousel/><br/>
        
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Nome:</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Email:</InputGroup.Text>
        <Form.Control
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Telefone:</InputGroup.Text>
        <Form.Control
          placeholder="Telefone"
          aria-label="Telefone"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Assunto:</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup><br/>
      
      <Button variant="success">Enviar</Button>{' '}<br/><br/>

      <h5>
            Estamos sempre ansiosos para ouvir de nossos clientes na TopShoes! Se você tiver alguma dúvida, comentário ou sugestão, não hesite em entrar em contato conosco. Nossa equipe de atendimento ao cliente está pronta para ajudá-lo com qualquer informação que você precise sobre nossos produtos, pedidos ou qualquer outro assunto relacionado aos tênis que oferecemos. Sua satisfação é a nossa prioridade, e faremos o possível para garantir que você tenha uma experiência excepcional em sua jornada conosco. Estamos aguardando sua mensagem e esperamos poder ajudá-lo em breve.
            </h5><br/>

            <Footer/>   
        </div>
    )
}

export default Contato