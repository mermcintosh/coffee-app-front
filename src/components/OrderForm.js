import React, {Component, useState} from 'react'
import Confirmation from './Confirmation.js'
import {useHistory} from "react-router"

const API = "http://localhost:3000/coffees"

const OrderForm = (props) => {
    const history = useHistory()

    const [size, setSize] = useState("Small")
    const [roast, setRoast] = useState("Light")
    const [cream, setCream] = useState("Light Cream")
    const [sugar, setSugar] = useState("Light Sugar")
 
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push('/confirmation')

        let newCoffee = {
                size: size,
                roast: roast,
                cream: cream,
                sugar: sugar,
              };

        let reqPackage = {
                    method: 'POST',
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newCoffee)
                  }

        fetch(API, reqPackage)
        .then(res => res.json())
        .then(newCoffee => {
        props.setCoffees([...props.coffees, newCoffee])
        })


                 
        e.target.reset()
    }
    
        return(
        <form onSubmit={(e) => {handleSubmit(e)}}>
            {/* onClick={() => history.push({ pathname: '/'}) */}
            {/* <button className="button" onClick={() => history.push({ pathname: '/customer', state: {coffees: coffees }})}>Customer</button> */}
            
        <table>
            <tr>
                <th>Size</th>
                <th>Roast</th>
                <th>Cream</th>
                <th>Sugar</th>
            </tr>

            <tr>
                <td>
                    <select onChange={e => setSize(e.target.value)}>
                        <option value="" disabled selected>Select size</option>
                         <option value="small">Small</option>
                         <option value="medium">Medium</option>
                         <option value="large">Large</option>
                         <option value="extra large">Extra Large</option>  
                    </select>
                </td>
                <td>
                    <select onChange={e => setRoast(e.target.value)}>
                        <option value="" disabled selected>Select roast</option>
                         <option value="light">Light</option>
                         <option value="medium">Medium</option>
                         <option value="medium dark">Medium Dark</option>
                         <option value="dark">Dark</option>
                         <option value="decaf">Decaf</option>
                    </select>
                </td>
                <td>
                    <select onChange={e => setCream(e.target.value)}>
                        <option value="" disabled selected>Select cream</option>
                         <option value="no cream">No Cream</option>
                         <option value="light cream">Light Cream</option>
                         <option value="medium cream">Medium Cream</option>
                         <option value="extra cream">Extra Cream</option>
                    </select>
                </td>
                <td>
                    <select onChange={e => setSugar(e.target.value)}>
                        <option value="" disabled selected>Select Sugar</option>
                         <option value="no sugar">No Sugar</option>
                         <option value="light sugar">Light Sugar</option>
                         <option value="medium sugar">Medium Sugar</option>
                         <option value="extra sugar">Extra Sugar</option>
                    </select>
                </td>
                <button className="button" type="submit"> {props.buttonText ? props.buttonText : "Submit Order"} </button>
            </tr>
        </table>
        </form>
    )
    
    }



export default OrderForm;