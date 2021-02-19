import React, {useState} from 'react';
import OrderForm from './OrderForm'
import {useHistory} from "react-router"

const API = "http://localhost:3000/coffees"

const Customer = () => {
    const history = useHistory()

    const [coffees, setCoffees] = useState(history.location.state.coffees)





    return(
        <div className="customer-page" >
        <div className="customer-box"><h1>Create your perfect beverage below!</h1>
        <OrderForm setCoffees={setCoffees} coffees={coffees}/>
        </div>
        </div>
    )
}

export default Customer