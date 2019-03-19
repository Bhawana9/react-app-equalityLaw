import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {startGoogleLogin,startFacebookLogin} from '../actions/auth'
import { MDBNavbar,  MDBNavbarNav, MDBNavItem,MDBRow, MDBContainer} from "mdbreact";


export const LoginPage =({startGoogleLogin,startFacebookLogin})=>(
  <div className="box-layout">
        
          
  <MDBContainer>
  <MDBNavbar color="aqua-gradient" float="left"dark expand="md" fixed="top">
 
 
                <MDBNavbarNav left>
                    <MDBNavItem >
                      <Link className="nav-link navbar-link"to="/about">ABOUT US</Link>
                    </MDBNavItem>
                     <MDBNavItem >
                      <Link className="nav-link navbar-link"to="/contact">CONTACT US</Link>
                    </MDBNavItem>
                    <MDBNavItem>
                      <Link className="nav-link navbar-link"to="/help">HELP</Link>
                   </MDBNavItem>

                    <MDBNavItem>
                      <Link className="nav-link navbar-link"to="/donate">DONATE</Link>
                   </MDBNavItem>
                   
                  </MDBNavbarNav>             
   <MDBRow>
    
   <MDBNavbarNav right>
   <MDBNavItem>  
   <button className="btn btn-danger"onClick={startGoogleLogin} >Login with Google</button>
   </MDBNavItem> 
   
   <MDBNavItem>
    <button className="btn btn-primary" onClick={startFacebookLogin} >Login with Facebook</button>
    </MDBNavItem>
    </MDBNavbarNav>
      
    </MDBRow>
    
    </MDBNavbar>
  
    </MDBContainer>
    
    
    </div>

);
  
const mapDispatchToProps=(dispatch)=>({
startGoogleLogin:()=>dispatch(startGoogleLogin()),
startFacebookLogin:()=>dispatch(startFacebookLogin())
});

LoginPage.propTypes = {
    onGoogleLogin: PropTypes.func.isRequired,
    onFacebookLogin: PropTypes.func.isRequired
  };

export default connect(undefined,mapDispatchToProps)(LoginPage)