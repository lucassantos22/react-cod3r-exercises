import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default props => (
    <>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand><Link to='/' style={{color:'white'}}>{props.title}</Link></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link><Link to='/' style={{color:'white'}}>Home</Link></Nav.Link>
            <Nav.Link><Link to='/sobre' style={{color:'white'}}>Solicitações</Link></Nav.Link>
            <Nav.Link><Link to='/sobre' style={{color:'white'}}>Sobre</Link></Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    </>
)