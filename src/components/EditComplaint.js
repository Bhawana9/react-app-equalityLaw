import React from 'react';
import {connect} from 'react-redux';
import ComplaintsForm from './ComplaintsForm'
import {startRemoveComplaints,startEditComplaints} from '../actions/complaints'

export class EditComplaint extends React.Component {
         onSubmit=(complaints)=>{
          this.props.startEditComplaints(this.props.complaints.id, complaints);
          this.props.history.push('/');
        };

      onRemove=()=>{
        this.props.startRemoveComplaints({id:this.props.complaints.id});
          this.props.history.push('/');
      };

      componentDidMount() {
        this.props.complaints()
      }
    
      render(){
        return(
         <div>
           <ComplaintsForm 
           complaints={this.props.complaints}
          onSubmit={this.onSubmit}
             />
              <button onClick={this.onRemove}>                       
            Remove</button>
         </div>
                
     );
          } 
    };
  
   const mapStateToProps=(state,props)=>({
     complaints:state.complaints.find((complaints)=>complaints.id===props.match.params.id)});
  

   const mapDispatchToProps=(dispatch,props)=>({
     startEditComplaints:(id,complaints)=>dispatch(startEditComplaints(id,complaints)),
     startRemoveComplaints:(data)=>dispatch(startRemoveComplaints(data))
   });
    export default connect(mapStateToProps,mapDispatchToProps)(EditComplaint);
    