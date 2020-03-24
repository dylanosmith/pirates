import React from 'react'
import { Link } from '@reach/router'
import axios from "axios";

const PirateDashboard = props => {
    const [pirates, setPirates] = React.useState([])

    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId));
    }

    React.useEffect(() =>{
        axios.get('http://localhost:8000/api/pirates')
            .then(result => {
                console.log(result);
                setPirates(result.data);
            });
    }, [])

    const deletePirate =(pirateId) => {
        axios.delete("http://localhost:8000/api/pirates/" + pirateId)
        .then(res => {
            console.log(res);
            removeFromDom(pirateId)
        })
    }

    return (
        <div>
            <div className="dashboard-header">
                <h1>Pirate Crew</h1>
                <Link to = "/pirate/new"><button className="add-btn">Add Pirate</button></Link>
            </div>
            <div className="dashboard">
                {pirates.sort().map((pirate,idx)=> {
                    return(
                        <div className="pirate-item" key={idx}>
                            <h4>{pirate.pirateName}</h4>
                            <img className="dashboard-img" src={`${pirate.image}`} alt="pirate"/>
                            <Link to={`/pirate/${pirate._id}`}><button className="view-btn">View Pirate</button></Link>
                            <Link to={`/pirate/${pirate._id}/edit`}><button className="edit-btn">Edit Pirate</button></Link>
                            <button onClick = {(e) => {deletePirate(pirate._id)}} className="delete-btn">Walk the plank</button>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default PirateDashboard
