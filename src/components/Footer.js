import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
export default () => {
  return (

    <MDBFooter color="black"className="font-small pt-4 mt-4">
     <MDBContainer fluid className="text-center text-md-left">
     <MDBRow>
     <MDBCol md="6">
     <h5 className="title">Contact Us</h5>
     <p>For questions about office harassment rules and egulations , your entitlements, or how to access or social services in your area?</p>
     <h5>Monday to Friday: 8am - 8pm
         Saturday: 10am - 5pm</h5>
         <br/>
      <label ><i className="fas fa-phone"/>CallSave:1802564789</label><br/>   
      <label ><i className="fas fa-mobile"/>Phone:985124756</label><br/> 
      <label ><i className="fas fa-at"/>Email:test1@gmail.com</label>  <br/>
     </MDBCol>

     </MDBRow>
     
     
     </MDBContainer>

    <div className="footer-copyright text-center py-3">
    <MDBContainer>
      Copyright &copy; {new Date().getFullYear()} EqualityLaw
      </MDBContainer>
      </div>
    </MDBFooter>
    
  );
};