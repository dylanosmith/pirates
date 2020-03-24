import React from 'react'
import { Link, navigate} from "@reach/router"
import axios from "axios";
import Form from '../components/Form';

const AddPirate = props => {
    const initialData = {
        pirateName: "",
        image: "",
        phrase: "",
        treasures: 0,
        position: "Captain",
        pegLeg: true,
        eyePatch: true,
        hookHand: true
    }
    const onSubmitHandler = (e, data) => {
        console.log(data)
        e.preventDefault();
        axios.post("http://localhost:8000/api/pirates", data )
    
            .then(response => {
                console.log(response);
                navigate("/");
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className="create-header">
                <h1>Add a New Pirate</h1>
                <Link to ="/"><button className="crew-btn">Pirate Crew</button></Link>
            </div>
            <Form onSubmitHandler = {onSubmitHandler} initialData = {initialData} />
            
        </div>
    )
}

export default AddPirate
