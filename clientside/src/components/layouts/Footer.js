import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <Navbar className="footer">
        <div className="m-auto">
          <Container>
            <Nav.Link
              className="m-auto"
              id="NavLink"
              href="https://www.polytecsousse.tn/"
            >
              polytecsousse
            </Nav.Link>

            <a href="https://instagram.com/polytechnique_sousse?igshid=YmMyMTA2M2Y=" target="_blank" id="Footercontainer">
              
              <label className="p-2">
                <BsInstagram />
              </label>
            </a>
            <a href="https://fr-fr.facebook.com/EcolePolytechniqueSousse/" target="_blank" id="Footercontainer">
              <label className="p-2">
                <BsFacebook />
              </label>
            </a>
            <a href="https://www.linkedin.com/company/ecole-polytechnique-sousse/" target="_blank" id="Footercontainer">
              <BsLinkedin />
            </a>
          </Container>
        </div>
      </Navbar>
    </div>
  );
};
export default Footer;
