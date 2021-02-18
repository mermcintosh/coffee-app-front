import React, {useState} from 'react';
import {useHistory} from "react-router"

const API = "http://localhost:3000/coffees"

const Orders = (props) => {
    const history = useHistory()

    const editCoffee = () => {
        // props.setCurrentCoffee(props.coffee.id)
    }

    const handleDelete = (id) => {
        fetch(`${API}/${id}`, {
        method: 'DELETE'
        })
        .then(res => res.json())
        .then((deletedCoffee) => {
            // let newCoffees = [...coffees]
            // debugger
            let newCoffees = [...props.coffees]
            newCoffees = newCoffees.filter((coffee) => coffee.id != deletedCoffee.coffee.id)
            // debugger
        props.setCoffees(newCoffees)
        })
    }

    return(
        <div className="card">
            <h3>Order Number - {props.coffee.id}</h3>
            <br/>
            <h4>Size - {props.coffee.size}</h4>
            <br/>
                <h5>{props.coffee.roast} Roast</h5>
                <h5>{props.coffee.cream}</h5>
                <h5>{props.coffee.sugar}</h5>
            

            <button onClick={() => editCoffee()}>Edit Coffee</button>
            <button onClick={() => handleDelete(props.id)}>Complete Order</button>
        </div>
    )
    
}

export default Orders