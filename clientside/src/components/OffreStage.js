import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import Form from "react-bootstrap/Form";

function App() {
  const [stages, setStages] = useState([]);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCV] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {nom:nom,prenom:prenom,email:email,cv:cv};
    console.log(formData);
    axios
      .post(
        "http://localhost/projetSemestriel/serverside/public/index.php/stages/email",
        formData
      )
      .then((response) => console.log(response));
  };

  return (
    <main>
      <section>
        <div class="row">
          <div class="col align-self-start"></div>
          <div class="col align-self-center">
            <h1
              style={{
                color: "black",
                fontFamily: "serif",
                fontSize: "50px",
                textAlign: "center",
              }}
            >
              {" "}
              Offres de stage{" "}
            </h1>
            <p style={{ color: "black", fontFamily: "sans serif" }}>
              Pour vous aider l'école Polytechnique vous offres des opprotunités
              de stage Pour vous aider,nous mettons à disposition un article qui
              répertorie le nombre de semaines de stage et les objectifs pour
              chaque type de diplôme.
            </p>
          </div>
          <div class="col align-self-end"></div>
        </div>
      </section>
      <section>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {stages.map((stage, idx) => (
            <div class="col">
              <div class="card h-100">
                <img
                  src={stage?.imageStage}
                  class="card-img-top"
                  alt={stage?.imageStage}
                />
                <div class="card-body">
                  <h5 class="card-title">{stage?.titreStage}</h5>
                  <p class="card-text">{stage?.descriptionStage}</p>
                  <button
                    type="button"
                    class="btn btn-link"
                    data-mdb-ripple-color="dark"
                    style={{ backgroundColor: "beige" }}
                  >
                    <a
                      href={stage?.nomPoste}
                      style={{
                        fontFamily: "serif",
                        fontSize: 15,
                        color: "black",
                      }}
                    >
                      {" "}
                      More{" "}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <p
          style={{
            fontFamily: "serif",
            fontSize: 45,
            color: "black",
            textAlign: "center",
          }}
        >
          Offres de stage
        </p>
        <MDBContainer fluid className="my-5">
          <MDBRow className="g-0 align-items-center">
            <MDBCol col="6">
              <MDBCard
                className="my-5 cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <MDBCardBody className="p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Postuler</h2>
                  <Form onSubmit={handleSubmit}>
                    <MDBRow>
                      <MDBCol col="6">
                        <label> Nom</label>
                        <MDBInput
                          name="nom"
                          value={nom}
                          onChange={(e) => setNom(e.target.value)}
                          wrapperClass="mb-4"
                          id="form1"
                          type="text"
                        />
                      </MDBCol>

                      <MDBCol col="6">
                        <label> Prenom</label>
                        <MDBInput
                          name="prenom"
                          value={prenom}
                          onChange={(e) => setPrenom(e.target.value)}
                          wrapperClass="mb-4"
                          id="form2"
                          type="text"
                        />
                      </MDBCol>
                    </MDBRow>
                    <label> Email</label>

                    <MDBInput
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      wrapperClass="mb-4"
                      id="form3"
                      type="email"
                    />
                    <label> Votre CV</label>
                    <MDBInput
                      name="cv"
                      value={cv}
                      onChange={(e) => setCV(e.target.value)}
                      wrapperClass="mb-4"
                      id="form4"
                      type="text"
                      placeholder="Upload"
                    />
                    <MDBBtn
                      type="submit"
                      className="w-100 mb-4"
                      size="md"
                      style={{
                        backgroundColor: "beige",
                        borderBlockColor: "beige",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "serif",
                          fontSize: 15,
                          color: "black",
                        }}
                      >
                        Submit
                      </p>
                    </MDBBtn>
                  </Form>
                  <div className="text-center"></div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol col="6">
              <img
                src="https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                class="w-100 rounded-4 shadow-4"
                alt=""
                fluid
                height={700}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </main>
  );
}

export default App;
