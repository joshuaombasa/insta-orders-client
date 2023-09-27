import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostVanSingleDetails() {

    const hostVanDetails = useOutletContext()
    

    if (!hostVanDetails) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="single--van--details">
            <p>Name:<span> Modest Explorer</span></p>
            <p>Category:<span> Simple</span></p>
            <p>Description:<span> The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</span></p>
            <p>Visibility:<span> Public</span></p>
        </div>
    )
}