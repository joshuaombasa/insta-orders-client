import React  from "react";
import { NavLink, Link } from "react-router-dom"
export default function Header() {
    return (
        <header>
            <Link to="/">INSTAVANS</Link>
            <nav>
                <NavLink 
                       to="/host"
                       className={({isActive}) => isActive === true ? "active--style" : ""}
                >Host</NavLink>
                <NavLink 
                       to="/about"
                       className={({isActive}) => isActive === true ? "active--style" : ""}
                >About</NavLink>
                <NavLink 
                       to="/vans"
                       className={({isActive}) => isActive === true ? "active--style" : ""}
                >Vans</NavLink>
                <NavLink 
                       to="/login"
                       className={({isActive}) => isActive === true ? "active--style" : ""}
                >Login</NavLink>
            </nav>
        </header>
    )
}