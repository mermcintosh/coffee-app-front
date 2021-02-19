import React, {Component, useState} from 'react'
import Confirmation from './Confirmation.js'
import {useHistory} from "react-router"

const API = "http://localhost:3000/coffees"

const EditForm = (props) => {
    const history = useHistory()
    console.log("in the order form")
    console.log(props.currentCoffee)

    const [size, setSize] = useState("Small")
    const [roast, setRoast] = useState("Light")
    const [cream, setCream] = useState("Light Cream")
    const [sugar, setSugar] = useState("Light Sugar")
 
    const handleSubmit = (e) => {
        e.preventDefault()

        let updatedCoffee = {
                size: size,
                roast: roast,
                cream: cream,
                sugar: sugar,
              };

        let reqPackage = {
                    // TODO update patch 
                    method: 'PATCH',
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updatedCoffee)
                  }

        fetch(API, reqPackage)
        .then(res => res.json())
        .then(updatedCoffee => {
        props.setCoffees({
            coffees: props.coffees.map((coffee) =>
            coffee.id == updatedCoffee.id ? updatedCoffee : coffee)
        })
        })

        // fetch(`${URL}/${updatedDragon.id}`, reqPackage)
        // .then(res=> res.json())
        // .then(patchDragon => {
          
        //   this.setState({
        //     dragons: this.state.dragons.map((dragon) =>
        //         dragon.id == patchDragon.id ? patchDragon : dragon
        //       ),
                 
        e.target.reset()
    }
    
        return(
        <form className="form" onSubmit={(e) => {handleSubmit(e)}}>
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
                    <select onChange={e => setSize(e.target.value)} value={props.currentCoffee.size}>
                        <option value="" disabled>Select size</option>
                         <option value="small">Small</option>
                         <option value="medium">Medium</option>
                         <option value="large">Large</option>
                         <option value="extra large">Extra Large</option>  
                    </select>
                </td>
                <td>
                    <select onChange={e => setRoast(e.target.value)} value={props.currentCoffee.roast}>
                        <option value="" disabled>Select roast</option>
                         <option value="light">Light</option>
                         <option value="medium">Medium</option>
                         <option value="medium dark">Medium Dark</option>
                         <option value="dark">Dark</option>
                         <option value="decaf">Decaf</option>
                    </select>
                </td>
                <td>
                    <select onChange={e => setCream(e.target.value)} value={props.currentCoffee.cream}>
                        <option value="" disabled>Select cream</option>
                         <option value="no cream">No Cream</option>
                         <option value="light cream">Light Cream</option>
                         <option value="medium cream">Medium Cream</option>
                         <option value="extra cream">Extra Cream</option>
                    </select>
                </td>
                <td>
                    <select onChange={e => setSugar(e.target.value)} value={props.currentCoffee.sugar}>
                        <option value="" disabled>Select Sugar</option>
                         <option value="no sugar">No Sugar</option>
                         <option value="light sugar">Light Sugar</option>
                         <option value="medium sugar">Medium Sugar</option>
                         <option value="extra sugar">Extra Sugar</option>
                    </select>
                </td>
                <button className="button" type="submit">Save Edit</button>
            </tr>
        </table>
        </form>
    )
    
    }



export default EditForm;