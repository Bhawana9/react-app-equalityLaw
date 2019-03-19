import React from 'react'
import {connect} from 'react-redux'
import {DateRangePicker} from 'react-dates'
import {setTextFilter, sortByDepartment,sortByDate,setStartDate,setEndDate} from '../actions/filters'
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";


class ComplaintsListFilter extends React.Component{
    state={
        calendarFocused:null
    };

    onDatesChange=({startDate,endDate})=>{
     this.props.setStartDate(startDate);
     this.props.setEndDate(endDate);
    };

    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}));
    }
    onTextChange=(e)=>{
        this.props.setTextFilter(e.target.value);
        };

    onSortChange=(e)=>{
        if(e.target.value==='date')
        {
            this.props.sortByDate();
        }
        else if(e.target.value==='department')
        {
            this.props.sortByDepartment();
        }
        
    };
    render(){
        return (
            <div className="content-container">
            <div className="input-group">
             <div className="input-group__item">
             <MDBCol md="12" >
             <MDBFormInline className="md-form">
             <MDBIcon icon="search"/>
             
             <input type="text" className="form-control form-control-sm ml-1 w-75"
            value={this.props.filters.text} placeholder="Search Complaints" aria-label="Search Complaints"
            onChange={this.onTextChange}/>
            </MDBFormInline>
</MDBCol>
         </div>
        <div className="input-group__item">
        <MDBCol md="12">
        <MDBFormInline className="md-form">
        <select className="form-control form-control-sm ml-1 w-80"
        value ={this.props.filters.sortBy} placeholder="SortBy" 
        onChange={this.onSortChange}>
        <option value="date">Date</option>  
        <option value="department">Department</option>  
            </select>
            </MDBFormInline>
            </MDBCol>
             </div>
             
        <div className="input-group__item">
        <MDBCol md="20">
        <MDBFormInline className="md-form">    
        <DateRangePicker 
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        startDateId="startDate"
        endDateId="endDate"
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={()=> false}
        showDefaultInputIcon
        hideKeyboardShortcutsPanel
        /> 
 </MDBFormInline>
            </MDBCol>
             </div>
            </div>     
              
        </div>
    ); 
        
    }
};

    
const mapStateToProps=(state)=>{
    return{
        filters:state.filters
    };
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByDepartment: () => dispatch(sortByDepartment()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
  });
  
export default connect(mapStateToProps,mapDispatchToProps)(ComplaintsListFilter);
