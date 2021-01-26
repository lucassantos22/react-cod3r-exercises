import {Link} from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap';

export default props => (
    <>
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Erro 404</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Desculpe mas essa página não existe.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary"><Link to='/' style={{color: 'white'}}>Voltar</Link></Button>
            </Modal.Footer>
        </Modal.Dialog>
    </>
)