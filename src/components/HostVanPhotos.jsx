import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {

    const hostVanDetails = useOutletContext()
    

    if (!hostVanDetails) {
        return <h1>Loading...</h1>
    }

    return (
        <img src={hostVanDetails.imageUrl} alt="" />
    )
}
