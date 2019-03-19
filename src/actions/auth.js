import {firebase,googleAuthProvider,facebookAuthProvider} from '../firebase/firebase';
import handleAuthError from'./handleautherror';
import {setComplaints} from'./complaints'

export const login=(uid,firstname)=>({
type:'LOGIN',
uid,
firstname
})

export const startGoogleLogin=()=>{
    return ()=>{
     return firebase.auth().signInWithPopup(googleAuthProvider)
     .catch((e)=>{handleAuthError(e)});
    };
};

export const startFacebookLogin=()=>{
    return ()=>{
     return firebase.auth().signInWithPopup(facebookAuthProvider)
     .catch((e)=>{handleAuthError(e)});
    };
};

export const logout=()=>({
    type:'LOGOUT'
})
export const startLogout=()=>{
    return (dispatch)=>{
        return firebase.auth().signOut()
        .then(()=>{
            dispatch(setComplaints([]));
        });
       };  
};