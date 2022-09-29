import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import "./Card.css";

export default function Card({id, name, descripcion, tipoClaseDescripcion, frecuenciaDescripcion, calificacion}) {
    const {user} = useContext(UserContext);
    var [visible] = useState(false);
    
    const setVisible = () => {
    
    }

    return (
        <div className="card">
            <div class="cardContainer">
                <div class="align-items-center" id="card-{id}">
                    <h5><b>{name}</b></h5>                
                    <button class="btn btn-secondary col-md-12" onClick={setVisible}>Ver detalle</button>
                    <div className="lineBreak"></div>
                    <div className="cardContainer">
                        <p><b>Descripción: </b>{descripcion}</p> 
                        <p><b>Tipo: </b>{tipoClaseDescripcion}</p> 
                        <p><b>Frecuencia: </b>{frecuenciaDescripcion}</p> 
                        <p><b>Calificación: </b>{calificacion}</p> 
                    </div>
                    
                </div>
            </div>            
        </div>
    )
}