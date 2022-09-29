import React from "react";
import './TeacherHomeHeader.css';
import {Logo} from "../../../../components/logo/Logo";

export function TeacherHomeHeader(props) {
    return (
        <header className="Teacher_Header">
            <Logo image={'institular_logo_white'} color={'#FFFFFF'} />
            <div className="Teacher_Header_User" onClick={() => props.dialog("Crear clase")}>
                <p className="Teacher_Header_User_Text">CREAR CLASE</p>
            </div>
        </header>
    );
}
