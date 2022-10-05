import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavbarBrand } from "react-bootstrap";

function Header() {
    return (
        <Navbar className="header-section" expand="lg">
            <Container>
                <Navbar.Brand href="#">Ying Lu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/resume">Resume</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header