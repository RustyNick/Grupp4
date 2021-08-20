import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Group4 from "./Group4";

const Header: React.FC = () => {
    return (
        <div className="header">
            En Header
            <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/Group4' component={Group4}/>
                </Switch>
                </div> 
            </BrowserRouter>
        </div>
    )
}

export default Header