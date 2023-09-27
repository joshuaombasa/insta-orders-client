import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import VansPageVanItem from "../../components/VansPageVanItem";
export default function Vans() {
    const [vans, setVans] = React.useState([])

    const  [searchParams, setSearchParams] = useSearchParams()

    

    React.useEffect(() => {
        fetch("http://localhost:4000/api/vans")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setVans(data)
            })
    }, [])

    if (vans.length === 0) {
        return <div className="vans--page--container">
            <h1>Loading...</h1>
        </div>
    }

    function generateNewSearchParamsString(key, value) {
        const sp = new URLSearchParams(searchParams)

        if (value === null) {
            sp.delete(key)
        } else {
            sp.set(key, value)
        }
        setSearchParams(`?${sp.toString()}`)
        
    }

    const vanType = searchParams.get("type")

    let filteredVans

    if (vanType) {
        filteredVans = vans.filter(van => van.type === vanType)
    } else {
        filteredVans = vans
    }

    const vansElements = filteredVans.map(van => (
        <VansPageVanItem key={van.id} van={van}/>
    ))

    return (
        <div className="vans--page">
            <h1>Explore our van options</h1>
            <nav className="vans--filter--nav">
                <button 
                     className="vans--filter--btn"
                     onClick={() => generateNewSearchParamsString("type", "simple")}
                >Simple</button>
                <button 
                     className="vans--filter--btn"
                     onClick={() => generateNewSearchParamsString("type", "luxury")}
                >Luxury</button>
                <button 
                     className="vans--filter--btn"
                     onClick={() => generateNewSearchParamsString("type", "rugged")}
                >Rugged</button>
                {vanType && <button 
                     className="vans--clear--btn"
                     onClick={() => generateNewSearchParamsString("type", null)}
                >Clear filters</button>}
            </nav>
            <div className="vans--page--container">
                {vansElements}
            </div>
        </div>

    )
}