import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navbar.module.css'; 
import { useTheme } from '../../context/useTheme';

const NavbarComponent = () => {
  const {isDark, toggleTheme} = useTheme();
  return (
    <div className={styles.navbarWrapper}> 
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">🍽 Mon Restaurant</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Menu</Nav.Link>
          </Nav>
           <button
            onClick={toggleTheme}
            className={styles.themeBtn}
            title={isDark ? "Mode clair" : "Mode sombre"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;