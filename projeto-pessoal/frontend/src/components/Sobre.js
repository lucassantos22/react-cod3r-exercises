import {Card} from 'react-bootstrap/';

import {Link} from 'react-router-dom';

export default props => (
    <>
        <Card>
        <Card.Body>
            <Card.Title id='Sobre'>Sobre</Card.Title>
            <Card.Text>
                Sistema desenvolvido para o processo seletive da empresa <a href='https://zygotecnologia.com/' target='blank'>Zygo</a> :)
            </Card.Text>
            <Card.Link><Link to='/'>Voltar</Link></Card.Link>
        </Card.Body>
        </Card>
    </>
)