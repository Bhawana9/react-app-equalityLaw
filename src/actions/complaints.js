import database from '../firebase/firebase'


//Add Complaints
export const addComplaints =(complaints)=>({
type:'ADD_COMPLAINTS',
complaints
});

export const startAddComplaints =(complaintsData={})=>{
return (dispatch,getState)=>{
    const uid=getState().auth.uid;
const {
    employeeName='',
        sex='',
        age='',
        department='',
        description='',
        Commitername='',
        CommiterPosition='',
        note='',
        createdAt=0

}=complaintsData;
const complaints={employeeName,sex,age,department,description,Commitername,CommiterPosition,note,createdAt};

return database.ref(`users/${uid}/complaints`).push(complaints).then((ref)=>{
    dispatch(addComplaints({
        id:ref.key,
        ...complaints
    }));
})

};
};

//Remove Complaints
export const removeComplaints=({id}={})=>({
    type:'REMOVE_COMPLAINTS',
    id
})

export const startRemoveComplaints=({id}={})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
    return  database.ref(`users/${uid}/complaints/${id}`).remove().then(()=>{
       
        dispatch(removeComplaints({id}));
         });

        };
    };

 
//Edit Complaints
export const editComplaints=(id,updates)=>({
    type:'EDIT_COMPLAINTS',
    id,
    updates
});

export const startEditComplaints=(id,updates)=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
    return  database.ref(`users/${uid}/complaints/${id}`).update(updates).then(()=>{
       
        dispatch(editComplaints(id,updates));
         });

        };
    };

//Set Complaints
export const setComplaints=(complaints)=>({
    type:'SET_COMPLAINTS',
    complaints
})

//Fetch complaints from database
export const startSetComplaints=()=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid
   return database.ref(`users/${uid}/complaints`).once('value').then((snapshot)=>
   {
       const complaints = [];
    snapshot.forEach((childSnapshot) => {
        complaints.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });

        
        dispatch(setComplaints(complaints));
    });
};


};