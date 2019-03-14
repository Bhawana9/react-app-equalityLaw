import React from 'react'
import {connect} from 'react-redux'
import {DateRangePicker} from 'react-dates'
import {setTextFilter, sortByDepartment,setStartDate,setEndDate} from '../actions/filters'
import {sortByDate} from '../actions/filters'

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

    onSelectChange=(e)=>{
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
             <input type="text" className="text-input"
            value={this.props.filters.text} 
            onChange={this.onTextChange}/>

             </div>
             <div className="input-group__item">
             <select 
        value ={this.props.filters.sortBy}
        onChange={this.onSelectChange}>
        <option value="date">Date</option>  
        <option value="department">Department</option>  
            </select>
             </div>

             <div className="input-group__item">         
        <DateRangePicker
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={()=> false}
        /> 

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
