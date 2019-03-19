import React ,{Component} from 'react';

import { MDBCardBody, MDBCard,MDBCol,MDBMask,MDBRow, MDBView} from 'mdbreact';




export default class Chart extends Component {

 render(){
 return (
      <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody className="text-center"><h2 className="h1-responsive font-weight-bold text-center " >My Dashboard </h2></MDBCardBody>
      <p className="text-center w-responsive mx-auto mb-5">
      Dealing with sexual harassment at work!!Sexual harassment can be physical or emotional and can happen to anyone. If someone makes you uncomfortable, tell them.
     </p>
     <MDBRow>
     <MDBCol  md="12">
     <MDBView hover className="rounded z-depth-2 mb-4"waves>
     <img className="img-fluid" src="./images/speak-out.jpg" alt=""/>
     <MDBMask overlay="white-slight" className="waves-light"/>
     </MDBView>
     <MDBCardBody cascade className="text-center">
     <h2 className="font-weight-bold">Speak-Out</h2>
     <p className="dark-grey-text">
     Workplace bullying and harassment has received a root and branch assessment 
     by the Supreme Court in the recent decision of Ruffley The Board of Management of St. Anne’s School.
     Employers can expect the Supreme Court analysis in this case to be the go to resource 
     when analysing any approach to dealing with workplace bullying and harassment issues.
            </p>
            </MDBCardBody>     
     </MDBCol>



     </MDBRow>
     
     </MDBCard>
          
       
              
          
   
  );
  }
  




}

