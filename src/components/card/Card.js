import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import "./Card.css";

export default function Card({id, name, descripcion, tipoClaseDescripcion, frecuenciaDescripcion, calificacion}) {
    const {user} = useContext(UserContext);
    var [visible, setVisible] = useState(true);
    
    

    return (
        <div className="card">
            <div className="cardContainer">
                <div className="align-items-center" id="card-{id}">
                    <div className="titleClase">
                        <h5><b>{name}</b></h5>  
                    </div>                                  
                    <button 
                        className="btn btn-secondary col-md-12" 
                        onClick={() => setVisible(!visible)}>{visible ? "Ver detalle" : "Ocultar detalle"}
                    </button>
                    <div className="lineBreak"></div>
                    {!visible && <div className="cardContainer">
                        <p><b>Descripción: </b>{descripcion}</p> 
                        <p><b>Tipo: </b>{tipoClaseDescripcion}</p> 
                        <p><b>Frecuencia: </b>{frecuenciaDescripcion}</p> 
                        <p><b>Calificación: </b>{calificacion}</p> 
                    </div>}
                    
                </div>
            </div>            
        </div>
    )
}