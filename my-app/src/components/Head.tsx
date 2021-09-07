import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Group4 from "./Group4";
import AboutPage from "./AboutPage";
import ToDoPage from "./ToDoPage";
import { Navbar } from './Navbar';
import ErrorBoundary from './ErrorBoundary';


const Header: React.FC = () => {
    return (
        <ErrorBoundary>
        <div className="header">
           {/*  <BrowserRouter>
            <Navbar />
                <div className="container">
                    <Switch>
                        
                        <Route component={ToDoPage} path="/ToDoPage" />
                        <Route component={Group4} path="/Group4" />
                        <Route component={AboutPage} path="/AboutPage" />

                        <Redirect to ="/"/>
                    </Switch>
                </div>
            </BrowserRouter> */}
        </div>
        </ErrorBoundary>
    )
}

export default Header