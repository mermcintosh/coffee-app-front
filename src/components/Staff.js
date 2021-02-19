import React, {useState, useEffect} from 'react';
import Orders from './Orders'
import {useHistory} from "react-router"
import EditForm from "./EditForm"

const Staff = (props) => {
    const history = useHistory()
    const [currentCoffee, setCurrentCoffee] = useState(null)
    const [coffees, setCoffees] = useState(history.location.state.coffees)

    return(
    <div className="orders-page">
    
        <h2 className="incoming-orders">Incoming Orders</h2>
        
            {currentCoffee && <EditForm currentCoffee={currentCoffee} setCurrentCoffee={setCurrentCoffee} coffees={coffees} setCoffees={setCoffees}/>}
            <div className="d-flex flex-wrap">
                {coffees.map(
                    (coffee)=>
                        <Orders 
                            coffee={coffee} 
                            key={coffee.id} 
                            id={coffee.id} 
                            setCurrentCoffee={setCurrentCoffee} 
                            coffees={coffees} 
                            setCoffees={setCoffees}
                        />
                )} 
            </div>    
    </div>
    )
}

export default Staff