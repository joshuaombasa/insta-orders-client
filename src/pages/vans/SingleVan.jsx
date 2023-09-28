import React, { useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function SingleVan()  {
    const params = useParams()

    const [vanDetails, setVanDetails] = useState([])

    const { state } = useLocation()

    

    React.useEffect(() => {
        fetch(`http://localhost:4000/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setVanDetails(data)
            // console.log(data)
        })
    },[])

    if (vanDetails.length === 0) {
        return (
            <h1>Loading...</h1>
        )
    }

    const styles = {
        backgroundColor : vanDetails.type === "simple" ? "#E17654" :
                          vanDetails.type === "luxury" ? "#453232" : "#115E59"
    }

    const urlFilter = state ? `?type=${state}` : ""

    return (
        <div className="van--details--page">
            <Link 
                className="back--icon"
                to={`..${urlFilter}`}
                relative="path"
            >&larr; <span className="back--button">Back to {state ? state : "all"} vans</span></Link>
            <div className="van--details--container">
                <img src={vanDetails.imageUrl} alt="" />
                <span style={styles} className="type">{vanDetails.type}</span>
                <h1>{vanDetails.name}</h1>
                <h3>{vanDetails.price} <span>/day</span></h3>
                <p>{vanDetails.description}</p>
                <Link>Rent this van</Link>
            </div>
        </div>
    )
}