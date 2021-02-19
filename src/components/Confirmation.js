import React from 'react';
import {useHistory} from "react-router"


const ConfirmationPage = () => {
    const history = useHistory()
    return(
        <div className="confirmation-page">
       <div className="confirmation-page-box"><h2>Thank you for your order!</h2>
       <br/>
        <button className="button" onClick={() => history.push('/')}>Home &#9749;</button>
        </div>
        </div>
    )
}

export default ConfirmationPage