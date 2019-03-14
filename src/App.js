import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer"
import {Router,Route,Switch} from 'react-router-dom'; 
import Dashboard from "./components/Dashboard";
import AddComplaint from "./components/AddComplaint"
import HelpPage from "./components/HelpPage";
import Edit from "./components/EditComplaint"
import NotFoundPage from "./components/NotFoundPage"
import LoginPage from './components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import './styles/styles.scss';

export const history =createHistory();

class App extends Component {
 
  render() {
    return (
      <div className="App">
      
        <Router history={history}>
        <div>
          
        <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={Dashboard}/>
        <PrivateRoute path="/create" component={AddComplaint}/>
        <PrivateRoute path="/edit/:id" component={Edit}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
        </Switch>
        <Footer />
        </div>
        </Router>
      
      </div>
    );
  }
}

export default App;
