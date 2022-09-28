import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../contexts/UserContext";
import "./Card.css";

export default function Card({id, name, position}) {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    const redirect = () => {
        const path = user?.role === "STUDENT" ? `/students/${id}` : `/users/${id}`;
        navigate(path);
    }
    return (<div className="card">
            <img src={require("../../assets/img_avatar.png")} alt="Avatar" style={{width: 300, height: 300}}/>
            <div className="container">
                <h4><b>{name}</b></h4>
                <p>{position}</p>
                <button onClick={redirect}>Ver detalle</button>
            </div>
        </div>
    )
}