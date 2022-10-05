import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar className="header-section" expand="lg">
            <Container>
                <Navbar.Brand className="nameBrand" href="#">Ying Lu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navLinks ms-auto">
                            <Nav.Link className="headerLinks" href="/">Home</Nav.Link>
                            <Nav.Link className="headerLinks" href="/resume">Resume</Nav.Link>
                            <Nav.Link className="headerLinks contactLink" href="/contact">Contact</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header