import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import styles from "./NavBar.module.css";

import { Link } from "react-router-dom"; 

function MainNav() {
  return (
    <>
    <Navbar className={styles.MenuNav}>
        <Container className={styles.containernav}>
          <Nav className="me-auto">
            <Link to="/" className={styles.linkinicio}>INICIO</Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      );
    }
    
    export default MainNav;