import axios from "axios";
import { useEffect, useState } from "react";

const Admin = () => {
  const [certifications, setCertifications] = useState([]);
  const [stages, setStages] = useState([]);
  const [user, setUser] = useState([]);
  const[titreCertifications,setTitreCertifications]=useState('');
  const [descriptionCertifications,setDescriptionCertifications]=useState('');
  const [imageCertifications,setImageCertifications]=useState('');


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
  useEffect(() => {
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
      Users:
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Nom</th>
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
    </div>
  );
};
export default Admin;
