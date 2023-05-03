import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ActiveRoute.css"

const ActiveRoute = ({to, children}) => {
    return (
        <NavLink to={to} className="mr-4">
            {children}
        </NavLink>
    );
};

export default ActiveRoute;