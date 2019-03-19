import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
///import './index.css';
import './styles/styles.scss';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'normalize.css/normalize.css';
import App ,{history} from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import configureStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css';
import {startSetComplaints} from './actions/complaints'
import {firebase} from './firebase/firebase';
import {login,logout} from './actions/auth'
import LoadingPage from './components/LoadingPage'
import "@fortawesome/fontawesome-free/css/all.min.css";

const store=configureStore();
const jsx=(
    <Provider store={store}>
     <Router>
        
     <App/>
     </Router> 
    </Provider>
   
);

//avoid re-rendering
let hasRendered=false;
const renderApp=()=>{

    if(!hasRendered)
    {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered=true;
    }
};
ReactDOM.render(<LoadingPage/>, document.getElementById('root'));


firebase.auth().onAuthStateChanged((user)=>{
if(user)
{
    const firstname=user.displayName.split('')[0];
    store.dispatch(login(user.uid,firstname));
    store.dispatch(startSetComplaints()).then(()=>{
        renderApp();
        if(history.location.pathname==='/'){
            history.push('/dashboard');
        }
    });
}else{
    store.dispatch(logout());
    renderApp();
    history.push('/')
}
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
