import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router,Link } from "react-router-dom";
const Acceuil = () => {
  return (
    <div className="me-auto">
      <Carousel className="p-5" autoPlay interval="3000" transitionTime="5000" showThumbs={false}>
        <div className="imgCaroussel">
          <img src="assets/poly1.jpg" />
        
        </div>
        <div className="imgCaroussel">
          <img src="assets/poly2.jpg" />
         
        </div>
        <div className="imgCaroussel">
          <img src="assets/poly3.jpg" />
         
        </div>
        <div className="imgCaroussel">
          <img src="assets/poly4.jpg" />
         
        </div>
      </Carousel>
      <div className="pt-5 pb-5 d-flex flex-row justify-content-center">
        <Link to="/Apropos">
        <Button id="AproposBtn">A propos</Button>
        </Link>
      
      </div>
    
    </div>
  );
};
export default Acceuil;
