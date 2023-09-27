import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const hostVanDetails = useOutletContext()


    if (!hostVanDetails) {
        return <h1>Loading...</h1>
    }
    return <h3>${hostVanDetails.price} <span>/day</span></h3>
}