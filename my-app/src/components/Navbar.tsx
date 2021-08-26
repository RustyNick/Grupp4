import React from "react";
import { NavLink } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">KA.NI.VI</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="./ToDoPage">Home</NavLink></li>
                <li><NavLink to="./AboutPage">About us</NavLink></li>
                <li><NavLink to="./Group4">Groupe Project</NavLink></li>
            </ul>
        </div>
    </nav>
)