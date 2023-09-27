import React from "react";
import { Link, NavLink, useParams, Outlet, useLocation } from "react-router-dom";
export default function HostVanDetails() {

    const [hostVanDetails,setHostVanDetails] = React.useState(null)

    const {id} = useParams()

    // const { state } = useLocation()

    // console.log(state)
    
    React.useEffect(() => {
        fetch(`http://localhost:4000/api/vans/${id}`)
            .then(res => res.json())
            .then(data => {
                setHostVanDetails(data)
                // console.log(data)
            })
    }, [])

    if (!hostVanDetails) {
        return <h1>Loading...</h1>
    }


    const styles = {
        backgroundColor : hostVanDetails.type === "simple" ? "#E17654" :
                          hostVanDetails.type === "luxury" ? "#453232" : "#115E59"
    }

    return (
        <div className="host--van--details--page">
            <Link  
                className="back--icon"
                to='..'
                relative="path"
            >&larr; <span className="back--button">Back to all vans</span></Link>
            <div className="top--section">
                <img src={hostVanDetails.imageUrl} alt="" />
                <div className="text--area">
                    <span style={styles} className="type">{hostVanDetails.type}</span>
                    <h2>{hostVanDetails.name}</h2>
                    <h3>${hostVanDetails.price}<span>/day</span></h3>
                </div>
            </div>
            <div className="van--details--nav">
                    <nav>
                        <NavLink 
                           to="."
                           end
                           className={({isActive}) => isActive === true ? "active--style" : ""}
                        >Details</NavLink>
                        <NavLink 
                           to="pricing"
                           className={({isActive}) => isActive === true ? "active--style" : ""}
                        >Pricing</NavLink>
                        <NavLink 
                           to="photos"
                           className={({isActive}) => isActive === true ? "active--style" : ""}
                        >Photos</NavLink>
                    </nav>
            </div>
            <Outlet context={hostVanDetails} />
        </div>
    )
}
