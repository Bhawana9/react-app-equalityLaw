import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';

export default class chart extends Component {

     state={
       dataDoughnut:{
         labels:["Discrimination In Office","Sexual Harassment","Bullying"],
         datasets:[
           {
           data:[56,67,87],
           backgroundColor:["#F7464A", "#46BFBD", "#FDB45C"]
           }
         ]
       },
       
     }
    render() {
        return (
            <div>
               <Doughnut data={this.state.dataDoughnut} options={{responsive:true}}/> 
            </div>
        )
    }
}
