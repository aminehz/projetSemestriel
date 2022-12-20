import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { BsInstagram , BsFacebook,BsLinkedin } from "react-icons/bs";

const Footer=() => {

    return(
        
        <div>
                <Navbar className="footer">

                 <div className="m-auto">
                   <Container>
                     
                      <Nav.Link className="m-auto" id="NavLink" href="https://www.polytecsousse.tn/">polytecsousse</Nav.Link> 
                    
                      <label className="p-2"><BsInstagram/></label>
                      <label className="p-2"><BsFacebook/></label>
                      <BsLinkedin/>
                      
                     
                   </Container>
                 </div>

                   
                </Navbar>
                
        </div>
    );

}
export default Footer;