import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import "./Card.css";

export default function Card({id, name, descripcion}) {
    const {user} = useContext(UserContext);
    var [visible] = useState(false);
    
    const setVisible = () => {
    
    }

    return (
        <div className="card">
            <div class="container">
                <div class="row align-items-center" id="card-{id}">
                    <h4><b>{name}</b></h4>                
                    <button class="btn btn-secondary col-md-12" onClick={setVisible}>Ver detalle</button>
                    
                    <div className="container">
                        <p>{descripcion}</p> 
                    </div>
                    
                </div>
            </div>            
        </div>
    )
}