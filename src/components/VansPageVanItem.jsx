import React from "react";
import { Link, useSearchParams } from "react-router-dom";
export default function VansPageVanItem({van}) {

    const  [searchParams, setSearchParams] = useSearchParams()

    const vanType = searchParams.get("type")

    const styles = {
        backgroundColor : van.type === "simple" ? "#E17654" :
                          van.type === "luxury" ? "#453232" : "#115E59"
    }

    return (
        <div to={van.id} className="vanItem--container">
            <Link to={van.id} state={vanType}>
            <img src={van.imageUrl} alt="" />
            <div className="particulars">
                <h2 className="text">{van.name}</h2>
                <h3 className="text">${van.price}<span>/day</span></h3>
            </div>
            <span style={styles} className="van--type">{van.type}</span>
            </Link>
        </div >
    )
}