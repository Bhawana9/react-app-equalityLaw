// import React, { Component } from 'react'
// import {startRemoveComplaints} from '../actions/complaints'
// import {connect} from 'react-redux';
// import Modal from 'react-modal';
// import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
// export class RemoveModal extends Component {

//     onRemoveComplaints=()=>{
//         this.props.startRemoveComplaints({id:this.props.removeComplaintId})
//         this.props.history.push('/')
//     }
//     render() {
//         return (
//             <MDBContainer>
//             <MDBModal
//             appElement={document.getElementById('root')}
//             isOpen={!!this.props.removeComplaintId}
//             onRequestClose={this.props.onClearRemoveComplaints}
//             contentLabel="Remove Complaint"
//             closeTimeoutMs={200}
//             className="modal"
//             >
//            <h3 className="modal__title">Remove Complaint</h3>
//            <MDBModalBody> 
//            <p>Remove Complaint<strong>{this.props.removeComplaintDesc}</strong></p>
//            <MDBModalFooter>
//            <button className="modal__buttons" onClick={this.onRemoveComplaints}>Remove</button>
//            <button className="button " onClick={this.onClearRemoveComplaints}>Cancel</button>
//            </MDBModalFooter>
//            </MDBModalBody>
//             </MDBModal>
//             </MDBContainer>
//         )
//     }
// }


// const mapDispatchToProps=(dispatch)=>({
    
//      startRemoveComplaints:(data)=>dispatch(startRemoveComplaints(data))
//    });


//    export default connect(undefined,mapDispatchToProps)(RemoveModal);