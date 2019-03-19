import React from 'react'
import {connect } from 'react-redux';
import ComplaintsListItem from './ComplaintsListItem';
import selectComplaints from '../selectors/complaints'
import { MDBCardHeader, MDBTable, MDBTableHead } from "mdbreact";
import { InputLabel} from '@material-ui/core';

 const ComplaintsList=(props)=>(
    
<div className="content-container">


<MDBCardHeader tag="h5" className="text-center font-weight-bold text-uppercase py-2">
       List of Complaints
      </MDBCardHeader>
      <div>
      <MDBTable>
          
     <MDBTableHead color="primary-color">
     
         <tr>
    <th><div className=" show-for-desktop"><InputLabel>COMPLAINTS</InputLabel></div></th> 
     <th> <div className=" show-for-desktop"><InputLabel>EMPLOYEE NAME</InputLabel></div> </th>
    <th><div className=" show-for-desktop"><InputLabel>DEPARTMENT</InputLabel></div></th> 
      </tr>
     
    
      </MDBTableHead>
      
      </MDBTable>
   </div>
       
   
    <div className="list-body">
    {
        props.complaints.length===0?(
        <div className="list-item list-item--message">
          <span>
           No Complaints Filed!!   
          </span>


        </div>
        ):(
        
        props.complaints.map((complaints)=>{
       return <ComplaintsListItem key={complaints.id}{...complaints}/>
    })
        )
}
</div>
</div>
);

const mapStateToProps=(state)=>{
    return{
        complaints:selectComplaints(state.complaints,state.filters)
    };
};



export default connect(mapStateToProps)(ComplaintsList);