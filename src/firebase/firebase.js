import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDLjrwXYhzxwEo-AjuB78_C1GIonrbEhIk",
    authDomain: "equalitylaw-b388d.firebaseapp.com",
    databaseURL: "https://equalitylaw-b388d.firebaseio.com",
    projectId: "equalitylaw-b388d",
    storageBucket: "equalitylaw-b388d.appspot.com",
    messagingSenderId: "971432097338"
  };

  firebase.initializeApp(config);

  const database=firebase.database();
  const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
  export {firebase,googleAuthProvider,facebookAuthProvider ,database as default};
 
 

//   database.ref('complaints').push({
//       employeeName:'ABC',
//       description:'IT',
//       sex:'F',
//       age:24,
//       department:'HR',
//       createdAt:89564
//   });

//   database.ref('complaints').push({
//     employeeName:'DEF',
//     description:'IT',
//     sex:'F',
//     age:51,
//     department:'HR',
//     createdAt:8956423
// });
  

// database.ref('name')
//   .set(null);

// firebase.database().ref().update({
//     name:'Rahul'
// })