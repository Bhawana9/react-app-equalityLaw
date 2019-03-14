import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

 const ComplaintsListItem=({id,employeeName,description ,age,sex,Commitername,CommiterPosition,department,createdAt})=>(
<div>
    <Link to={`/edit/${id}`}> <h3>{description}</h3></Link>
   <h3>{employeeName}</h3>
   <h3>{age}</h3>
   <h3>{sex}</h3>
   <p>{department} - {createdAt}</p>
    <p>{Commitername}-{CommiterPosition}</p>
    
     
</div>
);

const mapStateToProps=(state)=>{
    return{
        removeComplaints:state.removeComplaints
    };
};
export default connect(mapStateToProps)(ComplaintsListItem);
