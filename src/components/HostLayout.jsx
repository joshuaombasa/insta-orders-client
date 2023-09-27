import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function HostLayout() {
    return (
        <div className="host--layout">
            <nav>
                <NavLink 
                    to="."
                    end
                    className={({isActive}) => isActive === true ? "active--style" : ""}
                    >Dashboard</NavLink>
                <NavLink 
                    to="income"
                    className={({isActive}) => isActive === true ? "active--style" : ""}
                    >Income</NavLink>
                <NavLink 
                    to="vans"
                    className={({isActive}) => isActive === true ? "active--style" : ""}
                    >Vans</NavLink>
                <NavLink 
                    to="reviews"
                    className={({isActive}) => isActive === true ? "active--style" : ""}
                    >Reviews</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}