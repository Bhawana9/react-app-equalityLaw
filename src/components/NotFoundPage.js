import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
export default class NotFoundPage extends Component
   {
     render()
     {
         return(
         <div>
           <header className="header">
           <div className="content-container">
           <div className="header__content">
           <div className="header__title">
           <h1>Harassment App</h1>
           </div>
           </div>
           </div>
                  
           </header>

           <div className="page-header">
           <div className="content-container">
           <h1 className="page-header__title">
           The requested page does not exist.<br/><hr/>
           <Link className="button" to="/">Back to Dashboard</Link>
           </h1>
           
           
           </div>

           </div>
         </div>

         
         
         
     );
       
    
    }
    }