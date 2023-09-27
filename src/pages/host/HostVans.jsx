import React from "react";
import { Link } from "react-router-dom";

import HostVanItem from "../../components/HostVanItem";

export default function () {

    const [hostVans, setHostVans] = React.useState([])

    React.useEffect(() => {
        fetch("http://localhost:4000/api/host/vans")
           .then(res => res.json())
           .then(data => {
            console.log(data)
            setHostVans(data)
           })
    },[]) 

    if (hostVans.length === 0) {
        return <h1>Loading...</h1>
    }

    const hostVanElements = hostVans.map(van => (
        <HostVanItem key={van.id} van={van}/>
    ))

    
    return (
        <div className="host--vans--page">
            <h2>Your listed vans</h2>
           {hostVanElements}
        </div>
    )
}