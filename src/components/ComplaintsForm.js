 import React, { Component } from 'react'
 import moment from 'moment'
 import {SingleDatePicker} from 'react-dates'
 import 'react-dates/lib/css/_datepicker.css';
 import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody, MDBFormInline } from 'mdbreact';
 import Select from '@material-ui/core/Select'
import { InputLabel, MenuItem } from '@material-ui/core';
import {isInclusivelyAfterDay} from 'react-dates'
 export default class ComplaintsForm extends Component {
  
    constructor(props)
    {
        super(props);
      this.state={
    employeeName:props.complaints ? props.complaints.employeeName:'' ,
    sex:props.complaints ? props.complaints.sex:'', 
    age:props.complaints? (props.complaints.age).toString():'', 
    description:props.complaints ? props.complaints.description:'', 
    department: props.complaints ? props.complaints.department:'', 
    Commitername:props.complaints ? props.complaints.Commitername:'', 
    CommiterPosition:props.complaints? props.complaints.CommiterPosition:'', 
    createdAt:props.complaints ? moment(props.complaints.createdAt):moment(),
    note:props.complaints ? props.complaints.note:'', 
    calendarFocused:false,
    errorEmployee:'',
    errorDescription:'',
    errorDepartment:'',
    errorCommitername:''
    
   };
}


   onDescriptionChange=(e)=>{
   const description=e.target.value
   this.setState(()=>({description}));
   };

   onNameChange=(e)=>{
    const employeeName=e.target.value
    this.setState(()=>({employeeName}));
    };
   onAgeChange=(e)=>{
        const age=e.target.value;
        if(age.match(/^[1-9]?[0-9]{1}$|^100$/))
        {
            this.setState(()=>({age}));
        }
       
        };
   handleOptionChange=(e)=> {
     const sex=e.target.value;
      
    this.setState(()=>({sex:sex}));  
  
  }

  handleSelectValue = (event) => {
    this.setState({
     department: event.target.value
    });
  };

  onCommiterNameChange=(e)=>{
    const Commitername=e.target.value
    this.setState(()=>({Commitername}));
    };

   onCommiterPositionChange=(e)=>{
        const CommiterPosition=e.target.value
        this.setState(()=>({CommiterPosition}));
        };
  onNoteChange=(e)=>{
    const note =e.target.value;
    this.setState(()=>({note}));
};
  onDateChange=(createdAt)=>{
      if(createdAt)
      {
        this.setState(()=>({createdAt}));
      }

  }

  onFocusChange=({focused})=>{
    this.setState(()=>({calendarFocused:focused}));
      }

      handleClickOpen=()=>{
        this.setState({open:true});
      } 

      handleClose=()=>{
        this.setState({open:false});
      }

   onSubmit=(e)=>{
       e.preventDefault();

       if(!this.state.employeeName||!this.state.description|| !this.state.department || !this.state.Commitername){
       if(!this.state.employeeName)
       {
        this.setState(()=>({
          errorEmployee:'Please provide employee name to file complaints'
       }));
       }
       if(!this.state.description)
       {
       this.setState(()=>({
           errorDescription:'Please provide the description to file complaints'
        }));
       }

       if(!this.state.department)
       {
        this.setState(()=>({
          errorDepartment:'Please provide department to file complaints'
       }));
       }

        if(!this.state.Commitername)
       {
        this.setState(()=>({
          errorCommitername:'Please provide CommiterName to file complaints'
       }));
       }
      }
       else
       {
        this.setState(()=>({errorDescription:'',errorEmployee:'',errorDepartment:'',errorCommitername:''}));

        this.props.onSubmit({
        employeeName:this.state.employeeName,
        description:this.state.description,
        sex:this.state.sex,
        age:this.state.age,
        department:this.state.department,
        Commitername:this.state.Commitername,
        CommiterPosition:this.state.CommiterPosition,
        createdAt:this.state.createdAt.valueOf(),
        note:this.state.note
        });
       }
   };   

     render() {
         
         return (
   
     <MDBContainer>
       
       <MDBRow>
         <MDBCol md="12">
         <div className="w-25 p-3">
         <MDBCard
         className="card-image"
         style={{backgroundImage:"url('./images/card1.jpg')",
         width:"30rem"}}>
           <MDBCardBody>
     <form className="form "onSubmit={this.onSubmit}> 
    
     <h3 className="black-text mb-5 mt-4 font-weight-bold"><strong>#ME TOO FORM</strong> </h3>
     <div className="grey-text ">

      {this.state.errorEmployee && <p className="form__error">{this.state.errorEmployee}</p>}
    <MDBInput type="text" icon="user" label="Your name"  autoFocus className={this.state.errorEmployee ?"text-input text-input__error":"text-input"} value={this.state.employeeName} onChange={this.onNameChange}/>
     
     {this.state.errorDescription && <p className="form__error">{this.state.errorDescription}</p>}
    <MDBInput type="text"  icon="pencil-alt" label=" Description of an Incident"  className={this.state.errorDescription ?"text-input text-input__error":"text-input"} value={this.state.description} onChange={this.onDescriptionChange}/>
   
    <MDBFormInline>
      
        <label><MDBInput gap  type="radio" value="male"icon="male"label="Male" checked={this.state.sex === 'male'?true :false} onChange={this.handleOptionChange}/></label> 
        <label><MDBInput gap type="radio"value="female"  icon="female" label="Female"checked={this.state.sex=== 'female'?true:false} onChange={this.handleOptionChange}/></label> 
          
        </MDBFormInline>
<MDBInput type="number" icon="id-badge"label="age"  value={this.state.age}  className="text-input" onChange={this.onAgeChange}/>

 
 
  <InputLabel>Department</InputLabel>
      <Select  style={{width:300,border:'1px'}} value={this.state.department}
                onChange={this.handleSelectValue}
                showDefaultInputIcon        
                >
                                  
                <MenuItem value="IT Services">IT Services</MenuItem>
                <MenuItem value="HR and Payroll">HR and Payroll</MenuItem>
                <MenuItem value="Admin Department">Admin Department</MenuItem>
                <MenuItem  value="Sales and Marketing">Sales and Marketing</MenuItem>
                <MenuItem value="Security and Transport">Security and Transport</MenuItem>
                <MenuItem value="Infrastructures">Infrastructures</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
                
                </Select>
                
           <br/>
          <br/> 
         
                
<SingleDatePicker 
date ={this.state.createdAt}
onDateChange={this.onDateChange}
focused={this.state.calendarFocused}
onFocusChange={this.onFocusChange}
numberOfMonths={1}
isOutsideRange={day=> isInclusivelyAfterDay(day,moment().add(1,'days'))}
showDefaultInputIcon
hideKeyboardShortcutsPanel
block
/>
 
 {this.state.errorCommitername&& <p className="form__error">{this.state.errorCommitername}</p>}      
<MDBInput type="text" icon="user-tie"label="Commiter's Name"  className={this.state.errorCommitername?"text-input text-input__error":"text-input"}  value={this.state.Commitername} onChange={this.onCommiterNameChange}/>       
<MDBInput type="text" icon="industry" label="Commiter's Position"  className="text-input" value={this.state.CommiterPosition} onChange={this.onCommiterPositionChange}/> 
<MDBInput type="textarea"  icon ="notes-medical" label="Add any important notes(optional)"  className="textarea" value={this.state.note} onChange={this.onNoteChange} />
<div ><button className="btn btn-success" action="submit" label="submit">SAVE COMPLAINT</button> </div> 

            </div>
             </form>
            
             </MDBCardBody>
             </MDBCard> 
             </div>
             </MDBCol>
             </MDBRow>
            
             </MDBContainer>
             
            
             
                      
         )
     }
 }
 


