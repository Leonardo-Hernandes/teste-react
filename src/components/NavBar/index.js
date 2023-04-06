import './styles.css';
import { Link } from "react-router-dom";

import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';

function NavBar() {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <div>
                    <Navbar.Brand className='title' href="/">Cad+</Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: "flex-end!important", alignItems: "flex-end!important" }}>
                        <Nav className="me-auto">
                            <Nav.Link href="/login" className='buttonTitle'>Login</Nav.Link>
                            <Nav.Link href="/register" className='buttonTitle'>Cadastro</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar;