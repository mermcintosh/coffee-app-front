import React from "react";
import { Switch, Route } from 'react-router-dom';
                                                    
import UserTypeSelector from "./UserTypeSelector";
import Customer from "./Customer"
import Staff from "./Staff"
import Confirmation from "./Confirmation"

export default class Routes extends React.Component {
    render() {
        return (
                <Switch>
                    <Route exact path="/" component={UserTypeSelector} />
                    <Route path="/customer" component={Customer} />
                    <Route path="/staff" component={Staff} />
                    <Route path="/confirmation" component={Confirmation} />
                </Switch> 
        )
    }
}
