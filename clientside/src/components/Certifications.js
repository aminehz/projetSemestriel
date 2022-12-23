import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const Certifications = () => {
  const [scrollableModal, setScrollableModal] = useState(false);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost/projetSemestriel/serverside/public/index.php/certifications/").then((data) =>
      console.log(data.json().then((data2) => {
        console.log(JSON.parse(data2))
        setCertifications(JSON.parse(data2));
      }))
    );
  }, []);

  function subscribe()
  {
    let formData={idUser:title,idCertification:snippet};
    axios.post("http://localhost/projetSemestriel/serverside/public/index.php/certifications/",formData)
      .then(response=>console.log(response));
  }
  
  return (
    <div className="bgCertification">
      <div className="d-flex justify-content-center p-5 mt-5   ">
        <h1>Les Certifications du PolyFc</h1>
      </div>

      <div className="d-flex justify-content-center p-5 mt-5   ">
        <Row xs={1} md={4} className="g-4">
          {certifications.map((certification, idx) => (
            <Col>
              <Card className="img-thumbnail shadow  ">
                <Card.Img variant="top" src={ certification?.imageCertifications } />
                <Card.Body>
                  <Card.Title>{ certification?.titreCertifications }</Card.Title>
                  <Card.Text>{ certification?.descriptionCertifications }</Card.Text>
                  <div className="d-flex justify-content-center">
                    <MDBBtn
                      id="inscriptionCertif"
                      onClick={() => subscribe()}
                    >
                      S'inscrire
                    </MDBBtn>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <MDBModal
          show={scrollableModal}
          setShow={setScrollableModal}
          tabIndex="-1"
        >
          <MDBModalDialog scrollable>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Inscription au certification</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={() => setScrollableModal(!scrollableModal)}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">MICROSOFT</option>
                      <option value="2">ANDROID</option>
                      <option value="3">ORACLE</option>
                      <option value="4">CISCO</option>
                      <option value="5">JAVA</option>
                      <option value="6">CERTIPORT</option>
                      <option value="7">ADOBE</option>
                      <option value="8">AUTODESK</option>
                      <option value="9">PMI</option>
                      <option value="10">AWS</option>
                      <option value="11">IBM</option>
                      <option value="12">HUAWEI</option>
                      <option value="13">FORTINET</option>
                      <option value="14">SOLIDWORKS</option>
                      <option value="15">TOEIC</option>
                      <option value="16">DELFE</option>
                   
                    </Form.Select>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    S'inscrire
                  </Button>
                </Form>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn
                  color="secondary"
                  onClick={() => setScrollableModal(!setScrollableModal)}
                >
                  Close
                </MDBBtn>
                <MDBBtn>Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>
    </div>
  );
};
export default Certifications;
