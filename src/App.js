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
import AboutPage from "./components/About";
import './styles/styles.scss';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContactUs from './components/ContactUs';
import Donate from './components/Donate'

export const history =createHistory();

class App extends Component {
 
  render() {
    return (
      <div className="App">
      
        <Router history={history}>
        <div>
        <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PublicRoute path="/about" component={AboutPage}/>
        <Route path="/donate" component={Donate}/>
        <PrivateRoute path="/dashboard" component={Dashboard}/>
        <PrivateRoute path="/create" component={AddComplaint}/>
        <PrivateRoute path="/edit/:id" component={Edit}/>
        <Route path="/help" component={HelpPage}/>
        <PublicRoute path="/contact" component={ContactUs}/>
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
