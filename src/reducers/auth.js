export default (state={},action)=>{

switch(action.type)
{
    case 'LOGIN':
    return{
      uid:action.uid,
      firstname:action.firstname
    };
    case 'LOGOUT':
    return {};
    default:
    return state;
}
};