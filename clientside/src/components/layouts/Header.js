import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {

  return (

    <div className="">
      <Navbar className="NavBg">
        <Container>
          <Navbar.Brand id="NavLink" href="">
            POLYTEC
          </Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link id="NavLink" href="/Acceuil">
              Acceuil
            </Nav.Link>
            <Nav.Link id="NavLink" href="/Contact">
              Contact
            </Nav.Link>
            <NavDropdown title="Documents" id="NavLink">
              <NavDropdown.Item href="/offredestage">
                Offres Des Stages
              </NavDropdown.Item>
              <NavDropdown.Item href="/certifications">
                Certification
              </NavDropdown.Item>
              <NavDropdown.Item href="/Documents">Document</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="NavLink" href="/apropos">
              A Propos
            </Nav.Link>
            <div className="d-flex justify-content-end ml-5 btn btn-dark">
            <Nav.Link id="Logout" href="/">
              Logout
            </Nav.Link>
            </div>
            
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
