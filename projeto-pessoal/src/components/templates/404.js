import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap';

export default props => (
    <>
        <Card>
        <Card.Body>
            <Card.Title id='Sobre'>Erro 404</Card.Title>
            <Card.Text>
                Desculpe mas essa página não existe.
            </Card.Text>
            <Card.Link><Link to='/'>Voltar</Link></Card.Link>
        </Card.Body>
        </Card>
    </>
)