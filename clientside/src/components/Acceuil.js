import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Acceuil = () => {
  return (
    <div className="">
      <Carousel autoPlay interval="3000" transitionTime="5000" showThumbs={false}>
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
    </div>
  );
};
export default Acceuil;
