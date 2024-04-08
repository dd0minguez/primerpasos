import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Menu() {
return (
    // bg-body-tertiary
<Navbar expand="lg" variant='light' className="d-flex align-items-center">
    
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="justify-content-center mx-4" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    
</Navbar>
);
}
export default Menu