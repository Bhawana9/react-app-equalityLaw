import React, { Component } from 'react';
import ComplaintsList from './ComplaintsList';
import ComplaintsListFilter from './ComplaintsListFilter'
import Chart from './Chart';

export default class Dashboard extends Component
   {
    

     render()
     {
         return(
       
       <div >
        
       <Chart/>
       <ComplaintsListFilter/>
       <ComplaintsList/>
            
       </div>

        
         
         
     );
       
    
    }
    }






