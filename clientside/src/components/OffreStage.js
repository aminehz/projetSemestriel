import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCheckbox
  }from 'mdb-react-ui-kit';
function App (){
    return(
        <main>
            <section>
            <div class="row">
    <div class="col align-self-start">
  </div>
  <div class="col align-self-center">
 <h1 style={{color: 'black',fontFamily:"serif",fontSize:'50px', textAlign:'center'}}> Offres de stage </h1>
 <p  style={{color: 'black',fontFamily:"sans serif" }}>Pour vous aider l'école Polytechnique vous offres des opprotunités de stage Pour vous aider,nous mettons à disposition un article qui répertorie le nombre de semaines de stage et les objectifs pour chaque type de diplôme.</p>

  </div>
  <div class="col align-self-end">

    </div>
  </div>
            </section>
            <section>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={"https://img.jobi.tn/f7a2098f-38bd-b0e1-f44b-cdacd3db7e80/version/resize/300x300"} class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body">
        <h5 class="card-title">Proxym</h5>
        <p class="card-text">
        Proxym Group is a global IT player recognized as a Digital Services provider in ... Proxym. Services et conseil informatiques. Sousse, Sousse 
        </p>
        <button type="button" class="btn btn-link" data-mdb-ripple-color="dark"style={{backgroundColor:'beige'}}>
       <a href={'https://www.proxym-group.com/'} style={{fontFamily:'serif',fontSize:15, color:'black'}}>  More </a>
      </button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://i0.wp.com/www.recruter.tn/wp-content/uploads/2021/12/1639570785036.jpg?resize=800%2C430&ssl=1" class="card-img-top" alt="Palm Springs Road" height={450}/>
      <div class="card-body">
        <h5 class="card-title">Tassahil center</h5>
        <p class="card-text">Tassahil offers a variety of services: 
        * Services & Development: leveraging Artificial Intelligence tools for Web/Mobile decision making systems development .</p>
        <button type="button" class="btn btn-link" data-mdb-ripple-color="dark"style={{backgroundColor:'beige'}}>
       <a href='https://www.recruter.tn/tassahil-center-for-intelligent-solutions-propose-des-stages-pfe-2022/' style={{fontFamily:'serif',fontSize:15, color:'black'}}>  More </a>
      </button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="data:image/png;base64,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" class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">Aftercode</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <button type="button" class="btn btn-link" data-mdb-ripple-color="dark" style={{backgroundColor:'beige'}}>
       <a href='https://aftercode.tn/' style={{fontFamily:'serif',fontSize:15, color:'black'}}>  More </a>
      </button>
      </div>
    </div>
  </div>
  </div>
            </section>
            <section>
            <p style={{fontFamily:'serif',fontSize:45, color:'black',textAlign:'center'}} >
                Offres de stage
            </p>
            <MDBContainer fluid className='my-5'>

      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">postuler</h2>

              <MDBRow>
                <MDBCol col='6'>
                <label> Matricule</label>
                  <MDBInput wrapperClass='mb-4'  id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                <label> calendrier</label>
                  <MDBInput wrapperClass='mb-4' id='form2' type='date'/>
                </MDBCol>
              </MDBRow>
              <label> Email</label>

              <MDBInput wrapperClass='mb-4'  id='form3' type='email'/>
              <label> Votre CV</label>
              <MDBInput wrapperClass='mb-4'  id='form4' type='file' placeholder='Upload'/>

              
              <MDBBtn className='w-100 mb-4' size='md' style={{backgroundColor:'beige',borderBlockColor:'beige'}}><p style={{fontFamily:'serif',fontSize:15, color:'black'}}>Postuler</p></MDBBtn>
              <MDBBtn className='w-100 mb-4' size='md'style={{backgroundColor:'beige',borderBlockColor:'beige'}}><p style={{fontFamily:'serif',fontSize:15, color:'black'}}>Submit</p></MDBBtn>

              <div className="text-center">

               

              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col='6'>
          <img src="https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" class="w-100 rounded-4 shadow-4"
            alt="" fluid height={700}/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>

            </section>
        </main>
    
    );}

    
    export default App;