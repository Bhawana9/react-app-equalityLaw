import React from 'react'


const LoadingPage=()=>{
    return(
        <>
<div className="spinner-border text-primary" role="status">
<span className="sr-only">Loading</span>
</div>
<div className="spinner-border text-success" role="status">
<span className="sr-only">Loading</span>
</div>
<div className="spinner-border text-danger" role="status">
<span className="sr-only">Loading</span>
</div>
<div className="spinner-border text-warning" role="status">
<span className="sr-only">Loading</span>
</div>
    </>

    )
};


export default LoadingPage;