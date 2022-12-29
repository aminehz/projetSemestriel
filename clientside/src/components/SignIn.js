import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  
}
from 'mdb-react-ui-kit';
import axios from "axios";
import Form from "react-bootstrap/Form";


function App() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [user,setUser]=useState();
 
  
  useEffect(() => {
    
  }, []);

  const handleSubmit=async (e)=>{
    e.preventDefault();
    let formData={email:email,password:password};
    axios.post("http://localhost/projetSemestriel/serverside/public/index.php/user/verification",formData)
    .then(response=>
        {
          console.log(response.data.user);
          setUser(response.data?.user);
      });
   
  }





  return (
    
    <MDBContainer fluid className='bg-image'>


      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-black-50 mb-3">Please enter your login and password!</p>
              {user ? user?.Email == "admin@admin" ? <Navigate to="/admin" replace={true} /> :
               <Navigate to="/Acceuil" replace={true} /> : null
              }
                <Form  onSubmit={handleSubmit} >
                 <MDBInput name="email" value={email} onChange={(e)=>setEmail(e.target.value)} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
                   <MDBInput name="password" value={password} onChange={(e)=>setPassword(e.target.value)} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              
                  <MDBBtn  classname='btn-login' size='lg'>
                       Login
                   </MDBBtn>
                </Form>
     
              

              <hr className="my-4" />

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default App;