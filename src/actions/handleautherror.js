 const handleAuthError=(e)=>{
const errMessage=`An account already exists with the same email address:${e.email},please login with different email`;
console.warn(errMessage);

};
export default handleAuthError;