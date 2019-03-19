import React from 'react'
import axios from 'axios'
import StripeCheckout from "react-stripe-checkout";
import { MDBContainer,MDBCard,MDBCol,MDBRow,MDBCardBody} from 'mdbreact';
import {Link} from 'react-router-dom'

const stripeBtn=()=>{
    const publishableKey="pk_test_ZU3mlTy0q00DATc9EyF9A8jX";

    const onToken=token=>{
        const body={
            token:token
        };

        axios.post("http://localhost:3000/donate",body).then(response=>{console.log(response); alert("Payment Success");})
        .catch(error=>{console.log("Payment Error:",error);alert("Payment Error");});
    };
    return(
        <section className="my-20">
        <div>
       <MDBContainer className="d-flex justify-content-center">
        <MDBRow>
        <MDBCol md="12" lg="10" className="lg-5 mb-8">
        <MDBContainer>
        <MDBCard>
        <div className="header pt-3 blue-gradient">
        <MDBRow className="d-flex justify-content-center">
        <h3 className="white-text mb-3 pt-3 font-weight-bold">DONATE-US</h3>
        <MDBCardBody className="mx-4 mt-4">
        <StripeCheckout
        label="Donate"
        name="Donate to Support Us"
        panelLabel="Go Donate"
        token={onToken}
        stripeKey={publishableKey}
        billingAddress={false}

        />
            
          <p className="font-small black-text d-flex justify-content-center"></p>
          <Link className="btn btn-warning" to="/">Go to Back</Link>
        </MDBCardBody>
        </MDBRow>
        </div>
        </MDBCard>
        </MDBContainer>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
        </div>
        </section>
        
    )
}


export default stripeBtn;

