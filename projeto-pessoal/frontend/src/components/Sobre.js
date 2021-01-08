import {Card} from 'react-bootstrap/';

import {Link} from 'react-router-dom';

export default props => (
    <>
        <Card>
        <Card.Body>
            <Card.Title>Sobre</Card.Title>
            <Card.Text>
                Sistema de gerenciamento de equipe com alta capacidade de armazenamento.
            </Card.Text>
            <Card.Link><Link to='/'>Voltar</Link></Card.Link>
            <Card.Link href="mailto:lucas.afsantos@hotmail.com">Entre em contato</Card.Link>
        </Card.Body>
        </Card>
    </>
)