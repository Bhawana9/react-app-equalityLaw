
//Set text filter
export const setTextFilter=(text='')=>({
    type:'SET_TEXT_FILTER',
    text

});

//SortBy date
export const sortByDate=()=>({
    type:'SORT_BY_DATE',
    
})

//Sort By department
export const sortByDepartment=()=>({
    type:'SORT_BY_DEPARTMENT',
    
})

//Sort by start date
export const setStartDate=(startDate)=>({
    type:'SET_START_DATE',
    startDate
    
})

//Sort by End date
export const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
    
})