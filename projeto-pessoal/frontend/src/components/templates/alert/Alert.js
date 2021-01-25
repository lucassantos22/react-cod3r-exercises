import {useState} from 'react';
import {Alert} from 'react-bootstrap';


export default props => {
    const [show, setShow] = useState(true);

    return(
        <Alert style={{position: 'absolute', marginLeft: '38em'}} key={'idx'} variant='success' dismissible show={show} onClose={() => setShow(false)}>
            Tarefa adicionada com sucesso!
        </Alert>
    )
}