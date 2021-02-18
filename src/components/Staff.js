import React, {useState, useEffect} from 'react';
import Orders from './Orders'
import {useHistory} from "react-router"
import OrderForm from "./OrderForm"

const Staff = (props) => {
    const history = useHistory()
    const [currentCoffee, setCurrentCoffee] = useState(null)
    const [coffees, setCoffees] = useState(history.location.state.coffees)

    // useEffect(() => {
    //     console.log(coffees.filter(result => result.id = currentCoffee))
    //   });


    return(
    <div className="m-5">
    
        <h2>Incoming Orders</h2>
        
        <OrderForm buttonText="Save Edit"/>
            <div className="d-flex flex-wrap">
                {coffees.map(
                    (coffee)=> <Orders coffee={coffee} key={coffee.id} id={coffee.id} setCurrentCoffee={setCurrentCoffee} coffees={coffees} setCoffees={setCoffees}/>
                )} 
            </div>    
    </div>
    )
}

export default Staff