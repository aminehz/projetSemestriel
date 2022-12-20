import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
const Documents = () => {
  return (
    <div className="d-flex justify-content-center p-5 bg-image" id="bgimgdoc">
      <Card className="p-1">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Entrer votre nom" />
              <Form.Text className="text-muted">Saisie votre nom.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" placeholder="Entrer votre Prénom" />
              <Form.Text className="text-muted">Saisie votre Prénom.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" placeholder="Entrer votre Email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Choisir le document:</Form.Label>
              <Form.Select>
                <option>Attestation de présence</option>
                <option>Certification d'inscription</option>
                <option>Rélevé de Note</option>
                <option>Attestation de Réussite</option>
              </Form.Select>
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button id="submitBtn" type="submit">
                submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Documents;
