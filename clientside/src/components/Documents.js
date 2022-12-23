import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";
const Documents = () => {

const[nom,setNom]=useState('');
const[prenom,setPrenom]=useState('');
const[email,setEmail]=useState('');
const[document,setDocument]=useState('');

const handleSubmit=(e)=>{
  e.preventDefault();
  let formData={nom:nom,prenom:prenom,email:email,document:document};
  console.log(formData);
  axios.post("",formData)
  .then(response=>console.log(response));
}



  return (
    <div className="d-flex justify-content-center p-5 bg-image" id="bgimgdoc">
      <Card className="p-1 w-50">
        <Card.Body>
          <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control name="nom" value={nom} onChange={(e)=>setNom(e.target.value)} type="text" placeholder="Entrer votre nom" />
              <Form.Text className="text-muted">Saisie votre nom.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Prénom</Form.Label>
              <Form.Control name="prenom" value={prenom} onChange={(e)=>setPrenom(e.target.value)} type="text" placeholder="Entrer votre Prénom" />
              <Form.Text className="text-muted">Saisie votre Prénom.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Entrer votre Email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Choisir le document</Form.Label>
              <Form.Select  >
                <option name="attestationPresence" value={document} onChange={(e)=>setDocument(e.target.value)} >Attestation de présence</option>
                <option name="certificationInscription" value={document} onChange={(e)=>setDocument(e.target.value)}>Certification d'inscription</option>
                <option name="releveNotes" value={document} onChange={(e)=>setDocument(e.target.value)}>Rélevé de Note</option>
                <option name="attestationReussite" value={document} onChange={(e)=>setDocument(e.target.value)}>Attestation de Réussite</option>
              </Form.Select>
            </Form.Group>

            <div className="d-flex justify-content-center ">
              <Button className="w-75 rounded " id="submitBtn" type="submit">
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
