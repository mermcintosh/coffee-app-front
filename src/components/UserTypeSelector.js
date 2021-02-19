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
    <div className="front-page">
      <div className="front-page-box">
        {/* <h1 className="front-page-welcome-to">Welcome to</h1> */}
        <h1 className="front-page-flatiron">Flatiron</h1>
        <h1 className="front-page-coffee-roasters">Coffee Roasters</h1>
        <br/>
          <button className="button" onClick={() => history.push({ pathname: '/customer', state: {coffees: coffees }})}><span>Customer</span></button>
          <button className="button" onClick={() => history.push({ pathname: '/staff', state: {coffees: coffees }})}><span>Staff</span></button>
      </div>
    </div>
  );  
  }

        
    

export default UserTypeSelector;