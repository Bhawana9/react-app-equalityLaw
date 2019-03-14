import React, { Component } from 'react';
import ComplaintsList from './ComplaintsList';
import ComplaintsListFilter from './ComplaintsListFilter'
import { ComplaintsSummary } from './ComplaintsSummary';
export default class Dashboard extends Component
   {
    

     render()
     {
         return(
       
       <div className="title-area">
       <p className="site-title" itemProp="headline">
       STOP OFFICE HARASSMENT
       </p>
       
       <ComplaintsListFilter/>
       <ComplaintsList/>
       
       </div>

        
         
         
     );
       
    
    }
    }






