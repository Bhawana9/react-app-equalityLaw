import React from 'react';
import ComplaintsForm from './ComplaintsForm'
import {connect} from 'react-redux';
import {startAddComplaints} from '../actions/complaints'
import {MDBCard, MDBCol, MDBCardTitle, MDBContainer } from 'mdbreact';


export class  AddComplaint extends React.Component
{
  onSubmit=(complaints) =>{
    this.props.startAddComplaints(complaints);
    this.props.history.push('/dashboard');
  };
  render(){
  return( 
<MDBContainer>
  <MDBCol md="6" >
  
  <MDBCard style={{width:"30rem", marginTop:"1rem"}}color="success-color" text="white" className="text-center">
  
  
  </MDBCard>
  
  </MDBCol>
   <MDBCardTitle>  
     <ComplaintsForm
  onSubmit={this.onSubmit}/>
  </MDBCardTitle>   
  
  </MDBContainer>
);
}
}  
const mapDispatchToProps=(dispatch)=>({

  startAddComplaints:(complaints)=>dispatch(startAddComplaints(complaints))
});
    
    
export default connect(undefined,mapDispatchToProps)( AddComplaint);