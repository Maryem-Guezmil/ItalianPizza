import React from 'react'

function Success({success}) {
    return (
        <div className="alert alert-success" role="alert">
           <h1>{success}</h1> 
        </div>)
}

export default Success