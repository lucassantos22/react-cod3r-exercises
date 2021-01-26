import {Navbar} from 'react-bootstrap';
import {Github} from 'react-bootstrap-icons'

export default props => (
    <Navbar bg="dark" fixed="bottom">
        <Navbar.Brand href="https://github.com/lucassantos22" style={{color: 'white'}}><Github style={{marginBottom: '3px'}}/> /lucassantos22</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{color: 'white'}}>
                Client conectado ao <a style={{color: 'white'}} href="http://todobackend.com/specs/index.html?https://todo-backend-express.herokuapp.com/">https://todo-backend-express.herokuapp.com/</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
)