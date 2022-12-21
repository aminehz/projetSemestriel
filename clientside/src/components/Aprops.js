import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  
}
from 'mdb-react-ui-kit';

function App() {
  return (
    
<main>

    <section >
  
    <MDBContainer fluid className='bg-image'>
    <div class="row">
    <div class="col align-self-start">
  </div>
  <div class="col align-self-center">
  <br></br>
<br></br>
<br></br>
<br></br><br></br>
<br></br>
<br></br>
  <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

  <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: ''}}>
  
    <span style={{color: 'black',fontFamily:"serif",fontSize:'50px'}}> Apropos</span>
  </h1>
</MDBCol>
    <p className='px-3' style={{color: 'hsl(black)'}}>
  Fondée en 2009, L’Ecole Polytechnique de Sousse est une grande école privée d’enseignement et de recherche à vocation internationale,
   accréditée EUR- ACE et qui a pour unique vocation de former des ingénieurs ayant un niveau technique et scientifique conforme  aux meilleurs
     standards internationaux. Elle se fixe résolument comme mission de garantir une excellente insertion professionnelle à ses jeunes diplômés
      en les propulsant directement  à l’employabilité.
  </p>
  </MDBCard>
  </div>
  <div class="col align-self-end">
    
  </div>

    <MDBRow>



<MDBCol md='6' className='position-relative'>

 
</MDBCol>

</MDBRow>
</div>


</MDBContainer>
   </section>
   <section>
   <div class="row">
    <div class="col align-self-start">
  </div>
  <div class="col align-self-center">
 <h1 style={{color: 'black',fontFamily:"serif",fontSize:'50px', textAlign:'center'}}> Notre histoire </h1>
 <p  style={{color: 'black',fontFamily:"sans serif" }}> Nos principaux leviers résident dans :
-Une accréditation EUR-ACE qui accorde à nos futurs ingénieurs un niveau de diplôme conforme aux standards internationaux via l'excellence de nos formations continues et de nos programmes et qui leur permettront de recevoir, et de manière systématique, la totale reconnaissance de leurs diplômes partout en Europe.
-Une infrastructure qui répond à de hautes exigences techniques et technologiques, avec plus de 40 laboratoires spécialisés tous équipés d'un matériel innovant qui obéit à la pointe d'une technologie avancée et rigoureuse.
- Plus de 100 partenariats nationaux et internationaux. D'une part, des partenariats académiques dans le cadre d'une double diplomation et d'échanges un peu partout dans le monde et notamment en France et au Canada, permettant à nos étudiants une forte mobilité internationale, favorisant ainsi l'ouverture académique et sociale, d'autre part, des partenariats professionnels avec qui nous échangeons assidûment afin d’ajuster notre cursus académique au niveau des besoins du marché de l'emploi.</p>
  </div>
  <div class="col align-self-end">

    </div>
  </div>
   </section>
   
   </main>
  );
}

export default App;