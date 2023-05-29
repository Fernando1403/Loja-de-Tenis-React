import ColorSchemesExample from './ColorSchemesExample';
import Card from './card';
import Footer from './Footer';
import Card2 from './card2';
import Card3 from './card3';

function Produto(){
    return(
        <div>
            <ColorSchemesExample/>

            <div className="container">
            <h2>Produtos</h2>

            <Card/><br/>
            <Card2/><br/>
            <Card3/><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto