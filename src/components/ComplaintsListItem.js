import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment';
import { MDBCard, MDBTable, MDBTableBody } from "mdbreact";
import { InputLabel } from '@material-ui/core';

 const ComplaintsListItem=({id,employeeName,description ,age,sex,Commitername,CommiterPosition,department,note,createdAt})=>(
  
    <MDBCard>
     
         <MDBTable>
         <MDBTableBody>
    <Link className="list-item"to={`/edit/${id}`}> 
     <div>
    
    <td className="list-item__title"><InputLabel>{description}</InputLabel></td> 
    <span >{moment(createdAt).format('MMMM Do,YYYY')}</span>
    </div>
    <td className="list-item__title" ><InputLabel>{employeeName}</InputLabel></td> 
    <td className="list-item__data" ><InputLabel>{department}</InputLabel></td> 

    </Link>
    </MDBTableBody>
    </MDBTable>
    </MDBCard>
     

);


export default ComplaintsListItem;
