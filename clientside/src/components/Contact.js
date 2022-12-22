import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleMapReact from "google-map-react";
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { BsPinFill } from "react-icons/bs";
import Iframe from "react-iframe";
const Contact = () => {
  return (
    <div>
      <div className="d-flex justify-content-center p-5" id="conctactBg">

        <CardGroup className="w-75 my-5 mt-5 pt-5">
          <Card>
            <Card.Body>
              <Card.Title className="d-flex justify-content-center pt-1">NOUS CONTACTER </Card.Title>
              <div className="d-flex justify-content-center pt-5">
                <Card.Text>
                  <div>
                    <AiOutlineMail />
                    contact@polytecsousse.tn
                  </div>
                  <div>
                    <AiOutlineMobile />
                    (+216) 73 277 877
                  </div>
                  <div>
                    <AiOutlineMobile />
                    (+216) 99 277 877
                  </div>
                  <div>
                    <AiOutlineMobile />
                    (+216) 96 277 878
                  </div>
                  <div>
                    <AiOutlineMobile />
                    (+216) 92 277 807
                  </div>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
                <Card.Title className="d-flex justify-content-center">Formulaire de Contact</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" placeholder="Entrer votre Nom" />
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control type="text" placeholder="Entrer votre Prenom" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Entrer votre email" />
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Form.Label>Message:</Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    placeholder="Entrer votre message"
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button id="btnContact" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>

      <div className="d-flex justify-content-center p-5">
        <h1>LOCALISATION:</h1>
      </div>
      <div className="d-flex justify-content-center p-5">
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.926904427248!2d10.586691715194842!3d35.826269080160785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b3a0237010f%3A0x4418fc1f1a3cb73f!2sPolytechnique%20Sousse!5e0!3m2!1sfr!2stn!4v1671541950030!5m2!1sfr!2stn"
          width="1200px"
          height="600px"
          id=""
          className=""
        />
      </div>
    </div>
  );
};
export default Contact;
