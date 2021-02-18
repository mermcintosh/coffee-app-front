import React from 'react';
import {useHistory} from "react-router"


const ConfirmationPage = () => {
    const history = useHistory()
    return(
        <div className="cover-page">
       <h2>Thank you for your order!</h2>
       <br/>
        <button className="button" onClick={() => history.push('/')}>Back to home page </button>
        </div>
    )
}

export default ConfirmationPage