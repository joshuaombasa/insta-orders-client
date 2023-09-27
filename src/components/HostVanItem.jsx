import React from "react";
import { Link } from "react-router-dom";
export default function HostVanItem({ van }) {

    
    return (
        <div >
            <Link className="host--van--link" to={van.id}>
                <div className="host--van--item--container">
                    <img src={van.imageUrl} alt="" />
                    <div className="right--section">
                        <h2>{van.name}</h2>
                        <span>${van.price}/day</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}