import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Admin = () => {
  const [certifications, setCertifications] = useState([]);
  const [stages, setStages] = useState([]);
  const [user, setUser] = useState([]);
  const[documents,setDocuments]=useState([]);
  const[titreCertifications,setTitreCertifications]=useState('');
  const [descriptionCertifications,setDescriptionCertifications]=useState('');
  const [imageCertifications,setImageCertifications]=useState('');
  const [Email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    let formData={Email:Email,password:password};
    console.log(formData);
    axios.post("http://localhost/projetSemestriel/serverside/public/index.php/user/addUser",formData)
    .then(response=>console.log(response));
  }
  
  const certificationSubmit=(e)=>{
    e.preventDefault();
    let formData={titreCertifications:titreCertifications,descriptionCertifications:descriptionCertifications,imageCertifications:imageCertifications};
    console.log(formData);
    axios.post("http://localhost/projetSemestriel/serverside/public/index.php/certifications/addCertif",formData)
    .then(response=>console.log(response));
  }

  useEffect(() => {
    fetch(
      "http://localhost/projetSemestriel/serverside/public/index.php/certifications/"
    ).then((data) =>
      console.log(
        data.json().then((data2) => {
          console.log(JSON.parse(data2));
          setCertifications(JSON.parse(data2));
        })
      )
    );
  }, []);

  useEffect(() => {
    fetch(
      "http://localhost/projetSemestriel/serverside/public/index.php/stages/"
    ).then((data) =>
      console.log(
        data.json().then((data2) => {
          console.log(JSON.parse(data2));
          setStages(JSON.parse(data2));
        })
      )
    );
  }, []);
 /* useEffect(() => {
    fetch(
      "http://localhost/projetSemestriel/serverside/public/index.php/user/verification"
    ).then((data) =>
      console.log(
        data.json().then((data2) => {
          console.log(JSON.parse(data2));
          setUser(JSON.parse(data2));
        })
      )
    );
  }, []);*/
  //fetch data for documents
  useEffect(() => {
    fetch(
      "http://localhost/projetSemestriel/serverside/public/index.php/documents/"
    ).then((data) =>
      console.log(
        data.json().then((data2) => {
          console.log(JSON.parse(data2));
          setDocuments(JSON.parse(data2));
        })
      )
    );
  }, []);

  //fetch data for users

  useEffect(() => {
    fetch(
      "http://localhost/projetSemestriel/serverside/public/index.php/user/"
    ).then((data) =>
      console.log(
        data.json().then((data2) => {
          console.log(JSON.parse(data2));
          setUser(JSON.parse(data2));
        })
      )
    );
  }, []);


  //delete fetch
  const handleDelete=(id)=>{
    axios.delete(`http://localhost/projetSemestriel/serverside/public/index.php/certifications/delete/${id}`)
      .then(response=>console.log(response));
  }

  //

  return (
    <div>
      Certifications:
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Image</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {certifications.map((certification, idx) => (
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="ms-3">
                    <p class="fw-bold mb-1">
                      {certification?.titreCertifications}
                      
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="fw-normal mb-1">
                  {certification?.descriptionCertifications}
               
                </p>
              </td>

              <td>{certification?.imageCertifications}
                
              </td>
              <td>
                <button onClick={handleDelete(certification?.id)} type="button" class="btn btn-link btn-sm btn-rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      Stages:
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Titre Stage</th>
            <th>Description Stage</th>
            <th>Image</th>
            <th>Site du societe</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stages.map((stage, idx) => (
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="ms-3">
                    <p class="fw-bold mb-1">{stage?.titreStage}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="fw-normal mb-1">{stage?.descriptionStage}</p>
              </td>

              <td>{stage?.imageStage}</td>
              
                <td>{stage?.nomPoste}</td>
                
                <td>
                <button type="button" class="btn btn-link btn-sm btn-rounded ">
                  Edit
                </button>
                </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      Les Demandes des documents: 
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Type documents</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document, idx) => (
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="ms-3">
                    <p class="fw-bold mb-1">{document?.nom}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="fw-normal mb-1">{document?.prenom}</p>
              </td>

              <td>{document?.email}</td>
              
                <td>{document?.typeDocuments}</td>
                
                <td>
                <button type="button" class="btn btn-link btn-sm btn-rounded ">
                  Edit
                </button>
                </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      Users:
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Email</th>
            <th>Mot de passe</th>
            

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users, idx) => (
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="ms-3">
                    <p class="fw-bold mb-1">{users?.Email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="fw-normal mb-1">{users?.password}</p>
              </td>

              
              <td>
                <button type="button" class="btn btn-link btn-sm btn-rounded">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      Add a New User:
      <div className="d-flex justify-content-center p-5 bg-image" id="bgimgdoc">
      <Card className="p-1 w-50">
        <Card.Body>
          <Form  onSubmit={handleSubmit}>
            

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control name="Email" value={Email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Entrer votre Email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>password</Form.Label>
              <Form.Control name="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Entrer password" />
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

Add certification:
<div className="d-flex justify-content-center p-5 bg-image" id="bgimgdoc">
      <Card className="p-1 w-50">
        <Card.Body>
          <Form  onSubmit={certificationSubmit}>
            

            <Form.Group className="mb-3">
              <Form.Label>Titre Certifications</Form.Label>
              <Form.Control name="titreCertifications" value={titreCertifications} onChange={(e)=>setTitreCertifications(e.target.value)} type="text" placeholder="Entrer votre Email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description Certifications</Form.Label>
              <Form.Control name="descriptionCertifications" value={descriptionCertifications} onChange={(e)=>setDescriptionCertifications(e.target.value)} type="text" placeholder="Entrer password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image Certifications</Form.Label>
              <Form.Control name="imageCertifications" value={imageCertifications} onChange={(e)=>setImageCertifications(e.target.value)} type="text" placeholder="Entrer password" />
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

    </div>

    
  );
};
export default Admin;
