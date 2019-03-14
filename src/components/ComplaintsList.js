import React from 'react'
import {connect } from 'react-redux';
import ComplaintsListItem from './ComplaintsListItem';
import selectComplaints from '../selectors/complaints'

 const ComplaintsList=(props)=>(
<div>
    <h1>Complaints List</h1>
    
    {props.complaints.map((complaints)=>{
       return <ComplaintsListItem key={complaints.id}{...complaints}/>
    })}
</div>
);

const mapStateToProps=(state)=>{
    return{
        complaints:selectComplaints(state.complaints,state.filters)
    };
};



export default connect(mapStateToProps)(ComplaintsList);