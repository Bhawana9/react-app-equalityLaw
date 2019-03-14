import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {startGoogleLogin,startFacebookLogin} from '../actions/auth'

export const LoginPage =({startGoogleLogin,startFacebookLogin})=>(
<div className="box-layout">
<div className="box-layout__box">
    <h1 className="box-layout__title">Harassment in the Workplace?There's An App For That!</h1>
    <p>It's time to raise your voice!!!</p>
    <button className="button button_login-box button--go" onClick={startGoogleLogin}>Login with Google</button>
    <button className="button button_login-box button--fb" onClick={startFacebookLogin}>Login with Facebook</button>
    </div>
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