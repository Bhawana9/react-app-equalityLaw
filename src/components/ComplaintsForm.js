 import React, { Component } from 'react'
 import moment from 'moment'
 import {SingleDatePicker} from 'react-dates'
 import 'react-dates/lib/css/_datepicker.css';

 
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
    error:''
   };
}

componentWillReceiveProps(newProps) {
  if (newProps.errors) {
    this.setState({ errors: newProps.errors });
  }
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
      
    this.setState(()=>({sex}));  
  
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

   onSubmit=(e)=>{
       e.preventDefault();

       if(!this.state.employeeName||!this.state.description|| !this.state.department || !this.state.Commitername){
       //Set error state
       this.setState(()=>({
           error:'Please provide the details to file complaints'
        }));
       }
       else
       {
        this.setState(()=>({error:''}));
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
      const { errors } = this.state;    
         return (
     <div className="container">
             
    {this.state.error&&<p>{this.state.error}</p>}

    <form onSubmit={this.onSubmit}> 
     Name of an employee <input type="text" placeholder="Employee Name"  value={this.state.employeeName} onChange={this.onNameChange}/><br/>
     Description of an Incident<textarea placeholder="description of incident" autoFocus value={this.state.description} onChange={this.onDescriptionChange}></textarea><br/>
     Sex <div className="radio">
          <label>
            <input type="radio" value="male" checked={this.state.sex === 'male'} onChange={this.handleOptionChange}/>Male
          </label>
          <label>
            <input type="radio" value="female" checked={this.state.sex=== 'female'} onChange={this.handleOptionChange}/>Female
            </label>
        </div><br/>
Age <input type="number" placeholder="age"  value={this.state.age} onChange={this.onAgeChange}/><br/>
    Department List:
        <select
                value={this.state.department}
                onChange={this.handleSelectValue}
                className="form-control"
                
              >
                <option value="IT Services">IT Services</option>
                <option value="HR and Payroll">HR and Payroll</option>
                <option value="Admin Department">Admin Department</option>
                <option value="Sales and Marketing">Sales and Marketing</option>
                <option value="Security and Transport">Security and Transport</option>
                <option value="Infrastructures">Infrastructures</option>
                <option value="Others">Others</option>
              </select><br/><br/>
Date of Incident: 
<SingleDatePicker 
date ={this.state.createdAt}
onDateChange={this.onDateChange}
focused={this.state.calendarFocused}
onFocusChange={this.onFocusChange}
numberOfMonths={1}
isOutsideRange={()=> false}/> <br/>             
Name of the person you committed harassment <input type="text" placeholder="Commiter's Name"  value={this.state.Commitername} onChange={this.onCommiterNameChange}/><br/>        
Position of the Committed Person <input type="text" placeholder="Commiter's Position"  value={this.state.CommiterPosition} onChange={this.onCommiterPositionChange}/><br/> 
Any other Notes: <textarea placeholder="optional notes"  value={this.state.note} onChange={this.onNoteChange} error={errors.text}></textarea><br/> 
<button action="submit" label="submit">ADD COMPLAINT</button>             
             </form> 
             </div>
            
         )
     }
 }
 


