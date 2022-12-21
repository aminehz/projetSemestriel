import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const HeaderSign = () => {

  return (

    <div className="">
      <Navbar className="NavBg">
        <Container>
          <Navbar.Brand id="NavLink" href="/Acceuil">
            POLYTEC
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </div>
  );
};
export default HeaderSign;
