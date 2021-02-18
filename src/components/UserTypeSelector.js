import React, {useState, useEffect} from 'react';
import '../App.css';
import {useHistory} from "react-router"
import Customer from './Customer'
import Staff from './Staff'

const API = "http://localhost:3000/coffees"

const UserTypeSelector = () => {
const history = useHistory()
const [coffees, setCoffees] = useState([])

useEffect(() => {
  fetch(API)
  .then(res => res.json())
  .then(coffees => {setCoffees(coffees)
  console.log(coffees)
  })
}, [])

// handleSubmit = (e) => {

//   e.preventDefault();

//   let newCoffee = {
//     size: e.target.size.value,
//     roast: e.target.roast.value,
//     cream: e.target.cream.value,
//     sugar: e.target.sugar.value,
//   };

//   let reqPackage = {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newCoffee)
//   }
 
//   fetch(API, reqPackage)
//   .then(res => res.json())
//   .then(newCoffee => {
//     this.setState({
//       coffees: [...state.coffees, newCoffee]
//     })

//   })

//   e.target.reset()
// };

// handleDelete = (selectedCoffee) => {
     
//   fetch(`${URL}/${selectedCoffee.id}`, {
//     method: 'DELETE'
//   })
//   .then(res => res.json())
//   .then(() => {
    
//     this.setState({
//       coffees: state.coffees.filter((coffee) => coffee != selectedCoffee)
//     })
//   })
// }



  return (
    <div>
      <div>
        <h1>Welcome to Flatiron Coffee Roasters</h1>
          <button onClick={() => history.push({ pathname: '/customer', state: {coffees: coffees }})}>Customer</button>
          <button onClick={() => history.push({ pathname: '/staff', state: {coffees: coffees }})}>Staff</button>
      </div>
    </div>
  );  
  }

        
    

export default UserTypeSelector;