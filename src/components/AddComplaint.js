import React from 'react';
import ComplaintsForm from './ComplaintsForm'
import {connect} from 'react-redux';
import {startAddComplaints} from '../actions/complaints'


export class  AddComplaint extends React.Component
{
  onSubmit=(complaints) =>{
    this.props.startAddComplaints(complaints);
    this.props.history.push('/dashboard');
  };
  render(){
  return( 
<div>
<h2 className="mb-4">File Complaints!!Raise your Voice</h2>       
  <ComplaintsForm
  onSubmit={this.onSubmit}/>
  </div>
);
}
}  
const mapDispatchToProps=(dispatch)=>({

  startAddComplaints:(complaints)=>dispatch(startAddComplaints(complaints))
});
    
    
export default connect(undefined,mapDispatchToProps)( AddComplaint);