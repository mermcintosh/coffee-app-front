import React from 'react';
import Customer from "./Customer"
import Staff from "./Staff"
import {useHistory} from "react-router"



const UserTypeSelector = () => {
const history = useHistory()

        return (
            <div>
              <div>
                <h1>Welcome to Flatiron Coffee Roasters</h1>
                <p>If you would like to order a coffee, please click customer! If you are staff, please click staff!</p>
                <form>
                  <button onClick={() => history.push('/Customer')}>Customer</button>
                  <button onClick={() => history.push('/Staff')}>Staff</button>
                </form>
              </div>
            </div>
          );
        }
    

export default UserTypeSelector;