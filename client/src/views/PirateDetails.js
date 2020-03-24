import React from 'react'
import axios from 'axios'

const PirateDetails = ({id}) => {
    const [pirate, setPirate] = React.useState({})

    React.useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + id)
            .then(result => 
                setPirate({
                    ...result.data
                    
                }))
    }, [])
    return (
        <div>
            <h1 className="details-header">Learn About {pirate.pirateName}</h1>
            <div className="details-main">
                <div className="details-photo">
                    <img className="details-img" src={`${pirate.image}`} alt="pirate"/>
                    <h1 className="pirate-quote">"{pirate.phrase}"</h1>
                </div>
                <div className="about-section">
                    <h3>About</h3>
                    <p>Position: <span>{pirate.position}</span></p>
                    <p>Treasures: <span>{pirate.treasures}</span></p>
                    <p>Peg Leg: {
                        pirate.pegLeg? <span>Yes <span><button className="off-btn">Toggle Off</button></span></span>: <span>No <span><button className="on-btn" >Toggle On</button></span></span>
                    }
                    </p>
                    <p>Eye Patch: {
                    pirate.eyePatch? <span>Yes <span><button className="off-btn">Toggle Off</button></span></span>: <span>No <span><button className="on-btn">Toggle On</button></span></span>
                    }
                    </p>
                    <p>Hook Hand: {
                    pirate.hookHand? <span>Yes <span><button className="off-btn">Toggle Off</button></span></span>: <span>No <span><button className="on-btn">Toggle On</button></span></span>
                    }
                    </p>
                </div>
            </div>
 
        </div>
    )
}

export default PirateDetails
