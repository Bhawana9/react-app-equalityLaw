import moment from 'moment'
//Visible complaints

export default(complaints,{text,sortBy,startDate,endDate})=>{
    const filteredComplaints=complaints.filter((complaints)=>{
        const createdAtMoment=moment(complaints.createdAt)
        const startDateMatch=startDate ? startDate.isSameOrBefore(createdAtMoment,'day'):true;
        const endDateMatch=endDate ? endDate.isSameOrAfter(createdAtMoment,'day'):true;
        const textMatch=complaints.description.toLowerCase().includes(text.trim().toLowerCase());


        return startDateMatch&&endDateMatch&&textMatch;
    });


const sortedComplaints=filteredComplaints.sort((a,b)=>{
    if(sortBy==='date')
    {
        return a.createdAt<b.createdAt ?1 : -1;
    }else if (sortBy==='department')
    {
      return a.department<b.department ?1 : -1;
    }
    return 0;
});

return sortedComplaints;
};