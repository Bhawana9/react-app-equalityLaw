import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
export default class NotFoundPage extends Component
   {
     render()
     {
         return(
         <div>
           404 Error !! Page Not found
           <Link to="/"> Go Home
           </Link>
             </div>
         
         
     );
       
    
    }
    }