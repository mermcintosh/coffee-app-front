import React, {useState, useEffect} from 'react';
import Orders from './Orders'
import {useHistory} from "react-router"
import OrderForm from "./OrderForm"

const Staff = (props) => {
    const history = useHistory()
    const [currentCoffee, setCurrentCoffee] = useState(null)
    const coffees = history.location.state.coffees

    useEffect(() => {
        console.log(coffees.filter(result => result.id = currentCoffee))
      });

    return(
    <div>
        <OrderForm buttonText="Save Edit"/>
        <h2>Incoming Orders</h2>
            <div className="d-flex">
                {coffees.map(
                    (coffee)=> <Orders coffee={coffee} key={coffee.id} id={coffee.id} setCurrentCoffee={setCurrentCoffee}/>
                )} 
            </div>    
    </div>
    )
}

export default Staff