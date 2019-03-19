import {Link} from'react-router-dom';
import React from 'react';
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBIcon,  } from "mdbreact";

export const Header =({startLogout})=>(
  <div>
    <header>
     
  <MDBNavbar color="blue-gradient"  dark expand="md">
  <MDBNavbarBrand >
   <strong className="white-text">EqualityLaw</strong></MDBNavbarBrand>
   <MDBNavbarNav left> 
    <MDBNavItem> 
    <Link className="nav-link navbar-link" to="/dashboard"><strong>Dashboard</strong></Link>
  </MDBNavItem> 
  <MDBNavItem>            
   <Link className="nav-link navbar-link"  to="/help" ><strong>HELP</strong></Link>
  </MDBNavItem>
  <MDBNavItem>
  <Link className="nav-link navbar-link"  to="/create"><strong>Add Complaints</strong></Link>
  </MDBNavItem>
  

  <MDBNavItem>
  <Link className="nav-link navbar-link"  to="/donate"><strong>Donate</strong></Link>
  </MDBNavItem>
  
  </MDBNavbarNav>

  <MDBNavbarNav right>
  <MDBNavItem>            
           <button className="nav-link navbar-link button button--logout"onClick={startLogout}><strong>Logout</strong></button>
           </MDBNavItem>  
           <MDBNavItem>
    <MDBIcon icon="venus"/>
  </MDBNavItem>                           
           </MDBNavbarNav>
             
            
           
           </MDBNavbar>
        
           </header>
           </div>
           
           
     );
       

    const mapDispatchToProps=(dispatch)=>({
      startLogout:()=>dispatch(startLogout())
      });
    
    export default connect(undefined,mapDispatchToProps)(Header);