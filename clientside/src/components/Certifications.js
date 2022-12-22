import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
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

  return (
    <div className="bgCertification">
      <div className="d-flex justify-content-center p-5 mt-5   ">
        <h1>Les Certifications du PolyFc</h1>
      </div>

      <div className="d-flex justify-content-center p-5 mt-5   ">
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 16 }).map((_, idx) => (
            <Col>
              <Card className="img-thumbnail shadow  ">
                <Card.Img variant="top" src="assets/android.png" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>bonjour</Card.Text>
                  <div className="d-flex justify-content-center">
                    <MDBBtn
                      id="inscriptionCertif"
                      onClick={() => setScrollableModal(!scrollableModal)}
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
