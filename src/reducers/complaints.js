
//Complaints Reducer
const complaintsReducerDefaultState=[]; 


export default (state=complaintsReducerDefaultState,action)=>{
switch (action.type)
{
    case 'ADD_COMPLAINTS':
    return [
        ...state,
        action.complaints
    ];
    case 'REMOVE_COMPLAINTS':
    return state.filter(({id})=>id !==action.id);

    case 'EDIT_COMPLAINTS':
    return state.map((complaints)=>{
        if (complaints.id===action.id)
        {
          return {
              ...complaints,
              ...action.updates
          };
        }else{
            return complaints;
        };
    });

    case 'SET_COMPLAINTS':
    return action.complaints;
     
    default:
    return state;
}
};
