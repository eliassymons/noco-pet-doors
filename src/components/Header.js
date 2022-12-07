import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-scroll";
import main from "../images/noco-logo.png";

function Header() {
  return (
    <Navbar key="lg" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Link to="home" spy={true} smooth={true} offset={-200} duration={500}>
            <img alt="logo" src={main} className="logo" />
          </Link>
        </Navbar.Brand>
        <NavbarToggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbar-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              <Link
                className="link"
                to="pet-doors"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Pet Doors
              </Link>
              <Link
                className="link"
                to="about"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                About Us
              </Link>
              <Link
                className="link"
                to="contact"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Contact
              </Link>
              {/* <Link
                className="link"
                to="blog"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Blog
              </Link> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
