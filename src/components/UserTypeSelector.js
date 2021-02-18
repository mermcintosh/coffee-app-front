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







  return (
    <div >
      <div className="cover-page">
        <h1>Welcome to</h1>
        <h1>Flatiron Coffee Roasters</h1>
          <button className="button" onClick={() => history.push({ pathname: '/customer', state: {coffees: coffees }})}>Customer</button>
          <button className="button" onClick={() => history.push({ pathname: '/staff', state: {coffees: coffees }})}>Staff</button>
      </div>
    </div>
  );  
  }

        
    

export default UserTypeSelector;