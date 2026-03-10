import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Mon Restaurant</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Menu</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default NavbarComponent;