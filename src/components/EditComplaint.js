import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import ComplaintsForm from './ComplaintsForm'
import {startRemoveComplaints,startEditComplaints} from '../actions/complaints'
import { MDBContainer, MDBRow ,MDBCard,MDBCardBody} from 'mdbreact';
import RemoveModal from './RemoveModal'

export class EditComplaint extends React.Component {
 

         onSubmit=(complaints)=>{
          this.props.startEditComplaints(this.props.complaints.id, complaints);
          this.props.history.push('/');
        };
   

      onRemove=()=>{
         this.props.startRemoveComplaints({id:this.props.complaints.id});
          this.props.history.push('/');
          };
    
    
      render(){
        return(
          <div>

         <MDBContainer className="d-flex justify-content-center">
         <MDBCard style={{ width: "35rem"}}>
          <div className="header pt-3 aqua-gradient">
        <MDBRow className="d-flex justify-content-center">
        <h3 className="white-text mb-3 pt-3 font-weight-bold">EDIT COMPLAINT</h3>
       
          <MDBCardBody>
              <div className="content__container">                 
           <ComplaintsForm 
           complaints={this.props.complaints}
          onSubmit={this.onSubmit}
             />
          <button className="btn btn-danger"onClick={this.onRemove}>                       
            Remove Complaint</button>

            <Link className="btn btn-warning" to="/">No Change</Link>
            </div>
                         
         </MDBCardBody> 
          </MDBRow>
         </div>
         </MDBCard>
       
         </MDBContainer>
            


                 </div>
     );
          } 
    };
  
   const mapStateToProps=(state,props)=>({
     complaints:state.complaints.find((complaints)=>complaints.id===props.match.params.id)});
  

   const mapDispatchToProps=(dispatch,props)=>({
     startEditComplaints:(id,complaints)=>dispatch(startEditComplaints(id,complaints)),
     startRemoveComplaints:(data)=>dispatch(startRemoveComplaints(data))
   });

   
    export default connect(mapStateToProps,mapDispatchToProps)(EditComplaint);
    